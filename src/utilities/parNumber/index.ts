const ODD: string = '单';
const EVEN: string = '双';
const SMALL: string = '小';
const LAGRE: string = '大';
let cParNumber = (aNumbers: number[], aPreviousNumberss: number[], iPreviousNumber: number, iNumber: number) => {
  let presentNumber = aNumbers[aPreviousNumberss.indexOf(iPreviousNumber)]; // 当前同位号码
  //  if(presentNumber > iNumber) {
  //   return LAGRE;
  // } 
  // if(presentNumber < iNumber) {
  //   return SMALL;
  // } 
  if(presentNumber%2 ===0) {
    return EVEN;
  } 
  if(presentNumber%2 ===1) {
    return ODD;
  } 
};

export default cParNumber;
