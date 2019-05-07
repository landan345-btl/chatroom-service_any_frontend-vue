<template>
  <div class="top background-white d-flex justify-content-between align-self-center">
    <div class="icon p-2 align-middle d-inline-block d-xs-none">
      <div :class="['icon-' + code.toLowerCase() + '-circle']">
      </div>
    </div>
    <div class="name-lottery_issue_no align-middle text-left">
      <div>
        <span class="name font-weight-bold">
          {{ LOTTERIES[code].NAME | or(lottery.name) }}
        </span>
        <span class="text" v-if="lotteryIssue && lotteryIssue.no">
          第
        </span>
        <span class="no" v-if="lotteryIssue && lotteryIssue.no">
          &nbsp; {{ lotteryIssue.no }} &nbsp;
        </span>
        <span class="text">
          期开奖号码
        </span>
      </div>
      <Numbers v-if="lotteryIssue" :code="code" :numbers="JSON.parse(lotteryIssue.numbers)" :types="lottery.types"/>
    </div>
    <div class="countdown align-middle">
      距733036期开奖仅有
    </div>

    <div class="sounds align-middle">
      <div>
        <I-button :type="'warning'" class="d-inline-block mb-1">关闭声音</I-button><font-awesome-icon icon="volume-up" class="d-inline-block ml-1"/>
      </div>
      <div>
        <I-button :type="'warning'" class="d-inline-block">铃声设置</I-button><font-awesome-icon icon="music" class="d-inline-block ml-1"/>
      </div>
    </div>
    <div class="live align-middle">
      <div :class="[types ? 'live-' + types.toLowerCase() : '']">
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
import Numbers from '@/Components/Numbers/Index.vue';
import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';

@Component({
  components: {
    IButton,
    Numbers,
  },
})
class Top extends Vue {
  @Prop()
  public lotteryIssue!: any;
  /**
   * 后端所有的 API lottery 数据
   */
  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;
}

export default Top;
</script>
