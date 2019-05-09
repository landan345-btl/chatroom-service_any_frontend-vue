import {
  Axios as AxiosHelper,
} from '@/Helpers/';

import {
  objectQueriesToStringQueries,
} from '@/utilities';


let oAxiosHelper = new AxiosHelper();

// VUEX 的 Action，一连串的业务逻辑动作，类似 PHP 的 service 或 Angular 的 service
let oLotteryAction = {
  LOTTERY_ACTION_SHOW(context: any, oQueries: object) {
    let sQueries: string = objectQueriesToStringQueries(oQueries);

    let oRequest = {
      path: '/lottery/show' + sQueries,
    };
    let pProccess = Promise.resolve();
    return pProccess.then(() => {
      return oAxiosHelper.get(oRequest);
    }).then((response) => {
      let aLotteries = response.data.lotteries;
      context.commit('LOTTERY_MUTATION_SHOW', aLotteries);
    });
  },
};
export default oLotteryAction;
