
import last from '@/filters/last/index';
import substr from '@/filters/substr/index';
import sum from '@/filters/sum/index';
import isOddOrEven from '@/filters/isOddOrEven/index';
import isSmallOrLarge from '@/filters/isSmallOrLarge/index';
import isDragonOrTiger from '@/filters/isDragonOrTiger/index';
import isFishOrShrimpOrCrab from '@/filters/isFishOrShrimpOrCrab/index';
import determineSequence from '@/filters/determineSequence/index';
import count from '@/filters/count/index';
import padStart from '@/filters/padStart/index';
import isFrontOrBack from '@/filters/isFrontOrBack/index';
import isFiveRow from '@/filters/isFiveRow/index';
import JSONparse from '@/filters/JSONparse/index';
import isUpOrDownByPar from '@/filters/isUpOrDownByPar/index';
import parNumber from '@/filters/parNumber/index';
import isZeroOrOneOrTwo from '@/filters/isZeroOrOneOrTwo/index';
import isUpOrDownByRank from '@/filters/isUpOrDownByRank/index';
import isPrimeOrcompositeNumbers from '@/filters/isPrimeOrcompositeNumbers/index';

import codeToName from '@/filters/codeToName/index';
import or from '@/filters/or/index';

let oFilterPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install (Vue: any, options: any) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.filter('isOddOrEven', isOddOrEven);
    Vue.filter('isSmallOrLarge', isSmallOrLarge);
    Vue.filter('isDragonOrTiger', isDragonOrTiger);
    Vue.filter('isFishOrShrimpOrCrab', isFishOrShrimpOrCrab);
    Vue.filter('determineSequence', determineSequence);
    Vue.filter('count', count);
    Vue.filter('tcount', count);
    Vue.filter('last', last);
    Vue.filter('substr', substr);
    Vue.filter('sum', sum);
    Vue.filter('padStart', padStart);
    Vue.filter('isFrontOrBack', isFrontOrBack);
    Vue.filter('isFiveRow', isFiveRow);
    Vue.filter('codeToName', codeToName);
    Vue.filter('or', or);
    Vue.filter('JSONparse', JSONparse);
    Vue.filter('isUpOrDownByPar', isUpOrDownByPar);
    Vue.filter('parNumber', parNumber);
    Vue.filter('isZeroOrOneOrTwo', isZeroOrOneOrTwo);
    Vue.filter('isUpOrDownByRank', isUpOrDownByRank);
    Vue.filter('isPrimeOrcompositeNumbers', isPrimeOrcompositeNumbers);
  },
};

export default oFilterPlugin;
