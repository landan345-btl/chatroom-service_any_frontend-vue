import SockJS from "sockjs-client";

import { WS } from "@/CONFIGS/";

let sUrl = WS.URL + ":" + WS.PORT + "/" + WS.PREFIX;
// this.client = new WebSocket(wsuri);
const oSockJS = new SockJS(sUrl);

let oSocketPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.prototype.$sockJs = oSockJS;
  }
};

export default oSocketPlugin;
