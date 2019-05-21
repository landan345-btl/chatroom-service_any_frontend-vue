<template>
  <div class="popular-analysis background-white">
    <div class="pl-2 font-weight-bold head-top">
      <span class="font-size-2 line-height3">冠亚和走势</span>
    </div>
    <I-divider/>
    <div class="bottom p-2">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import {
  SNumbers,
  ICheckboxGroup,
  IDivider,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'PopularAnalysis',
  components: {
    SNumbers,
    ICheckboxGroup,
    IDivider,
  },
})
class FirstAndSecondSummationTrend extends Vue {

}

export default FirstAndSecondSummationTrend;
</script>
