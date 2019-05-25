import {
  isSmallOrLarge,
  isOddOrEven,
  sum,
} from '@/utilities/';

import {
  LOTTERY_TYPES,
} from '@/CONFIGS/';

class LotteryHelper {
  public isSummationSmallOrLarge (iSummation: number, sTypes: string): string {
    sTypes = sTypes.toUpperCase();

    let iSmallUpperBound = LOTTERY_TYPES[sTypes].SUMMATION_SMALL_UPPER_BOUND_NUMBER;
    let iLargeLowerBound = LOTTERY_TYPES[sTypes].SUMMATION_LARGE_LOWER_BOUND_NUMBER;

    let sResult = isSmallOrLarge(iSummation, iSmallUpperBound, iLargeLowerBound);
    return sResult;
  }

  public isSummationOfFirstAndSecondSmallOrLarge(iSummation: number, sTypes: string): string {
    sTypes = sTypes.toUpperCase();

    let iSmallUpperBound = LOTTERY_TYPES[sTypes].FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER;
    let iLargeLowerBound = LOTTERY_TYPES[sTypes].FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER;

    let sResult = isSmallOrLarge(iSummation, iSmallUpperBound, iLargeLowerBound);
    return sResult;
  }

  public isNumberSmallOrLarge (iNumber: number, sTypes: string): string {
    sTypes = sTypes.toUpperCase();

    let iSmallUpperBound = LOTTERY_TYPES[sTypes].SMALL_UPPER_BOUND_NUMBER;
    let iLargeLowerBound = LOTTERY_TYPES[sTypes].LARGE_LOWER_BOUND_NUMBER;

    let sResult = isSmallOrLarge(iNumber, iSmallUpperBound, iLargeLowerBound);
    return sResult;
  }

  public isOddOrEven (iNumber: number, sTypes: string): string {
    sTypes = sTypes.toUpperCase();
    let aDeuceNumbers = LOTTERY_TYPES[sTypes].DEUCE_ODD_EVEN_NUMBERS;

    let sResult = isOddOrEven(iNumber, aDeuceNumbers);
    return sResult;
  }

  public sum (aNumbers: number[], aPositions?: number[] | null) {
    let iSummation = sum(aNumbers, aPositions);
    return iSummation;
  }

  public caculateResult(oStrings: any) { // 将一个数组中没有中断的相同的放入一个数组  参数要是对象
    let s: any = {};
    Object.keys(oStrings).forEach(( iNumber ) => {
      let aStrings = oStrings[iNumber];
      let _aStrings: any = [];
      let _aSubStrings: any = [];
      _aSubStrings.push(aStrings.shift());
      aStrings.forEach((sString: any, index: any) => {
        if (sString === _aSubStrings[_aSubStrings.length - 1]) {
          _aSubStrings.push(sString);
        } else {
          _aStrings.push(_aSubStrings);
          _aSubStrings = [];
          _aSubStrings.push(sString);
        }
        if ( index === (aStrings.length - 1) ) {
          _aStrings.push(_aSubStrings);
        }
      } );
      s[iNumber] = _aStrings;
    });
    return s;
  }
}
export default LotteryHelper;
