<template>
  <div class="summation-result">
    <div class="top p-1 font-weight-bold">
      <span class="title">总和路珠</span>
    </div>
    <div class="middle">
      <div v-for="(oLotteryIssue, sKey) in lotteryIssues" :key="sKey">
        {{ oLotteryIssue.numbers | JSONparse | sum | isOddOrEven }}
      </div>
      <div v-for="(oLotteryIssue, sKey) in lotteryIssues" :key="sKey">
        {{ oLotteryIssue.numbers | JSONparse | sum | isSmallOrLarge(22, 23) }}
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

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'SummationResult',
  components: {
    ITabs,
  },
})
class SummationResult extends Vue {
  @Prop()
  public lotteryIssues!: any;
}

export default SummationResult;
</script>
