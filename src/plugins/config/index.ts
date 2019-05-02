import LOTTERIES from '@/CONFIGS/LOTTERIES/index';

let oConfigPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.prototype.LOTTERIES = LOTTERIES;
  },
};

export default oConfigPlugin;
