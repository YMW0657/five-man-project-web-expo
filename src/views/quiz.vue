<template>
  <div class="quiz">
    <div class="quiz-wrapper">
      <div class="container">

        <!-- Progress bar -->
        <div
          class="progress"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuenow="actions.quizIndex + 1"
          aria-valuemax="9"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            :style="{width: ((actions.quizIndex + 1)*100)/9 + '%'}"
          >
          </div>
        </div>

        <!-- Question counter + instruction button -->
        <div class="row justify-content-between">
          <div class="col-10 col-md-11">
            <span>Question: {{ actions.quizIndex + 1 }}</span>/<span>9</span>
          </div>

          <div class="col-2 col-md-1">
            <button
             role="button"
             class="btn btn-primary"
             style="border-radius: 15px;"
             data-bs-toggle="modal"
             data-bs-target="#instructionModal"
             @click="openModal()"
            >
              <i class="bi bi-question-lg"></i>
            </button>
          </div>
        </div>

        <!-- Instruction Modal -->
        <div class="modal fade" aria-labelledby="instructionModal" aria-hidden="true" id="instructionModal">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">

              <div class="modal-header" style="border: none; padding-top: 30px; padding-left: 30px;">
                <h4>Instruction</h4>
              </div>

              <div class="modal-body" style="padding-inline: 30px;">
                <p> Welcome to Scamscan's awareness quiz, in this page we offer you opportunity to check your understanding in regard of cyber scam awareness
                </p>
                <p>
                  In this quiz, you are to complete a total of 9 questions consisting of 3 questions from each of the scam topic
                  we covered in our learning modules. Please read the question carefully, select one of the answer and then
                  click on the <button class="btn btn-primary btn-sm mx-1"><i class="bi bi-chevron-right"></i></button> to proceed to the next question.
                </p>
                <p>
                  After selection of the last answer, click on the <button class="btn btn-primary btn-sm mx-1">Result</button>
                  button and the our system would display your result as well as recommendation 
                </p>

                <hr/>

                <h4> Propose </h4>

                <br/>

                <p> The propose of this quiz is to check your readiness to identify and handle an actual cyber scamming situation. 
                  Performing well on our quiz is but one of the way to check your awareness level, you also need to proactively learn
                  about modern cyber scamming techniques</p>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeModal()" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- quiz question/answers -->
        <div class="title">{{ actions.quizIndex+1 +". "+ ourQuizs[actions.quizIndex].question }}</div>
        <div class="option">
          <ul>
              <li
                v-for="item in ourQuizs[actions.quizIndex].options"
                :key="item.value"
                v-html="item.label"
                @click="actions.selectFn(item)"
                :class="item.value==ourQuizs[actions.quizIndex].yourAnswer?'selected':''">
              </li>
          </ul>
        </div>

        <hr/>

        <!-- direction control -->
        <div class="row justify-content-center">
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-primary"
              :disabled="!actions.quizIndex"
              @click="actions.prevFn"
            >
              <i class="bi bi-chevron-left"></i>
            </button>
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-primary"
              v-if="actions.quizIndex < 8"
              @click="actions.nextFn"
            >
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-primary"
              v-if="actions.quizIndex == 8"
              data-bs-toggle="modal"
              data-bs-target="#resultModal"
              :disabled="!actions.checkSelection()"
              @click="actions.showResult"
              :loading="actions.loading"> 
              {{actions.loading?"Retrieving result...":"Result"}}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- result modal -->
    <div class="modal fade" tabindex="-1" aria-labelledby="resultModal" aria-hidden="true" id="resultModal">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header" style="border: none">
            <h1 class="modal-title fs-5"> Result </h1>
          </div>
          <div class="modal-body" style="border: none">
            <div>
              There are a total of <b>{{ result.total }}</b>
              questions, you answered <b>{{ result.correct }}</b> 
              of them correctly with an <br /> accuracy rate of <b>{{(result.correct*100/result.total).toFixed(0)}}%</b>.
            </div>
            <div class="mt-3">
              <div v-for="item in result.lists" :key="item.type">
                <b>For {{item.name}} scam types:</b> <b>{{ item.total }}</b> questions in total, <b>{{ item.correctTotal }}</b> answered correctly. </div>
            </div>
            <div class="mt-3">
              <b>Conclusion: </b>
              <span v-if="result.lists.filter(item=>!item.isGood).map(item=>item.name).length">You made more mistakes in the <b>{{result.lists.filter(item=>!item.isGood).map(item=>item.name).join(" and ")}}</b> scam category, It's recommended that you study more about this topic </span>
              <span v-if="result.lists.filter(item=>!item.isGood).map(item=>item.name).length&&result.lists.filter(item=>item.isGood).map(item=>item.name).length">,</span>
              <span v-if="result.lists.filter(item=>item.isGood).map(item=>item.name).length">You performed perfectly in the <b>{{result.lists.filter(item=>item.isGood).map(item=>item.name).join(" and ")}}</b> categories, please keep it up.</span>
            </div>
          </div>
          <div class="modal-footer justify-content-center" style="border: none">
            <div class="row justify-content-center mt-2">
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-primary"
                  style="border-radius: 25px;"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="resetQuizState()"
                >
                  Retry
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-primary"
                  style="border-radius: 25px;"
                  @click="model.jumpTo('/scenario?id=1')"
                >
                  Scenario
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive, ref, onMounted } from 'vue';
  import { getRandomElementsFromArray } from "../utils/index"
  import axios from "axios";

  const types = [3, 3, 3];
  const max = types.reduce((prev,next)=>prev+next);
  const typeMaps = ["Phishing", "Spoofing", "Card theft"];
  const ourQuizs = ref([{}]);

  const instModalShow = ref(true);

  const openModal = () => {
    instModalShow.value = true;
  }

  const closeModal = () => {
    instModalShow.value = false;
  }

  const result = reactive({
    lists: [],
    total: max,
    correct: 0,
  });

  const resetQuizState = () => {
    initializeQuizPool();
    result.correct = 0;
    actions.quizIndex = 0;
    result.lists = [];
    total = max,
    correct = 0
  }

  const actions = reactive({
    loading:false,
    quizIndex:0,

    checkSelection:()=>{
      const yourAnswer = ourQuizs.value[actions.quizIndex].yourAnswer;
      return yourAnswer;
    },

    prevFn:()=>{
      actions.quizIndex--;
      if(actions.quizIndex===ourQuizs.length){
        return;
      }
    },

    nextFn:()=>{
      const yourAnswer = actions.checkSelection();
      if(!yourAnswer){
        message.warning('Please select the answer!');
        return;
      }
      actions.quizIndex++;
      if(actions.quizIndex===0){
        return;
      }
    },

    selectFn:(item) => {
      ourQuizs.value[actions.quizIndex].yourAnswer = item.value;
    },

    showResult:()=>{
      const yourAnswer = actions.checkSelection();
      if(!yourAnswer){
        message.warning('Please select the answer!');
        return;
      }
      result.correct = 0
      result.lists = types.map((item,index)=>{
        result.correct += ourQuizs.value.filter(item=>item.type==(index+1)).filter(item=>item.correct==item.yourAnswer).length
        return {
          type:index+1,
          name:typeMaps[index],
          total: item,
          correctTotal: ourQuizs.value.filter(item=>item.type==(index+1)).filter(item=>item.correct==item.yourAnswer).length,
          isGood:item == ourQuizs.value.filter(item=>item.type==(index+1)).filter(item=>item.correct==item.yourAnswer).length
        }
      })
      actions.loading=true
      setTimeout(()=>{
        actions.loading=false
      },2000)
    }
  });
  
  const model = reactive({
    visible:false,
    jumpTo:(url)=>{
      window.location.href= url
    },
  })

  const initializeQuizPool = () =>{
    axios.get('/api/quiz/getquizpool')
    .then(function (response) {
      if(response.data.code==200){
        const lists=response.data.data
        lists.forEach(item=>{
          item.yourAnswer="";
          item.options = JSON.parse(item.options);
        })
        ourQuizs.value = []
        types.forEach((type, index)=>{
          const myTypeItem = lists.filter(item=>item.type==(index+1))
          const selects = getRandomElementsFromArray(myTypeItem, type)
          ourQuizs.value.push(...selects);
        })
        ourQuizs.value.sort((a,b)=>{
          return a.id-b.id
        })
      }else{
        ourQuizs.value=[]
      }
    })
  }

  onMounted(() => {
    openModal();
    initializeQuizPool();
  })
</script>

<style scoped>
  .quiz{
    background-color: #efefef;
    height: calc(100vh - 0px);
    padding-top:8rem;
  }
  .quiz-wrapper{
    display: flex;
    margin-left: 2rem;
    margin-right: 2rem;
    flex-direction: column;
    background-color: #fff;
    padding:24px 30px;
    border-radius: 8px;
  }

  .quiz-wrapper .progress{
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
    letter-spacing: 1px;
  }

  .title{
    font-size: 24px;
    line-height: 36px;
  }
  .option {
    margin-top: 20px;
    align-self: flex-start;
  }
  .option ul,.option li{
    list-style: none;
    margin:0;
    padding:0;
  }
  .option li {
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    margin: 12px 0;
    padding: 8px;
    border-radius: 8px;
    min-width: 200px;
    border: 1px solid #d9d9d9;
    background-color: rgba(0, 0, 0, 0.06);
  }
  .option li.selected{
    background-color: #ffd84c;
    color: #fff;
  }
  .direction{
    margin-top: 50px;
    display: flex;
  }
  .direction .prev{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .direction .next{
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .direction .result{
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selection{
    width: 1000px;
    margin: 30px auto 0;
    display: flex;
    justify-content: center;
  }
  .selection button{
    margin-left: 30px;
    width: 140px;
  }
  .selection button:nth-child(1){
    margin-left: 0;
    background-color: #58e442;
  }
  .selection button:nth-child(1):hover{
    background-color: #4cc03a;
  }
  .selection button:nth-child(2){
    background-color: #ca4e46;
  }
  .selection button:nth-child(2):hover{
    background-color: #ac443c;
  }
  .selection button:nth-child(3){
    background-color: #9b7a36;
  }
  .selection button:nth-child(3):hover{
    background-color: #7e632d;
  }
  .selection button:nth-child(4){
    background-color: #469aca;
  }
  .selection button:nth-child(4):hover{
    background-color: #3b80a8;
  }

  .answer-model-shadow{
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .answer-model .model-title{
    font-size: 24px;
    color: #dcb732;
    font-weight: bold;
  }
  /* .answer-model .ant-modal-title{
    font-size: 28px;
    font-weight: 600;
    color: #222C28;
  }
   */
  .answer-model{
    background-color: #fff;
    min-width: 300px;
    min-height: 350px;
    border-radius: 4px;
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    color: #000;
    font-size: 16px;
    line-height: 24px;
  }
  .answer-model .btn-group{
    padding-top: 30px;
    display: flex;

  }
  .answer-model .btn-group button{
    margin: 0 auto;
    display: block;
    width: 140px;
    letter-spacing: 1px;
    background-color: #fbce2f;
  }
  .answer-model .btn-group button:hover{
    background-color: #dcb732;
  }
  .model-answer-content{
    font-size: 16px;
    margin-top: 12px;
    margin-bottom: 8px;
    color: #222C28;
  }
  .model-lists .model-list{
    line-height: 28px;
    color: #222C28;
    font-size: 14px;
  }
  .model-conclusion{
    margin-top: 12px;
    line-height: 28px;
    color: #222C28;
    font-size: 16px;
  }
  .model-conclusion .success{
    color: #20A675;
  }
  .model-conclusion .danger{
    color: #ff4d4f;
  }

</style>
<style>
:where(.css-dev-only-do-not-override-1ugq3w3).ant-progress .ant-progress-text{
  display: none;
}
:where(.css-dev-only-do-not-override-1ugq3w3).ant-progress .ant-progress-success-bg, :where(.css-dev-only-do-not-override-1ugq3w3).ant-progress .ant-progress-bg{
  background-color: #ffd84c;
}
:where(.css-dev-only-do-not-override-1ugq3w3).ant-btn-primary{
  background-color: #ffd84c;
}
:where(.css-dev-only-do-not-override-1ugq3w3).ant-btn-primary:not(:disabled):hover{
  background-color: #e7c444;
}
</style>