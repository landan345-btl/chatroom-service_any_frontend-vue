<template>
  <div class="board">
    <I-tabs :type="'card'" class="" v-on:handle-click="handleRule"  :animated="false" v-model="tab">
      <TabPane :label="'即时开奖'" :name="'lottery-issue'" v-if="['PK10', 'SSC', '11X5', 'KLSF', 'K3', '3D', 'XY28', 'SIX', 'KL8'].includes(types.toUpperCase())">
        <Lottery-issue
          v-if="code && types"
          :lotteryIssues="lotteryIssues"
          :lottery="lottery"
          :lotteries="lotteries"
          :code="code"
          :types="types" />
      </TabPane>
      <TabPane :label="'路珠分析'" :name="'result-analysis'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Result-analysis 
          :resultOddOrEvensAndSmallOrLarges="resultOddOrEvensAndSmallOrLarges"
          :oddOrEvensAndSmallOrLargeCount="oddOrEvensAndSmallOrLargeCount"
          :dragonOrTigerResult="dragonOrTigerResult"
          :dragonOrTigerCount="dragonOrTigerCount"
          :firstAndSecondSummation="firstAndSecondSummation"
          :firstAndSecondSummationCount="firstAndSecondSummationCount"
          :code="code"/>
      </TabPane>
      <TabPane :label="'冷热分析'" :name="'popular-anaylysis'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Popular-analysis v-if="code && types" :code="code" :types="types"/>
      </TabPane>
      <TabPane :label="'冠亚和走势'" :name="'crown-or-second-sum-trend'" v-if="['PK10'].includes(types.toUpperCase())">
        <Crown-or-second-sum-trend 
          :lotteryIssues="lotteryIssues"
          :lottery="lottery"
          :lotteries="lotteries"
          :code="code"
          :types="types" />
      </TabPane>
      <TabPane :label="'单双大小历史'" :name="'odd-or-even-small-or-large-history'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Odd-or-even-small-or-large-history 
          :types="types"
          :code="code"
          v-if="code && types" />
      </TabPane>
      <TabPane :label="'龙虎统计'" :name="'dragon-or-tiger-count'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Dragon-or-tiger-count 
          :lotteryIssues="lotteryIssues"
          :lottery="lottery"
          :lotteries="lotteries"
          :code="code"
          :types="types" />
      </TabPane>
      <TabPane :label="'每日长龙统计'" :name="'everyday-accumulation-statics'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Everyday-accumulation-statics v-if="code && types" />
      </TabPane>
      <TabPane :label="'龙虎路珠'" :name="'dragon-or-tiger-result'" v-if="['PK10'].includes(types.toUpperCase())">
        <Dragon-or-tiger-result />
      </TabPane>
      <TabPane :label="'号码前后路珠'" :name="'number-or-front-or-back-result'" v-if="['PK10'].includes(types.toUpperCase())">
        <Number-or-front-or-back-result/>
      </TabPane>
      <TabPane :label="'冠亚和路珠'" :name="'crown-or-second-sum-result'" v-if="['PK10'].includes(types.toUpperCase())">
        <Crown-or-second-sum-result />
      </TabPane>
      <TabPane :label="'单双大小路珠'" :name="'odd-or-even-small-or-large-result'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Odd-or-even-small-or-large-result v-if="code && types"/>
      </TabPane>
      <TabPane :label="'号码规律统计'" :name="'number-or-law-count'" v-if="['PK10'].includes(types.toUpperCase())">
        <Number-or-law-count
          v-if="code && types"
          :lotteryIssues="lotteryIssues"
          :lottery="lottery"
          :lotteries="lotteries"
          :code="code"
          :types="types" />
      </TabPane>
      <TabPane :label="'今日号码统计'" :name="'today-number-statics'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Today-number-statics 
          :code="code"
          :types="types" 
          v-if="code && types" />
      </TabPane>
      <TabPane :label="'定位走势'" :name="'position-trend'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Position-trend v-if="code && types" 
          :lotteryIssues="lotteryIssues"
          :lottery="lottery"
          :lotteries="lotteries"
          :code="code"
          :types="types"/>
      </TabPane>
      <TabPane :label="'号码走势'" :name="'basic-trend'" v-if="['PK10'].includes(types.toUpperCase())">
        <Basic-trend v-if="code && types" :lotteryIssues="lotteryIssues" :lottery="lottery" :code="code" :types="types"/>
      </TabPane>
      <TabPane :label="'冠亚和两面历史'" :name="'crown-or-second-sum-two-side-history'" v-if="['PK10'].includes(types.toUpperCase())">
        <Crown-or-second-sum-two-side-history />
      </TabPane>
      <TabPane :label="'综合分析'" :name="'summary-anaylysis'" v-if="['SSC'].includes(types.toUpperCase())">
        <Summary-analysis v-if="code && types" :lotteryIssues="lotteryIssues" :lottery="lottery" :code="code" :types="types"/>
      </TabPane>
      <TabPane :label="'龙虎走势'" :name="'dragon-or-Tiger-trend'" v-if="['SSC'].includes(types.toUpperCase())">
        <Dragon-or-tiger-trend v-if="code && types" />
      </TabPane>
      <TabPane :label="'形态走势'" :name="'state-trend'" v-if="['SSC'].includes(types.toUpperCase())">
        <State-trend />
      </TabPane>
      <TabPane :label="'历史号码统计'" :name="'history-number-statics'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <History-number-statics />
      </TabPane>
      <TabPane :label="'两面数据统计'" :name="'two-side-statics'" v-if="['PK10','SSC'].includes(types.toUpperCase())">
        <Two-side-statics :types="types" v-if="code && types"/>
      </TabPane>
      <TabPane :label="'和值走势'" :name="'sum-value-trend'" v-if="['SSC'].includes(types.toUpperCase())">
        <Sum-value-trend v-if="code && types" />
      </TabPane>
      <TabPane :label="'总和路珠'" :name="'summation-result'" v-if="['SSC'].includes(types.toUpperCase())">
        <Summation-result v-if="code && types" :lotteryIssues="lotteryIssues"/>
      </TabPane>
      <TabPane :label="'玩法规则'" :name="'rule'" v-if="['PK10','SSC'].includes(types.toUpperCase())">

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
import SumValueTrend from './SumValueTrend/Index.vue';

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
    SumValueTrend,
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

  @Prop()
  public resultOddOrEvensAndSmallOrLarges!: any;

  @Prop()
  public oddOrEvensAndSmallOrLargeCount!: any;

  @Prop()
  public dragonOrTigerResult!: any;

  @Prop()
  public dragonOrTigerCount!: any;

  @Prop()
  public firstAndSecondSummation!: any;
  
  @Prop()
  public firstAndSecondSummationCount!: any;

  public tab: string = 'lottery-issue';

  public created(): void{
    let sTab = this.$route.query.tab ? this.$route.query.tab.toString() : this.tab;
    this.tab = sTab;
  }

  public handleRule (name: string) {
    if (name === 'rule') {
      this.$router.push({ path: '/rule', });
    } else {
      let codes = this.code;
      let oQuery = {
      tab: name,
    };
      this.$router.replace({ path: '/lottery/', query:{code: codes , tab: name} });  
    }
  }
}

export default Board;
</script>
