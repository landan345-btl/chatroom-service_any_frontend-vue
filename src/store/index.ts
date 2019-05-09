import Vue from 'vue';
import Vuex from 'vuex';

import {
  lottery as oLotteryAction,
  lotteryIssue as oLotteryIssueAction,
} from '@/actions/';

import {
  lottery as oLotteryMutaction,
  lotteryIssue as oLotteryIssueMutaction,
} from '@/mutations/';

import {
  lottery as oLotteryState,
  lotteryIssue as oLotteryIssueState,
} from '@/states/';

Vue.use(Vuex);

let oStore = new Vuex.Store({
  state: {
    ...oLotteryState,
    ...oLotteryIssueState,
  },
  mutations: {
    ...oLotteryMutaction,
    ...oLotteryIssueMutaction,
  },
  actions: {
    ...oLotteryAction,
    ...oLotteryIssueAction,
  },
});

export default oStore;
