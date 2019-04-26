const LARGE: string = '大';
const SMALL: string = '小';
const DEUCE: string = '和';
const UNKNOWN: string = '未知';
const SSC: string = 'SSC';
const PK10: string = 'PK10';
const K3: string = 'K3';
const KLSF: string = 'KLSF';

let cIsLargeOrSmall = (iNumber: number, iBoundary: number): string => {
  if (iNumber > iBoundary) {
    return LARGE;
  }

  if (iNumber < iBoundary) {
    return SMALL;
  }

  if (iNumber == iBoundary) {
    return DEUCE;
  } 
  return UNKNOWN;
};

export default cIsLargeOrSmall;