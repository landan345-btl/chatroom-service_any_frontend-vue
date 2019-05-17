import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'LotteryMixin',
})
class Lottery extends Vue {
  public extensionLotteryIssue: any = {
    next_time: 0,
    order_no_in_this_day: 1,
    order_total_no: 1,
  };
  public created() {
    console.log('你使用了 Lottery Mixin');
  }

  public caculateLotteryIssueExtension(iOpenedTime: number, oLottery: any) {
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

    this.extensionLotteryIssue.nextTime = iNextTime;
    this.extensionLotteryIssue.order_no_in_this_day = iLotteryIssueOrderNoInThisDay;
    this.extensionLotteryIssue.order_total_no = iLotteryIssueOrderNoTotalInThisDay;
  }

}

export default Lottery;
