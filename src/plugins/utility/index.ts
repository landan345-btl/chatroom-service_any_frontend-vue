import isOddOrEven from '@/utilities/isOddOrEven';
import isDragonOrTiger from '@/utilities/isDragonOrTiger';
import isSmallOrLarge from '@/utilities/isSmallOrLarge';
import sum from '@/utilities/sum/index';
import padStart from '@/utilities/padStart/index';
import determineSequence from '@/utilities/determineSequence/index';
import substr from '@/utilities/substr/index';
import isFishOrShrimpOrCrab from '@/utilities/isFishOrShrimpOrCrab/index';

let oUltilityPlugin = {
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
    Vue.prototype.isOddOrEven = isOddOrEven;
    Vue.prototype.isDragonOrTiger = isDragonOrTiger;
    Vue.prototype.isSmallOrLarge = isSmallOrLarge;
    Vue.prototype.sum = sum;
    Vue.prototype.padStart = padStart;
    Vue.prototype.determineSequence = determineSequence;
    Vue.prototype.substr = substr;
    Vue.prototype.isFishOrShrimpOrCrab = isFishOrShrimpOrCrab;
  },
};

export default oUltilityPlugin;
