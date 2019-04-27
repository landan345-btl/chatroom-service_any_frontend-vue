const LARGE: string = '大';
const SMALL: string = '小';
const DEUCE: string = '和';
const UNKNOWN: string = '未知';
const SSC: string = 'SSC';
const PK10: string = 'PK10';
const K3: string = 'K3';
const KLSF: string = 'KLSF';

let cIsSmallOrLarge = (iNumber: number, iSmallUpperBound: number, iLargeLowerBound: number): string => {
  if (iNumber <= iSmallUpperBound) {
    return SMALL;
  }

  if (iNumber >= iLargeLowerBound) {
    return LARGE;
  }

  if (iNumber > iSmallUpperBound && iNumber < iLargeLowerBound) {
    return DEUCE;
  }
  return UNKNOWN;
};

export default cIsSmallOrLarge;
