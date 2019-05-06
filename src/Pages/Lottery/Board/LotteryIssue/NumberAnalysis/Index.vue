<template>
  <div class="number-analysis">
    号码分析......
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
  name: 'TodayTwoSideNumberStatics',
  components: {
  },
})
class TodayTwoSideNumberStatics extends Vue {
}

export default TodayTwoSideNumberStatics;
</script>
