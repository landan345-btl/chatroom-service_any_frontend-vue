// VUEX 的 Mutation, 在业务逻辑动作后，
// 将 数据转换 成 vuex 仓库 （store） 格式的机制

let lottery = {
  LOTTERY_SHOW_MUTATION(state: any, mLotteries: any[]) {
    //debugger;
    let oLotteries: any = (mLotteries instanceof Array) ? {} : mLotteries;
    if (mLotteries instanceof Array) {
      oLotteries = mLotteries.reduce((_oLotteries, aLottery) => {
        _oLotteries[aLottery.id] = aLottery;
        return _oLotteries;
      }, {});
      mLotteries = oLotteries;
    }
    //debugger;
    state.lotteries = oLotteries;
  },
};

export default lottery;
