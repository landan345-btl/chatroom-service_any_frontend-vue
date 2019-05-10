<template>
  <div class="board">
    <I-tabs :type="'card'" class="">
      <TabPane :label="'即使开奖'" :name="'lottery-issue'"> 
        <Lottery-issue :lotteryIssues="lotteryIssues" :lottery="lottery" :code="code" :types="types"/>
      </TabPane>
      <!-- <TabPane :label="'路珠分析'" :name="'result-analysis'">
        <Result-analysis />
      </TabPane> -->
      <TabPane :label="'综合分析'" :name="'summary-anaylysis'">
        <Summary-analysis />
      </TabPane>
      <TabPane :label="'基本走势'" :name="'basic-trend'">
        <Basic-trend />
      </TabPane>
      <TabPane :label="'冷热分析'" :name="'popular-anaylysis'">
        <Popular-analysis :hotWarnColdPositions="hotWarnColdPositions"/>
      </TabPane>
      <TabPane :label="'龙虎走势'" :name="'dragon-or-Tiger-trend'">
        <Dragon-or-tiger-trend />
      </TabPane>
      <TabPane :label="'今日号码统计'" :name="'today-number-statics'">
        <Today-number-statics />
      </TabPane>
      <TabPane :label="'单双大小历史'" :name="'odd-or-even-small-or-large-history'">
        <Odd-or-even-small-or-large-history />
      </TabPane>
      <TabPane :label="'形态走势'" :name="'state-trend'">
        <State-trend />
      </TabPane>
      <TabPane :label="'单双大小路珠'" :name="'odd-or-even-small-or-large-result'">
        <Odd-or-even-small-or-large-result />
      </TabPane>
      <TabPane :label="'历史号码统计'" :name="'history-number-statics'">
        <History-number-statics />
      </TabPane>
      <TabPane :label="'两面统计'" :name="'two-side-statics'">
        <Two-side-statics />
      </TabPane>
      <TabPane :label="'每日长龙统计'" :name="'everyday-accumulation-statics'">
        <Everyday-accumulation-statics />
      </TabPane>
      <TabPane :label="'定位走势'" :name="'position-trend'">
        <Position-trend />
      </TabPane>
      <TabPane :label="'总和路珠'" :name="'summation-result'">
        <Summation-result :lotteryIssues="lotteryIssues"/>
      </TabPane>
      <TabPane :label="'玩法规则'" :name="'rule'">
      </TabPane>
    </I-tabs>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import ITabs from '@/Components/ITabs/Index.vue';
import LotteryIssue from './LotteryIssue/Index.vue';
import ResultAnalysis from './ResultAnalysis/Index.vue';
import SummaryAnalysis from './SummaryAnalysis/Index.vue';
import BasicTrend from './BasicTrend/Index.vue';
import PopularAnalysis from './PopularAnalysis/Index.vue';
import DragonOrTigerTrend from './DragonOrTigerTrend/Index.vue';
import TodayNumberStatics from './TodayNumberStatics/Index.vue';
import OddOrEvenSmallOrLargeHistory from './OddOrEvenSmallOrLargeHistory/Index.vue';
import StateTrend from './StateTrend/Index.vue';
import OddOrEvenSmallOrLargeResult from './OddOrEvenSmallOrLargeResult/Index.vue';
import HistoryNumberStatics from './HistoryNumberStatics/Index.vue';
import TwoSideStatics from './TwoSideStatics/Index.vue';
import EverydayAccumulationStatics from './EverydayAccumulationStatics/Index.vue';
import PositionTrend from './PositionTrend/Index.vue';
import SummationResult from './SummationResult/Index.vue';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'Board',
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ITabs,
    LotteryIssue,
    ResultAnalysis,
    SummaryAnalysis,
    BasicTrend,
    PopularAnalysis,
    DragonOrTigerTrend,
    TodayNumberStatics,
    OddOrEvenSmallOrLargeHistory,
    StateTrend,
    OddOrEvenSmallOrLargeResult,
    HistoryNumberStatics,
    TwoSideStatics,
    EverydayAccumulationStatics,
    PositionTrend,
    SummationResult,
  },
})
class Board extends Vue {
  @Prop()
  // public lotteryIssues!: any;
  @Prop()
  public hotWarnColdPositions!: any;
  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;
}

export default Board;
</script>
