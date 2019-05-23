import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {
  Lottery as LotteryHelper,
} from '@/Helpers/';

import {
  BACKEND,
  LOTTERIES,
  LOTTERY_TYPES,
} from '@/CONFIGS/';

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
    positions_to_number_types_to_counts: {},
    numbers_to_counts: {},
    numers_to_positions_counts: {},
  };

  public calculateNextTime (sOpenedTime: string, oLottery: any): number {
    let aRangeTimes = JSON.parse(oLottery.range_times);
    let iNextTime = 0;
    let iNowTime = new Date().getTime();
    let iFullYear = Number(new Date().getFullYear());
    let iMonth = Number(new Date().getMonth() + 1);
    let iDate = Number(new Date().getDate());

    iNextTime = (new Date(sOpenedTime).getTime() + oLottery.interval_time * 1000 - iNowTime) / 1000;

    aRangeTimes.forEach((oRangeTime: any) => {
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' + oRangeTime.started_time).getTime();
      if (Number(oLottery.interval_time) === 0) {
        iNextTime = (new Date(sOpenedTime).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;
      }
    });

    return iNextTime;
  }

  public caculateLotteryIssueExtension (sOpenedTime: number, oLottery: any) {
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
      let iStartedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' + oRangeTime.started_time).getTime();
      let iEndedTime = new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' + oRangeTime.ended_time).getTime() < iStartedTime
        ? new Date(iFullYear + '-' + iMonth + '-' + (iDate + 1) + ' ' + oRangeTime.ended_time).getTime()
        : new Date(iFullYear + '-' + iMonth + '-' + iDate + ' ' + oRangeTime.ended_time).getTime();
      let iDifferentTime = (iNowTime - iStartedTime) / 1000;
      iLotteryIssueOrderNoTotalInThisDay += Math.floor((iEndedTime - iStartedTime) / (oLottery.interval_time !== 0 ? 1000 * oLottery.interval_time : 1));
      if (iNowTime >= iStartedTime && iNowTime <= iEndedTime) {
        iLotteryIssueOrderNoInThisDay += Math.floor(iDifferentTime / oLottery.interval_time);
      }
      if (Number(oLottery.interval_time) === 0) {
        iNextTime = (new Date(sOpenedTime).getTime() + 24 * 60 * 60 * 1000 - iNowTime) / 1000;
      }
    });
    iLotteryIssueOrderNoInThisDay++;
    iLotteryIssueOrderNoTotalInThisDay++;
    this.extensionLotteryIssue.next_time = iNextTime;
    this.extensionLotteryIssue.order_no_in_this_day = iLotteryIssueOrderNoInThisDay;
    this.extensionLotteryIssue.order_total_no = iLotteryIssueOrderNoTotalInThisDay;
  }

  public positionsToNumberTypesToCounts (oLotteryIssues: any, oLottery: any, iLimit: number) {
    let oLotteryHelper = new LotteryHelper();
    if (!oLotteryIssues || !oLottery) {
      return;
    }
    let oPositionsToNumberTypesToCounts: {
      [key: string]: any,
    } = {};
    let aLotteryIssues = Object.values(oLotteryIssues);

    aLotteryIssues.forEach((oLotteryIssue: any) => {
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      let sTypes = oLottery.types;
      let iIndex: number = 0;
      for (iIndex = 0; iIndex < aNumbers.length; iIndex++) {
        let iNumber = aNumbers[iIndex];
        if (!this.extensionLottery.numbers_to_counts.hasOwnProperty(iNumber)) {
          this.extensionLottery.numbers_to_counts[iNumber] = 0;
        }
        this.extensionLottery.numbers_to_counts[iNumber] = this.extensionLottery.numbers_to_counts[iNumber] + 1;

        let sSmallOrLarge = oLotteryHelper.isNumberSmallOrLarge(iNumber, sTypes);
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
        if (sSmallOrLarge === '小') {
          let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[iIndex];
          let sKey = 'small';
          oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
        }

        if (sSmallOrLarge === '大') {
          let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[iIndex];
          let sKey = 'large';
          oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
        }

        if (sOddOrEven === '单') {
          let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[iIndex];
          let sKey = 'odd';
          oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
        }

        if (sOddOrEven === '双') {
          let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[iIndex];
          let sKey = 'even';
          oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
        }
      }

      if (!oPositionsToNumberTypesToCounts.hasOwnProperty(aNumbers.length + 1)) {
        oPositionsToNumberTypesToCounts = {
          ...oPositionsToNumberTypesToCounts,
          [aNumbers.length + 1]: {
            small: 0,
            large: 0,
            odd: 0,
            even: 0,
          },
        };
      }
      let iSummation = oLotteryHelper.sum(aNumbers);
      let _sSmallOrLarge = oLotteryHelper.isSummationSmallOrLarge(iSummation, oLottery.types);
      let _sOddOrEven = oLotteryHelper.isOddOrEven(iSummation, oLottery.types);

      if (_sSmallOrLarge === '小') {
        let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[aNumbers.length + 1];
        let sKey = 'small';
        oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
      }

      if (_sSmallOrLarge === '大') {
        let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[aNumbers.length + 1];
        let sKey = 'large';
        oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
      }

      if (_sOddOrEven === '单') {
        let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[aNumbers.length + 1];
        let sKey = 'odd';
        oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
      }

      if (_sOddOrEven === '双') {
        let oNumberTypesToCounts = oPositionsToNumberTypesToCounts[aNumbers.length + 1];
        let sKey = 'even';
        oNumberTypesToCounts[sKey] = oNumberTypesToCounts[sKey] + 1;
      }
    });
    this.extensionLottery.positions_to_number_types_to_counts = oPositionsToNumberTypesToCounts;
  }

  public caculateNumbersToPositionsToCounts (oLotteryIssues: any, oLotteries: any, iLimit: any) {
    this.extensionLottery.numers_to_positions_to_counts = {};
    if (!oLotteryIssues || !oLotteries) {
      return {};
    }
    let aLotteryIssues: any = Object.values(oLotteryIssues);
    let oNumbersToPositionsToCounts: any = {};
    let oLotteryIssue: any;
    let iLoopCount = 0;
    while (iLimit > iLoopCount && aLotteryIssues.length >= 1) {
      oLotteryIssue = aLotteryIssues.pop();
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      let sType = oLotteries[oLotteryIssue.lottery_id].types;
      aNumbers.forEach((iNumber: number, iIndex: number) => {
        if (!oNumbersToPositionsToCounts.hasOwnProperty(iIndex)) {
          let oNumbersToCounts = LOTTERY_TYPES[sType].NUMBERS.reduce((_oNumbersToCounts: any, _iNumber: any) => {
            _oNumbersToCounts[_iNumber] = 0;
            return _oNumbersToCounts;
          }, {});
          oNumbersToPositionsToCounts[iIndex] = oNumbersToCounts;
        }
        let oHotWarnColdPosition = oNumbersToPositionsToCounts[iIndex];
        oNumbersToPositionsToCounts[iIndex][iNumber] = oHotWarnColdPosition[iNumber] + 1;
      });
      iLoopCount++;
    }
    this.extensionLottery.numers_to_positions_to_counts = oNumbersToPositionsToCounts;
    return oNumbersToPositionsToCounts;
  }
}

export default Lottery;
