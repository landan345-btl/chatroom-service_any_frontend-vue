const UP: string = '升';
const DOWN: string = '降';
const FLAT: string = '平';
let isUpOrDown = (aNumbers: number[], aPreviousNumberss: number[], iPreviousNumber: number): any => {
  let presentNumber = aNumbers[aPreviousNumberss.indexOf(iPreviousNumber)]; // 当前同位号码
  let parityNumber = aPreviousNumberss.indexOf(iPreviousNumber); // 下一组同位号码
 // debugger;
  if(presentNumber > parityNumber) {
    return DOWN;
  } 
  if (presentNumber < parityNumber) {
    return UP;
  } 
  if(presentNumber === parityNumber) {
    return FLAT;
  }
  return presentNumber;
};

export default isUpOrDown;
