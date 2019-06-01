import Vue from 'vue';
import Vuex from 'vuex';

import oLotteryState from '@/states/lottery/index';
import oLotteryMutaction from '@/mutations/lottery/index';
import oLotteryAction from '@/actions/lottery/index';

import oLotteryIssueState from '@/states/lotteryIssue/index';
import oLotteryIssueMutaction from '@/mutations/lotteryIssue/index';
import oLotteryIssueAction from '@/actions/lotteryIssue/index';

import oLotteryIssueAccumulationState from '@/states/lotteryIssueAccumulation/index';
import oLotteryIssueAccumulationMutaction from '@/mutations/lotteryIssueAccumulation/index';
import oLotteryIssuAccumulationeAction from '@/actions/lotteryIssueAccumulation/index';

Vue.use(Vuex);

let oStore = new Vuex.Store({
  state: {
    ...oLotteryState,
    ...oLotteryIssueState,
    ...oLotteryIssueAccumulationState,
  },
  mutations: {
    ...oLotteryMutaction,
    ...oLotteryIssueMutaction,
    ...oLotteryIssueAccumulationMutaction,
  },
  actions: {
    ...oLotteryAction,
    ...oLotteryIssueAction,
    ...oLotteryIssuAccumulationeAction,
  },
});

export default oStore;
