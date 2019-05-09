import {
  randomNumber,
  lineBreakIfDifferent,
} from '@/directives/';

let oDirective = {
  install(Vue: any, options: any) {
    Vue.directive('randomNumber', randomNumber);
    Vue.directive('line-break-if-different', lineBreakIfDifferent);
  },
};

export default oDirective;
