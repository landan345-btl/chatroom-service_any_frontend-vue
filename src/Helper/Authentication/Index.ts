import jwtDecode from 'jwt-decode';

class AuthenticationHelper {
  /**
   * getUsrId
   */
  public getUserId(): string | null {
    try {
      let sJwt = window.localStorage.getItem("jwt");
      let oPayload = jwtDecode(sJwt);
      let sUserId = oPayload.uid;
      return sUserId;
    } catch (sException) {
      return null;
    }
  }

  public getJwt(): string | null {
    let sJwt = window.localStorage.getItem("jwt");
    return sJwt;
  }

  public getExp(): number | null {
    try {
      let sJwt = window.localStorage.getItem("jwt");
      let oPayload = jwtDecode(sJwt);
      let iExp = oPayload.exp;
      return iExp;
    } catch (sException) {
      return null;
    }
  }

  public isExpired(): boolean {
    try {
      let sJwt = window.localStorage.getItem("jwt");
      let oPayload = jwtDecode(sJwt);
      let iExp = oPayload.exp;
      let iTime = new Date().getTime() / 1000;
      if (iExp < iTime) {
        throw '';
      }
      return false;
    } catch (sException) {
      return true;
    }
  }

  public removeJwt(): void {
    window.localStorage.removeItem("jwt");
  }

  public setJwt(sJwt: string): void {
    window.localStorage.setItem("jwt", sJwt);
  }
}

export default AuthenticationHelper;
