import AxiosHelper from '@/helpers/Axios';

let oAxiosHelper = new AxiosHelper();

let lottery = {
  LOTTER_SHOW(context: any) {
    let oRequest = {
      path: '/lottery/all',
    };

    let pProccess = Promise.resolve();
    return pProccess.then(() => {
      return oAxiosHelper.get(oRequest);
    }).then((response) => {
      let aLotteries = response.data.lotteries;
      context.commit('LOTTERY_SHOW', aLotteries);
    });
  },
};
export default lottery;
