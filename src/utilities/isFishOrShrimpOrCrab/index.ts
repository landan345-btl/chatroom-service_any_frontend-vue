const FISH: string = '鱼'; // 1
const SHRIMP: string = '虾'; // 2
const GOURD: string = '葫芦'; // 3
const GOLD: string = '金钱'; // 4
const CRAB: string = '蟹'; // 5
const COCK: string = '鸡'; // 6
const UNKNOWN: string = '未知';

let cIsFishOrShrimpOrCrab = (aNumbers: number[], iPosition: number): string => {
  let iNumber = aNumbers[iPosition];
  switch (iNumber) {
  case 1:
    return FISH;
    break;
  case 2:
    return SHRIMP;
    break;
  case 3:
    return GOURD;
    break;
  case 4:
    return GOLD;
    break;
  case 5:
    return CRAB;
    break;
  case 6:
    return COCK;
    break;
  default:
  }
  return UNKNOWN;
};

export default cIsFishOrShrimpOrCrab;
