// import aTrendChildren from '@/pages/Trend/index.vue';

let aTrendRoutes = [{
  path: '/trend',
  name: 'trend',
  component: () => import( '@/pages/Trend/index.vue'),
  // children: aTrendChildren,
}];



export default aTrendRoutes;
