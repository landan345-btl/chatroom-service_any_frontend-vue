<template>
  <div class="lottery-issue">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0" class="z-1000">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 align-top">
          <div class="lottery-box">
            <div class="warm-prompt">
              <div class="flash">
                <i></i>
              </div>
                温馨提示:因网络问题，开奖结果会有延迟，所以您需要去喝杯咖啡等一会儿！
            </div>
            <div class="lottery-title">
              <div class="title-box">
                <div class="lottery-left">
                  <div class="lottery-line">
                    <div class="lottery-img">
                      <img :src="require(`@/assets/images/` + `${lotterycode}` + `-circle.png`)"/>
                    </div>
                    <div class="lottery-number">
                      <div class="card-title">
                        <span>{{ lotteryTypes[lotterycode].NAME}}</span>第<span>{{getLastLotteryIssues.no}}</span>期开奖号码
                      </div>
                        <Lottery-number :oLotterys="openNumber" :code="getCode"/>
                    </div>
                  </div>
                </div>
                <div class="lottery-right">
                  <div class="next-issue">
                    <div class="line-title">距离下一期开奖时间</div>
                    <CountDownTime :time="getLastLotteryIssues.interval_time * 1000" :theme="'theme-a'"/>
                  </div>
                  <div class="bell-set">
                    <div class="close-bell">
                      <div class="setopen">
                        <i @click="onClick" v-text=" open == true ? '打开声音' : '关闭声音'"></i>
                        <div class="bell-icon" :class=" open == true ? 'stopsound': ''"></div>
                      </div>
                    </div>
                    <div class="set-bell">
                      <div class="set-btn" :class=" open == true ? 'disabled': ''">
                      <i @click="checkSite">铃声设置</i>
                      <div class="sound-icon start-icon" :class=" open == true ? 'stop-icon':''" :disabled=" open == true">
                        <!-- <audio src="../../audio/RING_01.wav" controls="controls"></audio> -->
                      </div>
                      <div class="sound-panel" :class="[this.flag?'d-block':'d-none']">
                        <div class="close" @click="closePopup"></div>
                        <div class="sound-list">
                          <ul>
                            <li v-for="(music, index) in selectbell" :key="index" @click="test">
                              <label>
                                <input type="radio" 
                                name="sound"
                                :checked="music.isCheck" 
                                :value="music.value"
                                @change="checkedInput(index)"
                                >&nbsp;{{music.option}}
                              </label>
                            </li>
                            <li> 
                              提示时间:
                              <select>
                                <option value="5">开奖前5秒</option>
                                <option value="20">开奖前20秒</option>
                                <option value="10">开奖前10秒</option>
                                <option value="30">开奖前30秒</option>
                                <option value="40">开奖前40秒</option>
                                <option value="50">开奖前50秒</option>
                                <option value="60">开奖前60秒</option>
                                <option value="begin">开奖后</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div class="lottery-video">
                    <img src="@/assets/images/live-11X5.png" alt="">
                  </div>
                </div>
              </div>
            </div> 
            <Instant :code="getCode"/> <!---->
            <div class="lottery-record">
              <div class="record-head">
                <ul>
                  <li class="title">开奖记录</li>
                  <li :class="{'active' :oHead.on}" 
                    @click="toggleHand(index)" v-for="(oHead,index) in recordHeads" 
                    :key="index">{{oHead.title}}
                    <i></i>
                  </li>
                </ul>
                <div><a href="/">开奖历史</a></div>
                <!-- <div class="selectcolor">
                  <em>护眼模式</em>
                  <span :class="{select: addIndex== numbgColor}" v-for="(span , addIndex) in 3" :key="addIndex">&nbsp;</span>
                  <span> <el-color-picker></el-color-picker></span>
                </div> -->
              </div>
              <div class="past-records" style="display:none;">
                <div class="records-l">
                  <span>
                    开奖记录
                  </span>
                </div>
                <div class="records-r">
                  <div class="calendar">
                    <div class="righttime">
                      <div class="dateframe">
                      <!-- <EPicker /> -->
                      </div>
                    </div>
                  </div>
                  <div class="day">
                    <span class="checked">今天</span>
                    <span>昨天</span>
                    <span>前天</span>
                  </div> 
                </div>
              </div>
                <Statistics v-show="showStatistics"/>
                <Changlong v-show="showChanglong"/>
                <NumberDisribution v-show="showNumber"/>         
                <Table :lotteryIssues="openNumber" :code="getCode"/> <!-- 表格动态切换  -->
            </div> 
          </div>
        </main>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import ETabs from '@/Components/ETabs/Index.vue';
// import LOTTERIES from '@/CONFIGS/LOTTERIES/';

import Table from '@/Pages/LotteryIssue/Table/Index.vue';
import Changlong from '@/Pages/LotteryIssue/Changlong/Index.vue';
import NumberDisribution from '@/Pages/LotteryIssue/NumberDisribution/Index.vue';
import Statistics from '@/Pages/LotteryIssue/Statistics/Index.vue';
import LotteryNumber from '@/Pages/LotteryIssue/LotteryNumber/Index.vue';
import Instant from '@/Pages/LotteryIssue/Instant/Index.vue';
import CountDownTime from '@/Pages/LotteryIssue/CountDownTime/Index.vue';

import LOTTERIES from '@/CONFIGS/LOTTERIES/index';
import { navTable , navnumber } from '@/const';
import moment from 'moment';
@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ETabs,
    Table,
    Changlong,
    Statistics,
    NumberDisribution,
    LotteryNumber,
    Instant,
    CountDownTime,
  },
})
class LotteryIssue extends Vue {
  public recordHeads = [{title: '今日双面/号码统计', on: false}, {title: '长龙提醒', on: false}, {title: '号码分布', on: false},];
  public showStatistics = false;
  public showChanglong = false;
  public showNumber = false;
  public numbgColor: number = 0;
  public s = 100;
  public open = false;
  public flag: boolean = false;
  public selectbell = [
    {value: 0, isCheck: true, option: '默认(闹钟铃)'},
    {value: 1, isCheck: false, option: '铃声二(上课铃)'},
    {value: 2, isCheck: false, option: '铃声三(打锣铃)'},
    {value: 3, isCheck: false, option: '铃声四(打鼓声)'},
    {value: 4, isCheck: false, option: '铃声五(点滴声)'},
  ];
  public timer: any;
  public olotterysScreen = {};
  public lotteryTypes = LOTTERIES;
  public lotterycode: any = '' ; // 接受code

  public olotterys: any = {};
  public beforeMount(): void {
   this.$store.dispatch('LOTTERY_ISSUE_ACTION_EMPTY');
  }
  public created() {
   this.getLotteryName(); // 接受彩种名称
   this.get();
   let sDateNow = moment().format('YYYY-MM-DD'); // 本地时间 年 月 日
   let oQueries = {
        date : sDateNow ,
        code : this.lotterycode ,
      };
   this.$store.dispatch('LOTTERY_ACTION_SHOW');
   this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries  ); // 当天的 开奖号码 请求
  }
  public get() {
    let sDateNow = moment().format('YYYY-MM-DD'); // 本地时间 年 月 日
    let oQueries = {
      date : sDateNow ,
      code : this.lotterycode ,
    };
    this.timer = setInterval(() => {
      this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries  ); // 当天的 开奖号码 请求
      let sTime = moment().format().split('T')[1].split('+')[0]; // 本地时间  时 分 秒
    } , 10000 );
   }

  public beforeDestroy() {  // 组件销毁之前调用 停止定时器
    clearInterval( this.timer );
  }
  public get openNumber() {
    let olotteries: any = this.$store.state.lotteries;
    let olotteryIssues: any = this.$store.state.lottery_issues;
    for (let lotteryIssuesId of Object.keys(olotteryIssues)) {
      for (let lotteriesId  of Object.keys(olotteries) ) {
        if ( olotteryIssues[ lotteryIssuesId ].lottery_id === olotteries[ lotteriesId ].lottery_id ) {
          let maxNumbers = JSON.parse(olotteries[ lotteriesId ].numbers);
          let aRangeTimes = JSON.parse(olotteries[ lotteriesId ].range_times);
          let iNowTime = new Date().getTime();
          let iNextTime = 0;
          let iFullYear = Number(new Date().getFullYear());
          let iMonth = Number(new Date().getMonth() + 1);
          let iDate = Number(new Date().getDate());
          olotteryIssues[ lotteryIssuesId ].numbers =  olotteryIssues[ lotteryIssuesId ].numbers ;
          olotteryIssues[ lotteryIssuesId ].interval_time = olotteries[ lotteriesId ].interval_time;
          olotteryIssues[ lotteryIssuesId ].code = olotteries[ lotteriesId ].code;
          olotteryIssues[ lotteryIssuesId ].types = olotteries[ lotteriesId ].types;
          olotteryIssues[ lotteryIssuesId ].max_number = maxNumbers[ maxNumbers.length - 1 ] ;
          iNextTime = (new Date(olotteryIssues[ lotteryIssuesId ].date + ' ' + olotteryIssues[ lotteryIssuesId ].time).getTime() + olotteries[ lotteriesId ].interval_time * 1000 - iNowTime) / 1000;
          let iLotteryIssueOrderNoInThisDay = 0;
          let iLotteryIssueOrderNoTotalInThisDay = 1;
          aRangeTimes.forEach((oRangeTime: any) => {
            let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
            let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                            ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                            : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
            let iDifferentTime = (iNowTime - iStartedTime) / 1000;
            iLotteryIssueOrderNoTotalInThisDay +=  Math.floor((iEndedTime - iStartedTime) / (0 !== olotteries[ lotteriesId ].interval_time ? 1000 * olotteries[ lotteriesId ].interval_time : 1));
            if (iNowTime >= iStartedTime && iNowTime <= iEndedTime) {
              iLotteryIssueOrderNoInThisDay += Math.floor(iDifferentTime / olotteries[ lotteriesId ].interval_time);
            }
            if (0 === Number(olotteries[ lotteriesId ].interval_time)) {
              iNextTime = (new Date(olotteryIssues[ lotteryIssuesId ].date + ' ' + olotteryIssues[ lotteryIssuesId ].time).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;

              }
          });
        }
      }
    }
    let _olotterys: any = {};
    for ( let olottery in olotteryIssues ) {
      if ( olotteryIssues[ olottery ].numbers == null ) {
        continue;
      }
      _olotterys[ olottery ] = olotteryIssues[ olottery ];
    }
    return olotteryIssues;
  }
  public get getLastLotteryIssues(): object {
    let oLotteryIssues = this.openNumber;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.pop() || {};
    return oLotteryIssue;
  }
  public getLotteryName() {
   let name: any = this.$route.query.code;  // 接受code参数
   if ( name === undefined ) {
     let lotterycode: any = localStorage.getItem('lotteryName');
     this.lotterycode = lotterycode;
     return;
   }
   this.lotterycode = name;
  }
  public toggleHand(i: number) {
   this.recordHeads[i].on = !this.recordHeads[i].on;
   if ( i === 0) {
     let showRules: boolean = true;
     this.showStatistics = ! this.showStatistics ;
     } else if ( i === 1) {
     this.showChanglong = ! this.showChanglong ;
    } else {
    this.showNumber = ! this.showNumber ;
   }
  }
  public checkSite() {
    if (!this.flag) {
       this.flag = true;
    } else {
     this.flag = false;
    }
  }
  public closePopup() {
    this.flag = false;
  }
  public onClick(open: boolean) {
    this.open = !this.open;
  }
  public checkedInput(index: number) {
   this.selectbell.map((select, i) => {
    if (i === index) {
      select.isCheck = true;
    } else {
      select.isCheck = false;
    }
   });
  }
  public test() {
   this.selectbell.map((select, i) => {
    if (select.isCheck) {
      console.log(select.value);
    }
   });
  }
  public get getCode() {
    let sCode = this.$route.query.code;
    if (!(sCode in LOTTERIES)) {
      this.$router.push( { name: '/home'});
     }
    return sCode;
  }
}
export default LotteryIssue;
</script>
