import jwtDecode from 'jwt-decode';

class AuthenticationHelper {
  /**
   * getUsrId
   */
  public getUserId() {
    try {
      let sJwt = window.localStorage.getItem("jwt");
      let oPayload = jwtDecode(sJwt);
      let sUserId = oPayload.uid;
      return sUserId;
    } catch (sException) {
      return null;
    }
  }

  public getJwt() {
    let sJwt = window.localStorage.getItem("jwt");
    return sJwt;
  }
}

export default AuthenticationHelper;
