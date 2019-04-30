const ODD: string = '单';
const EVEN: string = '双';
const DEUCE: string = '和';
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
  if (0 < iCountOdd - iCountEven) {
    return ODD;
  }
  if (0 > iCountOdd - iCountEven) {
    return EVEN;
  }

  if (0 === iCountOdd - iCountEven) {
    return DEUCE;
  }
  return UNKNOWN;
};

export default cIsOddOrEven;
