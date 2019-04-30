let ultilityPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.sayHello = () => {
      console.log('sayHello');
      return 'sayHello';
    };
    Vue.mixin({
      methods: {
        testMethod: () => {
          console.log('testMethod');
          return 'testMethod';
        },
      },
    });
    Vue.prototype.sayHi = () => {
      console.log('sayHi');
      return 'sayHi';
    };
  },
};

export default ultilityPlugin;
