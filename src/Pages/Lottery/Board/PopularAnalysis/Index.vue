<template>
  <div class="popular-analysis">
    <div class="top p-1 font-weight-bold">
      <span class="title">冷热分析</span>
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
import { VNodeDirective } from 'vue';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'PopularAnalysis',
  components: {
    ITabs,
  },
})
class PopularAnalysis extends Vue {
  @Prop()
  public lotteryIssues!: any;

}

export default PopularAnalysis;
</script>
