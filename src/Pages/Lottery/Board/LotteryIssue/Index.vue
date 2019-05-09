<template>
  <div class="lottery-issue">
    <div class="top p-1 font-weight-bold">
      <span class="title">即时开奖</span>
      <I-button class="ml-2" v-on:handle-click="toggleTodayTwoSideNumberStatics()">今日双面/号码统计</I-button>
      <I-button class="ml-2" v-on:handle-click="toggleAccumulationRemider()">长龙提醒</I-button>
      <I-button class="ml-2" v-on:handle-click="toggleNumberAnalysis()">号码分析</I-button>
    </div>
    <Today-two-side-number-statics v-show="isTodayTwoSideNumberStaticShowed" class="p-2"/>
    <Accumulation-remider v-show="isAccumulationRemiderShowed" class="p-2"/>
    <Number-analysis v-show="isNumberAnalysisShowed" class="p-2"/>
    <Table :lotteryIssues="lotteryIssues" :lottery="lottery" :code="code" :types="types" class="p-2" />
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';
import IButton from '@/Components/IButton/Index.vue';
import TodayTwoSideNumberStatics from './TodayTwoSideNumberStatics/Index.vue';
import AccumulationRemider from './AccumulationRemider/Index.vue';
import NumberAnalysis from './NumberAnalysis/Index.vue';
import Table from './Table/Index.vue';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'LotteryIssue',
  components: {
    ITabs,
    IButton,
    TodayTwoSideNumberStatics,
    AccumulationRemider,
    NumberAnalysis,
    Table,
  },
})
class LotteryIssue extends Vue {
  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public isTodayTwoSideNumberStaticShowed: boolean = false;
  public isAccumulationRemiderShowed: boolean = false;
  public isNumberAnalysisShowed: boolean = false;

  public toggleTodayTwoSideNumberStatics(): void {
    this.isTodayTwoSideNumberStaticShowed = !this.isTodayTwoSideNumberStaticShowed;
  }

  public toggleAccumulationRemider(): void {
    this.isAccumulationRemiderShowed = !this.isAccumulationRemiderShowed;
  }

  public toggleNumberAnalysis(): void {
    this.isNumberAnalysisShowed = !this.isNumberAnalysisShowed;
  }
}

export default LotteryIssue;
</script>
