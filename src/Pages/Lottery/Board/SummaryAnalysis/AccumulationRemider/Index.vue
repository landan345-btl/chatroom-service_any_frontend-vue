<template>
 <div class="accumulation-remider pl-2 pb-2 pr-2 pt-1">
    <div class="font-size-2">长龙连开提醒</div>
    <div class="remind">
      <p>
        <span v-for=" item in 13" :key="item" class="mr-3 mt-1 text-center d-inline-block">
          <span>亚军</span>：
          <span class="mr-1 ml-1">双</span>
          <span class="color-red mr-1">6</span>期
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
