import LOTTERIES from '@/CONFIGS/LOTTERIES/index';

let cCodeToName = (sCode: string, sDefaultName: string) => {
  let sName = sDefaultName;
  if( sCode in LOTTERIES) {
    sName = LOTTERIES[sCode].NAME || sName;
  }
  return sName;
};
export default cCodeToName;
