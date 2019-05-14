<template>
  <div class="summation-result">
    <div class="top p-1 font-weight-bold">
      <span class="title">总和路珠</span>
      <span class="ml-3">
        <el-radio-group v-model="radio1">
          <el-radio-button label="今天"></el-radio-button>
          <el-radio-button label="昨天"></el-radio-button>
          <el-radio-button label="前天"></el-radio-button>
        </el-radio-group>
      </span>
      <span class="float-right mt-2 mr-1">
        <span class="mr-1">选择日期</span>
        <I-date-picker />
      </span>
    </div>

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
} from '@/Components/';

import {
  ResultTable,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'SummationResult',
  components: {
    ResultTable,
  },
})
class SummationResult extends Vue {
  public radio1 = 0;

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
