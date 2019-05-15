<template>
  <span class="toolbar d-inline-block">
   <p>
    <span>选择彩种</span>
   </p> 
    <ICollapse>
      <Panel>热门彩
        <p slot="content" v-for="(lotteryIssue, lotteryIssueId) in lotteries" :key="lotteryIssueId">
          <I-checkbox-group  v-if="['SSC'].includes(lotteryIssue.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[lotteryIssue.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel> PK10
        <p slot="content" v-for="(lotteryIssue, lotteryIssueId) in lotteries" :key="lotteryIssueId">
          <I-checkbox-group  v-if="['PK10'].includes(lotteryIssue.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[lotteryIssue.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>时时彩
        <p slot="content" v-for="(lotteryIssue, lotteryIssueId) in lotteries" :key="lotteryIssueId">
          <I-checkbox-group  v-if="['SSC'].includes(lotteryIssue.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[lotteryIssue.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>快乐十分
       <p slot="content" v-for="(lotteryIssue, lotteryIssueId) in lotteries" :key="lotteryIssueId">
          <I-checkbox-group  v-if="['KLSF'].includes(lotteryIssue.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[lotteryIssue.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>快3
        <p slot="content" v-for="(lotteryIssue, lotteryIssueId) in lotteries" :key="lotteryIssueId">
          <I-checkbox-group  v-if="['K3'].includes(lotteryIssue.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[lotteryIssue.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>11选5
        <p slot="content" v-for="(lotteryIssue, lotteryIssueId) in lotteries" :key="lotteryIssueId">
          <I-checkbox-group  v-if="['11X5'].includes(lotteryIssue.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[lotteryIssue.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>六合彩
        <p slot="content" v-for="(lotteryIssue, lotteryIssueId) in lotteries" :key="lotteryIssueId">
          <I-checkbox-group  v-if="['SIX'].includes(lotteryIssue.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[lotteryIssue.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>其他彩种
        <p slot="content" v-for="(lotteryIssue, lotteryIssueId) in lotteries" :key="lotteryIssueId">
          <I-checkbox-group  v-if="!['PK10', 'SSC', '11X5', 'KLSF', 'K3', 'SIX'].includes(lotteryIssue.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[lotteryIssue.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
    </ICollapse>
  </span>
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

import {
  ICollapse,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERIES,
  ICheckboxGroup,
} from '@/CONFIGS/';

@Component({
  name: 'Toolbar',
  components: {
    ICollapse,
  },
})
class Toolbar extends Vue {

  @Prop()
  public lotteries!: any;
 }
export default Toolbar;
</script>
