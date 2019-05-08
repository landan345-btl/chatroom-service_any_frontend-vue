<template>
  <div class="summation-result">
    <div class="top p-1 font-weight-bold">
      <span class="title">总和路珠</span>
      <I-date-picker />
    </div>
    <div class="middle p-2">
      <div class="odd-even-pannel d-flex flex-column flex-wrap align-self-end align-content-end mb-2">
        <div 
          v-for="(oLotteryIssue, sKey, iIndex) in lotteryIssues" :key="iIndex" 
          :class="['单' === isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers))) ? 'odd' : '', 
                   '双' === isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers))) ? 'even' : '',      ]"
          v-line-break-if-different>
          {{ oLotteryIssue.numbers | JSONparse | sum | isOddOrEven }}
          
        </div>
      </div>
      <div class="small-large-pannel d-flex flex-column flex-wrap align-self-end align-content-end mb-2">
        <div v-for="(oLotteryIssue, sKey, iIndex) in lotteryIssues" :key="iIndex"
          :class="['小' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)), 22, 23) ? 'small' : '', 
                   '大' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)), 22, 23) ? 'large' : '',      ]"
          v-line-break-if-different>
          {{ oLotteryIssue.numbers | JSONparse | sum | isSmallOrLarge(22, 23) }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import ITabs from '@/Components/ITabs/Index.vue';
import IDatePicker from '@/Components/IDatePicker/Index.vue';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'SummationResult',
  components: {
    ITabs,
    IDatePicker,
  },
})
class SummationResult extends Vue {
  @Prop()
  public lotteryIssues!: any;
}

export default SummationResult;
</script>
