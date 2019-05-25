import {
  isOddOrEven,
} from '@/utilities/';

let numbersToOddOrEvenStrings = ( aNumbers: any , type: any ) => { // 单双
  let aOddOrEvens: any = [];
  let oddOrEven;
  aNumbers.forEach((iNumber: any ) => {
    if ( type === '11X5' && Number(iNumber) === 11 ) {
      oddOrEven = '和';
      return;
    }
    oddOrEven = isOddOrEven(iNumber);
    aOddOrEvens.push(oddOrEven);
  });
  return aOddOrEvens;
};

export default numbersToOddOrEvenStrings;
