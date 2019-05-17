<template>
  <div class="lottery-issue-board">
    <I-tabs @on-click="console.log('I-tabs')">
      <!-- <TabPane label="全部" name="all">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries"/>
          </div>
        </div>
      </TabPane> -->
      <TabPane label="热门彩" name="popular">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <div v-if="oLotteryIssue && oLotteryIssue.lottery_id && ['SSC'].includes(lotteries[oLotteryIssue.lottery_id].types)">
              <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries"/>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="PK10" name="pk10">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <div v-if="oLotteryIssue && oLotteryIssue.lottery_id && ['PK10'].includes(lotteries[oLotteryIssue.lottery_id].types)">
              <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries" />
            </div>
          </div>
        </div>      </TabPane>
      <TabPane label="时时彩" name="ssc">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <div v-if="oLotteryIssue && oLotteryIssue.lottery_id && ['SSC'].includes(lotteries[oLotteryIssue.lottery_id].types)">
              <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries"/>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="11选5" name="11x5">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <div v-if="oLotteryIssue && oLotteryIssue.lottery_id && ['11X5'].includes(lotteries[oLotteryIssue.lottery_id].types)">
              <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries"/>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="快乐十分" name="klsf">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <div v-if="oLotteryIssue && oLotteryIssue.lottery_id && ['KLSF'].includes(lotteries[oLotteryIssue.lottery_id].types)">
              <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries"/>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="快3" name="k3">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <div v-if="oLotteryIssue && oLotteryIssue.lottery_id  && ['K3'].includes(lotteries[oLotteryIssue.lottery_id].types)">
              <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries"/>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="六合彩" name="six">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <div v-if="oLotteryIssue && oLotteryIssue.lottery_id && ['SIX'].includes(lotteries[oLotteryIssue.lottery_id].types)">
              <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries"/>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="其它" name="other">
        <div class="lotteries">
          <div v-for="(oLotteryIssue, sLotteryIssueId) in lotteryIssues" :key="sLotteryIssueId">
            <div v-if="oLotteryIssue && oLotteryIssue.lottery_id && !['PK10', 'SSC', '11X5', 'KLSF', 'K3', 'SIX'].includes(lotteries[oLotteryIssue.lottery_id].types)">
              <Lottery-issue-and-table :lotteryIssue="oLotteryIssue" :lotteries="lotteries"/>
            </div>
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

import LotteryIssueAndTable from './LotteryIssueAndTable/Index.vue';

@Component({
  name: 'LotteryIssueBaord',
  components: {
    ITabs,
    ETabPane,
    ETable,
    LotteryIssueAndTable,
  },
})
class LotteryIssueBaord extends Vue {
  @Prop()
  public lotteryIssues!: object;

  @Prop()
  public lotteries!: object;
}

export default LotteryIssueBaord;
</script>
