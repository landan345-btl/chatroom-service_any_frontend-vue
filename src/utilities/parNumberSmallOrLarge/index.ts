const SMALL: string = '小';
const LAGRE: string = '大';
let cParNumberSmallOrLarge = (aNumbers: number[], aPreviousNumberss: number[], iPreviousNumber: number, iNumber: number) => {
  let presentNumber = aNumbers[aPreviousNumberss.indexOf(iPreviousNumber)];
   if(presentNumber > iNumber) {
    return LAGRE;
  } 
  if(presentNumber <= iNumber) {
    return SMALL;
  } 
};

export default cParNumberSmallOrLarge;
