// import aTrendChildren from '@/pages/Trend/Index.vue';

let aTrendRoutes = [{
  path: '/trend',
  name: 'trend',
  component: () => import( '@/pages/Trend/Index.vue'),
  // children: aTrendChildren,
}];



export default aTrendRoutes;
