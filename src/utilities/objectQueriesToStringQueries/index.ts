let cObjectQueriesToStringQueries = (oQueries: any) => {
  let sQueries: string = '';
  let iIndex = 0;
  for (let sKey of Object.keys(oQueries)) {
    let sKeyValue = sKey + '=' + oQueries[sKey];
    sQueries += (0 === iIndex ? '?' + sKeyValue : '&' + sKeyValue);
    iIndex++;
  }
  return sQueries;
};
export default cObjectQueriesToStringQueries;
