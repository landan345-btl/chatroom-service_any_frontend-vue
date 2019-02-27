// VUEX 的 Mutation, 在业务逻辑动作后，
// 将 数据转换 成 vuex 仓库 （store） 格式的机制

// 前端用的 show, add, edit, remove 务必与 后端一致
// 遵守 isomorphism 设计原则
let oIssueMutation = {
  ISSUE_MUTATION_SHOW(state: any, mIssues: any[]) {
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
    state.issues = oIssues;
  },
  ISSUE_MUTATION_ADD(state: any, mLotteries: any[]) {
    // debugger;
    return void 0;
  },
  ISSUE_MUTATION_EDIT(state: any, mLotteries: any[]) {
    // debugger;
    return void 0;
  },
  ISSUE_MUTATION_REMOVE(state: any, mLotteries: any[]) {
    // debugger;
    return void 0;
  },
};

export default oIssueMutation;
