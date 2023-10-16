<template>
  <div class="video">
    <div class="video-container">

      <!-- Page title and instruction -->
      <h1>Scenario</h1>
      <div class="video-sup text-muted">
        This is a scenario simulation. After each video finishes playing, you
        can decide the next step. Be aware that the scenario might change based
        on your choices, so please choose carefully.
      </div>

      <!-- Video (disabled fullscreen and inpicturedisplay because those messed with the functionality) -->
      <video controls controlslist="nofullscreen nodownload" disablepictureinpicture autoplay ref="videoElement">
        <source :src="videoSource" type="video/mp4" />
      </video>

      <!-- Question and Answer part -->
      <div class="question-wrapper" v-if="questionShow && btns[route.query.id]['Y']">
        <div class="container">
          <div class="question-header">WHAT WOULD YOU DO?</div>
          <div class="question-lists">
            <div  v-if="btns[route.query.id]['Y']" class="question-list" @click="toJump('Y')">
              {{ btns[route.query.id]["Y"] }}
            </div>
            <div v-if="btns[route.query.id]['N']" class="question-list" @click="toJump('N')">
              {{ btns[route.query.id]["N"] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Result modal -->
  <div class="answer-model-shadow" v-if="questionShow && !btns[route.query.id]['Y']">
    <div class="answer-model">
      <div class="model-title">
        Result
      </div>
      <div class="description">{{ messages[videoId].description }}</div>
      <div class="desc-lists" v-for="(item, index) in messages[videoId].lists" :key="index">
        <div class="desc-h3">{{ item.h1 }}</div>
        <div class="desc-p">{{ item.p }}</div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <button role="button" class="btn btn-primary" @click="toTargetJump(1)">Try again</button>
        </div>
        <div class="col-auto">
          <button role="button" class="btn btn-primary" @click="model.jumpTo('/learning')"> Learn More </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { useRoute } from "vue-router";
const questionShow = ref(false);
const route = useRoute();
const videoId = route.query.id;
const videoSource = ref();
videoSource.value = "src/assets/video/" + videoId + ".mp4";
const videoElement = ref();
// const videoIdSource = ref({
//   1: {
//     Y: 2,
//     N: 3
//   },
//   2: {
//     Y:4,
//     N:5
//   },
//   3: {
//     Y:6,
//     N:7
//   }
// })
const videoIdSource = ref({
  1: {
    Y: 3,
    N: 2,
  },
  2: {
    Y: 5,
    N: 4,
  },
  3: {
    Y: 6,
    N: 2,
  },
  4: {
    Y: 10,
    N: 8,
  },
  5: {
    Y: 11,
    N: 4,
  },
  6: {
    Y: 2,
    N: 7,
  },
  7: {
    /*bad end*/
  },
  8: {
    Y: 12,
    N: 13,
  },
  9: {
    Y: 14,//13,
    N: 10,
  },
  10: {
    Y: 15,
    N: 14,
  },
  11: {
    Y: 16, //4,
    N: 4, //16,
  },
  12: {
    Y: 17,
    N: 4,
  },
  13: {
    /*good end*/
  },
  14: {
    /*good end*/
  },
  15: {
    /*bad end*/
  },
  16: {
    /*bad end*/
  },
  17: {
    //Y: 15,
    /*15*/
    /*bad end*/
  },
});
// const btns = ref({
//   1:{
//     Y:"Open",
//     N:"Close"
//   },
//   2:{
//     Y:"Anwser",
//     N:"Close"
//   },
//   3:{
//     Y:"Enter Info",
//     N:"Close"
//   },
//   4:{
//     Y:"Confirm",
//     N:"Ignore"
//   },
//   5:{
//     Y:"Check",
//     N:"Ignore"
//   }
// })
const btns = ref({
  1: {
    Y: "Open", //jump to 3
    N: "Close", //jump to 2
  },
  2: {
    Y: "Pick up", //jump to 5
    N: "Ignore", //jump to 4
  },
  3: {
    Y: "Enter Info", //jump to 6
    N: "Close", //jump to 2
  },
  4: {
    Y: "Reply", //jump to 10
    N: "Don't reply", //jump to 8
    other: "Contact Bank", //jump to 9
  },
  5: {
    Y: "Answer", //jump to 11
    N: "Ignore", //jump to 4
  },
  6: {
    Y: "Trust", //jump to 2
    N: "Don't trust", //jump to 7
  },
  7: {
    R: "Bad End"
  },
  8: {
    Y: "Open", //jump to 12
    N: "Close", //jump to 13
  },
  9: {
    Y: "Trust", //jump to 13
    N: "Don't Trust", //jump to 10
  },
  10: {
    Y: "Provide info", //jump to 15
    N: "Ignore", //jump to 14
  },
  11: {
    Y: "Trust", //jump to 4
    N: "Not Turst", //jump to 16
  },
  12: {
    Y: "Pay it", //jump to 17
    N: "Close", //jump to 4
  },
  13: {
    //"good end"
    R:"Good End"
  },
  14: {
    //"good end"
    R:"Good End"
  },
  15: {
    //"bad end"
    R:"Bad End"
  },
  16: {
    //"bad end"
    R:"Bad End"
  },
  17: {
    R:"Bad End"
    //jump to 15
    //Y: "Next"
  },
});
const formatSourceFn = (source, videoId, type) => {
  if (source.value[videoId]) {
    return source.value[videoId][type];
  } else {
    return "";
  }
};
const messages = reactive({
  7:{
    description: "Eddie's choices resulted in his property being stolen. He was attracted by the false reward in the scam email and believed the scammer without verifying its authenticity. He provided his personal and financial information without adequate verification, ultimately resulting in the loss of his property.",
    lists:[
      {
        h1:"Verify source of information:",
        p:"Always check the authenticity of unsolicited messages before responding or sharing any personal information."
      },
      {
        h1:"Protect personal information:",
        p:"Be cautious and avoid sharing sensitive details on unverified platforms."
      },
      {
        h1:"Use safety measures:",
        p:"Strengthen account security with measures like two-factor authentication."
      }
    ]
  },
  13:{
    description: "Eddie received a series of suspicious messages and calls while shopping online, but his decision to ignore them and stick to shopping on the official website protected his assets.",
    lists:[
      {
        h1:"Don't trust unverified information:",
        p:"Be sceptical of unsolicited rewards, offers, and other enticing information."
      },
      {
        h1:"Protect personal information:",
        p:"Avoid providing personal or financial information on unverified websites or in response to messages from unknown sources."
      },
      {
        h1:"Shop selectively:",
        p:"When receiving attractive offers and discounts, you should give priority to reputable and verified official websites to avoid being scammed."
      }
    ]
  },
  14:{
    description: "Eddie, cautious of a scam email and unknown call, verified a suspicious text with his bank and learned it was a scam. His caution saved his assets.",
    lists:[
      {
        h1:"Verify source of information:",
        p:"Always validate unexpected notifications, especially involving finances or sensitive info."
      },
      {
        h1:"Be alert:",
        p:"Be alert to all information and notifications from unknown sources and avoid being gullible."
      },
      {
        h1:"Strengthen self-protection awareness:",
        p:"Enhance self-awareness about different scams to avoid impulsive decisions."
      }
    ]
  },
  15:{
    description: "Eddie, a retiree, was shopping online when he ignored an email and a call claiming he won a prize. However, a text message stating his bank account was frozen alarmed him. Without verification, he paid a fee to an account provided in the message, only to find out it was a scam.",
    lists:[
      {
        h1:"Verify the authenticity of the information:",
        p:"Verify unexpected financial or prize notifications with the respective agencies before taking action."
      },
      {
        h1:"Be cautious about information from unknown sources:",
        p:"Treat messages and calls from unknown sources with caution, especially those requesting payments or personal info."
      },
      {
        h1:"Strengthen self-protection awareness:",
        p:"Enhance self-awareness about different scams to avoid impulsive decisions."
      }
    ]
  },
  16:{
    description: "Eddie received an email and a call claiming he had won a prize, but after paying a fee to claim it, he was left with silence. This impulsiveness led to a financial loss.",
    lists:[
      {
        h1:"Verify the information:",
        p:"When receiving unknown or unexpected reward information, verify it first and do not believe it directly. You can contact the relevant official agencies to confirm the authenticity of the information."
      },
      {
        h1:"Be cautious about information from unknown sources:",
        p:"Don't pay based on notifications such as phone calls, emails, or text messages, especially from unknown or unreliable sources."
      },
      {
        h1:"Strengthen self-protection awareness:",
        p:"Be alert to calls from unknown numbers and avoid making impulsive decisions due to temporary temptation or panic."
      }
    ]
  },
  17:{
    description: "Eddie, while shopping online, ignored a scam email and call but fell for a 70% discount ad on a shopping site. He quickly entered his bank info, leading to unauthorized transactions and a financial loss.",
    lists:[
      {
        h1:"Be cautious about all unsolicited offers and incentives:",
        p:"Be wary of unsolicited offers and rewards; always verify their authenticity."
      },
      {
        h1:"Protect personal and financial information:",
        p:"Safeguard your personal and financial information; avoid entering them on unverified platforms."
      },
      {
        h1:"Enhance network security awareness:",
        p:"Enhance your cyber-security awareness to recognize and avoid scams."
      }
    ]
  }
})


const model = reactive({
    visible:false,
    jumpTo:(url)=>{
      window.location.href= url
    },
    showModal:()=>{
      model.visible = true;
    },
    hideModal:()=>{
      model.visible = false;
    }
  })
const toJump = (type) => {
  const nextVideoId = formatSourceFn(videoIdSource, videoId, type);
  window.location.href = "/scenario?id=" + nextVideoId;
};
const toTargetJump = (id) => {
  window.location.href = "/scenario?id=" + id;
};
onMounted(() => {
  const actualVideoElement = videoElement.value;
  if (actualVideoElement) {
    actualVideoElement.load();
    // actualVideoElement.addEventListener('loadedmetadata', () => {
    //   const currentTime = actualVideoElement.currentTime;
    // });
    actualVideoElement.addEventListener("timeupdate", () => {
      const totalDuration = actualVideoElement.duration;
      const currentTime = actualVideoElement.currentTime;

      if (totalDuration - currentTime <= 2.5) {
        if (!questionShow.value) {
          questionShow.value = true;
        }
      }
    });
  }
});
</script>
<style scoped>
.video {
  padding-top: 71px;
  height: 100vh;
}
.video-container {
  position: relative;
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
video {
  width: 100%;
  height: auto;
}
.question-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
  transition: all 1s ease;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: -8rem; */
  border-radius: 10px;
}
.question-header {
  text-align: center;
  color: #fff;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 3 rem;
}
.question-lists {
  width: 100%;
  display: flex;
  margin-top: 80px;
  justify-content: center;
}
.question-list {
  width: 200px;
  height: 200px;
  background: #ffd84c99;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}

.question-list:nth-of-type(2) {
  margin-left: 20rem;
}
.question-list:hover {
  background: #dfbd4599;
}
.question-wrapper.question-result{
  color:#fff;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: bold;
}
.video-sup {
  text-align: left;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: bold;
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
  .answer-model-shadow .description{
    margin:12px 0;
  }
  .desc-lists {
    margin-bottom:12px;
  }
  .desc-lists .desc-h3{
    font-weight: bold;
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
    width: 720px;
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