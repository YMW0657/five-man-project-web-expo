<template>
  <section
    class="page-section"
    id="services"
    style="padding: 9rem 0 9.5rem 0; height: 100vh"
  >
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Scam Type</h2>
        <h3 class="section-subheading text-muted">
          These are the techniques to look out for
        </h3>
      </div>
      <div class="row text-center">
        <div class="col-md-4 text-item" @click="showModel(0)">
          <span class="fa-stack fa-4x" style="">
            <img src="@/assets/img/flayfishing.svg" style="width: 80px" />
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i> -->
            <!-- <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> -->
          </span>
          <h4 class="my-3">Phishing</h4>
          <p class="text-muted">
            Phishing is when scammers use fake emails or websites to trick
            people into giving away personal information, like passwords or
            credit card numbers.
          </p>
          <span class="read" v-if="actives[0]"><img src="@/assets/img/read.svg" style="width:24px;"></span>
        </div>
        <div class="col-md-4 text-item" @click="showModel(1)">
          <span class="fa-stack fa-4x">
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i> -->
            <img src="@/assets/img/Spoofing.svg" style="width: 80px" />
          </span>
          <h4 class="my-3">Spoofing</h4>
          <p class="text-muted">
            Spoofing is when scammers pretend to be someone or something they're
            not, like faking a phone number or email address. They do this to
            trick people into trusting them, so they can steal information or
            money.
          </p>
          <span class="read" v-if="actives[1]"><img src="@/assets/img/read.svg" style="width:24px;"></span>
        </div>
        <div class="col-md-4 text-item" @click="showModel(2)">
          <span class="fa-stack fa-4x">
            <!-- <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"></i> -->
            <img src="@/assets/img/card.svg" style="width: 80px" />
          </span>
          <h4 class="my-3">Card theft</h4>
          <p class="text-muted">
            Card theft is when someone steals your credit or debit card
            information to buy things or take money without your permission.
            It's like someone taking money from your wallet without you knowing.
          </p>
          <span class="read" v-if="actives[2]"><img src="@/assets/img/read.svg" style="width:24px;"></span>
        </div>
      </div>
      <div class="dash-btn" style="text-align: center;margin-top:60px;" v-if="actives[0]&&actives[1]&&actives[2]">
        <a class="btn btn-primary btn-xl text-uppercase" href="/quiz">Test Your knowledge!</a>
      </div>
      <!-- <div class="dash-sup">
        <div style="display:flex;width:600px;">
          <div>Finished reading through those techniques?  <a href="/quiz">go to quiz</a></div>
        </div>
        <div class="" style="display:flex;width:600px;">
          <div>Still not sure about some email? <a href="/scan">Scan it!</a></div> 
        </div>
      </div> -->
      <div
        class="portfolio-modal portfolio-modal1 modal fade show"
        :class="shows[0]?'active':''"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal" @click="close(0)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body" style="width:100%;">
                    <!-- Project details-->
                    <h2 class="text-uppercase">Identify theft</h2>
                    <p style="text-align:left;">
                      The Finishing scam controls the bank account of the elder. An elderly couple, Edward, 86, and Joan Adams, 82, lost a quarter of a million dollars in a sophisticated phishing scam. They fell victim to a group of fake Microsoft employees who took control of their computer and immediately attempted to access their bank accounts.The scam unfolded over three days during which the scammers managed to make 11 withdrawals totaling $249,000. The withdrawn amounts ranged from $10,000 to $50,000 and were taken from a loan account the couple claimed they hadn't used for two years (Chung, 2022).
                      <br/><br/>
                      Reference: Chung, F. (2022, November 30). Bank’s cruel act after couple scammed $250k. News. https://www.news.com.au/finance/money/costs/microsoft-scam-drains-elderly-couples-249000-savings-as-bendigo-bank-fails-to-block-transactions/news-story/eab3fc0a5fca58a9f7dea7a9f25a5dcc
                    </p>
                    <div class="bar-chart" ref="barChart1" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left;">
                      During 2020~2021,in the income group of Second quintile group people have the highest experience of identity theft during this period. And people in this income  group need to pay more attention on this kind of scam (sheet1)  
                      <br><br>
                      Reference: Personal Fraud, 2021-22  Table 7a Persons aged 15 years and over, Whether experienced identity theft in the last 12 months, by selected socio-demographic characteristics 
                    </p>
                    <div class="bar-chart" ref="barChart2" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left;">
                      In the second quintile group citizen, a coup family with no children is the biggest composition. Therefore, this kind of characteristic group needs more focus on  identity theft. (sheet2)
                      <br><br>
                      Reference:  Census of Population and Housing: Household and families data summary, 2021 TABLE 7. TOTAL FAMILY INCOME (WEEKLY) BY FAMILY COMPOSITION
                    </p>
                    <div class="bar-chart" ref="barChart3" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left;">
                      In addition, from the education perspective, non-school qualification groups have the highest experienced cases, so people in this characteristic need to care about this kind of scam.(sheet3)  
                      <br><br>
                      Reference: Personal Fraud, 2021-22  Table 7a Persons aged 15 years and over, Whether experienced identity theft in the last 12 months, by selected socio-demographic characteristics 
                    </p>
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                      @click="close(0)"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal portfolio-modal1 modal fade show"
        :class="shows[1]?'active':''"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal" @click="close(1)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Project details-->
                    <h2 class="text-uppercase">Spoofing</h2>
                    <p style="text-align:left;">
                      Texting scam for health issue target aged people Gayle Arnott, a 65-year-old stroke victim from Peterborough, South Australia, fell victim to a scam in which she lost $7,000. Gayle had spent three months in the hospital due to a brain bleed and stroke in 2020, and she received a text message claiming to have a voicemail from her doctor after a regular check-up in April of the following year. Believing it might be related to her health, she clicked on the link provided in the message.Subsequently, Gayle and her husband, James, began receiving numerous phone calls, and $7,000 was discovered missing from their bank account (McPhee, 2022). 
                      <br><br>
                      Reference: McPhee, S. (2022, June 22). Scammers target stroke victim with text claiming to be from her doctor. Mail Online. https://www.dailymail.co.uk/news/article-10941387/Australia-news-Scammers-target-stroke-victim-text-message-claiming-doctor.html
                    </p>
                    <div class="bar-chart" ref="barChart4" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left;">
                      From a statistical report, individuals who have a bachelor degree have the highest victimisation rate than other education level people. (sheet4) 
                      <br><br>
                      Reference: Personal Fraud, 2021-22 Table 9a Persons aged 15 years and over, Whether experienced online impersonation in the last 12 months, by selected socio-demographic characteristics 
                    </p>
                    <div class="bar-chart" ref="barChart5" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left;">
                      In 2020~2021, high revenue people will suffer higher online impersonation than low income people. (sheet5)
                      <br><br>
                      Reference: Personal Fraud, 2021-22 Table 9a Persons aged 15 years and over, Whether experienced online impersonation in the last 12 months, by selected socio-demographic characteristics 
                    </p>
                    <div class="bar-chart" ref="barChart6" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left;">
                      In the highest income group, the family composition of a couple family with children has the highest ratio. Therefore, people in this kind of census group need to pay attention to online impersonation. (sheet6)
                      <br><br>
                      Reference:  Census of Population and Housing: Household and families data summary, 2021 TABLE 7. TOTAL FAMILY INCOME (WEEKLY) BY FAMILY COMPOSITION
                    </p>
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                      @click="close(1)"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal portfolio-modal1 modal fade show"
        :class="shows[2]?'active':''"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal" @click="close(2)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Project details-->
                    <h2 class="text-uppercase">Card theft</h2>
                    <p style="text-align:left">
                      Texting scam for health issue target aged people Gayle Arnott, a 65-year-old stroke victim from Peterborough, South Australia, fell victim to a scam in which she lost $7,000. Gayle had spent three months in the hospital due to a brain bleed and stroke in 2020, and she received a text message claiming to have a voicemail from her doctor after a regular check-up in April of the following year. Believing it might be related to her health, she clicked on the link provided in the message.Subsequently, Gayle and her husband, James, began receiving numerous phone calls, and $7,000 was discovered missing from their bank account (McPhee, 2022). 
                      <br><br>
                      Reference: McPhee, S. (2022, June 22). Scammers target stroke victim with text claiming to be from her doctor. Mail Online. https://www.dailymail.co.uk/news/article-10941387/Australia-news-Scammers-target-stroke-victim-text-message-claiming-doctor.html
                    </p>
                    <div class="bar-chart" ref="barChart7" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left">
                      For the car fraud, according to the statistical report in 2020~2021, male has the higher victimisation rate than female.(sheet7) 
                      <br><br>
                      Reference: Personal Fraud, 2021-22 Table 5b Persons aged 15 years and over, Whether experienced card fraud in the last 12 months, by selected socio-demographic characteristics: Relative standard error
                    </p>
                    <div class="bar-chart" ref="barChart8" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left">
                      In the male's marital status,married males suffer a higher  victimisation rate than other  marital status men. (sheet8)
                      <br><br>
                      Reference: Personal Fraud, 2021-22 TABLE 5. REGISTERED MARITAL STATUS(a) BY AGE BY SEX
                    </p>
                    <div class="bar-chart" ref="barChart9" style="width: 43vw; height: 400px;"></div>
                    <p style="text-align:left">
                      For married male, who have children under 15 years suffer the highest victimisation rate in card fraud than other family status.(sheet9)
                      <br><br>
                      Reference: Personal Fraud, 2021-22 TABLE 3. RELATIONSHIP IN HOUSEHOLD BY AGE BY SEX
                    </p>
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                      @click="close(2)"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from "vue-router";
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";
const router = useRouter();
const toQuestionFn = () => {
  router.push("/quiz");
};
const barChart1 = ref();
const barChart2 = ref();
const barChart3 = ref();
const barChart4 = ref();
const barChart5 = ref();
const barChart6 = ref();
const barChart7 = ref();
const barChart8 = ref();
const barChart9 = ref();
const shows = ref({
  0:false,
  1:false,
  2:false
})
const actives = ref({
  0:false,
  1:false,
  2:false
})
const chartData1 = ref({
  xAxis: {
    type: 'category',
    data: ["Lowest quintile",	"Second quintile",	"Third quintile",	"Fourth quintile",	"Highest quintile"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [14.4, 34.4, 19.8, 25.5, 32.3],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData2 = ref({
  xAxis: {
    type: 'category',
    data: ["Couple family with no children", "Couple family with children",	"One parent family", "Other family"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [177942, 60315, 110547, 11277],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData3 = ref({
  xAxis: {
    type: 'category',
    data: ["Has non-school qualification(c)", "Above bachelor degree",	"Bachelor degree", "Below bachelor degree", "Does not have non-school qualification"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [12665.1,	2288.2,	3917.5,	6048.7,	7726.7],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})

const chartData4 = ref({
  xAxis: {
    type: 'category',				
    data: ["Has non-school qualification(c)", "Above bachelor degree",	"Bachelor degree", "Below bachelor degree", "Does not have non-school qualification"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [361.6,	72.9, 111.1, 162.8, 147.9],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData5 = ref({
  xAxis: {
    type: 'category',
    data: ["Lowest quintile", "Second quintile",	"Third quintile", "Fourth quintile", "Highest quintile"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [54.8,	77.9,	18.20,	89.3,	108.1, 111.3],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData6 = ref({
  xAxis: {
    type: 'category',
    data: ["Couple family with no children", "Couple family with children",	"One parent family", "Other family"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [776006, 1550284, 128277, 20262],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData7 = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [  
        { value: 60.3, name: 'Male' },
        { value: 39.7, name: 'Female' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
const chartData8 = ref({
  xAxis: {
    type: 'category',
    data: ["Married", "Separated" ,"Divorced", "Widowed", "Never married" ],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [4838150, 309496, 768844, 228673, 4016142 ],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const chartData9 = ref({
  xAxis: {
    type: 'category',
    data: ["Lone parent", "Child under 15 years", "Dependent student (aged 15-24 years)",  "Non-dependent child", "Other related individual", "Unrelated individual living in family household", "Group household member", "Lone person", "Visitor (from within Australia)(d)"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      data: [209608, 2237291, 584866, 922285, 262827, 174817, 480032, 1061225, 351684],
      barWidth: 30,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
})
const showModel = (type)=>{
  shows.value[type] = true;
  actives.value[type] = true;
}
const close = (type) =>{
  shows.value[type] = false;
}

onMounted(()=>{
  const myChart1 = echarts.init(barChart1.value);
  myChart1.setOption(chartData1.value);

  const myChart2 = echarts.init(barChart2.value);
  myChart2.setOption(chartData2.value);

  const myChart3 = echarts.init(barChart3.value);
  myChart3.setOption(chartData3.value);

  const myChart4 = echarts.init(barChart4.value);
  myChart4.setOption(chartData4.value);

  const myChart5 = echarts.init(barChart5.value);
  myChart5.setOption(chartData5.value);

  const myChart6 = echarts.init(barChart6.value);
  myChart6.setOption(chartData6.value);
  const myChart7 = echarts.init(barChart7.value);
  myChart7.setOption(chartData7.value);
  const myChart8 = echarts.init(barChart8.value);
  myChart8.setOption(chartData8.value);
  const myChart9 = echarts.init(barChart9.value);
  myChart9.setOption(chartData9.value);
})


</script>
<style scoped>
.dashboard {
  width: 100%;
  min-height: calc(100vh - 64px);
}
.fa-stack {
  width: 2em;
  height: 2em;
  background: #ffc800;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.dash-sup {
  width: 600px;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #6c757d !important;
}
.text-item{
  cursor: pointer;
  transition: all 0.3s ease;
  padding-top: 24px;
  position: relative;
  height: 330px;
}
.text-item:hover{
  background: rgba(0,0,0,0.1);
}
.text-item .read{
  position: absolute;
  bottom:0;
  left:50%;
  margin-left:-12px;
}
.portfolio-modal1.active{
  display: block;
  padding-left: 0px
}
</style>
