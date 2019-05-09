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
  or,
  JSONparse,
  isFiveRow,
  count,
} from '@/filters/';

let oFilterPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.filter('isOddOrEven' , isOddOrEven);
    Vue.filter('isSmallOrLarge' , isSmallOrLarge);
    Vue.filter('isDragonOrTiger' , isDragonOrTiger);
    Vue.filter('isFishOrShrimpOrCrab' , isFishOrShrimpOrCrab);
    Vue.filter('determineSequence' , determineSequence);
    Vue.filter('count' , count);
    Vue.filter('last' , last);
    Vue.filter('substr' , substr);
    Vue.filter('sum' , sum);
    Vue.filter('padStart' , padStart);
    Vue.filter('isFrontOrBack' , isFrontOrBack);
    Vue.filter('isFiveRow' , isFiveRow);
    Vue.filter('or' , or);
    Vue.filter('JSONparse' , JSONparse);
  },
};

export default oFilterPlugin;
