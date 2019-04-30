const LARGE: string = '大';
const SMALL: string = '小';
const DEUCE: string = '和';
const UNKNOWN: string = '未知';

let cIsSmallOrLarge = (aNumbers: number[] | number, iSmallUpperBound: number, iLargeLowerBound: number): string => {
  let iCountSmall = 0;
  let iCountLarge = 0;
  if (!(aNumbers instanceof Array)) {
    aNumbers = [aNumbers];
  }

  aNumbers.forEach((iNumber) => {
    if (iNumber <= iSmallUpperBound) {
      iCountSmall ++;
      return;
    }
    if (iNumber >= iLargeLowerBound) {
      iCountLarge ++;
      return;
    }
  });


  if (0 < iCountSmall - iCountLarge) {
    return SMALL;
  }
  if (0 > iCountSmall - iCountLarge) {
    return LARGE;
  }

  if (0 === iCountSmall - iCountLarge) {
    return DEUCE;
  }

  return UNKNOWN;
};

export default cIsSmallOrLarge;
