<template>
  <div class="pannel background-white d-flex justify-content-between align-self-center">
    <div class="icon p-2 align-middle d-inline-block d-xs-none">
      <div :class="['icon-' + code.toLowerCase() + '-circle']">
      </div>
    </div>
    <div class="name-lottery_issue_no align-middle text-left p-2">
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
      <S-numbers v-if="lotteryIssue" :code="code" :numbers="JSON.parse(lotteryIssue.numbers)" :types="lottery.types" class="status-number middle"/>
      <div class="bottom">
        <span> 已开 {{ getLotteryIssueExtension.order_no }} 期，还有 {{ getLotteryIssueExtension.total_order_no - getLotteryIssueExtension.order_no }} 期 </span>
      </div>
    </div>
    <div class="countdown p-2">
      <div class="top">
        <span>
          距 
        </span>
        <span class="no">
          &nbsp; {{ getLotteryIssueExtension.next_no }} &nbsp;
        </span>
        <span>
          期开奖仅有
        </span>
      </div>
      <div class="mt-2">
        <Chen-countdown :time="getLotteryIssueExtension.next_time * 1000" :theme="'theme-a'"/>
      </div>
    </div>
    <div class="sounds align-middle pt-2 pb-2 pl-4 pr-4">
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
import SNumbers from '@/Components/SNumbers/Index.vue';
import ChenCountdown from '@/Components/ChenCountdown/Index.vue';

@Component({
  components: {
    IButton,
    SNumbers,
    ChenCountdown,
  },
})
class Pannel extends Vue {
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


  public get getLotteryIssueExtension() {
    let oLotteryIssueExtension = {};

    let aRangeTimes = JSON.parse(this.lottery.range_times);
    let iNowTime = new Date().getTime();
    let iNextTime = 0;
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());
    let iLotteryIssueOrderNoTotalInThisDay = 0;
    let iLotteryIssueOrderNoInThisDay = 0;
    let sNextNo = Number(this.lotteryIssue.no) + 1;
    iNextTime = (new Date(this.lotteryIssue.date + ' ' + this.lotteryIssue.time).getTime() + this.lottery.interval_time * 1000 - iNowTime) / 1000;

    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                      ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                      : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
      let iDifferentTime = (iNowTime - iStartedTime) / 1000;
      iLotteryIssueOrderNoTotalInThisDay +=  Math.floor((iEndedTime - iStartedTime) / (0 !== this.lottery.interval_time ? 1000 * this.lottery.interval_time : 1));
      
      if (0 === Number(this.lottery.interval_time)) {
        iNextTime = (new Date(this.lotteryIssue.date + ' ' + this.lotteryIssue.time).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;
      }
      if (iNowTime >= iStartedTime && iNowTime <= iEndedTime) {
        iLotteryIssueOrderNoInThisDay += Math.floor(iDifferentTime / this.lottery.interval_time);
      }
    });
    iLotteryIssueOrderNoInThisDay = iLotteryIssueOrderNoInThisDay + 1;
    oLotteryIssueExtension = {
      order_no: iLotteryIssueOrderNoInThisDay,
      total_order_no: iLotteryIssueOrderNoTotalInThisDay,
      next_time: iNextTime,
      next_no: sNextNo,
    }
    return oLotteryIssueExtension;
  }

}

export default Pannel;
</script>
