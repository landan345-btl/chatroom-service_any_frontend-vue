// import aTrendChildren from '@/Pages/Trend/Index.vue';

let aLotteryIssueRoutes = [{
  path: '/lottery-issue',
  name: 'lottery-issue',
  component: () => import( '@/Pages/LotteryIssue/Index.vue'),
  // children: aTrendChildren,
}];



export default aLotteryIssueRoutes;
