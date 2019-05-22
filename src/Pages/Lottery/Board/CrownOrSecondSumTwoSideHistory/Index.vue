<template>
  <div class="Crown-or-second-sum-two-side-history pb-2 background-white">
    <div class="pl-2 pr-2 font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">冠亚和两面历史</span>
    </div>
    <I-divider/>
    <div class="explain z-1000 m-2 font-size-1p5">
      <p><span>说明：统计冠亚和每天单双大小的出现次数</span></p>
    </div>  
    <div class="crown-table pl-2 pr-2">
      <table class="w-100">
        <tr class="font-size-1p5 background-tr">
          <td class="w-15">日期</td>
          <td>冠亚和大</td>
          <td>冠亚和小</td>
          <td>冠亚和单</td>
          <td>冠亚和双</td>
        </tr>
        <tr v-for="( item , i ) in 15" :key="i">
          <td>2019-05-20</td>
          <td>102</td>
          <td>101</td>
          <td>101</td>
          <td>101</td>
        </tr>
      </table>
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
  ITabs,
  IDivider,
  IRadioGroup,
  ICheckboxGroup,
  SNumbers,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'CrownOrSecondSumTwoSideHistory',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
    SNumbers,
  },
})
class CrownOrSecondSumTwoSideHistory extends Vue {


  public date = '今天';
  public decorator = ['折线', '遗漏'];



}

export default CrownOrSecondSumTwoSideHistory;
</script>
