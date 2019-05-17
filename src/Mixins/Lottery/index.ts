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

    let iNowTime = new Date().getTime();
    let iNextTime = 0;
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());

    iNextTime = (new Date(iOpenedTime).getTime() + oLottery.interval_time * 1000 - iNowTime) / 1000;

    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime() < iStartedTime
                      ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' +  oRangeTime.ended_time).getTime()
                      : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.ended_time).getTime();
      if (0 === Number(oLottery.interval_time)) {
        iNextTime = (new Date(iOpenedTime).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;
      }
    });

    return iNextTime;
  }
}

export default Lottery;
