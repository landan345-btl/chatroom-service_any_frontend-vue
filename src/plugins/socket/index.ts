import oIo from 'socket.io-client';
import { SOCKET } from "@/CONFIGS/";

let sUrl = SOCKET.URL + ":" + SOCKET.PORT + "/" + SOCKET.NAMESPACE;
// this.client = new WebSocket(wsuri);
const oSocket = oIo(sUrl);

let oSocketPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.prototype.$socket = oSocket;
  }
};

export default oSocketPlugin;
