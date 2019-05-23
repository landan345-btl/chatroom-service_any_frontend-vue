import randomNumber from '@/directives/randomNumber/index';
import oLineBreakIfDifferent from '@/directives/lineBreakIfDifferent/index';
import canvasTrend from '@/directives/canvasTrend/index';

let oDirectivePlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install (Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.directive('randomNumber', randomNumber);
    Vue.directive('line-break-if-different', oLineBreakIfDifferent);
    Vue.directive('canvasTrend', canvasTrend);
  },
};

export default oDirectivePlugin;
