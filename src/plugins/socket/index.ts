import oIo from 'socket.io-client';
import { SOCKET } from "@/CONFIGS/";

let sUrl = SOCKET.URL + 
         (SOCKET.PORT && (80 !== SOCKET.PORT || '80' !== SOCKET.PORT) ? ":" + SOCKET.PORT : '') +
          "/authentication";
// this.client = new WebSocket(wsuri);
const oAuthenticationSocket = oIo(sUrl);

sUrl = SOCKET.URL + 
         (SOCKET.PORT && (80 !== SOCKET.PORT || '80' !== SOCKET.PORT) ? ":" + SOCKET.PORT : '') +
          "/authentication";
// this.client = new WebSocket(wsuri);
const oChatroomSocket = oIo(sUrl);

let oSocketPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.prototype.$chatroomSocket = oChatroomSocket;
    Vue.prototype.$authenticaionSocket = oAuthenticationSocket;
  }
};

export default oSocketPlugin;
