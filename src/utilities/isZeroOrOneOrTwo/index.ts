const ZERO: string = '0';
const ONE: string = '1';
const TWO: string = '2';

let cIsZeroOrOneOrTwo = (aNumbers: number ) => {
    if (aNumbers % 3 === 0) {
      return ZERO;
    }
    if (aNumbers % 3 === 1) {
      return ONE;
    }
    if (aNumbers % 3 === 2) {
      return TWO;
    }
};

export default cIsZeroOrOneOrTwo;
