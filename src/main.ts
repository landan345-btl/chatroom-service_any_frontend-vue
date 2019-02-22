import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import store from '@/store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;

// 这里必须要用 Vue Javascript 写法，非 Vue Typescript 写法
new Vue({
  data: {
    test: 77,
    showedAllLottery: true,
    showedPapularLottery: false,
    showedInstantLottery: false,
    showedPKTenLottery: false,
    showedFiveOfElevenLottery: false,
    showedFastThreeLottery: false,
    showedOtherLottery: false,
  },
  computed: {

  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
