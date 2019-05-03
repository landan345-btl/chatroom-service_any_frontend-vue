// import aTrendChildren from '@/Pages/Trend/Index.vue';

let aLotteryRoutes = [{
  path: '/lottery',
  name: 'lottery',
  component: () => import( '@/Pages/Lottery/Index.vue'),
  // children: aTrendChildren,
}];



export default aLotteryRoutes;
