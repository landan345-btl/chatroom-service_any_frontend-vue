import {
  isOddOrEven,
} from '@/utilities/';

let numbersToOddOrEvenStrings = ( aNumbers: any , sType: any ) => { // 单双
  let aOddOrEvens: any = [];
  let oddOrEven;
  aNumbers.forEach((iNumber: any ) => {
    if ( sType === '11X5' && Number(iNumber) === 11 ) {
      oddOrEven = '和';
      return;
    }
    // TODO 
    oddOrEven = isOddOrEven(iNumber, [100]);
    aOddOrEvens.push(oddOrEven);
  });
  return aOddOrEvens;
};

export default numbersToOddOrEvenStrings;
