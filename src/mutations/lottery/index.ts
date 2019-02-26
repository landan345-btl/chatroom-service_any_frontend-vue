// VUEX 的 Mutation, 在业务逻辑动作后，
// 将 数据转换 成 vuex 仓库 （store） 格式的机制

// 前端用的 show, add, edit, remove 务必与 后端一致
// 遵守 isomorphism 设计原则

let oLotteryMutation = {
  LOTTERY_MUTATION_SHOW(state: any, mLotteries: any[]): void {
    // debugger;
    let oLotteries: any = (mLotteries instanceof Array) ? {} : mLotteries;
    if (mLotteries instanceof Array) {
      oLotteries = mLotteries.reduce((_oLotteries, aLottery) => {
        _oLotteries[aLottery.id] = aLottery;
        return _oLotteries;
      }, {});
      mLotteries = oLotteries;
    }
    // debugger;
    state.lotteries = oLotteries;
  },
  LOTTERY_MUTATION_ADD(state: any, mLotteries: any[]): void {
    // debugger;
  },
  LOTTERY_MUTATION_EDIT(state: any, mLotteries: any[]): void {
    // debugger;
  },
  LOTTERY_MUTATION_REMOVE(state: any, mLotteries: any[]): void {
    // debugger;
  },
};

export default oLotteryMutation;
