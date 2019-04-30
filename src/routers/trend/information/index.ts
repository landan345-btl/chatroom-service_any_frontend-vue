let oChildren = [
  {
    path: 'information',  // 考虑父 path ， 实际为 /about/test
    component: () => import('@/Pages/Trend/Information/Index.vue'),
    name: 'Trend/Information',
  },
];

export default oChildren;
