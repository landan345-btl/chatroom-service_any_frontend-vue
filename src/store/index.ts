import Vue from 'vue';
import Vuex from 'vuex';

import oLotteryState from '@/states/lottery/index';
import oLotteryMutaction from '@/mutations/lottery/index';
import oLotteryAction from '@/actions/lottery/index';

import oIssueState from '@/states/issue/index';
import oIssueMutaction from '@/mutations/issue/index';
import oIssueAction from '@/actions/issue/index';

Vue.use(Vuex);

let oStore = new Vuex.Store({
  state: {
    ...oLotteryState,
    ...oIssueState,
  },
  mutations: {
    ...oLotteryMutaction,
    ...oIssueMutaction,
  },
  actions: {
    ...oLotteryAction,
    ...oIssueAction,
  },
});

export default oStore;
