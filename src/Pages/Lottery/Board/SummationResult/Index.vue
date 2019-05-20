<template>
  <div class="summation-result">
    <div class="pl-2 pr-2 font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">总和路珠</span>
      <span class="date-selection text-right">
        <RadioGroup v-model="date" type="button" class="line-height3">
        <Radio label="今天" class="mr-1"></Radio>
        <Radio label="昨天" class="mr-1"></Radio>
        <Radio label="前天" class="mr-1"></Radio>
      </RadioGroup>
      </span>
      <span class="float-right mt-1">
        <I-date-picker />
      </span>
    </div>
    <I-divider/>
    <div class="p-2">
      <div>
        <Result-table />
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
  Vue,
  Prop,
} from 'vue-property-decorator';

import {
  IDatePicker,
  IDivider,
  ResultTable,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'SummationResult',
  components: {
    IDatePicker,
    ResultTable,
    IDivider,
  },
})
class SummationResult extends Vue {
  public date = 0;

  @Prop()
  public lotteryIssues!: any;

  public get getSummationResults(): void {
    let oLotteryIssues: any = this.$store.state.lottery_issues;
    let aLotteryIssues: any = Object.values(oLotteryIssues);
    let iIndex;
    for (iIndex = 0 ; iIndex < aLotteryIssues.length ; iIndex++ ) {
      let aNumbers = JSON.parse(aLotteryIssues[iIndex].numbers);
    }
    return;
  }
}

export default SummationResult;
</script>
