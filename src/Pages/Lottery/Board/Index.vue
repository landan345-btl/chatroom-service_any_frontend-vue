<template>
  <div class="board">
    <I-tabs :type="'card'" class="" :animated="false">
      <TabPane :label="'即时开奖'" :name="'lottery-issue'"> 
        <Lottery-issue 
          v-if="code && types" 
          :lotteryIssues="lotteryIssues" 
          :lottery="lottery"
          :lotteries="lotteries"
          :code="code" 
          :types="types" />
      </TabPane>
      <TabPane :label="'路珠分析'" :name="'result-analysis'">
        <Result-analysis />
      </TabPane>
      <TabPane :label="'冠亚和走势'" :name="'crown-or-second-sum-trend'">
        <Crown-or-second-sum-trend />
      </TabPane>
      <TabPane :label="'龙虎统计'" :name="'dragon-or-tiger-count'">
        <Dragon-or-tiger-count />
      </TabPane>
      <TabPane :label="'龙虎露珠'" :name="'dragon-or-tiger-result'">
        <Dragon-or-tiger-result />
      </TabPane>
      <TabPane :label="'号码前后露珠'" :name="'number-or-front-or-back-result'">
        <Number-or-front-or-back-result/>
      </TabPane>
      <TabPane :label="'冠亚和露珠'" :name="'crown-or-second-sum-result'">
        <Crown-or-second-sum-result />
      </TabPane>
      <TabPane :label="'号码规律统计'" :name="'number-or-law-count'">
        <Number-or-law-count 
          v-if="code && types" 
          :lotteryIssues="lotteryIssues" 
          :lottery="lottery"
          :lotteries="lotteries"
          :code="code" 
          :types="types" />
      </TabPane>
      <TabPane :label="'冠亚和两面历史'" :name="'crown-or-second-sum-two-side-history'">
        <Crown-or-second-sum-two-side-history />
      </TabPane>
      <TabPane :label="'综合分析'" :name="'summary-anaylysis'">
        <Summary-analysis v-if="code && types" :lotteryIssues="lotteryIssues" :lottery="lottery" :code="code" :types="types"/>
      </TabPane>
      <TabPane :label="'基本走势'" :name="'basic-trend'">
        <Basic-trend v-if="code && types" :lotteryIssues="lotteryIssues" :lottery="lottery" :code="code" :types="types"/>
      </TabPane>
      <TabPane :label="'冷热分析'" :name="'popular-anaylysis'">
        <Popular-analysis v-if="code && types" :hotWarnColdPositions="hotWarnColdPositions" :code="code" :types="types"/>
      </TabPane>
      <TabPane :label="'龙虎走势'" :name="'dragon-or-Tiger-trend'">
        <Dragon-or-tiger-trend v-if="code && types" />
      </TabPane>
      <TabPane :label="'今日号码统计'" :name="'today-number-statics'">
        <Today-number-statics v-if="code && types" />
      </TabPane>
      <TabPane :label="'单双大小历史'" :name="'odd-or-even-small-or-large-history'">
        <Odd-or-even-small-or-large-history v-if="code && types" />
      </TabPane>
      <TabPane :label="'形态走势'" :name="'state-trend'">
        <State-trend />
      </TabPane>
      <TabPane :label="'单双大小路珠'" :name="'odd-or-even-small-or-large-result'">
        <Odd-or-even-small-or-large-result v-if="code && types"/>
      </TabPane>
      <TabPane :label="'历史号码统计'" :name="'history-number-statics'">
        <History-number-statics />
      </TabPane>
      <TabPane :label="'两面统计'" :name="'two-side-statics'">
        <Two-side-statics v-if="code && types"/>
      </TabPane>
      <TabPane :label="'每日长龙统计'" :name="'everyday-accumulation-statics'">
        <Everyday-accumulation-statics v-if="code && types" />
      </TabPane>
      <TabPane :label="'定位走势'" :name="'position-trend'">
        <Position-trend v-if="code && types" />
      </TabPane>
      <TabPane :label="'总和路珠'" :name="'summation-result'">
        <Summation-result v-if="code && types" :lotteryIssues="lotteryIssues"/>
      </TabPane>
      <TabPane :label="'玩法规则'" :name="'rule'">
        <Rule />
      </TabPane>
    </I-tabs>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';


import {
  ITabs,
} from '@/Components/';

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
import CrownOrSecondSumTrend from './CrownOrSecondSumTrend/Index.vue';
import DragonOrTigerCount from './DragonOrTigerCount/Index.vue';
import DragonOrTigerResult from './DragonOrTigerResult/Index.vue';
import NumberOrFrontOrBackResult from './NumberOrFrontOrBackResult/Index.vue';
import CrownOrSecondSumResult from './CrownOrSecondSumResult/Index.vue';
import NumberOrLawCount from './NumberOrLawCount/Index.vue';
import CrownOrSecondSumTwoSideHistory from './CrownOrSecondSumTwoSideHistory/Index.vue';
// import Rule from '@/pages/Rule/Index.vue';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'Board',
  components: {
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
    CrownOrSecondSumTrend,
    DragonOrTigerCount,
    DragonOrTigerResult,
    NumberOrFrontOrBackResult,
    CrownOrSecondSumResult,
    NumberOrLawCount,
    CrownOrSecondSumTwoSideHistory,
    // Rule,
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
  public lotteries!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

}

export default Board;
</script>
