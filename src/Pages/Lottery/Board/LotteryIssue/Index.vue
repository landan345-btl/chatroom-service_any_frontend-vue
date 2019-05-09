<template>
  <div class="lottery-issue">
    <div class="top p-1 font-weight-bold">
      <span class="title">即时开奖</span>
      <I-button class="ml-2" v-on:handle-click="toggleTodayTwoSideNumberStatics()" v-if="['11X5','SSC' , 'PK10'].includes(types)">今日双面/号码统计</I-button>
      <I-button class="ml-2" v-on:handle-click="toggleAccumulationRemider()" v-if="['11X5','SSC' , 'PK10'].includes(types)">长龙提醒</I-button>
      <I-button class="ml-2" v-on:handle-click="toggleNumberAnalysis()" v-if="['11X5','SSC' , 'PK10'].includes(types)">号码分析</I-button>
    </div>
    <Today-two-side-number-statics v-show="isTodayTwoSideNumberStaticShowed" class="p-2"/>
    <Accumulation-remider v-show="isAccumulationRemiderShowed" class="p-2"/>
    <Number-analysis :types="types" v-show="isNumberAnalysisShowed" @handle-toggle-number="toggleNumber" class="p-2" :onNumbers="onNumbers"/>
    <Table :lotteryIssues="lotteryIssues" :lottery="lottery" :code="code" :types="types" class="p-2" :onNumbers="onNumbers"/>
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

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
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

  public onNumbers: object = {
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

  @Emit('bind-send')
  public send(onNumbers: any ) {
    return onNumbers;
  }

  public toggleNumber(sKey: string) {
    let iNumber = Number(sKey);
    this.onNumbers[iNumber] = true;
  }
}

export default LotteryIssue;
</script>
