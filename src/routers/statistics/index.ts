// import aTrendChildren from '@/Pages/Trend/Index.vue';

let aStatisticsRoutes = [{
  path: '/statistics',
  name: 'statistics',
  component: () => import( '@/Pages/Statistics/Index.vue'),
  // children: aTrendChildren,
}];



export default aStatisticsRoutes;
