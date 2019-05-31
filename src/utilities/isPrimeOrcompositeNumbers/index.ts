const PRIME_NUMBER: string = '质';
const COMPOSITE_NUMBER: string = '合';
let isPrimeOrcompositeNumbers = (iNumber: number ): any => {
  let primeOrcompositeNumbers = [1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79];  
  if(primeOrcompositeNumbers.includes(iNumber) ) {
    return PRIME_NUMBER;
  }
  else {
   return COMPOSITE_NUMBER; 
  }
};

export default isPrimeOrcompositeNumbers;