import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";

import { socket as socketPlugin } from "@/plugins/";

Vue.prototype.$flag = false;

Vue.use(ElementUI);

Vue.use(socketPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
