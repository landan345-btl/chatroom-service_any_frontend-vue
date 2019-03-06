import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

let cI18n = ({ app, store }: any) => {

  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: require('~/langs/index.ts')
  })

  app.i18n.path = (link: any) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }

    return `/${app.i18n.locale}/${link}`;
  }
}

export default cI18n;

