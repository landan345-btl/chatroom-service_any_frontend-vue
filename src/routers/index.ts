import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Pages/Home/Index.vue';

import aHomeRoutes from '@/routers/home/index';
import aTrendRoutes from '@/routers/trend/index';
// import alotteryIssuesRoutes from '@/routers/lotteryIssue/index';
import alotteryRoutes from '@/routers/lottery/index';
import aAccumulationRoutes from '@/routers/accumulation/index';
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
    ...aTrendRoutes,
    ...alotteryRoutes,
    // ...alotteryIssuesRoutes,
    ...aAccumulationRoutes,
  ],
});

export default oRouter;
