import { lottery, lotteryIssue, } from '@/actions';

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
    aNumbers = [aNumbers, ];
  }
  aNumbers.forEach((iNumber) => {
    if (iNumber % 2 === 1) {
      iCountOdd++;
      return;
    }
    if (iNumber % 2 === 0) {
      iCountEven++;
    }
  });
  if (iCountOdd - iCountEven > 0 && aNumbers.length === 1) {
    return ODD;
  }
  if (iCountOdd - iCountEven < 0 && aNumbers.length === 1) {
    return EVEN;
  }

  if (iCountOdd - iCountEven > 0 && aNumbers.length > 1) {
    return ODD_MULTIPLE;
  }
  if (iCountOdd - iCountEven < 0 && aNumbers.length > 1) {
    return EVEN_MULTIPLE;
  }

  if (iCountOdd - iCountEven === 0 && aNumbers.length === 1) {
    return DEUCE;
  }

  if (iCountOdd - iCountEven === 0 && aNumbers.length > 1) {
    return DEUCE_MULTIPLE;
  }

  return UNKNOWN;
};

export default cIsOddOrEven;
