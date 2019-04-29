// import aTrendChildren from '@/Pages/Trend/Index.vue';

let aStatisticsRoutes = [{
  path: '/accumulation',
  name: 'accumulation',
  component: () => import( '@/Pages/Accumulation/Index.vue'),
  // children: aTrendChildren,
}];



export default aStatisticsRoutes;
