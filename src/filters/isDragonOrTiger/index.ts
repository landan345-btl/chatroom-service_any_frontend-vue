const DRAGON: string = '龙';
const TIGER: string = '虎';
const DEUCE: string = '和'; 
const UNKNOWN: string = '未知';

let cIsDragonOrTiger = (aNumber: number[], iDragonPosition: number, iTigerPosition: number): string => {
  let iDragonNumber = 0 === aNumber[iDragonPosition] ? 0 : aNumber[iDragonPosition] || void 0;
  let iTigerNumber =  0 === aNumber[iTigerPosition] ? 0 : aNumber[iTigerPosition] || void 0;
  if (undefined === iDragonNumber || undefined === iTigerNumber) {
    return UNKNOWN;
  }
  if (0 < iDragonNumber - iTigerNumber) {
    return DRAGON;
  }

  if (0 > iDragonNumber - iTigerNumber) {
    return TIGER;
  }

  if (0 === iDragonNumber - iTigerNumber) {
    return DEUCE;
  }
  return UNKNOWN;
};

export default cIsDragonOrTiger;