<template>
  <div class="everyday-accumulation-statics">
    <div class="top p-2 font-weight-bold d-flex justify-content-start">
      <div :class=" iNumber === 1 ? 'background-brown':'' " @click="toggleBackground(1)">单长龙</div>
      <div :class=" iNumber === 2 ? 'background-brown':'' " @click="toggleBackground(2)">双长龙</div>
      <div :class=" iNumber === 3 ? 'background-brown':'' " @click="toggleBackground(3)">大长龙</div>
      <div :class=" iNumber === 4 ? 'background-brown':'' " @click="toggleBackground(4)">小长龙</div>
      <div :class=" iNumber === 5 ? 'background-brown':'' " @click="toggleBackground(5)">龙长龙</div>
      <div :class=" iNumber === 6 ? 'background-brown':'' " @click="toggleBackground(6)">虎长龙</div>
    </div>
    <I-divider/>
    <div class="p-2" v-show="iNumber !== 5">
      <div class="rank-select">
        <p>该页面统计长龙每天出现的条数，例如某日连续开出5期长龙（该形态）共出现10次</p>
        <p class="mt-1">
          <span>选择名次：</span>
          <I-radio-group v-model="position" type="button" class="line-height3">
            <Radio label="第一球"></Radio>
            <Radio label="第二球"></Radio>
            <Radio label="第三球"></Radio>
            <Radio label="第四球"></Radio>
            <Radio label="第五球"></Radio>
          </I-radio-group>
        </p>
      </div>
    </div>
    <div class="p-2" v-show="iNumber===5">
      <div class="font-size-1p5">
        <div>该页面统计长龙每天出现的条数，例如某日连续开出5期长龙（该形态）共出现10次</div>
        <div class="mt-1">
          <span>选择名次：</span>
          <I-radio-group v-model="position" type="button" class="line-height3">
            <Radio label="第一球"></Radio>
          </I-radio-group>
        </div>
      </div>
    </div>
    <div class="pl-2 pr-2 pb-2 font-size-1p5">
      <table class="w-100">
        <tr>
          <td rowspan="2">
            <span>长龙</span>
            <span></span>
            <span></span>
            <span>日期</span>
          </td>
          <td colspan="10">开"单"长龙出现条数</td>
        </tr>
        <tr>
          <td>2期</td>
          <td>3期</td>
          <td>4期</td>
          <td>5期</td>
          <td>6期</td>
          <td>7期</td>
          <td>8期</td>
          <td>9期</td>
          <td>10期</td>
          <td>11期</td>
        </tr>
        <tr v-for="( item , i ) in 15" :key="i">
          <td>2019-05-09</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
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
} from 'vue-property-decorator';

import {
  ITabs,
  IDivider,
  IRadioGroup,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'EverydayAccumulationStatics',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class EverydayAccumulationStatics extends Vue {
  public checkboxGroup1 = '第一球';
  public iNumber = 1;
  public position = '第一球';

  public toggleBackground (iNumber: number) {
    this.iNumber = iNumber;
  }
}

export default EverydayAccumulationStatics;
</script>
