<template>
  <div class="result-analysis">
    <div class="top p-1 font-weight-bold">
      <span class="title">路珠分析</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'ResultAnalysis',
  components: {
  },
})
class ResultAnalysis extends Vue {

}

export default ResultAnalysis;
</script>
