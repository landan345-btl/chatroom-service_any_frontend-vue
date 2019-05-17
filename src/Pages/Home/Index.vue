<template>
  <div class="page home">
    <Header />
    <NavTop/>
    <NavRight />
    <Row :gutter="0">
      <Col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 15, offset: 2}" 
        :md="{span: 14, offset: 2}" 
        :lg="{span: 14, offset: 2}"
        :xl="{span: 12, offset: 4}">
        <main>
          <News />
          <Live :lotteries="lotteries" :lotteryIssues="lotteryIssues"/>
          <!-- <Lottery-issue-board :lotteryIssues="lotteryIssues" :lotteries="lotteries"/> -->
        </main>
      </Col>
      <Col :xs="{span: 0}" :sm="{span: 5}" :md="{span: 6}" :lg="{span: 6}" :xl="{span: 4}">
        <aside>
          <Recommended-lottery :lotteries="lotteries"/>
          <Advertisment-a />
          <Prediction />
          <Advertisment-b />
          <Analysis :lotteries="lotteries"/>
        </aside>
      </Col>
      <Col :xs="{span: 1}" :sm="{span: 2}" :md="{span: 3}" :lg="{span: 6}" :xl="{span: 4}">
      </Col>
    </Row>

    <Footer />
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import {
  Component,
  Watch,
  Vue,
} from 'vue-property-decorator';

import {
  warn,
} from 'vue-class-component/lib/util';

import {
  Header,
  NavTop,
  NavRight,
  Footer,
} from '@/Commons/';

import News from './News/Index.vue';
import Live from './Live/Index.vue';
import LotteryIssueBoard from './LotteryIssueBoard/Index.vue';
import RecommendedLottery from './RecommendedLottery/Index.vue';
import AdvertismentA from './AdvertismentA/Index.vue';
import Prediction from './Prediction/Index.vue';
import AdvertismentB from './AdvertismentB/Index.vue';
import Analysis from './Analysis/Index.vue';

import {
  LOTTERIES,
  BACKEND,
} from '@/CONFIGS/';


@Component({
  name: 'Home',
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    News,
    Live,
    LotteryIssueBoard,
    RecommendedLottery,
    AdvertismentA,
    Prediction,
    AdvertismentB,
    Analysis,
  },
})
class Home extends Vue {
  public timer: any;
  public beforeCreate(): void {
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_EMPTY', {});
  }
  public created(): void {
    let $root: any = this.$root;
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {});
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
    this.setIntervalLotteryIssueActionShow();
  }

  public setIntervalLotteryIssueActionShow() {
    this.timer = setInterval(() => {
      this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
    } , BACKEND.INTERVAL_TIME );
  }

  public beforeDestroy() {  // 组件销毁之前调用
    clearInterval( this.timer );
  }

  public get oLotteries(): object {
    return this.$store.state.lotteries;
  }

  public get lotteries(): object {
    let aLotteries: any = this.$store.state.lotteries;
    return aLotteries;
  }

  public get lotteryIssues(): object {
    let aLotteryIssues: any = this.$store.state.lottery_issues;
    return aLotteryIssues;
    // let oLotteries: any = this.$store.state.lotteries;
    // let _oLotteryIssues: {} = {};
    // let sLotteryIssueId: string;
    // let sLotteryId;
    // type sLotteryCode = 'SGFT' | 'BJPK10' | 'JSPK10' | 'PCDD' | 'CQKLSF' | 'JX11X5' | 'SD11X5' | 'JSK3';

    // for (sLotteryIssueId in oLotteryIssues) {
    //   if (oLotteryIssues.hasOwnProperty(Number(sLotteryIssueId))) {
    //     let oLotteryIssue = oLotteryIssues[sLotteryIssueId];
    //     sLotteryId = oLotteryIssues[sLotteryIssueId].lottery_id;
    //     if (sLotteryId in oLotteries) {
    //       let oLottery = oLotteries[sLotteryId];
    //       let aRangeTimes = JSON.parse(oLottery.range_times);
    //       let iNowTime = new Date().getTime();
    //       let iNextTime = 0;
    //       let iFullYear = Number(new Date().getFullYear());
    //       let iMonth = Number(new Date().getMonth() + 1);
    //       let iDate = Number(new Date().getDate());

    //       iNextTime = (new Date(oLotteryIssue.date + ' ' + oLotteryIssue.time).getTime() + oLottery.interval_time * 1000 - iNowTime) / 1000;
    //       let iLotteryIssueOrderNoInThisDay = 0;
    //       let iLotteryIssueOrderNoTotalInThisDay = 1;

    //       aRangeTimes.forEach((oRangeTime: any) => {
    //         let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
    //         let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
    //                        ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
    //                        : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
    //         let iDifferentTime = (iNowTime - iStartedTime) / 1000;
    //         iLotteryIssueOrderNoTotalInThisDay +=  Math.floor((iEndedTime - iStartedTime) / (0 !== oLottery.interval_time ? 1000 * oLottery.interval_time : 1));
    //         if (iNowTime >= iStartedTime && iNowTime <= iEndedTime) {
    //           iLotteryIssueOrderNoInThisDay += Math.floor(iDifferentTime / oLottery.interval_time);
    //         }
    //         if (0 === Number(oLottery.interval_time)) {
    //           iNextTime = (new Date(oLotteryIssue.date + ' ' + oLotteryIssue.time).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;

    //         }
    //       });
    //       let _oLotteryIssue = {
    //         date: oLotteryIssues[sLotteryIssueId].date,
    //         lottery_id: oLotteryIssues[sLotteryIssueId].lottery_id,
    //         lottery_issue_id: oLotteryIssues[sLotteryIssueId].lottery_issue_id,
    //         numbers: JSON.parse(oLotteryIssues[sLotteryIssueId].numbers),
    //         no: oLotteryIssues[sLotteryIssueId].no,
    //         time: oLotteryIssues[sLotteryIssueId].time,
    //         code: oLottery.code,
    //         next_time: iNextTime,
    //         name: LOTTERIES[oLottery.code].NAME || '-',
    //         types: oLottery.types,
    //         order_no_total_in_this_day: iLotteryIssueOrderNoTotalInThisDay,
    //         order_no_in_this_day: iLotteryIssueOrderNoInThisDay + 1,
    //       };
    //       let __oLotteryIssues = {
    //         [sLotteryIssueId]: _oLotteryIssue,
    //       };
    //       _oLotteryIssues = Object.assign(_oLotteryIssues, __oLotteryIssues);

    //     }
    //   }

    // }
    // return _oLotteryIssues;
  }
}

export default Home;
</script>
