let cSum = (aNumbers: number[], aPositions?: number[] | null) => {
  let iSummation = 0;
  if (Array.isArray(aPositions)) {
    iSummation = aPositions.reduce((_iSumation: number, iPosition: number) => {
      _iSumation += aNumbers[iPosition];
      return _iSumation;
    }, iSummation);
    return iSummation;
  }
  iSummation = aNumbers.reduce((_iSumation: number, iNumber: number) => {
    _iSumation += iNumber;
    return _iSumation;
  }, iSummation);

  return iSummation;
};

export default cSum;
