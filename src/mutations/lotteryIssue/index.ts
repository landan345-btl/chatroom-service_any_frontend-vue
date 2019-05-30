// VUEX 的 Mutation, 在业务逻辑动作后，
// 将 数据转换 成 vuex 仓库 （store） 格式的机制

// 前端用的 show, add, edit, remove 务必与 后端一致
// 遵守 isomorphism 设计原则

let oLotteryMutation = {
  LOTTERY_ISSUE_MUTATION_SHOW (state: any, mLotteryIssues: any[]): void {
    let oLotteryIssues: any = (mLotteryIssues instanceof Array) ? {} : mLotteryIssues;
    // debugger;
    if (mLotteryIssues instanceof Array) {
      oLotteryIssues = mLotteryIssues.reduce((_oLotteryIssues, oLotteryIssue) => {
        let sKey = oLotteryIssue.lottery_issue_id || oLotteryIssue.lottery_id + '-' +  oLotteryIssue.no;
        _oLotteryIssues[sKey] = oLotteryIssue;
        return _oLotteryIssues;
      }, {});
      mLotteryIssues = oLotteryIssues;
    }
    // debugger;
    state.lottery_issues = mLotteryIssues;
  },
  LOTTERY_ISSUE_MUTATION_ADD (state: any, mLotteries: any[]): void {
    // debugger;
  },
  LOTTER_ISSUE_MUTATION_EDIT (state: any, mLotteries: any[]): void {
    // debugger;
  },
  LOTTERY_ISSUE_MUTATION_REMOVE (state: any, mLotteries: any[]): void {
    // debugger;
  },
  LOTTERY_ISSUE_MUTATION_EMPTY (state: any, mLotteries: any[]): void {
    state.lottery_issues = {};
  },
};

export default oLotteryMutation;
