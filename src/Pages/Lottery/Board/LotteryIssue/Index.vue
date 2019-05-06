<template>
  <div class="lottery-issue">
    <div class="top p-1 font-weight-bold">
      <span class="title">即时开奖</span>
      <I-button class="ml-2" @click="toggleTodayTwoSideNumberStatics()">今日双面/号码统计</I-button>
      <I-button class="ml-2">长龙提醒</I-button>
      <I-button class="ml-2">号码分析</I-button>
    </div>
    <Today-two-side-number-statics v-show="isTodayTwoSideNumberStatic" class="p-1"/>
    <Accumulation-remider class="p-1"/>
    <Number-analysis class="p-1"/>
    <Table class="p-1"/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
  public isTodayTwoSideNumberStatic: boolean = true;
  public toggleTodayTwoSideNumberStatics (): void{
    debugger;
    this.isTodayTwoSideNumberStatic = !this.isTodayTwoSideNumberStatic;
  }
}

export default LotteryIssue;
</script>
