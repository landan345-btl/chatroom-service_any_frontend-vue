import {
  randomNumber,
  lineBreakIfDifferent,
} from '@/directives/';

let oDirectivePlugin = {
  install(Vue: any, options: any) {
    Vue.directive('randomNumber', randomNumber);
    Vue.directive('line-break-if-different', lineBreakIfDifferent);
  },
};

export default oDirectivePlugin;
