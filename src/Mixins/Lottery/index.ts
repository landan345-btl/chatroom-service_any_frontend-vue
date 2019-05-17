import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'LotteryMixin',
})
class Lottery extends Vue {

  public created() {
    console.log('你使用了 Lottery Mixin');
  }
  public calculateNextTime(iOpenedTime: number, oLottery: any): number {
    let aRangeTimes = JSON.parse(oLottery.range_times);
    let iNextTime = 0;
    let iNowTime = new Date().getTime();
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());

    iNextTime = (new Date(iOpenedTime).getTime() + oLottery.interval_time * 1000 - iNowTime) / 1000;

    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      if (0 === Number(oLottery.interval_time)) {
        iNextTime = (new Date(iOpenedTime).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;
      }
    });

    return iNextTime;
  }

  public calculateOrderNoInThisDay(iOpenedTime: number, oLottery: any) {
    let aRangeTimes = JSON.parse(oLottery.range_times);

    let iLotteryIssueOrderNoInThisDay = 0;
    let iNowTime = new Date().getTime();
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());
    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                      ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                      : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
      let iDifferentTime = (iNowTime - iStartedTime) / 1000;
      if (iNowTime >= iStartedTime && iNowTime <= iEndedTime) {
        iLotteryIssueOrderNoInThisDay += Math.floor(iDifferentTime / oLottery.interval_time);
      }
    });
    iLotteryIssueOrderNoInThisDay++;
    return iLotteryIssueOrderNoInThisDay;
  }

  public calculateTotalOrderNoInThisDay(iOpenedTime: number, oLottery: any) {
    let aRangeTimes = JSON.parse(oLottery.range_times);

    let iLotteryIssueOrderTotalNoInThisDay = 1;
    let iNowTime = new Date().getTime();
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());

    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                    ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                    : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
      let iDifferentTime = (iNowTime - iStartedTime) / 1000;
      iLotteryIssueOrderTotalNoInThisDay +=  Math.floor((iEndedTime - iStartedTime) / (0 !== oLottery.interval_time ? 1000 * oLottery.interval_time : 1));

    });

    return iLotteryIssueOrderTotalNoInThisDay;
  }


  public caculateLotteryIssueExtension() {
    
  }
}

export default Lottery;
