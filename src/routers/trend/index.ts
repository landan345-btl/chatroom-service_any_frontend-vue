// import aTrendChildren from '@/Pages/Trend/Index.vue';

let aTrendRoutes = [{
  path: '/trend',
  name: 'trend',
  component: () => import( '@/Pages/Trend/Index.vue'),
  // children: aTrendChildren,
}];



export default aTrendRoutes;
