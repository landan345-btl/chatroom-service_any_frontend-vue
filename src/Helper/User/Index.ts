import jwtDecode from 'jwt-decode';

class UserHelper {
  /**
   * getUsrId
   */
  public getId() {
    try {
      let sJwt = window.localStorage.getItem("jwt");
      let oPayload = jwtDecode(sJwt);
      let sUserId = oPayload.uid;
      return sUserId;
    } catch (sException) {
      return null;
    }
  }
}

export default UserHelper;
