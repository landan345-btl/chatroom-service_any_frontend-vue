let aLotteryRoutes = [{
  path: '/lottery',
  name: 'lottery',
  component: () => import(/* webpackChunkName: "about" */ '@/Pages/Lottery/Index.vue'),
  // children: aTrendChildren,
}, ];

export default aLotteryRoutes;
