let cSubstr = (mString: string | number, iPosition: number, iLength: number): string => {
  let sSubString = mString.toString().substr(iPosition, iLength);
  return sSubString;
};

export default cSubstr;
