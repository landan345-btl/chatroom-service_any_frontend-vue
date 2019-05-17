<template>
  <div class="page home">
    <Header />
    <NavTop/>
    <NavRight />
    <Row :gutter="0">
      <Col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 15, offset: 2}" 
        :md="{span: 14, offset: 2}" 
        :lg="{span: 14, offset: 2}"
        :xl="{span: 12, offset: 4}">
        <main>
          <News />
          <Live :lotteries="lotteries" :lotteryIssues="lotteryIssues"/>
          <Lottery-issue-board :lotteryIssues="lotteryIssues" :lotteries="lotteries"/>
        </main>
      </Col>
      <Col :xs="{span: 0}" :sm="{span: 5}" :md="{span: 6}" :lg="{span: 6}" :xl="{span: 4}">
        <aside>
          <Recommended-lottery :lotteries="lotteries"/>
          <Advertisment-a />
          <Prediction />
          <Advertisment-b />
          <Analysis :lotteries="lotteries"/>
        </aside>
      </Col>
      <Col :xs="{span: 1}" :sm="{span: 2}" :md="{span: 3}" :lg="{span: 6}" :xl="{span: 4}">
      </Col>
    </Row>

    <Footer />
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import {
  Component,
  Watch,
  Vue,
} from 'vue-property-decorator';

import {
  warn,
} from 'vue-class-component/lib/util';

import {
  Header,
  NavTop,
  NavRight,
  Footer,
} from '@/Commons/';

import News from './News/Index.vue';
import Live from './Live/Index.vue';
import LotteryIssueBoard from './LotteryIssueBoard/Index.vue';
import RecommendedLottery from './RecommendedLottery/Index.vue';
import AdvertismentA from './AdvertismentA/Index.vue';
import Prediction from './Prediction/Index.vue';
import AdvertismentB from './AdvertismentB/Index.vue';
import Analysis from './Analysis/Index.vue';

import {
  LOTTERIES,
  BACKEND,
} from '@/CONFIGS/';


@Component({
  name: 'Home',
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    News,
    Live,
    LotteryIssueBoard,
    RecommendedLottery,
    AdvertismentA,
    Prediction,
    AdvertismentB,
    Analysis,
  },
})
class Home extends Vue {
  public timer: any;
  public beforeCreate(): void {
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_EMPTY', {});
  }
  public created(): void {
    let $root: any = this.$root;
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {});
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
    this.setIntervalLotteryIssueActionShow();
  }

  public setIntervalLotteryIssueActionShow() {
    this.timer = setInterval(() => {
      this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
    } , BACKEND.INTERVAL_TIME );
  }

  public beforeDestroy() {  // 组件销毁之前调用
    clearInterval( this.timer );
  }

  public get lotteries(): object {
    let aLotteries: any = this.$store.state.lotteries;
    return aLotteries;
  }

  public get lotteryIssues(): object {
    let aLotteryIssues: any = this.$store.state.lottery_issues;
    return aLotteryIssues;
  }
}

export default Home;
</script>
