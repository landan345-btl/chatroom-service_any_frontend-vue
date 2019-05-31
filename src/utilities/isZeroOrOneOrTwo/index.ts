const ZERO: string = '0';
const ONE: string = '1';
const TWO: string = '2';

let cIsZeroOrOneOrTwo = (iNumber: number ) => {
    if (iNumber % 3 === 0) {
      return ZERO;
    }
    if (iNumber % 3 === 1) {
      return ONE;
    }
    if (iNumber % 3 === 2) {
      return TWO;
    }
};

export default cIsZeroOrOneOrTwo;
