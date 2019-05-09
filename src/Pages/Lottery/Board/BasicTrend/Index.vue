<template>
  <div class="basic-trend">
    <div class="top p-1 font-weight-bold">
      <span class="title">基本走势</span>
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
  LOTTERIES,
} from '@/CONFIGS/';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'BasicTrend',
  components: {
    ITabs,
  },
})
class BasicTrend extends Vue {

}

export default BasicTrend;
</script>
