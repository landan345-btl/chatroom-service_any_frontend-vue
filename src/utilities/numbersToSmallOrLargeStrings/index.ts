import {
  selectType,
  isSmallOrLarge,
} from '@/utilities/';

let numbersToSmallOrLargeStrings = ( aNumbers: any , type: any , aIndexs: any ) => { // return 每个数组号码大小的数组
  let aSmallOrLarges: any = [];
  let range = selectType( type , aIndexs );
  let iSmallUpperBound = range[0];
  let iLargeLowerBound = range[1];
  let smallOrLarge;
  aNumbers.forEach((iNumber: any , i: any ) => {
    smallOrLarge = isSmallOrLarge( iNumber , iSmallUpperBound, iLargeLowerBound );
    aSmallOrLarges.push(smallOrLarge);
  });
  return aSmallOrLarges;
};

export default numbersToSmallOrLargeStrings;
