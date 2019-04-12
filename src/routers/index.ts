import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/Index.vue';

import aHomeRoutes from '@/routers/home/index';
import aAboutRoutes from '@/routers/about/index';
import aTrendRoutes from '@/routers/trend/index';
// index 是所有 资料夹的入口文件，

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
    ...aTrendRoutes,
  ],
});

export default oRouter;
