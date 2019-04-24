<template>
  <div class="lottery-issue">
    <E-tabs>
      <el-tab-pane label="全部">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue"/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="热门彩">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-if="['CCS'].includes(oLotteryIssue.types)"/>
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
import LotteryIssueOfHome from '@/ComponentsViaSelf/LotteryIssueOfHome/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'LotteryIssue',
  components: {
    ETabs,
    ETabPane,
    ETable,
    LotteryIssueOfHome,
  },
})
class LotteryIssue extends Vue {
  @Prop()
  public lotteryIssues: object = {};
}

export default LotteryIssue;
</script>
