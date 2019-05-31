const UP: string = '升';
const DOWN: string = '降';
const FLAT: string = '平';
let isUpOrDownByPar = (aNumbers: number[], aPreviousNumberss: number[], bPreviousNumberss: number[] , iPreviousNumber: number): any => {
  let iPresentNumber = aNumbers[aPreviousNumberss.indexOf(iPreviousNumber)];
  let iNextNumber = aPreviousNumberss[bPreviousNumberss.indexOf(iPreviousNumber)];
  if (iPresentNumber > iNextNumber) {
    return UP;
  } 
  if (iPresentNumber < iNextNumber) {
    return DOWN;
  } 
  if (iPresentNumber === iNextNumber) {
    return FLAT;
  }
};

export default isUpOrDownByPar;
