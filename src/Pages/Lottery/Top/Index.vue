<template>
  <div class="top background-white">
    <Lottery-issue :lotteryIssue="lotteryIssue" :lotteries="lotteries"/>
    <div class="countdown">

    </div>

    <div class="sounds">
    </div>
    <div class="live">

    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LotteryIssue from './LotteryIssue/Index.vue';
import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';

@Component({
  components: {
    LotteryIssue,
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
