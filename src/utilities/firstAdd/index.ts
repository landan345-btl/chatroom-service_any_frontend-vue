let firstAdd = (aNumbers: number) => {
  if ( aNumbers < 10 ) {
    return '0' + aNumbers;
  }
  return aNumbers;
};

export default firstAdd;
