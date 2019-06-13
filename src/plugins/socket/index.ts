import oIo from 'socket.io-client';
import { SOCKET } from "@/CONFIGS/";

let sAuthenticationUrl = SOCKET.URL + 
                        (SOCKET.PORT && (80 !== SOCKET.PORT || '80' !== SOCKET.PORT) ? ":" + SOCKET.PORT : '') +
                        "/authentication";

let sChatroomUrl = SOCKET.URL + 
                  (SOCKET.PORT && (80 !== SOCKET.PORT || '80' !== SOCKET.PORT) ? ":" + SOCKET.PORT : '') +
                  "/chatroom";

const oAuthenticationSocket = oIo(sAuthenticationUrl);
const oChatroomSocket = oIo(sChatroomUrl);

let oSocketPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {

    Vue.prototype.$socket = {
      '/authentication': oAuthenticationSocket,
      '/chatroom': oChatroomSocket,
    };

  }
};

export default oSocketPlugin;
