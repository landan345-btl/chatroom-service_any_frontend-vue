<template>
  <div class="lottery-issue mb-2 position-relative">
    <router-link class="icon align-middle d-inline-block d-xs-none" :to="{ path: '/lottery', query: { code: lotteries[lotteryIssue.lottery_id].code }}">
      <div :class="[lotteryIssue && lotteryIssue.lottery_id && lotteries && lotteries[lotteryIssue.lottery_id] && lotteries[lotteryIssue.lottery_id].code ? 'icon-' + lotteries[lotteryIssue.lottery_id].code.toLowerCase() + '-circle' : '']">
      </div>
      </router-link>
    <router-link class="name-issue_no-numbers align-middle d-inline-block" :to="{ path: '/lottery', query: { code: lotteries[lotteryIssue.lottery_id].code }}">
      <div class="top">
        <span class="name font-weight-bold ml-0p5">
          {{ LOTTERIES[lotteries[lotteryIssue.lottery_id].code].NAME | or(lotteries[lotteryIssue.lottery_id].name) }}
        </span>
        <span class="no font-weight-bold ml-0p5">
          {{ lotteryIssue.no }}
        </span>
        <span class="name font-weight-bold ml-0p5">
          期
        </span>
        <span class="this-and-next ml-0p5">
          当前&nbsp;{{ extensionLotteryIssue.order_no_in_this_day }}&nbsp;期，剩&nbsp;{{ extensionLotteryIssue.order_total_no - extensionLotteryIssue.order_no_in_this_day }}&nbsp;期
        </span>
      </div>
      <div class="bottom">
        <S-numbers 
          :code="lotteries[lotteryIssue.lottery_id].code" 
          :numbers="JSON.parse(lotteryIssue.numbers)" 
          :types="lotteries[lotteryIssue.lottery_id].types"
          :isRandom="true"
          class="status-number"/>
      </div>
    </router-link>
    <span class="countdown d-inline-block align-bottom position-absolute">
      <Chen-countdown :time="extensionLotteryIssue.next_time * 1000" :theme="'theme-a'"/>
    </span>
  </div>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import {
  ChenCountdown,
  SNumbers,
} from '@/Components/';

import {
  Lottery as LotteryMixin,
} from '@/Mixins/';

@Component({
  name: 'LotteryIssue',
  components: {
    SNumbers,
    ChenCountdown,
  },
  mixins: [LotteryMixin],
})
class LotteryIssue extends Vue {
  @Prop()
  public lotteryIssue!: any;

  @Prop()
  public lotteries!: any;

  public caculateLotteryIssueExtension!: any;
  
  public beforeMount() {
    this.caculateLotteryIssueExtension(this.lotteryIssue.opened_time, this.lotteries[this.lotteryIssue.lottery_id]);
  }

}
export default LotteryIssue;

</script>