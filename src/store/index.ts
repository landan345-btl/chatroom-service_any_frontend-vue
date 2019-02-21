import Vue from 'vue';
import Vuex from 'vuex';

import oLotteryState from '@/states/lottery/index';
import oLotteryMutaction from '@/mutations/lottery/index';
import oLotteryAction from '@/actions/lottery/index';

Vue.use(Vuex);

let oStore = new Vuex.Store({
  state: {
    ...oLotteryState,
  },
  mutations: {
    ...oLotteryMutaction,
  },
  actions: {
    ...oLotteryAction,
  },
});

export default oStore;
