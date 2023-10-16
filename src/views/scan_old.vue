<template>
  <div class="scan">
    <div class="scan-wrapper">
      <div class="title">
        Received a suspicious email? Scan it!Paste your suspicious email here:
      </div>
      <div class="textarea-box">
        <a-textarea
          v-model:value="startScanEvent.question"
          class="textarea"
          placeholder="Please enter your email content......"
          :auto-size="{ minRows: 8, maxRows: 8 }"
        />
      </div>
      <div class="btn-group1">
        <div class="btn" @click="startScanEvent.clearFn">Clear</div>
        <div class="btn" @click="startScanEvent.startScan">Submit</div>
      </div>
      <div class="scan-result">
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
        <div style="color: #ef3c15;font-weight: bold;font-size: 24px;" v-if="startScanEvent.result.is_fraud">Oh no, this email seems like a scam email !We suggest you to report this email! <a href="/scam">Report?</a></div>
        <div style="color: #00a900;font-weight: bold;font-size: 24px;" v-else>This email looks good, but you still need to pay attention!</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import axios from "axios";
  import {reactive } from "vue";
  const startScanEvent = reactive({
    question: "",
    loading: false,
    result:{},
    FraudPossibility:0,
    clearFn:()=>{
      startScanEvent.question = "";
      startScanEvent.result = {};
      startScanEvent.FraudPossibility = 0
    },
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
          console.log(startScanEvent.result.suspicious_sentence);
          startScanEvent.result.email_text = startScanEvent.result.email_text.replace(reg,`<span class='active'>${startScanEvent.result.suspicious_sentence}</span>`)
        }
      }).catch((e)=>{
        console.log(e);
        startScanEvent.result = {};
      })
    }
  })
</script>
<style scoped>
  .scan{
    padding-top: 71px;
    background-color: #fff;
    height: calc(100vh - 0px);
  }
  .title{
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    line-height: 1.2;
  }
  .scan-wrapper{
    padding:30px;
  }
  .textarea{
    padding:12px;
    background-color: #efefef;
  }
  .btn-group1{
    width:100%;
    margin:20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-group1 .btn{
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
  .btn-group1 .btn:hover{
    background-color: #e0bd3c;
  }
  .scan-result{
    display: flex;
    height: 260px;
  }
  .progress{
    height: 230px;
    width: 148px;
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