let oChildren = [
  {
    path: 'basic',  // 考虑父 path ， 实际为 /about/test
    component: () => import('@/Pages/Trend/Basic/Index.vue'),
    name: 'trend/basic',
  },
];

export default oChildren;
