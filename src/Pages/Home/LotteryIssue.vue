<template>
  <div class="lottery-issue">
    <E-tabs>
      <!-- <el-tab-pane label="全部">
        <div class="lotteries">
          <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId" />
        </div>
      </el-tab-pane> -->
      <el-tab-pane label="热门彩">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-if="['SSC'].includes(oLotteryIssue.types)"/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="PK10">
        <div class="lotteries">
          <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-show="'PK10' == oLotteryIssue.types"  v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="时时彩">
        <div class="lotteries">
          <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-show="'SSC' == oLotteryIssue.types"  v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="11选5">
        <div class="lotteries">
          <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-show="'11X5' == oLotteryIssue.types"  v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="快乐十分">
        <div class="lotteries">
          <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-show="'KLSF' == oLotteryIssue.types"  v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="快3">
        <div class="lotteries">
          <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-show="'K3' == oLotteryIssue.types"  v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="其它">
        <div class="lotteries">
          <LotteryIssueOfHome v-bind:lotteryIssue="oLotteryIssue" v-show="'KL8' == oLotteryIssue.types || 'XY28' == oLotteryIssue.types"  v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId"/>
        </div>
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
