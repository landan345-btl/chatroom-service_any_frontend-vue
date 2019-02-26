// VUEX 的 Mutation, 在业务逻辑动作后，
// 将 数据转换 成 vuex 仓库 （store） 格式的机制

let oIssue = {
  ISSUE_SHOW_MUTATION(state: any, mIssues: any[]) {
    // debugger;
    let oIssues: any = (mIssues instanceof Array) ? {} : mIssues;
    if (mIssues instanceof Array) {
      oIssues = mIssues.reduce((_oIssues, aIssue) => {
        _oIssues[aIssue.id] = aIssue;
        return _oIssues;
      }, {});
      mIssues = oIssues;
    }
    // debugger;
    state.lotteries = oIssues;
  },
};

export default oIssue;
