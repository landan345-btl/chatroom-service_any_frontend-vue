<template>
  <div class="dragonOrTigerCount background-white">
     <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">龙虎统计</span>
    </div>
    <I-divider/>
    <div class="crown-table p-2">
      <table class="w-100">
        <tr class="font-size-1p5 background-tr">
          <td class="w-15">日期</td>
          <td>冠军龙</td>
          <td>冠军虎</td>
          <td>亚军龙</td>
          <td>亚军虎</td>
          <td>第三名龙</td>
          <td>第三名虎</td>
          <td>第四名龙</td>
          <td>第四名虎</td>
          <td>第五名龙</td>
          <td>第五名虎</td>
        </tr>
        <tr v-for="( item , i ) in 15" :key="i">
          <td>2019-05-20</td>
          <td>102</td>
          <td>101</td>
          <td>101</td>
          <td>101</td>
          <td>101</td>
          <td>101</td>
          <td>101</td>
          <td>101</td>
          <td>101</td>
          <td>101</td>
        </tr>
      </table>
      <p class="pl-2 pr-2 pt-2 font-size-1p5">使用说明：统计开奖号码的龙虎出现次数</p>
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
} from 'vue-property-decorator';

import {
  IDivider,
  ICheckboxGroup,
  IRadioGroup,
  IDatePicker,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'CrownOrSecondSumTrend',
  components: {
     IDivider,
     ICheckboxGroup,
     IRadioGroup,
     IDatePicker,
  },
})
class CrownOrSecondSumTrend extends Vue {
  public button1 = '今天';
  public checkList = ['遗漏', '拆线'];

}
export default CrownOrSecondSumTrend;
</script>
