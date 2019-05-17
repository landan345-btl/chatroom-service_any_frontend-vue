<template>
  <div class="live background-white pt-2 pr-2 pb-1 pl-2">
    <div class="lotteries d-flex flex-wrap justify-content-between overflow-hidden">
      <template v-for="(oLotteryIssue, sKey) in lotteryIssues">
        <div class="lottery" v-if="lotteries && oLotteryIssue && codes.includes(lotteries[oLotteryIssue.lottery_id].code.toUpperCase())" :key="sKey">
          <router-link 
            class="text-center"
            :to="{ path: '/lottery', query: { code: lotteries && oLotteryIssue ? lotteries[oLotteryIssue.lottery_id].code.toUpperCase() : ''}}">
            <div :class="[lotteries && oLotteryIssue ? 'live-' + lotteries[oLotteryIssue.lottery_id].types.toLowerCase() : '']">
            </div>
            <Chen-countdown :time="calculateNextTime(oLotteryIssue.opened_time, lotteries[oLotteryIssue.lottery_id]) * 1000" :theme="'theme-a'" class="d-block mt-1" :text="'倒计时:'">
            </Chen-countdown>
          </router-link>
        </div>
      </template>

    </div>
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
  Prop,
} from 'vue-property-decorator';

import {
  warn,
} from 'vue-class-component/lib/util';

import {
  ChenCountdown,
} from '@/Components/';

@Component({
  name: 'Live',
  components: {
    ChenCountdown,
  },
})
class Live extends Vue {

  public codes: string[] = [
    'CQSSC', 'BJPK10', 'FFPK10', 'JSK3'
  ];

  @Prop()
  public lotteryIssues!: object;

  @Prop()
  public lotteries!: { [key: string] : any };

  public calculateNextTime(iOpenedTime: number, oLottery: any): number {
    let aRangeTimes = JSON.parse(oLottery.range_times);

    let iNowTime = new Date().getTime();
    let iNextTime = 0;
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());

    iNextTime = (new Date(iOpenedTime).getTime() + oLottery.interval_time * 1000 - iNowTime) / 1000;
    let iLotteryIssueOrderNoInThisDay = 0;
    let iLotteryIssueOrderNoTotalInThisDay = 1;

    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                      ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                      : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
      let iDifferentTime = (iNowTime - iStartedTime) / 1000;
      iLotteryIssueOrderNoTotalInThisDay +=  Math.floor((iEndedTime - iStartedTime) / (0 !== oLottery.interval_time ? 1000 * oLottery.interval_time : 1));
      if (iNowTime >= iStartedTime && iNowTime <= iEndedTime) {
        iLotteryIssueOrderNoInThisDay += Math.floor(iDifferentTime / oLottery.interval_time);
      }
      if (0 === Number(oLottery.interval_time)) {
        iNextTime = (new Date(iOpenedTime).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;
      }
    });

    return iNextTime;
  }
}

export default Live;
</script>