<template>
  <div class="top background-white">
    <div class="icon p-2 align-middle d-inline-block d-xs-none">
      <div :class="['icon-' + lotteries[lotteryIssue.lottery_id].code.toLowerCase() + '-circle']">
      </div>
    </div>
    <div class="name-lottery_issue_no d-inline-block">
      <span class="name font-weight-bold ">
        {{ lotteryIssue.name }}
      </span>
      <span class="no font-weight-bold">
        {{ lotteryIssue.no }}
      </span>
      <span class="name font-weight-bold">
        期
      </span>
      <span class="this-and-next">
        当前&nbsp;{{ lotteryIssue.order_no_in_this_day }}&nbsp;期，剩&nbsp;{{ lotteryIssue.order_no_total_in_this_day - lotteryIssue.order_no_in_this_day }}&nbsp;期
      </span>
    </div>
    <div class="countdown d-inline-block">
      距733036期开奖仅有
    </div>

    <div class="sounds d-inline-block">
      <I-button :type="'warning'" class="d-block mb-1">关闭声音</I-button>
      <I-button :type="'warning'" class="d-block">铃声设置</I-button>
    </div>
    <div class="live d-inline-block">
      <div :class="['live-' + lotteries[lotteryIssue.lottery_id].type.toLowerCase()]">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import IButton from '@/Components/IButton/Index.vue';
import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';

@Component({
  components: {
    IButton,
  },
})
class Top extends Vue {
  @Prop()
  public lotteryIssue!: any;
  /**
   * 后端所有的 API lottery 数据
   */
  @Prop()
  public lotteries!: any;
}

export default Top;
</script>
