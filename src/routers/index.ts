import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/index.vue';

import aHomeRoutes from '@/routers/home/index';
import aAboutRoutes from '@/routers/about/index';
import oRoute from './about';

Vue.use(Router);

let oRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    ...aHomeRoutes,
    ...aAboutRoutes,
  ],
});

export default oRouter;
