<template>
  <div class="live background-white pt-2 pr-2 pb-1 pl-2">
    <div class="lotteries d-flex flex-wrap justify-content-between overflow-hidden"> 
      <div class="lottery" v-for="(oLotteryIssue, iIndex) in lotteryIssues" :key="iIndex" v-if="iIndex < 4">
        <router-link 
          class="text-center"
          :to="{ path: '/lottery', query: { code: lotteries && oLotteryIssue ? lotteries[oLotteryIssue.lottery_id].code.toUpperCase() : ''}}">
          <div :class="[lotteries && oLotteryIssue ? 'live-' + lotteries[oLotteryIssue.lottery_id].types.toLowerCase() : '']">
          </div>
          <Chen-countdown :time="oLotteryIssue.next_time * 1000" :theme="'theme-a'" class="d-block mt-1" :text="'倒计时:'">
          </Chen-countdown>
        </router-link>
      </div>
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

import {
  ChenCountdown,
} from '@/Components/';

@Component({
  name: 'Live',
  components: {
    ChenCountdown,
  },
})
class Live extends Vue {

  public images: string[] = [
    'assets/images/live-JSFT.png',
    'assets/images/live-3D.jpg',
    'assets/images/live-KLSF.png',
    'assets/images/live-K3.png',
    'assets/images/live-PK10.png',
    // 'assets/images/live-TJKSF.jpg',
    // 'assets/images/live-SD11X5.png',
  ];

  @Prop()
  public lotteryIssues!: object;

  @Prop()
  public lotteries!: object;
}

export default Live;
</script>