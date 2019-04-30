import aChildren from './information/index';

let aTrendRoutes = [{
  path: '/trend',
  name: 'trend',
  component: () => import( '@/Pages/Trend/Index.vue'),
  children: aChildren,
}];



export default aTrendRoutes;
