<template>
  <div class="lottery-issue">
    <div class="top p-1 font-weight-bold">
      <span class="title">即时开奖</span>
      <I-button class="ml-2" v-on:handle-click="toggleTodayTwoSideNumberStatics()" v-if="['11X5','SSC' , 'PK10'].includes(types)">今日双面/号码统计</I-button>
      <I-button class="ml-2" v-on:handle-click="toggleAccumulationRemider()" v-if="['11X5','SSC' , 'PK10'].includes(types)">长龙提醒</I-button>
      <I-button class="ml-2" v-on:handle-click="toggleNumberAnalysis()" v-if="['11X5','SSC' , 'PK10'].includes(types)">号码分析</I-button>
    </div>
    <Today-two-side-number-statics 
      :types="types" 
      :todayTwoSideRecords="todayTwoSideRecords"
      v-show="isTodayTwoSideNumberStaticShowed" class="p-2"/>
    <Accumulation-remider v-show="isAccumulationRemiderShowed" class="p-2"/>
    <Number-analysis 
      :types="types" 
      v-show="isNumberAnalysisShowed" 
      @handle-toggle-number="toggleNumber" 
      @handle-toggle-oddoreven="toggleOddOrEven"
      class="p-2" 
      :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords" 
      :onNumbers="onNumbers"/>
    <Table 
      :lotteryIssues="lotteryIssues" 
      :lottery="lottery" 
      :code="code" 
      :types="types" class="p-2" 
      :onNumbers="onNumbers"/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
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

  @Prop()
  public todayTwoSideRecords!: any;

  public isTodayTwoSideNumberStaticShowed: boolean = false;
  public isAccumulationRemiderShowed: boolean = false;
  public isNumberAnalysisShowed: boolean = false;

  public onNumbers: {
    [key: string]: boolean,
  } = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  };

  public onOddOrEvenOrSmallOrLargeOrPairRedcords: {
    [key: string]: boolean,
  } = {
    odd: false,
    even: false,
    small: false,
    large: false,
    pair: false,
  };

  public toggleTodayTwoSideNumberStatics(): void {
    this.isTodayTwoSideNumberStaticShowed = !this.isTodayTwoSideNumberStaticShowed;
  }

  public toggleAccumulationRemider(): void {
    this.isAccumulationRemiderShowed = !this.isAccumulationRemiderShowed;
  }

  public toggleNumberAnalysis(): void {
    this.isNumberAnalysisShowed = !this.isNumberAnalysisShowed;
  }

  public toggleNumber(sKey: string) {
    let iNumber: any = Number(sKey);
    // let toggleNumber: {
    //   [sKey: string]: any,
    // } = {};
    this.onNumbers[iNumber] = !this.onNumbers[iNumber];
  }

  public toggleOddOrEven(sKey: string) {
   let iKey = String(sKey);
  //  let toggleOddOrEven: {
  //     [sKey: string]: any,
  //   } = {};
   this.onOddOrEvenOrSmallOrLargeOrPairRedcords[iKey] = !this.onOddOrEvenOrSmallOrLargeOrPairRedcords[iKey];
  // debugger;
  }
}

export default LotteryIssue;
</script>
