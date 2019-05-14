<template>
  <div class="lottery-issue mt-sm-2 mb-sm-2 mt-md-2 mb-md-2 mt-lg-2 mb-lg-2 mt-xl-2 mb-xl-2">
    <div class="pseudo">
      <div class="top mb-1 position-relative">
        <div class="icon p-2 align-middle d-inline-block d-xs-none">
          <div :class="['icon-' + lotteries[lotteryIssue.lottery_id].code.toLowerCase() + '-circle']">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<style lang="scss">
@import 'Index.scss';
</style>

<script lang="ts">
import { 
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'LotteryIssue',
  components: {
  },
})
class LotteryIssue extends Vue {
  @Prop()
  public lotteryIssue!: object;

  @Prop()
  public lotteries!: any;
}
export default LotteryIssue;

</script>