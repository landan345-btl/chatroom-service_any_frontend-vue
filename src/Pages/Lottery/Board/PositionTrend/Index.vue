<template>
  <div class="positon-trend">
    <div class="top p-1 font-weight-bold">
      <span class="title">定位走势</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ITabs from '@/Components/ITabs/Index.vue';

import {
  LOTTERIES
} from '@/CONFIGS/';

@Component({
  name: 'PositionTrend',
  components: {
    ITabs,
  },
})
class PositionTrend extends Vue {

}

export default PositionTrend;
</script>
