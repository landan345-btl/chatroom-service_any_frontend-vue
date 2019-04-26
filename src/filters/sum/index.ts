let cSum = (aNumbers: number[]) => {
  let iSumation = aNumbers.reduce((iSumation: number, iCurrentNumber: number) => {
    iSumation += iCurrentNumber;
    return iSumation;
  });

  return iSumation;
};

export default cSum;