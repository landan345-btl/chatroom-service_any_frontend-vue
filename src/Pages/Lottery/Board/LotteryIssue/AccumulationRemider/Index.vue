<template>
  <div class="accumulation-remider">
    <div class="title">长龙连开提醒</div>
    <div class="remind">
      <ul>
        <li v-for=" item in 13" :key="item">
          <span>亚军</span>:
            &nbsp;&nbsp;
          <span>双</span>
            &nbsp;&nbsp;
          <span class="color-red">6&nbsp;&nbsp;</span>期
        </li>
      </ul>
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
  name: 'AccumulationRemider',
  components: {
  },
})
class AccumulationRemider extends Vue {
}

export default AccumulationRemider;
</script>
