let children = [
  {
    path: 'test',  // 考虑父 path ， 实际为 /about/test
    component: () => import('@/pages/About/index.vue'),
    name: 'about_test',
    meta: { title: 'about_test', icon: 'documentation', noCache: true },
  },
];

export default children;
