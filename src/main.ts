import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import store from '@/store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  data: {
    showAllLottery: true,
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
