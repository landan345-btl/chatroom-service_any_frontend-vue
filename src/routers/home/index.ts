let aHomeRoutes = [{
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "about" */ '@/Pages/Home/Index.vue'),
}, ];

export default aHomeRoutes;
