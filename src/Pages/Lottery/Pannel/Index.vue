<template>
  <div class="pannel background-white d-flex justify-content-between align-self-center">
    <div class="icon p-2 align-middle d-inline-block d-xs-none">
      <div :class="['icon-' + code.toLowerCase() + '-circle']">
      </div>
    </div>
    <div class="name-lottery_issue_no align-middle text-left">
      <div>
        <div class="top">
          <span class="name font-weight-bold">
            {{ LOTTERIES[code].NAME | or(lottery.name) }}
          </span>
          <span class="text ml-0p5" v-if="lotteryIssue && lotteryIssue.no">
            第
          </span>
          <span class="no" v-if="lotteryIssue && lotteryIssue.no">
            &nbsp; {{ lotteryIssue.no }} &nbsp;
          </span>
          <span class="text">
            期开奖号码
          </span>
            &nbsp;
        </div>
        <Numbers v-if="lotteryIssue" :code="code" :numbers="JSON.parse(lotteryIssue.numbers)" :types="lottery.types" class="status-number middle"/>
        <div class="bottom">
          <span> 已开 {{ getThisLotteryIssueOrderNo }} 期，还有 {{ getNextLotteryIssueTotalOrderNo }} 期 </span>
        </div>
      </div>
    </div>
    <div class="countdown">
      距733036期开奖仅有
      <div>
        <Chen-countdown :time="lotteryIssue.next_time * 1000" :theme="'theme-a'"/>
      </div>
    </div>
    <div class="sounds align-middle">
      <div>
        <I-button :type="'warning'" class="d-inline-block mb-1">关闭声音</I-button><font-awesome-icon icon="volume-up" class="d-inline-block ml-1"/>
      </div>
      <div>
        <I-button :type="'warning'" class="d-inline-block">铃声设置</I-button><font-awesome-icon icon="music" class="d-inline-block ml-1"/>
      </div>
    </div>
    <div class="live align-middle">
      <div :class="[types ? 'live-' + types.toLowerCase() : '']">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import IButton from '@/Components/IButton/Index.vue';
import Numbers from '@/Components/Numbers/Index.vue';
import ChenCountdown from '@/Components/ChenCountdown/Index.vue';

@Component({
  components: {
    IButton,
    Numbers,
    ChenCountdown,
  },
})
class Top extends Vue {
  @Prop()
  public lotteryIssue!: any;
  /**
   * 后端所有的 API lottery 数据
   */
  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public get getThisLotteryIssueOrderNo () {
    let aRangeTimes = JSON.parse(this.lottery.range_times);
    let iNowTime = new Date().getTime();
    let iNextTime = 0;
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());
    let iLotteryIssueOrderNoTotalInThisDay = 0;
    let iLotteryIssueOrderNoInThisDay = 0;
    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                      ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                      : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
      let iDifferentTime = (iNowTime - iStartedTime) / 1000;
      iLotteryIssueOrderNoTotalInThisDay +=  Math.floor((iEndedTime - iStartedTime) / (0 !== this.lottery.interval_time ? 1000 * this.lottery.interval_time : 1));
      if (iNowTime >= iStartedTime && iNowTime <= iEndedTime) {
        iLotteryIssueOrderNoInThisDay += Math.floor(iDifferentTime / this.lottery.interval_time);
      }
    });
    iLotteryIssueOrderNoInThisDay = iLotteryIssueOrderNoInThisDay + 1;
    return iLotteryIssueOrderNoInThisDay;
  }

  public get getNextLotteryIssueTotalOrderNo () {
    let aRangeTimes = JSON.parse(this.lottery.range_times);
    let iNowTime = new Date().getTime();
    let iNextTime = 0;
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());
    let iLotteryIssueTotalOrderNo = 0;
    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                      ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                      : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
      let iDifferentTime = (iNowTime - iStartedTime) / 1000;
      iLotteryIssueTotalOrderNo +=  Math.floor((iEndedTime - iStartedTime) / (0 !== this.lottery.interval_time ? 1000 * this.lottery.interval_time : 1));
    });
    iLotteryIssueTotalOrderNo = iLotteryIssueTotalOrderNo + 1;
    return iLotteryIssueTotalOrderNo;
  }

}

export default Top;
</script>
