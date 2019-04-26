<template>
  <div class="lottery-issue-board">
    <I-tabs>
      <!-- <TabPane label="全部" name="all">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue v-bind:lotteryIssue="oLotteryIssue"/>
          </div>
        </div>
      </TabPane> -->
      <TabPane label="热门彩" name="popular">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue v-bind:lotteryIssue="oLotteryIssue" v-if="['SSC'].includes(oLotteryIssue.types)"/>
          </div>
        </div>
      </TabPane>
      <TabPane label="PK10" name="pk10">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue v-bind:lotteryIssue="oLotteryIssue" v-if="['PK10'].includes(oLotteryIssue.types)"/>
          </div>
        </div>      </TabPane>
      <TabPane label="时时彩" name="ssc">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue v-bind:lotteryIssue="oLotteryIssue" v-if="['SSC'].includes(oLotteryIssue.types)"/>
          </div>
        </div>
      </TabPane>
      <TabPane label="11选5" name="11x5">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue v-bind:lotteryIssue="oLotteryIssue" v-if="['11X5'].includes(oLotteryIssue.types)"/>
          </div>
        </div>
      </TabPane>
      <TabPane label="快乐十分" name="klsf">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue v-bind:lotteryIssue="oLotteryIssue" v-if="['KLSF'].includes(oLotteryIssue.types)"/>
          </div>
        </div>
      </TabPane>
      <TabPane label="快3" name="k3">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue v-bind:lotteryIssue="oLotteryIssue" v-if="['K3'].includes(oLotteryIssue.types)"/>
          </div>
        </div>
      </TabPane>
      <TabPane label="其它" name="other">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue v-bind:lotteryIssue="oLotteryIssue" v-if="['KL8', 'XY28'].includes(oLotteryIssue.types)"/>
          </div>
        </div>
      </TabPane>
    </I-tabs>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import ETabPane from '@/Components/ETabPane/Index.vue';
import ETable from '@/Components/ETable/Index.vue';
import ITabs from '@/Components/ITabs/Index.vue';
import ITabPane from '@/Components/ITabPane/Index.vue';

import LotteryIssue from './LotteryIssue/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'LotteryIssueBaord',
  components: {
    ITabs,
    ETabPane,
    ETable,
    LotteryIssue,
  },
})
class LotteryIssueBaord extends Vue {
  @Prop()
  public lotteryIssues!: object;
}

export default LotteryIssueBaord;
</script>
