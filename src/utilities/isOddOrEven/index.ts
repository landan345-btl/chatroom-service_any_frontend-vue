import { lottery, lotteryIssue } from '@/actions';

const ODD: string = '单';
const ODD_MULTIPLE: string = '单多';
const EVEN: string = '双';
const EVEN_MULTIPLE: string = '双多';
const DEUCE: string = '和';
const DEUCE_MULTIPLE: string = '单双和';
const UNKNOWN: string = '未知';
let cIsOddOrEven = (aNumbers: number[] | number): string => {
  let iCountOdd = 0;
  let iCountEven = 0;
  if (!(aNumbers instanceof Array)) {
    aNumbers = [aNumbers];
  }
  aNumbers.forEach((iNumber) => {
    if (1 === iNumber % 2) {
      iCountOdd ++;
      return;
    }
    if (0 === iNumber % 2) {
      iCountEven ++;
      return;
    }
  });
  if (0 < iCountOdd - iCountEven && 1 === aNumbers.length) {
    return ODD;
  }
  if (0 > iCountOdd - iCountEven && 1 === aNumbers.length) {
    return EVEN;
  }

  if (0 < iCountOdd - iCountEven && 1 < aNumbers.length) {
    return ODD_MULTIPLE;
  }
  if (0 > iCountOdd - iCountEven && 1 < aNumbers.length) {
    return EVEN_MULTIPLE;
  }

  if (0 === iCountOdd - iCountEven && 1 === aNumbers.length) {
    return DEUCE;
  }

  if (0 === iCountOdd - iCountEven && 1 < aNumbers.length) {
    return DEUCE_MULTIPLE;
  }

  return UNKNOWN;
};

export default cIsOddOrEven;
