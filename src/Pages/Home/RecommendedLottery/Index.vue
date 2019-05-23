<template>
  <div class="recommended-lottery text-center pt-2 pr-1 pb-2 pl-1">
    <div class="title mb-2">
      <div class="font-weight-bold">推荐采种</div>
      <div class="mt-1">
        <span class="line"></span><span class="subtile">RECOMMENDED LOTTERY</span><span class="line"></span>
      </div>
    </div>
    <div class="lotteries">
      <router-link class="lottery d-inline-block" :to="{ path: '/lottery', query: { code: `${oLottery.code}` }}"  v-for="(oLottery, iLotteryId, iIndex) in lotteries" :key="iLotteryId"  v-show="15 > iIndex">
        <div class="icon">
          <div :class="['icon-' + oLottery.code.toLowerCase() ]">
          </div>
        </div>
        <div class="name">
          {{ LOTTERIES[oLottery.code].NAME | or(oLottery.name) }}
        </div>
      </router-link>

    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import {
  Component,
  Watch,
  Vue,
  Prop,
} from 'vue-property-decorator';

import {
  warn,
} from 'vue-class-component/lib/util';

@Component({
  name: 'RecommendedLottery',
  components: {
  },
})
class RecommendedLottery extends Vue {
  @Prop()
  public lotteries!: object;
}

export default RecommendedLottery;
</script>
