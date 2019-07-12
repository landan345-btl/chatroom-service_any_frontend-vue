import jwtDecode from "jwt-decode";

class AuthenticationHelper {
  /**
   * getUsrId
   */
  public getUserId(): string | null {
    try {
      let sJwt = window.localStorage.getItem("jwt") || "";
      let oPayload: any = jwtDecode(sJwt);
      let sUserId = oPayload.uid;
      return sUserId;
    } catch (sException) {
      return null;
    }
  }

  public getUserUrl(): string | null {
    try {
      let sJwt = window.localStorage.getItem("jwt") || "";
      let oPayload: any = jwtDecode(sJwt);
      let sUrl = oPayload.url;
      return sUrl;
    } catch (sException) {
      return null;
    }
  }

  public getUserRole(): string | null {
    try {
      let sJwt = window.localStorage.getItem("jwt") || "";
      let oPayload: any = jwtDecode(sJwt);
      let sRole = oPayload.role;
      return sRole;
    } catch (sException) {
      return null;
    }
  }

  public getUserNickname(): string | null {
    try {
      let sJwt = window.localStorage.getItem("jwt") || "";
      let oPayload: any = jwtDecode(sJwt);
      let sNickname = oPayload.nickname;
      return sNickname;
    } catch (sException) {
      return null;
    }
  }

  public getJwt(): string | null {
    let sJwt = window.localStorage.getItem("jwt") || "";
    return sJwt;
  }

  public getExp(): number | null {
    try {
      let sJwt = window.localStorage.getItem("jwt") || "";
      let oPayload: any = jwtDecode(sJwt);
      let iExp = oPayload.exp;
      return iExp;
    } catch (sException) {
      return null;
    }
  }

  public getUserLevel(): number | null {
    try {
      let sJwt = window.localStorage.getItem("jwt") || "";
      let oPayload: any = jwtDecode(sJwt);
      let ilevel = oPayload.level;
      return ilevel;
    } catch (sException) {
      return null;
    }
  }

  public isExpired(): boolean {
    try {
      let sJwt = window.localStorage.getItem("jwt") || "";
      let oPayload: any = jwtDecode(sJwt);
      let iExp = oPayload.exp;
      let iTime = new Date().getTime() / 1000;
      if (iExp < iTime) {
        throw "";
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

  public getAccessToken(): string {
    let sAccessToken = "";

    try {
      let sLoginState = window.localStorage.getItem("loginState") || "";
      let oLoginState = JSON.parse(sLoginState);
      sAccessToken = oLoginState["accessToken"];
      return sAccessToken;
    } catch (sException) {
      return sAccessToken;
    }
  }

  public removeLoginState(): void {
    window.localStorage.removeItem("loginState");
  }
}

export default AuthenticationHelper;
