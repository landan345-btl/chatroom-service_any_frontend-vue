<template>
  <div class="lottery-issue-and-table mt-sm-2 mb-sm-2 mt-md-2 mb-md-2 mt-lg-2 mb-lg-2 mt-xl-2 mb-xl-2">
    <div class="pseudo">
      <LotteryIssue :lotteries="lotteries" :lotteryIssue="lotteryIssue"/>
      <div class="middle mb-2" >
        <Table :lotteryIssue="lotteryIssue" class=""/>
      </div>
      <div class="bottom text-right">
        <router-link class="" :to="{ path: '/live', query: { code: lotteries[lotteryIssue.lottery_id].code }}">
          开奖视频
        </router-link>
        <router-link class="" :to="{ path: '/lottery', query: { code: lotteries[lotteryIssue.lottery_id].code, tab: 'RESULT' }}">
          路珠分析
        </router-link>
        <router-link class="" :to="{ path: '/lottery', query: { code: lotteries[lotteryIssue.lottery_id].code, tab: 'POSITION' }}">
          定位走势
        </router-link>
        <router-link class="" :to="{ path: '/lottery', query: { code: lotteries[lotteryIssue.lottery_id].code, tab: 'ACCUMULATION' }}">
          长龙提醒
        </router-link>
        <router-link class="" :to="{ path: '/lottery', query: { code: lotteries[lotteryIssue.lottery_id].code, tab: 'POPULAR' }}">
          冷热分析
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
  Prop,
  Vue,
} from 'vue-property-decorator';

import Table from './Table/Index.vue';
import LotteryIssue from './LotteryIssue/Index.vue';

import {
  Lottery as LotteryMixin,
} from '@/Mixins/';

@Component({
  name: 'LotteryIssueAndTable',
  components: {
    Table,
    LotteryIssue,
  },
  mixins: [LotteryMixin],
})
class LotteryIssueAndTable extends Vue {
  @Prop()
  public lotteryIssue!: object;

  @Prop()
  public lotteries!: object;
}
export default LotteryIssueAndTable;

</script>