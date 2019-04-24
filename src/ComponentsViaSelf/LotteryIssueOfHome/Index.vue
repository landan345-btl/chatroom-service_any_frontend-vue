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
        <E-table :data="[{
          'tiger_or_dragon_1': '龙', 
          'tiger_or_dragon_2': '虎', 
          'tiger_or_dragon_3': '龙', 
          'tiger_or_dragon_4': '虎', 
          'tiger_or_dragon_5': '龙', 
          'sum_1': '17', 
          'sum_2': '大',
          'sum_3': '单',
          }]" v-if="'PK10' == lotteryIssue.types">
          <el-table-column prop="tiger_or_dragon_1" label="">
          </el-table-column>
          <el-table-column prop="tiger_or_dragon_2" label="">
          </el-table-column>
          <el-table-column prop="tiger_or_dragon_3" label="1-5龙虎">
          </el-table-column>
          <el-table-column prop="tiger_or_dragon_4" label="">
          </el-table-column>
          <el-table-column prop="tiger_or_dragon_5" label="">
          </el-table-column>
          <el-table-column prop="sum_1" label="">
          </el-table-column>
          <el-table-column prop="sum_2" label="冠亚和">
          </el-table-column>
          <el-table-column prop="sum_3" label="">
          </el-table-column>
        </E-table>
        <E-table :data="[{
          'sum_1': 19, 
          'sum_2': '单', 
          'sum_3': '小', 
          'dragon_tiger': '虎', 
          'top_three': '对子', 
          'middle_three': '豹子', 
          'last_three': '对子'
          }]" v-if="'SSC' == lotteryIssue.types">
          <el-table-column prop="sum_1" label="">
          </el-table-column>
          <el-table-column prop="sum_2" label="总和">
          </el-table-column>
          <el-table-column prop="sum_3" label="">
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
        <E-table :data="[{
          'sum_1': 19, 
          'sum_2': '单', 
          'sum_3': '小', 
          'top_three': '对子', 
          'middle_three': '豹子', 
          'last_three': '对子'
          }]" v-if="'11X5' == lotteryIssue.types">
          <el-table-column prop="sum_1" label="">
          </el-table-column>
          <el-table-column prop="sum_2" label="总和">
          </el-table-column>
          <el-table-column prop="sum_3" label="">
          </el-table-column>
          <el-table-column prop="top_three" label="前三">
          </el-table-column>
          <el-table-column prop="middle_three" label="中三">
          </el-table-column>
          <el-table-column prop="last_three" label="后三">
          </el-table-column>
        </E-table>
        <E-table :data="[{
          'sum_1': 19, 
          'sum_2': '单', 
          'sum_3': '小', 
          'top_three': '对子', 
          'middle_three': '豹子', 
          'last_three': '对子'
          }]" v-if="'KLSF' == lotteryIssue.types">
          <el-table-column prop="sum_1" label="">
          </el-table-column>
          <el-table-column prop="sum_2" label="总">
          </el-table-column>
          <el-table-column prop="sum_3" label="和">
          </el-table-column>
          <el-table-column prop="sum_4" label="">
          </el-table-column>
          <el-table-column prop="tiger_or_dragon_1" label="">
          </el-table-column>
          <el-table-column prop="tiger_or_dragon_2" label="1-4">
          </el-table-column>
          <el-table-column prop="tiger_or_dragon_3" label="龙虎">
          </el-table-column>
          <el-table-column prop="tiger_or_dragon_4" label="">
          </el-table-column>
        </E-table>
        <E-table :data="[{
          'sum_1': 19, 
          'sum_2': '单', 
          'sum_3': '小', 
          'top_three': '对子', 
          'middle_three': '豹子', 
          'last_three': '对子'
          }]" v-if="'K3' == lotteryIssue.types">
          <el-table-column prop="sum_1" label="">
          </el-table-column>
          <el-table-column prop="sum_2" label="总和">
          </el-table-column>
          <el-table-column prop="sum_3" label="">
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