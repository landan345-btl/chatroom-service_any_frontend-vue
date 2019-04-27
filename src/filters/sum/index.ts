let cSum = (aNumbers: number[], aPositions: number[] | null) => {
  if (Array.isArray(aPositions)) {
    let iSumation = aPositions.reduce((iSumation: number, iCurrentPosition: number) => {
      iSumation += aNumbers[iCurrentPosition];
      return iSumation;
    }, 0);
    return iSumation;
  }
  let iSumation = aNumbers.reduce((iSumation: number, iCurrentNumber: number) => {
    iSumation += iCurrentNumber;
    return iSumation;
  }, 0);

  return iSumation;
};

export default cSum;