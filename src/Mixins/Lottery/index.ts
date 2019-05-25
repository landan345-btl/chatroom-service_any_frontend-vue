import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {
  Lottery as LotteryHelper,
} from '@/Helpers/';

import { 
  isDragonOrTiger,
  numbersToOddOrEvenStrings,
  numbersToSmallOrLargeStrings,
   } from '@/utilities/';

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
    dragon_or_tiger_count: {},
    numbers_to_dragon_or_tiger: {},
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

  public positionsToNumberTypesToCounts (oLotteryIssues: any, oLotteries: any, iLimit: number) {
    let oLotteryHelper = new LotteryHelper();
    if (!oLotteryIssues || !oLotteries) {
      return;
    }
    let oPositionsToNumberTypesToCounts: {
      [key: string]: any,
    } = {};
    let aLotteryIssues = Object.values(oLotteryIssues);

    aLotteryIssues.forEach((oLotteryIssue: any) => {
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      let oLottery = oLotteries[oLotteryIssue.lottery_id];

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
    return oPositionsToNumberTypesToCounts;
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

  public isDragonOrTigerrResult(oLotteryIssues: any, types: any, iLimit: any) {  // 龙虎路珠
    if ( !iLimit ) {
      return;
    }
    if ( iLimit % 2 === 1 ) {
      iLimit = iLimit - 1;
    }
    let key = '_dragon_tiger';
    let tiger = 'tiger';
    let dragon = 'dragon';
    let arr: any = {};
    let oDragonOrTigers: any = {};
    let aLotteryIssues = Object.values(oLotteryIssues);
    while( aLotteryIssues.length >= 1 ) {
      let lotteryIssue: any = aLotteryIssues.pop();
      let aNumbers = JSON.parse(lotteryIssue.numbers);
      let n = 0; // 限制龙虎个数
      if ( !aNumbers || aNumbers === '' ) {
        continue;
      }
      for (let i = 0 ; i < iLimit / 2 ; i++ ) {
        if ( !oDragonOrTigers[i + key] ) {
          oDragonOrTigers[i + key] = [];
        }
        if ( !arr[i] ) {
          arr[i] = {};
          arr[i][dragon] = 0;
          arr[i][tiger] = 0;
        }
        let dragonOrTiger = isDragonOrTiger(aNumbers ,[ i, iLimit - 1 - i ]);
        dragonOrTiger === '龙' ? arr[i][dragon]+=1 : arr[i][tiger]+=1;
        oDragonOrTigers[i + key].push(dragonOrTiger);
        n++;
      }
    }
    this.extensionLottery.dragon_or_tiger_count = arr; // 出现的总个数累加
    this.extensionLottery.numbers_to_dragon_or_tiger = oDragonOrTigers;
    return this.extensionLottery;
  }

  public caculateResult( oLotteryIssues: any, types: any ,iLimit: any) { // 冠亚和 大小单双
    if (!oLotteryIssues ) {
      return {};
    }
    let lotteryHelper = new LotteryHelper();
    let aLotteryIssues: any[] = Object.values(oLotteryIssues);
    let oLotteryIssue: any;
    let sOddEvens: string[] = [];
    let aSmallOrLarges: string[] = [];
    let _objCount: any = {};
    while (aLotteryIssues.length >= 1) {
      oLotteryIssue = aLotteryIssues.pop();
      if ( !oLotteryIssue.numbers || oLotteryIssue.numbers === '' ) {
        continue;
      }
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      if ( !Array.isArray(aNumbers) ) {
        aNumbers = aNumbers.split(',');
      }
      // let sType = oLotteries[oLotteryIssue.lottery_id].types;
      let iSumNumber: number = Number(aNumbers[0]) + Number(aNumbers[1]);
      let sSmallOrLarge = lotteryHelper.isSummationOfFirstAndSecondSmallOrLarge(iSumNumber , types);
      let sOddOrEven = lotteryHelper.isOddOrEven(iSumNumber , types );
      if ( !_objCount['odd'] ) {
        _objCount['odd'] = {};
        _objCount['odd']['odd'] = 0;
        _objCount['odd']['even'] = 0;
      }
      if ( !_objCount['small'] ) {
        _objCount['small'] = {};
        _objCount['small']['large'] = 0;
        _objCount['small']['small'] = 0;
      }
      sOddOrEven === '单' ? _objCount['odd']['odd'] += 1 :  _objCount['odd']['even'] += 1;
      sSmallOrLarge === '大' ?  _objCount['small']['large'] += 1 :  _objCount['small']['small'] += 1;
      sOddEvens.push(sOddOrEven);
      aSmallOrLarges.push(sSmallOrLarge);
    }
    let obj = { 
      '10_guanyaodd_or_even_he_odd': sOddEvens,
      ...{ '10_guanyasmall_or_large_he_small': aSmallOrLarges },
    };
    let aOddEvens = lotteryHelper.caculateResult(obj);
    // let aSmallOrLarges = lotteryHelper.caculateResult({ Guanya_smallOrLarge: sSmallOrLarges});
    // this.extensionLottery.number_to_odd_or_even = aOddEvens
    // this.extensionLottery.number_to_small_or_larges = aSmallOrLarges;
    return {aOddEvens , _objCount };
  }

  public oddOrEvenSmallOrLarge(oLotteryIssues: any , type: any , aIndexs: any ) { // 大小单双
    let sOddOrEven = 'odd_or_even';
    let sSmallOrLarge = 'small_or_large';
    let odd = 'odd';
    let even = 'even';
    let small = 'small';
    let large = 'large';
    let oOddOrEvensAndaSmallOrLarges: any = {};
    let arr: any = {};
    if ( aIndexs === undefined ) {
      return ;
    }
    for (let oLotteryIssueId of Object.keys(oLotteryIssues)) {
      let aNumbers = JSON.parse(oLotteryIssues[oLotteryIssueId].numbers);
      if ( aNumbers === '' ) {
        continue;
      }
      if ( !Array.isArray(aIndexs) && aIndexs > 0 ) {
        aIndexs = [aIndexs];
      }
      let aOddOrEvenStrings = numbersToOddOrEvenStrings(aNumbers , type);          // [ODD, ODD, ODD, ODD]
      let aSmallOrLargeStrings = numbersToSmallOrLargeStrings(aNumbers , type , aIndexs );    // [S, L , S, L]
      for (let index = 0 ; index < aIndexs ; index++ ) {
        if ( !arr[index] ) {
          arr[index] = {};
          arr[index][odd] = {};
          arr[index][small] = {};
          arr[index][odd][odd] = 0;
          arr[index][odd][even] = 0;
          arr[index][small][small] = 0;
          arr[index][small][large] = 0;
        }
        if ( !oOddOrEvensAndaSmallOrLarges[index + '_' + sOddOrEven] ) {
          oOddOrEvensAndaSmallOrLarges[index + '_' + sOddOrEven] = [];
        }
        oOddOrEvensAndaSmallOrLarges[index + '_' + sOddOrEven].push(aOddOrEvenStrings[index]);
        aOddOrEvenStrings[index] === '单' ? arr[index][odd][odd] += 1 : arr[index][odd][even] += 1;
        if ( !oOddOrEvensAndaSmallOrLarges[index + '_' + sSmallOrLarge] ) {
          oOddOrEvensAndaSmallOrLarges[index + '_' + sSmallOrLarge] = [];
        }
        oOddOrEvensAndaSmallOrLarges[index + '_' + sSmallOrLarge].push(aSmallOrLargeStrings[index]);
        aSmallOrLargeStrings[index] === '大' ? arr[index][small][large] += 1 : arr[index][small][small] += 1;
      }
    }
    let obj = { oOddOrEvensAndaSmallOrLarges , oddOrEvensAndaSmallOrLargeCount: arr };
    return obj;
  }

}

export default Lottery;
