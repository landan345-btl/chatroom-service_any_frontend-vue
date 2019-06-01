// VUEX 的 Mutation, 在业务逻辑动作后，
// 将 数据转换 成 vuex 仓库 （store） 格式的机制

// 前端用的 show, add, edit, remove 务必与 后端一致
// 遵守 isomorphism 设计原则

let oLotteryIssueAccumulationMutation = {
  LOTTERY_ISSUE_ACCUMULATION_MUTATION_SHOW (state: any, mLotteryIssueAccumulations: any[]): void {
    let oLotteryIssueAccumulations: any = (mLotteryIssueAccumulations instanceof Array) ? {} : mLotteryIssueAccumulations;
    // debugger;
    if (mLotteryIssueAccumulations instanceof Array) {
      oLotteryIssueAccumulations = mLotteryIssueAccumulations.reduce((_oLotteryIssueAccumulations, oLotteryIssueAccumulation) => {
        let sKey = oLotteryIssueAccumulation.lottery_accumulation_id || oLotteryIssueAccumulation.lottery_id + '-' +  oLotteryIssueAccumulation.no;
        _oLotteryIssueAccumulations[sKey] = oLotteryIssueAccumulation;
        return _oLotteryIssueAccumulations;
      }, {});
      mLotteryIssueAccumulations = oLotteryIssueAccumulations;
    }
    // debugger;
    state.lottery_issue_accumulations = mLotteryIssueAccumulations;
  },
  LOTTERY_ISSUE_ACCUMULATION_MUTATION_ADD (state: any, mLotteries: any[]): void {
    // debugger;
  },
  LOTTERY_ISSUE_ACCUMULATION_MUTATION_EDIT (state: any, mLotteries: any[]): void {
    // debugger;
  },
  LOTTERY_ISSUE_ACCUMULATION_MUTATION_REMOVE (state: any, mLotteries: any[]): void {
    // debugger;
  },
  LOTTERY_ISSUE_ACCUMULATION_MUTATION_EMPTY (state: any, mLotteries: any[]): void {
    state.lottery_issue_accumulations = {};
  },
};

export default oLotteryIssueAccumulationMutation;
