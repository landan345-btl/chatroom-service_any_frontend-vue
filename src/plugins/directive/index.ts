import randomNumber from '@/directives/randomNumber/index';

let oDirectivePlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.directive('randomNumber', randomNumber);
  },
};

export default oDirectivePlugin;
