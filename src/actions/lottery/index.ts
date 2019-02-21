import AxiosHelper from '@/helpers/Axios';

let oAxiosHelper = new AxiosHelper();

// VUEX 的 Action，一连串的业务逻辑动作，类似 PHP 的 service 或 Angular 的 service
let lottery = {
  LOTTERY_SHOW_ACTION(context: any) {
    let oRequest = {
      path: '/lottery/all',
    };

    let pProccess = Promise.resolve();
    return pProccess.then(() => {
      return oAxiosHelper.get(oRequest);
    }).then((response) => {
      debugger;
      let aLotteries = response.data.lotteries;
      context.commit('LOTTERY_SHOW_MUTATION', aLotteries);
    });
  },
};
export default lottery;
