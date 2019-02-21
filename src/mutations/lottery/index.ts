// VUEX 的 Mutation, 在业务逻辑动作后，
// 将 数据转换 成 vuex 仓库 （store） 格式的机制

let lottery = {
  LOTTERY_SHOW_MUTATION(state: any, aLotteries: any[]) {
    state.lotteries = aLotteries;
  },
};

export default lottery;
