import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VCharts from 'v-charts';

import App from './App.vue';
import oRouter from '@/routers/index';
import oStore from '@/store/index';

import '@/registerServiceWorker';

import oMessages from '@/langs/index';

Vue.use(VueI18n);
Vue.use(VCharts);

let oI18n = new VueI18n({
  locale: 'zh',
  messages: oMessages,
});

Vue.config.productionTip = false;

// 这里必须要用 Vue Javascript 写法，非 Vue Typescript 写法
new Vue({
  data: {
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
  i18n: oI18n,
  router: oRouter,
  store: oStore,
  render: (h) => h(App),
}).$mount('#app');
