<template>
  <div class="lottery-issue mb-4">
    <div class="pseudo">
      <div class="top position-relative">
        <span class="icon align-middle d-inline-block">
          <img :src="require(`@/assets/images/` + `${lotteryIssue.code}` + `-sm.png`)" />
        </span>
        <span class="name-issue_no-numbers align-middle d-inline-block">
          <div class="top">
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
          <div class="bottom">
            <Numbers :code="lotteryIssue.code" :numbers="lotteryIssue.numbers" :types="lotteryIssue.types"/>
          </div>
        </span>
        <span class="countdown d-inline-block align-bottom position-absolute">
          <ChenCountdown :time="lotteryIssue.next_time * 1000" :theme="'theme-a'"/>
        </span>
      </div>
      <div class="middle mb-2" >
        <E-table :data="[{'sum1': 19, 'sum2': '单', 'sum3': '小', 'dragon_tiger': '虎', 'top_three': '对子', 'middle_three': '豹子', 'last_three': '对子'}]">
          <el-table-column prop="sum1" label="-">
          </el-table-column>
          <el-table-column prop="sum2" label="总和">
          </el-table-column>
          <el-table-column prop="sum3" label="-">
          </el-table-column>
          <el-table-column prop="dragon_tiger" label="龙虎">
          </el-table-column>
          <el-table-column prop="top_three" label="前三">
          </el-table-column>
          <el-table-column prop="middle_three" label="中三">
          </el-table-column>
          <el-table-column prop="last_three" label="后三">
          </el-table-column>
        </E-table>
      </div>
      <div class="bottom text-right">
        <router-link class="" :to="{ path: '/trend', query: { type: 1 }}">
          开奖视频
        </router-link>
        <router-link class="" :to="{ path: '/trend', query: { type: 2 }}">
          路珠分析
        </router-link>
        <router-link class="" :to="{ path: '/trend', query: { type: 3 }}">
          定位走势
        </router-link>
        <router-link class="" :to="{ path: '/trend', query: { type: 4 }}">
          长龙提醒
        </router-link>
        <router-link class="" :to="{ path: '/trend', query: { type: 5 }}">
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
import Numbers from '@/ComponentsViaSelf/Numbers/Index.vue';
import ChenCountdown from '@/Components/ChenCountdown/Index.vue';

@Component({
  name: 'LotteryIssueOfHome',
  components: {
    ETabs,
    ETabPane,
    ETable,
    Numbers,
    ChenCountdown
  }
})
class LotteryIssueOfHome extends Vue {
  @Prop()
  public lotteryIssue!: object;
}
export default LotteryIssueOfHome;

</script>