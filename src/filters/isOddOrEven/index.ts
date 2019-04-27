const ODD: string = '单';
const EVEN: string = '双';
const UNKNOWN: string = '未知';

let cIsOddOrEven = (iNumber: number): string => {
  if (1 === iNumber % 2) {
    return ODD;
  }
  if (0 === iNumber % 2) {
    return EVEN;
  }
  return UNKNOWN;
};

export default cIsOddOrEven;
