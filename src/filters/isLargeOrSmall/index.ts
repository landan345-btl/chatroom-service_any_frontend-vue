const LARGE: string = '大';
const SMALL: string = '小';
const UNKNOWN: string = '未知';
const SSC: string = 'SSC';
const PK10: string = 'PK10';
const K3: string = 'K3';
const KLSF: string = 'KLSF';

let cIsLargeOrSmall = (iNumber: number, sType: string): string => {
  let sResult = UNKNOWN;
  switch (sType) {
    case SSC:
      sResult = iNumber >= 23 
              ? LARGE 
              : SMALL;
      break;
    case PK10:
      break;
    default:
      //
  }
  return sResult;
};

export default cIsLargeOrSmall;