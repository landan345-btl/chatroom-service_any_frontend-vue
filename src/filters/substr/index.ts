const LARGE: string = '大';
const SMALL: string = '小';
const DEUCE: string = '和';
const UNKNOWN: string = '未知';
const SSC: string = 'SSC';
const PK10: string = 'PK10';
const K3: string = 'K3';
const KLSF: string = 'KLSF';

let cSubstr = (sString: string | number, iPosition: number, iLength: number): string => {
  debugger;
  let sSubString = sString.toString().substr(iPosition, iLength);
  return sSubString;
};

export default cSubstr;