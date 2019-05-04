<template>
  <div class="lottery-issue mt-sm-2 mb-sm-2 mt-md-2 mb-md-2 mt-lg-2 mb-lg-2 mt-xl-2 mb-xl-2">
    <div class="pseudo">
      <div class="top mb-1 position-relative">
        <router-link class="icon align-middle d-inline-block d-xs-none" :to="{ path: '/lottery-issue', query: { code: lotteries[lotteryIssue.lottery_id].code }}">
          <div :class="['icon-' + lotteries[lotteryIssue.lottery_id].code.toLowerCase() + '-circle']">
          </div>
          </router-link>
        <router-link class="name-issue_no-numbers align-middle d-inline-block" :to="{ path: '/lottery-issue', query: { code: lotteries[lotteryIssue.lottery_id].code }}">
          <div class="top">
            <span class="name font-weight-bold ">
              {{ LOTTERIES[lotteries[lotteryIssue.lottery_id].code].NAME | or(lotteries[lotteryIssue.lottery_id].name) }}
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
          <div class="bottom">
            <Numbers :code="lotteries[lotteryIssue.lottery_id].code" :numbers="lotteryIssue.numbers" :types="lotteries[lotteryIssue.lottery_id].types"/>
          </div>
        </router-link>
        <span class="countdown d-inline-block align-bottom position-absolute">
          <Chen-countdown :time="lotteryIssue.next_time * 1000" :theme="'theme-a'"/>
        </span>
      </div>
      <div class="middle mb-2" >
        <Table :lotteryIssue="lotteryIssue" class=""/>
      </div>
      <div class="bottom text-right">
        <router-link class="" :to="{ path: '/live', query: { code: lotteries[lotteryIssue.lottery_id].code }}">
          开奖视频
        </router-link>
        <router-link class="" :to="{ path: '/trend/information', query: { code: lotteries[lotteryIssue.lottery_id].code, tab: 'RESULT' }}">
          路珠分析
        </router-link>
        <router-link class="" :to="{ path: '/trend/information', query: { code: lotteries[lotteryIssue.lottery_id].code, tab: 'POSITION' }}">
          定位走势
        </router-link>
        <router-link class="" :to="{ path: '/trend/information', query: { code: lotteries[lotteryIssue.lottery_id].code, tab: 'ACCUMULATION' }}">
          长龙提醒
        </router-link>
        <router-link class="" :to="{ path: '/trend/information', query: { code: lotteries[lotteryIssue.lottery_id].code, tab: 'POPULAR' }}">
          冷热分析
        </router-link>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import ETabs from '@/Components/ETabs/Index.vue';
import ETabPane from '@/Components/ETabPane/Index.vue';
import ETable from '@/Components/ETable/Index.vue';
import Numbers from './Numbers/Index.vue';
import Table from './Table/Index.vue';
import ChenCountdown from '@/Components/ChenCountdown/Index.vue';

@Component({
  name: 'LotteryIssue',
  components: {
    ETabs,
    ETabPane,
    ETable,
    Numbers,
    Table,
    ChenCountdown,
  },
})
class LotteryIssue extends Vue {
  @Prop()
  public lotteryIssue!: object;

  @Prop()
  public lotteries!: object;
}
export default LotteryIssue;

</script>