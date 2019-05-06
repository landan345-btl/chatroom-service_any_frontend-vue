<template>
  <div class="odd-or-even-small-or-large-result">
    <div class="top p-1 font-weight-bold">
      <span class="title">单双大小路珠</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'OddOrEvenSmallOrLargeResult',
  components: {
    ITabs,
  },
})
class OddOrEvenSmallOrLargeResult extends Vue {

}

export default OddOrEvenSmallOrLargeResult;
</script>
