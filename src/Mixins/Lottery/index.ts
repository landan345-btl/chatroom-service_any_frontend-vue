import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {
  Lottery as LotteryHelper,
} from '@/Helpers/';

@Component({
  name: 'LotteryMixin',
})
class Lottery extends Vue {
  public extensionLotteryIssue: any = {
    next_time: 0,
    order_no_in_this_day: 1,
    order_total_no: 1,
  };

  public extensionLottery: any = {
    positions_to_number_types_to_counts: null,
  };

  public created() {
    console.log('你使用了 Lottery Mixin');
  }
  public calculateNextTime(sOpenedTime: string, oLottery: any): number {
    let aRangeTimes = JSON.parse(oLottery.range_times);
    let iNextTime = 0;
    let iNowTime = new Date().getTime();
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());

    iNextTime = (new Date(sOpenedTime).getTime() + oLottery.interval_time * 1000 - iNowTime) / 1000;

    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' +  oRangeTime.started_time).getTime();
      if (0 === Number(oLottery.interval_time)) {
        iNextTime = (new Date(sOpenedTime).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;
      }
    });
    // this.next_time = iNextTime;

    return iNextTime;
  }

  public caculateLotteryIssueExtension(sOpenedTime: number, oLottery: any) {
    let aRangeTimes = JSON.parse(oLottery.range_times);
    let iNowTime = new Date().getTime();
    let iNextTime = 0;

    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());

    iNextTime = (new Date(sOpenedTime).getTime() + oLottery.interval_time * 1000 - iNowTime) / 1000;
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
        iNextTime = (new Date(sOpenedTime).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;

      }
    });
    iLotteryIssueOrderNoInThisDay++;
    iLotteryIssueOrderNoTotalInThisDay++;
    this.extensionLotteryIssue.next_time = iNextTime;
    this.extensionLotteryIssue.order_no_in_this_day = iLotteryIssueOrderNoInThisDay;
    this.extensionLotteryIssue.order_total_no = iLotteryIssueOrderNoTotalInThisDay;
  }

  public positionsToNumberTypesToCounts(oLotteryIssues: any, oLottery: any) {
    let oLotteryHelper = new LotteryHelper();
    let oPositionsToNumberTypesToCounts: {
      [key: string]: any,
    } = {};
    let aLotteryIssues = Object.values(oLotteryIssues);

    aLotteryIssues.forEach((oLotteryIssue: any) => {
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      let sTypes = oLottery.types;
      let iIndex: number = 0;
      for (iIndex = 0 ; iIndex < aNumbers.length ; iIndex++) {
        let iNumber = aNumbers[iIndex];
        let sIsNumberSmallOrLarge = oLotteryHelper.isNumberSmallOrLarge(iNumber, sTypes);
        let sOddOrEven = oLotteryHelper.isOddOrEven(iNumber, sTypes);
        if (!oPositionsToNumberTypesToCounts.hasOwnProperty(iIndex)) {
          oPositionsToNumberTypesToCounts = {
            ...oPositionsToNumberTypesToCounts,
            [iIndex]: {
              small: 0,
              large: 0,
              odd: 0,
              even: 0,
            },
          };
        }
        if ('小' === sIsNumberSmallOrLarge) {
          let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[iIndex];
          let sKey = 'small';
          oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
        }

        if ('大' === sIsNumberSmallOrLarge) {
          let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[iIndex];
          let sKey = 'large';
          oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
        }

        if ('单' === sOddOrEven) {
          let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[iIndex];
          let sKey = 'odd';
          oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
        }

        if ('双' === sOddOrEven) {
          let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[iIndex];
          let sKey = 'even';
          oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
        }
      }
    });
    return oPositionsToNumberTypesToCounts;
  }

}

export default Lottery;
