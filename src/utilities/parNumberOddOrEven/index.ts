const ODD: string = '单';
const EVEN: string = '双';
let cParNumberOddOrEven = (aNumbers: number[], aPreviousNumberss: number[], iPreviousNumber: number) => {
  let presentNumber = aNumbers[aPreviousNumberss.indexOf(iPreviousNumber)];
  if(presentNumber % 2 === 0) {
    return EVEN;
  } 
  if(presentNumber % 2 === 1) {
    return ODD;
  } 
};

export default cParNumberOddOrEven;
