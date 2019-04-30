import Vue from 'vue';

import VueI18n from 'vue-i18n';
import VCharts from 'v-charts';
import Element from 'element-ui';
import VueCountdown from '@chenfengyuan/vue-countdown';
import iView from 'iview';

import App from '@/App.vue';
import oRouter from '@/routers/index';
import oStore from '@/store/index';

import last from '@/filters/last/index';
import substr from '@/filters/substr/index';
import sum from '@/filters/sum/index';
import isOddOrEven from '@/filters/isOddOrEven/index';
import isSmallOrLarge from '@/filters/isSmallOrLarge/index';
import isDragonOrTiger from '@/filters/isDragonOrTiger/index';
import isFishOrShrimpOrCrab from '@/filters/isFishOrShrimpOrCrab/index';
import determineSequence from '@/filters/determineSequence/index';
import count from '@/filters/count/index';

import randomNumber from '@/directives/randomNumber/index';

import utilityPlugin from '@/plugins/utility/index';

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

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(VueI18n);
Vue.use(VCharts);
Vue.use(Element);
Vue.use(iView);

Vue.use(utilityPlugin);

Vue.filter('isOddOrEven' , isOddOrEven);
Vue.filter('isSmallOrLarge' , isSmallOrLarge);
Vue.filter('isDragonOrTiger' , isDragonOrTiger);
Vue.filter('isFishOrShrimpOrCrab' , isFishOrShrimpOrCrab);
Vue.filter('determineSequence' , determineSequence);
Vue.filter('count' , count);
Vue.filter('tcount' , count);
Vue.filter('last' , last);
Vue.filter('substr' , substr);
Vue.filter('sum' , sum);

Vue.directive('randomNumber', randomNumber);

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
