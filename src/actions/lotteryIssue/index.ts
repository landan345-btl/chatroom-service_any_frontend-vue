import {
  Axios as AxiosHelper,
} from '@/Helpers/';

import {
  objectQueriesToStringQueries,
} from '@/utilities';

let oAxiosHelper = new AxiosHelper();

// VUEX 的 Action，一连串的业务逻辑动作，类似 PHP 的 service 或 Angular 的 service
let oLotteryIssueAction = {                 // 时间
  LOTTERY_ISSUE_ACTION_SHOW(oContext: any, oQueries: object) {
    let sQueries: string = objectQueriesToStringQueries(oQueries);
    let oRequest = {
      path: '/lottery-issue/show' + sQueries,
    };
    let pProccess = Promise.resolve();
    return pProccess.then(() => {
      return oAxiosHelper.get(oRequest);
    }).then((oResponse) => {
      let aLotteryIssues = oResponse.data.lottery_issues;
      oContext.commit('LOTTERY_ISSUE_MUTATION_SHOW', aLotteryIssues);
    });
  },
  LOTTERY_ISSUE_ACTION_EMPTY(oContext: any, oQueries: object) {
    return oContext.commit('LOTTERY_ISSUE_MUTATION_EMPTY');
  },
};
export default oLotteryIssueAction;
