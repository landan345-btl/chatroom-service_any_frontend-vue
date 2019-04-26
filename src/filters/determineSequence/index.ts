const DRAGON: string = '龙';
const HALT_STRAIGHT: string = '半顺';
const STRAIGHT: string = '顺子';
const PAIR: string = '对子';
const TRIP: string = '三点一样';
const SAME: string = '豹子';
const MESS: string = '杂六'; 
const UNKNOWN: string = '未知';

let cDetermineSequence = (aNumbers: number[], aPositions: number[]): string => {
  let _aNumbers: number[] = [];
  let iStraightCount:number = 0;
  let iSameCount:number = 0;

  _aNumbers = aPositions.map((iPosition) => {
    let iNumber = aNumbers[iPosition];
    return iNumber;
  });
  
  _aNumbers = _aNumbers.sort((iPreviousNumber: number, iNextNumber: number) => {
    return iPreviousNumber - iNextNumber;
  });

  _aNumbers.reduce((iPreviousNumber: number, iNextNumber: number): number => {
    if (undefined === iPreviousNumber) {
      return iNextNumber;
    }

    if (0 === iNextNumber - iPreviousNumber) {
      iSameCount += 1;
    }

    if (1 === iNextNumber - iPreviousNumber) {
      iStraightCount += 1;
    }

    return iNextNumber;
  });

  if (9 === _aNumbers[_aNumbers.length - 1] - _aNumbers[0]) {
    iStraightCount += 1;
  }

  if (1 <= iSameCount) {
    iSameCount += 1;
  }

  if (1 <= iStraightCount) {
    iStraightCount += 1;
  }

  if (0 === iSameCount && 0 === iStraightCount) {
    return MESS;
  }

  if (2 == iSameCount && _aNumbers.length > iSameCount) {
    return PAIR; // 对子的优先级高于 半顺
  }

  if (2 <= iStraightCount && _aNumbers.length > iStraightCount) {
    return HALT_STRAIGHT;
  }

  if (_aNumbers.length == iStraightCount) {
    return STRAIGHT;
  }

  if (2 == iSameCount && _aNumbers.length > iSameCount) {
    return PAIR;
  }

  if (3 == iSameCount && _aNumbers.length > iSameCount) {
    return TRIP;
  }

  if (_aNumbers.length === iSameCount) {
    return SAME;
  }
  
  return UNKNOWN;
};

export default cDetermineSequence;