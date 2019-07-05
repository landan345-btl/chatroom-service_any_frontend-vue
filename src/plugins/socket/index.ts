import oIo from "socket.io-client";
import { SOCKET } from "@/CONFIGS/";

let sLoginUrl =
  SOCKET.HOST +
  (SOCKET.PORT && (80 !== SOCKET.PORT || "80" !== SOCKET.PORT)
    ? ":" + SOCKET.PORT
    : "") +
  "/login";

let sChatroomUrl =
  SOCKET.HOST +
  (SOCKET.PORT && (80 !== SOCKET.PORT || "80" !== SOCKET.PORT)
    ? ":" + SOCKET.PORT
    : "") +
  "/chatroom";

let oSocketPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    Vue.prototype.$socket = {
      "/login": oIo(sLoginUrl)
      // '/chatroom': oChatroomSocket,
    };
  }
};

export default oSocketPlugin;
