<template>
  <div class="odd-or-even-small-or-large-result background-white">
    <div class="pl-2 font-weight-bold head-top">
      <span class="font-size-2 line-height3">单双大小路珠</span>
    </div>
    <I-divider/>
    <div class="pr-2 pl-2 pt-2 font-size-1p5">
      <span>选择名次：</span>
        <I-radio-group v-model="position" type="button" class="line-height3">
          <Radio label="第一球"></Radio>
          <Radio label="第二球"></Radio>
          <Radio label="第三球"></Radio>
          <Radio label="第四球"></Radio>
          <Radio label="第五球"></Radio>
        </I-radio-group>
    </div>
    <div class="pl-2 pr-2 pb-1 font-size-1p5">
      <span>筛选路珠：</span>
      <I-checkbox-group v-model="decorators">
        <Checkbox label="大小路珠"></Checkbox>
        <Checkbox label="单双路珠"></Checkbox>
      </I-checkbox-group>
    </div>
    <div class="pb-1">
      <Result-table v-for="( utem , i ) in 2" :key="i" class="mb-1"/>
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
  ResultTable,
  IDivider,
  IRadioGroup,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'OddOrEvenSmallOrLargeResult',
  components: {
    ResultTable,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class OddOrEvenSmallOrLargeResult extends Vue {
  public position: any = '第一球';
  public decorators: any = ['大小路珠'];

}

export default OddOrEvenSmallOrLargeResult;
</script>
