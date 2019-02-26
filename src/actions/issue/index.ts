import AxiosHelper from '@/helpers/Axios';

let oAxiosHelper = new AxiosHelper();

// VUEX 的 Action，一连串的业务逻辑动作，类似 PHP 的 service 或 Angular 的 service
let oIssueAction = {
  ISSUE_ACTION_SHOW(context: any, lotteryId: number) {
    let oRequest = {
      path: '/issue/show/' + '?lottery_id=' + lotteryId,
    };
    /// debugger;
    let pProccess = Promise.resolve();
    return pProccess.then(() => {
      return oAxiosHelper.get(oRequest);
    }).then((response) => {
      let aIssues = response.data.issues;
      context.commit('ISSUE_MUTATION_SHOW', aIssues);
    });
  },
};
export default oIssueAction;
