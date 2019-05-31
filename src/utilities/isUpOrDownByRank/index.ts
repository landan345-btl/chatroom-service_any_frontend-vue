const UP: string = '升';
const DOWN: string = '降';
const FLAT: string = '平';
let isUpOrDownByRank = (aNumbers: number , aPreviousNumbers: number[] , iPosition: number) => {
  let aPreviousNumber = aPreviousNumbers[iPosition];
  if (aNumbers > aPreviousNumber) {
    return UP;
  }
  if (aNumbers < aPreviousNumber) {
    return DOWN;
  }
  if (aNumbers === aPreviousNumber) {
    return FLAT;
  }
};

export default isUpOrDownByRank;
