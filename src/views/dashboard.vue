<template>
  <section
    class="page-section"
    id="services"
    style="padding: 9rem 0 9.5rem 0; height: 100vh"
  >
    <div class="container">

      <!-- Page title and call to action-->
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Scam Type</h2>
        <h3 class="section-subheading text-muted">
          These are the techniques to look out for
        </h3>
        <hr/>
        <h2 class="py-3"> Click on one of these module to learn more </h2>
      </div>

      <!-- Card for modules -->
      <div class="row text-center">

        <div class="col-md-4 py-3 text-item" @click="showModel(0)">
          <learningCard
            img_src="/src/assets/img/flayfishing.svg"
            img_alt="phishing"
            card_text="Phishing is when scammers use fake emails or websites to trick
              people into giving away personal information, like passwords or
              credit card numbers."
            card_title="Phishing"
            :readed="actives[0]"
          />
        </div>

        <div class="col-md-4 py-3 text-item" @click="showModel(1)">
          <learningCard
            img_src="/src/assets/img/Spoofing.svg"
            img_alt="spoofing"
            card_text="Spoofing is when scammers pretend to be someone or something they're
            not, like faking a phone number or email address. They do this to
            trick people into trusting them, so they can steal information or
            money."
            card_title="Spoofing"
            :readed="actives[1]"
          />
        </div>

        <div class="col-md-4 py-3 text-item" @click="showModel(2)">
          <learningCard
            img_src="/src/assets/img/card.svg"
            img_alt="card_theft"
            card_text="Card theft is when someone steals your credit or debit card
            information to buy things or take money without your permission.
            It's like someone taking money from your wallet without you knowing."
            card_title="Card theft"
            :readed="actives[2]"
          />
        </div>
      </div>

      <hr/>

      <!-- navigate to next user flows -->
      <div id="nextUserFlow" class="row justify-content-center pb-5" style="text-align: center;margin-top:60px;" v-if="checkReaded()">
        
        <div class="col-12">
          <h3 class="my-3"> Now that you have finished all of the modules, why not try checking your understanding?</h3>
          <a class="btn btn-primary btn-xl text-uppercase" href="/quiz">Test Your knowledge</a>
        </div>
        
        <div class="col-12">
          <h3 class="my-3"> Or try out our new scenario learning experience?</h3>
          <a class="btn btn-secondary btn-xl text-uppercase" href="/scenario?id=1">Start now</a>
        </div>

      </div>

      <!-- Information modals -->
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
            <div class="modal-header justify-content-center" style="border:none;">
              <h2 class="text-uppercase mb-5">Phishing</h2>
            </div>
            <div class="close-modal" data-bs-dismiss="modal" @click="close(0)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>

            <div class="modal-body">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-8">
                    <p style="text-align:left;">
                      Phishing scam is a type of cyberscam that usually come in form of imitation of an legitimate looking website/email of trusted institution. Usually with the goal to trick individuals into leaking sensitive information.
                    </p>
                      
                    <blockquote>
                      An elderly couple, Edward, 86, and Joan Adams, 82, lost a quarter of a million dollars in a sophisticated phishing scam.
                      They fell victim to a group of fake Microsoft employees who took control of their computer and immediately attempted to access their bank accounts. The scam unfolded over three days during which the scammers
                      managed to make 11 withdrawals totaling $249,000. The withdrawn amounts ranged from $10,000 to $50,000 and were taken from a loan account the couple claimed they hadn't used for two years (Chung, 2022).
                      <cite>Reference: Chung, F. (2022, November 30). Bank’s cruel act after couple scammed $250k. News. https://www.news.com.au/finance/money/costs/microsoft-scam-drains-elderly-couples-249000-savings-as-bendigo-bank-fails-to-block-transactions/news-story/eab3fc0a5fca58a9f7dea7a9f25a5dcc</cite>
                    </blockquote>

                    <br/>

                    <div class="card text-white bg-danger mb-3" style="text-align: left;">

                      <div class="card-body">
                        <h5 class="card-title">
                          What to look out for?
                        </h5>
                        <ul>
                          <li> Generic greeting </li>
                          <li> Urgent or threatening language </li>
                          <li> Misspelled words and grammar issues </li>
                          <li> Requests for personal/sensitive information </li>
                          <li> Suspicious Sender address </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="bar-chart" ref="barChart1" style="height: 400px;"></div>
                    </div>
                    
                    <p class="text-muted" style="text-align: center;"> Figure 1. Number of phishing scam cases by income quantile range</p>
                      
                    <p style="text-align:left;">
                      During 2020~2021 in the income group of Second quintile range, people have the highest experience of identity theft during this period. And people in this income  group need to pay more attention on this kind of scam 
                      <br><br>
                      <p class="text-muted"> Reference: Personal Fraud, 2021-22  Table 7a Persons aged 15 years and over, Whether experienced identity theft in the last 12 months, by selected socio-demographic characteristics </p>
                    </p>

                    <div class="col-12">
                      <div class="bar-chart" ref="barChart2" style="height: 400px;"></div>
                    </div>
                    <p class="text-muted"> Figure 2. Number of cases occured in quantile range income group by family type </p>

                    <p style="text-align:left;">
                      In the second quintile group citizen, a coup family with no children is the biggest composition. Therefore, this kind of characteristic group needs more focus on  identity theft.
                      <br><br>
                      <p class="text-muted"> Reference:  Census of Population and Housing: Household and families data summary, 2021 TABLE 7. TOTAL FAMILY INCOME (WEEKLY) BY FAMILY COMPOSITION </p>
                    </p>

                    <div class="col-12">
                      <div class="bar-chart" ref="barChart3" style="height: 400px;"></div>
                    </div>
                    <p class="text-muted">Figure 3. Number of cases by education level</p>

                    <p style="text-align:left;">
                      In addition, from the education perspective, non-school qualification groups have the highest experienced cases, so people in this characteristic need to care about this kind of scam.
                      <br><br>
                      <p class="text-muted"> Reference: Personal Fraud, 2021-22  Table 7a Persons aged 15 years and over, Whether experienced identity theft in the last 12 months, by selected socio-demographic characteristics </p> 
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

            <div class="modal-header justify-content-center" style="border:none;">
              <h2 class="text-uppercase mb-5">Spoofing</h2>
            </div>
            <div class="close-modal" data-bs-dismiss="modal" @click="close(1)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>

            <div class="modal-body">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-8">
                    <p style="text-align: left;">
                      Spoofing is a technique in which cybercriminal disguise themselves as a known or trusted source. While sounds quite similar to Phishing attack, Spoofing is ultimately very different as the attacker
                      disguise the network traffic to come from an entirely different source which mean it is a more sophisticated attack.
                    </p>

                    <blockquote>
                      Barry Casey, a 69-year-old man who has been battling three forms of cancer, had relied on his savings to cover his mounting medical expenses.The scam began when Mr. Casey was on holiday in the Philippines and received an email from scammers pretending to be Amazon Prime workers. The email falsely claimed he had signed up for an Amazon Prime account and that $99.99 would be deducted from his account in two weeks. He continued to receive these fraudulent emails daily.Upon returning to Australia and feeling unwell with symptoms such as fevers, coughs, and sleep issues, Mr. Casey decided to call the phone number provided in the scam emails. A scammer claiming to be from Amazon Prime's fraud team convinced him that the initial emails were an attempt to steal his bank details. They requested Mr. Casey's personal information and bank details in an effort to catch the fake scammer. Finally, he lost $40,000 to scammers in May 2022 (Hyland, 2023). 
                      <cite>Reference: Hyland, J. (2023, September 24). Aussie bloke with cancer is cruelly scammed out of $40,000. Mail Online.</cite>
                    </blockquote>

                    <div class="card text-white bg-danger mb-3" style="text-align: left;">
                      <div class="card-body">
                        <h5 class="card-title">
                          What to look out for?
                        </h5>
                        <ul>
                          <li> Generic greeting </li>
                          <li> Urgent or threatening language </li>
                          <li> Unexpected or unusual calls </li>
                          <li> Requests for personal/sensitive information </li>
                          <li> Non local country code on call number </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="bar-chart" ref="barChart4" style="height: 400px;"></div>
                    </div>
                    <p class="text-muted">Figure 4. Victimisation rate by different education levels</p>

                    <p style="text-align:left;">
                      From a statistical report, individuals who have a bachelor degree have the highest victimisation rate than other education level people.
                      <br><br>
                      <p class="text-muted"> Reference: Personal Fraud, 2021-22 Table 9a Persons aged 15 years and over, Whether experienced online impersonation in the last 12 months, by selected socio-demographic characteristics </p>
                    </p>

                    <div class="col-12">
                      <div class="bar-chart" ref="barChart5" style="height: 400px;"></div>
                    </div>
                    <p class="text-muted">Figure 5. Number of cases occured per household income quantile range</p>

                    <p style="text-align:left;">
                      In 2020~2021, high revenue people will suffer higher online impersonation than low income people. (sheet5)
                      <br><br>
                      <p class="text-muted"> Reference: Personal Fraud, 2021-22 Table 9a Persons aged 15 years and over, Whether experienced online impersonation in the last 12 months, by selected socio-demographic characteristics </p>
                    </p>
                    
                    <div class="col-12">
                      <div class="bar-chart" ref="barChart6" style="height: 400px;"></div>
                    </div>
                    <p class="text-muted">Figure 6. Number of cases occured by family type</p>

                    <p style="text-align:left;">
                      In the highest income group, the family composition of a couple family with children has the highest ratio. Therefore, people in this kind of census group need to pay attention to online impersonation.
                      <br><br>
                      <p class="text-muted"> Reference:  Census of Population and Housing: Household and families data summary, 2021 TABLE 7. TOTAL FAMILY INCOME (WEEKLY) BY FAMILY COMPOSITION </p>
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

            <div class="modal-header justify-content-center" style="border:none;">
              <h2 class="text-uppercase mb-5">Card theft</h2>
            </div>
            <div class="close-modal" data-bs-dismiss="modal" @click="close(2)">
              <img src="@/assets/img/close-icon.svg" alt="Close modal" />
            </div>

            <div class="modal-body">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-8">
                    <p> Card theft refers to the unauthorized acquisition and use of an individual's or entity's payment card information, typically credit or debit card details, for fraudulent purposes. It is a form of financial fraud and cybercrime that can have serious consequences for both cardholders and financial institutions </p>

                    <blockquote>
                      Texting scam for health issue target aged people Gayle Arnott, a 65-year-old stroke victim from Peterborough, South Australia, fell victim to a scam in which she lost $7,000. Gayle had spent three months in the hospital due to a brain bleed and stroke in 2020, and she received a text message claiming to have a voicemail from her doctor after a regular check-up in April of the following year. Believing it might be related to her health, she clicked on the link provided in the message.Subsequently, Gayle and her husband, James, began receiving numerous phone calls, and $7,000 was discovered missing from their bank account (McPhee, 2022). 
                      <br><br>
                      <cite>Reference: McPhee, S. (2022, June 22). Scammers target stroke victim with text claiming to be from her doctor. Mail Online. https://www.dailymail.co.uk/news/article-10941387/Australia-news-Scammers-target-stroke-victim-text-message-claiming-doctor.html</cite>
                    </blockquote>

                    <div class="card text-white bg-danger mb-3" style="text-align: left;">
                      <div class="card-body">
                        <h5 class="card-title">
                          What to look out for?
                        </h5>
                        <ul>
                          <li> Unauthorized transactions </li>
                          <li> Sudden and unexpected charges </li>
                          <li> Suspicious card activities </li>
                          <li> Data breach on services associated with the card usage </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="bar-chart" ref="barChart7" style="height: 400px;"></div>
                    </div>
                    <p class="text-muted">Figure 7. Victimisation in card fraud by different sex</p>

                    <p style="text-align:left">
                      For the car fraud, according to the statistical report in 2020~2021, male has the higher victimisation rate than female.(sheet7) 
                      <br><br>
                      <p class="text-muted">Reference: Personal Fraud, 2021-22 Table 5b Persons aged 15 years and over, Whether experienced card fraud in the last 12 months, by selected socio-demographic characteristics: Relative standard error</p>
                    </p>

                    <div class="col-12">
                      <div class="bar-chart" ref="barChart8" style="height: 400px;"></div>
                    </div>
                    <p class="text-muted"> Figure 8. Number of male victim cases by marital status </p>

                    <p style="text-align:left">
                      In the male's marital status,married males suffer a higher  victimisation rate than other  marital status men. (sheet8)
                      <br><br>
                      <div class="text-muted">Reference: Personal Fraud, 2021-22 TABLE 5. REGISTERED MARITAL STATUS(a) BY AGE BY SEX</div>
                    </p>

                    <div class="col-12">
                      <div class="bar-chart" ref="barChart9" style="height: 400px;"></div>
                    </div>
                    <p class="text-muted"> Figure 9. Number of cases by male status</p>

                    <p style="text-align:left">
                      For married male, who have children under 15 years suffer the highest victimisation rate in card fraud than other family status.(sheet9)
                      <br><br>
                      <p class="text-muted">Reference: Personal Fraud, 2021-22 TABLE 3. RELATIONSHIP IN HOUSEHOLD BY AGE BY SEX</p>
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
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";
import learningCard from '../component/learning-card.vue';

const barChart1 = ref();
const barChart2 = ref();
const barChart3 = ref();
const barChart4 = ref();
const barChart5 = ref();
const barChart6 = ref();
const barChart7 = ref();
const barChart8 = ref();
const barChart9 = ref();

//variable to control modal states
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

//chart data (should probably be retrieve from database to be honest)
const chartData1 = ref({
  xAxis: {
    name: 'Income by quantile range',
    nameLocation: 'middle',
    nameGap: '40',
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
    name: 'Number of cases',
    nameLocation: 'middle',
    nameGap: '40',
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
    name: 'Family type',
    nameLocation: 'middle',
    nameGap: '40',
    type: 'category',
    data: ["Couple family with no children", "Couple family with children",	"One parent family", "Other family"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  yAxis: {
    name: 'Number of cases',
    nameLocation: 'middle',
    nameGap: '60',
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
    name: 'Education level',
    nameLocation: 'middle',
    nameGap: '40',
    type: 'category',
    data: ["Has non-school qualification(c)", "Above bachelor degree",	"Bachelor degree", "Below bachelor degree", "Does not have non-school qualification"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    name: 'Number of cases',
    nameLocation: 'middle',
    nameGap: '60',
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
    name: 'Education level',
    nameLocation: 'middle',
    nameGap: '40',		
    data: ["Has non-school qualification(c)", "Above bachelor degree",	"Bachelor degree", "Below bachelor degree", "Does not have non-school qualification"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    name: 'Rate of victimisation (in percentage)',
    nameLocation: 'middle',
    nameGap: '60',
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
    name: 'Income by quantile range',
    nameLocation: 'middle',
    nameGap: '40',
    data: ["Lowest quintile", "Second quintile",	"Third quintile", "Fourth quintile", "Highest quintile"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    name: 'Number of cases',
    nameLocation: 'middle',
    nameGap: '40',
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
    name: 'Family type',
    nameLocation: 'middle',
    nameGap: '40',
    data: ["Couple family with no children", "Couple family with children",	"One parent family", "Other family"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    name: 'Number of cases',
    nameLocation: 'middle',
    nameGap: '70',
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
    name: 'Marital status',
    nameLocation: 'middle',
    nameGap: '40',
    data: ["Married", "Separated" ,"Divorced", "Widowed", "Never married" ],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    name: 'Number of cases',
    nameLocation: 'middle',
    nameGap: '70',
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

// need to talk about this one in particular
const chartData9 = ref({
  xAxis: {
    type: 'category',
    name: 'Status',
    nameLocation: 'middle',
    nameGap: '40',
    data: ["Lone parent", "Child under 15 years", "Dependent student (aged 15-24 years)",  "Non-dependent child", "Other related individual", "Unrelated individual living in family household", "Group household member", "Lone person", "Visitor (from within Australia)(d)"],
    axisLabel: {
      formatter: function (value, index) {
        return `${value}`;
      }
    }
  },
  
  yAxis: {
    type: 'value',
    name: 'Number of cases',
    nameLocation: 'middle',
    nameGap: '70',
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
  renderCharts();
  setTimeout(function() {
    resizeCharts();
  }, 100);
}

const close = (type) =>{
  shows.value[type] = false;
  var checkStatus = checkReaded();
  if(checkStatus){
    const nextUserFlow = document.getElementById('nextUserFlow');
    if(nextUserFlow){
      nextUserFlow.scrollIntoView({behavior: 'smooth'});
    }
  }
}

const checkReaded = () => {
  if (actives.value[0]&&actives.value[1]&&actives.value[2]) {
    return true;
  }
  return false;
}

var myChart1 = ref();
var myChart2 = ref();
var myChart3 = ref();
var myChart4 = ref();
var myChart5 = ref();
var myChart6 = ref();
var myChart7 = ref();
var myChart8 = ref();
var myChart9 = ref();

const renderCharts = () => {
  if(shows.value[0])
  {
    setTimeout(function() {
      myChart1.setOption(chartData1.value);
      myChart2.setOption(chartData2.value);
      myChart3.setOption(chartData3.value);
    }, 100);
  } else if(shows.value[1]) {
    setTimeout(function () {
      myChart4.setOption(chartData4.value);
      myChart5.setOption(chartData5.value);
      myChart6.setOption(chartData6.value);
    }, 100);

  } else if(shows.value[2]){
    setTimeout(function () {
      myChart7.setOption(chartData7.value);
      myChart8.setOption(chartData8.value);
      myChart9.setOption(chartData9.value);
    })
  }
}

const resizeCharts = () => {
 
  console.log("chart resized")

  if(shows.value[0]){
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
  } else if (shows.value[1]) {
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
  } else if (shows.value[2]) {
    myChart7.resize();
    myChart8.resize();
    myChart9.resize();
  } else {
    console.log("resize error: none of the modal is active")
  }
}

onMounted(()=>{

  myChart1 = echarts.init(barChart1.value);
  

  myChart2 = echarts.init(barChart2.value);

  myChart3 = echarts.init(barChart3.value);

  myChart4 = echarts.init(barChart4.value);

  myChart5 = echarts.init(barChart5.value);

  myChart6 = echarts.init(barChart6.value);

  myChart7 = echarts.init(barChart7.value);

  myChart8 = echarts.init(barChart8.value);

  myChart9 = echarts.init(barChart9.value);

  window.addEventListener('resize', () => {
    resizeCharts();
  });
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
  /* height: 330px; */
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

blockquote {
    font-family: Georgia, serif;
    font-size: 18px;
    font-style: italic;
    width: 100%;
    margin: 0.25em 0;
    padding: 0.35em 40px;
    line-height: 1.45;
    position: relative;
    color: #383838;
}

blockquote:before {
    display: block;
    padding-left: 10px;
    content: "\201C";
    font-size: 80px;
    position: absolute;
    left: -20px;
    top: -20px;
    color: #7a7a7a;
}

blockquote cite {
    color: #999999;
    font-size: 14px;
    display: block;
    margin-top: 5px;
}

blockquote cite:before {
    content: "\2014 \2009";
}
</style>
