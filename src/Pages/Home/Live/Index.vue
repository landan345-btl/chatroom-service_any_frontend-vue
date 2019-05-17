<template>
  <div class="live background-white pt-2 pr-2 pb-1 pl-2">
    <div class="lotteries d-flex flex-wrap justify-content-between overflow-hidden">
      <template v-for="(oLotteryIssue, sKey) in lotteryIssues">
        <div class="lottery" v-if="lotteries && oLotteryIssue && codes.includes(lotteries[oLotteryIssue.lottery_id].code.toUpperCase())" :key="sKey">
          <router-link 
            class="text-center"
            :to="{ path: '/lottery', query: { code: lotteries && oLotteryIssue ? lotteries[oLotteryIssue.lottery_id].code.toUpperCase() : ''}}">
            <div :class="[lotteries && oLotteryIssue ? 'live-' + lotteries[oLotteryIssue.lottery_id].types.toLowerCase() : '']">
            </div>
            <Chen-countdown :time="calculateNextTime(oLotteryIssue.opened_time, lotteries[oLotteryIssue.lottery_id]) * 1000" :theme="'theme-a'" class="d-block mt-1" :text="'倒计时:'">
            </Chen-countdown>
          </router-link>
        </div>
      </template>

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

import {
  Lottery as LotteryMixin,
} from '@/Mixins/';

@Component({
  name: 'Live',
  components: {
    ChenCountdown,
  },
  mixins: [LotteryMixin],
})
class Live extends Vue {

  public codes: string[] = [
    'CQSSC', 'BJPK10', 'FFPK10', 'JSK3',
  ];

  @Prop()
  public lotteryIssues!: object;

  @Prop()
  public lotteries!: { [key: string]: any };

}

export default Live;
</script>