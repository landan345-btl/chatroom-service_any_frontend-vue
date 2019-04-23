<template>
  <div class="lottery-issue">
    <E-tabs>
      <el-tab-pane label="全部">
        <div class="lotteries">
          <div class="lottery" v-for="(oLotteryIssue, iLotteryIssueId) in lotteryIssues" :key="iLotteryIssueId" >
            <div class="pseudo">
              <div class="top position-relative">
                <span class="icon align-middle d-inline-block">
                  <img :src="require(`@/assets/images/` + `CQKLSF-sm.png`)" />
                </span>
                <span class="name-issue_no-numbers align-middle d-inline-block">
                  <div class="top">
                    <span class="name font-weight-bold ">
                      重庆幸运农场
                    </span>
                    <span class="no font-weight-bold">
                      20190423025
                    </span>
                    <span class="name font-weight-bold">
                      期
                    </span>
                    <span class="this-and-next">
                      当前25期，剩34期
                    </span>
                  </div>
                  <div class="bottom">
                    <Numbers :code="'CQKLSF'" :numbers="[1,4,5,7,0, 2]"/>
                  </div>
                </span>
                <span class="countdown d-inline-block align-bottom position-absolute">
                  <ChenCountdown />
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
        </div>
      </el-tab-pane>
      <el-tab-pane label="热门彩">
        <div class="lotteries">
          <div class="lottery">
            <div class="top">

            </div>
            <div class="middle">
              
            </div>
            <div class="bottom">
              
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="PK10">
        PK10
      </el-tab-pane>
      <el-tab-pane label="时时彩">
        CCS
      </el-tab-pane>
      <el-tab-pane label="11选5">
        11X5
      </el-tab-pane>
      <el-tab-pane label="快乐十分">
        KLSF
      </el-tab-pane>
      <el-tab-pane label="快3">
        K3
      </el-tab-pane>
      <el-tab-pane label="其它">
        Other
      </el-tab-pane>
    </E-tabs>
  </div>
</template>
<style scoped lang="scss">
@import 'LotteryIssue-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import ETabs from '@/Components/ETabs/Index.vue';
import ETabPane from '@/Components/ETabPane/Index.vue';
import ETable from '@/Components/ETable/Index.vue';
import Numbers from '@/Components/Numbers/Index.vue';
import ChenCountdown from '@/Components/ChenCountdown/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'LotteryIssue',
  components: {
    ETabs,
    ETabPane,
    ETable,
    Numbers,
    ChenCountdown,
  },
})
class LotteryIssue extends Vue {
  @Prop()
  public lotteryIssues: object = {};
}

export default LotteryIssue;
</script>
