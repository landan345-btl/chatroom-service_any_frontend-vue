import {
  isOddOrEven,
  isDragonOrTiger,
  isSmallOrLarge,
  sum,
  padStart,
  determineSequence,
  substr,
  isFishOrShrimpOrCrab,
  last,
  isFrontOrBack,
} from '@/utilities/';


let oUltilityPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.sayHello = () => {
      return 'sayHello';
    };
    Vue.mixin({
      methods: {
        testMethod: () => {
          return 'testMethod';
        },
      },
    });
    Vue.prototype.isOddOrEven = isOddOrEven;
    Vue.prototype.isDragonOrTiger = isDragonOrTiger;
    Vue.prototype.isSmallOrLarge = isSmallOrLarge;
    Vue.prototype.sum = sum;
    Vue.prototype.padStart = padStart;
    Vue.prototype.determineSequence = determineSequence;
    Vue.prototype.substr = substr;
    Vue.prototype.isFishOrShrimpOrCrab = isFishOrShrimpOrCrab;
    Vue.prototype.last = last;
    Vue.prototype.isFrontOrBack = isFrontOrBack;
  },
};

export default oUltilityPlugin;
