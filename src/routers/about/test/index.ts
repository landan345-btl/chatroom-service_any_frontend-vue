let oChildren = [
  {
    path: 'test',  // 考虑父 path ， 实际为 /about/test
    component: () => import('@/pages/About/Test/Index.vue'),
    name: 'about_test',
    meta: { title: 'about_test', icon: 'documentation', noCache: true },
  },
];

export default oChildren;
