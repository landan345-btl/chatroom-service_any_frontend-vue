<template>
  <div class="home">
    <Header />
    <NavTop />
    <NavRight />
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 15, offset: 2}" :md="{span: 12, offset: 3}" :lg="{span: 11, offset: 4}">
        <main>
          <News />
          <Live />
          <LotteryIssue :lotteryIssues="lotteryIssues" />
        </main>
      </el-col>
      <el-col :xs="{span: 0}" :sm="{span: 5}" :md="{span: 6}" :lg="{span: 5}">
        <aside>
          <Recommended-lottery v-bind:lotteries="lotteries"/>
          <Advertisment-a />
          <Prediction />
          <Advertisment-b />
          <Analysis v-bind:lotteries="lotteries"/>
        </aside>
      </el-col>
      <el-col :xs="{span: 1}" :sm="{span: 2}" :md="{span: 3}" :lg="{span: 4}">
      </el-col>
    </el-row>

    <Footer />
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import Header from '@/Commons/Header/Index.vue';
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import Footer from '@/Commons/Footer/Index.vue';
import ERadio from '@/Components/ERadio/Index.vue';
import ESelect from '@/Components/ESelect/Index.vue';
import News from './News.vue';
import Live from './Live.vue';
import LotteryIssue from './LotteryIssue.vue';
import RecommendedLottery from './RecommendedLottery.vue';
import AdvertismentA from './AdvertismentA.vue';
import Prediction from './Prediction.vue';
import AdvertismentB from './AdvertismentB.vue';
import Analysis from './Analysis.vue';

import AxiosHelper from '@/Helpers/Axios';

import LOTTERIES from '@/CONFIGS/LOTTERIES/';
import BACKEND from '@/CONFIGS/BACKEND/';
let oAxiosHelper = new AxiosHelper();


@Component({
  name: 'Home',
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ERadio,
    ESelect,
    News,
    Live,
    LotteryIssue,
    RecommendedLottery,
    AdvertismentA,
    Prediction,
    AdvertismentB,
    Analysis,
  },
})
class Home extends Vue {
  public timer: any;
  public created(): void {
    let $root: any = this.$root;
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {} );
    this.setIntervalLotteryIssueActionShow();
  }

  public setIntervalLotteryIssueActionShow() {
    this.timer = setInterval(() => {
      // let sDateNow = moment().format('YYYY-MM-DD'); // 本地时间 年 月 日
      // let oQueries = {
      //   date: sDateNow ,
      // };
      this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
    } , BACKEND.INTERVAL_TIME );
  }

  public beforeDestroy() {  // 组件销毁之前调用
    clearInterval( this.timer );
  }

  public get oLotteries(): object {
    // debugger;
    return this.$store.state.lotteries;
  }

  public get lotteries(): object {
    let oLotteries: any = this.$store.state.lotteries;
    let _oLotteries: {} = {};
    let iLotteryId: string;
    let sLotteryCode;
    type sLotteryCode = 'SGFT' | 'BJPK10' | 'JSPK10' | 'PCDD' | 'CQKLSF' | 'JX11X5' | 'SD11X5' | 'JSK3';
    for (iLotteryId in oLotteries) {
      if (oLotteries.hasOwnProperty(Number(iLotteryId))) {
        sLotteryCode = oLotteries[iLotteryId].code;
        if (sLotteryCode in LOTTERIES) {
          let _lottery = {
            name: LOTTERIES[sLotteryCode].NAME,
            src: LOTTERIES[sLotteryCode].SRC,
          };
          let __oLotteries = {
            [sLotteryCode]: _lottery,
          };
          _oLotteries = Object.assign(_oLotteries, __oLotteries);

        }
      }

    }
    return _oLotteries;
  }

    public get lotteryIssues(): object {
      debugger;
    let oLotteryIssues: any = this.$store.state.lottery_issues;
    let oLotteries: any = this.$store.state.lotteries;
    let _oLotteryIssues: {} = {};
    let sLotteryIssueId: string;
    let sLotteryId;
    type sLotteryCode = 'SGFT' | 'BJPK10' | 'JSPK10' | 'PCDD' | 'CQKLSF' | 'JX11X5' | 'SD11X5' | 'JSK3';
    for (sLotteryIssueId in oLotteryIssues) {
      if (oLotteryIssues.hasOwnProperty(Number(sLotteryIssueId))) {
        let oLotteryIssue = oLotteryIssues[sLotteryIssueId];
        sLotteryId = oLotteryIssues[sLotteryIssueId].lottery_id;
        if (sLotteryId in oLotteries) {
          let oLottery = oLotteries[sLotteryId];
          let aRangeTimes = JSON.parse(oLottery.range_times);
          let iNowTime = new Date().getTime();
          let iNextTime = 0;

          let iFullYear = Number(new Date().getFullYear());
          let iMonth = Number(new Date().getMonth() + 1);
          let iDate = Number(new Date().getDate());
          
          iNextTime = (new Date(oLotteryIssue.date + ' ' + oLotteryIssue.time).getTime() + oLottery.interval_time * 1000 - iNowTime) / 1000;
          debugger;
          let iLotteryIssueOrderNoInThisDay = 0;
          let iLotteryIssueOrderNoTotalInThisDay = 0;



          aRangeTimes.forEach((oRangeTime: any) => {
            let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
            let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                           ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                           : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
            let iDifferentTime = (iNowTime - iStartedTime) / 1000;
            iLotteryIssueOrderNoTotalInThisDay +=  Math.floor((iEndedTime - iStartedTime) / (1000 * oLottery.interval_time));
            if (iNowTime >= iStartedTime && iNowTime <= iEndedTime) {
              iLotteryIssueOrderNoInThisDay += Math.floor(iDifferentTime / oLottery.interval_time);
            }
          });
          let _oLotteryIssue = {
            date: oLotteryIssues[sLotteryIssueId].date,
            lottery_id: oLotteryIssues[sLotteryIssueId].lottery_id,
            lottery_issue_id: oLotteryIssues[sLotteryIssueId].lottery_issue_id,
            numbers: JSON.parse(oLotteryIssues[sLotteryIssueId].numbers),
            no: oLotteryIssues[sLotteryIssueId].no,
            time: oLotteryIssues[sLotteryIssueId].time,
            code: oLottery.code,
            next_time: iNextTime,
            name: LOTTERIES[oLottery.code].NAME || '-',
            types: oLottery.types,
            order_no_total_in_this_day: iLotteryIssueOrderNoTotalInThisDay,
            order_no_in_this_day: iLotteryIssueOrderNoInThisDay + 1,
          };
          let __oLotteryIssues = {
            [sLotteryIssueId]: _oLotteryIssue,
          };
          _oLotteryIssues = Object.assign(_oLotteryIssues, __oLotteryIssues);

        }
      }

    }
    return _oLotteryIssues;
  }
}

export default Home;
</script>
