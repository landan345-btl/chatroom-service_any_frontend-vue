// import aTrendChildren from '@/Pages/Trend/Index.vue';

let aTrendBoardRoutes = [{
  path: '/trend-board',
  name: 'trend-board',
  component: () => import( '@/Pages/TrendBoard/Index.vue'),
  // children: aTrendChildren,
}];



export default aTrendBoardRoutes;
