const UP: string = '升';
const DOWN: string = '降';
const FLAT: string = '平';
let isUpOrDownByRank = (iNumber: number , aPreviousNumbers: number[] , iPosition: number) => {
  let iPreviousNumber = aPreviousNumbers[iPosition];
  if (iNumber > iPreviousNumber) {
    return UP;
  }
  if (iNumber < iPreviousNumber) {
    return DOWN;
  }
  if (iNumber === iPreviousNumber) {
    return FLAT;
  }
};

export default isUpOrDownByRank;
