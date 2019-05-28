let cparNumber = (aNumbers: number[], aPreviousNumberss: number[], iPreviousNumber: number) => {
  let presentNumber = aNumbers[aPreviousNumberss.indexOf(iPreviousNumber)];
  return presentNumber;
};

export default cparNumber;
