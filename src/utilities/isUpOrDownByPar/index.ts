const UP: string = '升';
const DOWN: string = '降';
const FLAT: string = '平';
let isUpOrDownByPar = (aNumbers: number[], aPreviousNumberss: number[], bPreviousNumberss: number[] , iPreviousNumber: number): any => {
  let presentNumber = aNumbers[aPreviousNumberss.indexOf(iPreviousNumber)];
  let nextNumber = aPreviousNumberss[bPreviousNumberss.indexOf(iPreviousNumber)];
  if(presentNumber > nextNumber) {
    return UP;
  } 
  if (presentNumber < nextNumber) {
    return DOWN;
  } 
  if(presentNumber === nextNumber) {
    return FLAT;
  }
};

export default isUpOrDownByPar;
