<template>
  <div class="accumulation-remider">
    <div class="font-size-2p5">长龙连开提醒</div>
    <div class="remind">
      <p>
        <span v-for=" item in 13" :key="item" class="mr-3 mt-1 text-center">
          <span>亚军</span>:
            &nbsp;&nbsp;
          <span>双</span>
            &nbsp;&nbsp;
          <span class="color-red">6&nbsp;&nbsp;</span>期
        </span>
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'AccumulationRemider',
  components: {
  },
})
class AccumulationRemider extends Vue {
}

export default AccumulationRemider;
</script>
