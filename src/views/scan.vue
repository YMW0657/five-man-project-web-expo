<template>
  <div class="scan">
    <div class="scan-wrapper">
      <div class="container">

        <div class="title text-uppercase">
          Suspicious email scanner
        </div>

        <div class="subtitle">
          Place the suspicious email content in the textbox below then click on submit. Let have our rigorously
 trained model give you your peace of mind.
        </div>

        <!-- text scan area -->
        <div class="form-group">
          <textarea
            v-model="startScanEvent.question"
            class="form-control"
            placeholder="Please input your suspicious email content here"
            rows="10"
          >
          </textarea>
        </div>
              
        <!-- action buttons -->
        <div class="row justify-content-center align-items-center my-3">
          <button
            class="btn btn-warning btn-lg col-4 mx-3"
            @click="startScanEvent.clearFn"
            style="border-radius: 24px;"
          >
            Clear
          </button>
          <button
            class="btn btn-warning btn-lg col-4 mx-3"
            id="submitButton"
            data-bs-toggle="modal"
            data-bs-target="#resultModal"
            @click="startScanEvent.startScan"
            style="border-radius: 24px;"
          >
            Submit
          </button>
        </div>

        <hr/>

        <!-- bottom half -->
        <div style="font-size: 12px;">
          Disclaimer : Scamscan's malicious email detection service does not collect nor store any information that is provided.
        </div>

        <!-- result modal -->
        <div class="modal fade" id="resultModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="resultModalLabel">Scan result</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row row-cols-2  justify-content-center">

                    <!-- left side -->
                    <div class="col-4 col-md-3">

                      <div class="scan-title">
                        Percentage of risk
                      </div>

                      <div class="progress">
                        <div
                          class="progress-wrapper" 
                          :style="{height: startScanEvent.result.FraudPossibility || 0, minHeight:'16px'}"
                        >
                          <div style="font-size: 20px;">{{ startScanEvent.result.FraudPossibility }}</div>
                        </div>
                      </div>
                    </div>

                    <!-- right side -->
                    <div class="col-8 col-md-9">

                      <div class="scan-title">
                        Suspicious content
                      </div>

                      <div class="result detail">
                        <mark>{{startScanEvent.result.suspicious_sentence}}</mark>
                      </div>

                      <div class="scan-title mt-4">
                        Original content
                      </div>

                      <div class="text-wrap">
                        {{startScanEvent.result.email_text}}
                      </div>

                    </div>
                  </div>

                  <hr/>

                  Highlighted content inside the scan result is the most suspicious part of the particular email, please do note that there might be some other suspicious content inside the email as well.

                  <!-- Alert -->
                  <div class="mt-2">
                    <div class="alert alert-danger" role="alert" v-if="parseInt(startScanEvent.result.FraudPossibility) >= 70">
                      <h4> Very high risk </h4>
                      <p>You given email have very high possibility of being of malicious intent</p>
                      <p>we highly recommend you report it to a proper authority</p>
                      <button type="button" class="btn btn-danger">
                        <a class="nav-link" href="/report">
                          REPORT
                        </a>
                      </button>
                    </div>

                    <div class="alert alert-warning" role="alert" v-if="startScanEvent.checkValue(40,70)">
                      <h4> High risk </h4>
                      <p> You given email have high possibility of being of malicious intent </p>
                      <p> we recommend you proceed carefully with the email and avoid providing
                      any personal/sensitive information if asked. You can also report this email to the proper authority if you feel like it should be.</p>
                      <button type="button" class="btn btn-warning">
                        <a class="nav-link" href="/report">
                          REPORT
                        </a>
                      </button>
                    </div>

                    <div class="alert alert-info" role="alert" v-if="startScanEvent.checkValue(0,40)">
                      <h4> Low risk </h4>
                      <p>You given email seem to be relatively safe.</p>
                      <p>Do keep in mind that Scamscan's model result is only a suggestion. Do still practice caution when providing personal/sensitive information</p> 
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

        <!-- <div class="scan-result">

          <div class="left">
            <div class="scan-title">Percentage of risk</div>
            <div class="progress">
              <div class="progress-wrapper" :style="{height: startScanEvent.result.FraudPossibility || 0, minHeight:'16px'}">
                <div class="value">{{ startScanEvent.result.FraudPossibility }}</div>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="scan-title">Highlighted as suspicious content!</div>
            <div class="result-detail" v-html="startScanEvent.result.email_text">
            </div>
          </div>

        </div>
        <div class="scan-title" style="text-align: right;">
          <div style="color: #ef3c15;font-weight: bold;font-size: 24px;" v-if="startScanEvent.is_fraud">Oh no, this email seems like a scam email !We suggest you to report this email! <a href="/scam">Report?</a></div>
          <div style="color: #00a900;font-weight: bold;font-size: 24px;" v-else>This email looks good, but you still need to pay attention!</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from "axios";
  import { reactive } from "vue";

  //the object that responsible for holding and scanning the input for suspicious content
  const startScanEvent = reactive({
    question: "",
    loading: false,
    result:{},
    FraudPossibility: 0,
    //clear the scan text box
    clearFn:()=>{
      startScanEvent.question = "";
      startScanEvent.result = {};
      startScanEvent.FraudPossibility = 0
    },

    checkValue: (min, max) => {
      if (max == 100) {
        return parseInt(startScanEvent.result.FraudPossibility) >= min && parseInt(startScanEvent.result.FraudPossibility) <= max
      }
      else {
        return parseInt(startScanEvent.result.FraudPossibility) >= min && parseInt(startScanEvent.result.FraudPossibility) < max
      }
    },

    //start the process to scan for suspicious content
    startScan: ()=>{
      if(!startScanEvent.question){
        return;
      }

      const data = {
        content: startScanEvent.question
      }

      axios.get('/scan-api/email?content='+startScanEvent.question)
      .then(function (response) {
        startScanEvent.result = response.data
        if(startScanEvent.result.suspicious_sentence){
          //startScanEvent.result.highlightText = startScanEvent.result.email_text.replace(startScanEvent.result.suspicious_sentence,`<span class='active'>${tartScanEvent.result.suspicious_sentence}</span>`)
          const reg = new RegExp(startScanEvent.result.suspicious_sentence,'g');
          // console.log(startScanEvent.result.suspicious_sentence);
          startScanEvent.result.email_text = startScanEvent.result.email_text.replace(reg,`${startScanEvent.result.suspicious_sentence}`)
        }
      }).catch((e)=>{
        console.log(e);
        startScanEvent.result = {};
      })
    },
  })

</script>

<style scoped>
  .scan{
    padding-top: 71px;
    background-color: #fff;
    height: calc(100vh - 0px);
  }
  .title{
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    line-height: 1.2;
  }
  .subtitle{
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  .scan-wrapper{
    padding:30px;
  }
  .textarea{
    padding:12px;
    background-color: #efefef;
  }
  .btn-group{
    width:100%;
    margin:20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-group .btn{
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #f1ca3e;
    font-size:26px;
    font-weight: bold;
    margin:0 30px;
    color: #fff;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-group .btn:hover{
    background-color: #e0bd3c;
  }
  .scan-result{
    display: flex;
    height: 260px;
  }
  .progress{
    height: 230px;
    width: 4rem;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .scan-title{
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #6c757d !important;
  }
  .progress-wrapper{
    height: 0%;
    background-color: #ef3c15;
    text-align: center;
    color: #fff;
  }
  .right{
    padding-left: 40px;
  }
  .right .right-sup{
    line-height: 36px;
    height: 36px;
  }
  .right .result-detail{
    font-size: 24px;
    line-height: 32px;
    background-color: #efefef;
    width: calc(100vw - 280px);
    height: 230px;
    padding:24px;
    border-radius: 24px;
    overflow: auto;
    word-break: break-all;
  }

</style>
<style>
  .right .result-detail .active{
    background-color: #f5d73d;
    color: rgb(255, 255, 255);
    padding: 0 2px;
    border-radius: 2px;
  }
</style>