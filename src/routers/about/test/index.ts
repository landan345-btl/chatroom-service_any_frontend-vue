import AboutTest from '@/pages/About/Test/index.vue';

let oChildren = [
  {
    path: 'test',  // 考虑父 path ， 实际为 /about/test
    component: AboutTest,
    name: 'about_test',
    meta: { title: 'about_test', icon: 'documentation', noCache: true },
  },
];

export default oChildren;
