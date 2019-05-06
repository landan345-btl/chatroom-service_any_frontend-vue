import Vue from 'vue';

import VueI18n from 'vue-i18n';
import VCharts from 'v-charts';
import Element from 'element-ui';
import VueCountdown from '@chenfengyuan/vue-countdown';
import iView from 'iview';

import App from '@/App.vue';
import oRouter from '@/routers/index';
import oStore from '@/store/index';


import utilityPlugin from '@/plugins/utility/index';
import filterPlugin from '@/plugins/filter/index';
import directivePlugin from '@/plugins/directive/index';
import configPlugin from '@/plugins/config/index';

import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';

import '@/registerServiceWorker';

import {
  faTrophy,
  faInfoCircle,
  faServer,
  faUsers,
  faChartLine,
  faSearchDollar,
  faVolumeUp,
  faFileAudio,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import oMessages from '@/langs/index';

library.add(faInfoCircle);
library.add(faTrophy);
library.add(faServer);
library.add(faUsers);
library.add(faChartLine);
library.add(faSearchDollar);
library.add(faVolumeUp);
library.add(faFileAudio);
library.add(faCog);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(VueI18n);
Vue.use(VCharts);
Vue.use(Element);
Vue.use(iView);

Vue.use(utilityPlugin);
Vue.use(filterPlugin);
Vue.use(directivePlugin);
Vue.use(configPlugin);

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
