import {
  Lottery,
} from '@/Pages/';

let aLotteryRoutes = [{
  path: '/lottery',
  name: 'lottery',
  component: () => import( '@/Pages/Lottery/Index.vue'),
  // children: aTrendChildren,
}];



export default aLotteryRoutes;
