<template>
  <div class="dragon-or-tiger-trend">
    <div class="top p-1 font-weight-bold">
      <span class="title">龙虎走势</span>
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
  components: {
    ITabs,
  },
})
class DragonOrTigerTrend extends Vue {

}

export default DragonOrTigerTrend;
</script>
