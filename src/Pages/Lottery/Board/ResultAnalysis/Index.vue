<template>
  <div class="result-analysis background-white">
    <div class="">
      <span class="top m-2 font-weight-bold">
        <span class="d-inline-block mt-2" :class=" iNumber === 1 ? 'background-brown':'' " @click="toggleBackground(1)">综合模式</span>
        <span class="d-inline-block mt-2" :class=" iNumber === 2 ? 'background-brown':'' " @click="toggleBackground(2)">单选模式</span>
        <span class="d-inline-block mt-2" :class=" iNumber === 3 ? 'background-brown':'' " @click="toggleBackground(3)">两面模式</span>
      </span>
      <span class="date-selection position-relative">
        <I-radio-group v-model="ranking" type="button" class="line-height8">
          <Radio label="今天"></Radio>
          <Radio label="昨天"></Radio>
          <Radio label="前天"></Radio>
        </I-radio-group>
      </span>
      <span class="float-right mr-2 ml-2 picker d-xs-none">
        <I-date-picker />
      </span>
    </div>
    <I-divider/>
    <div class="p-2" v-show=" iNumber === 1">
      <div class="rank-select">
        <p class="mt-1">
          <span>筛选名次：</span>
          <I-checkbox-group class="d-inline-block mr-2">
            <Checkbox>&nbsp;冠军</Checkbox>
            <Checkbox>&nbsp;亚军</Checkbox>
            <Checkbox>&nbsp;第三名</Checkbox>
            <Checkbox>&nbsp;第四名</Checkbox>
            <Checkbox>&nbsp;第五名</Checkbox>
            <Checkbox>&nbsp;第六名</Checkbox>
            <Checkbox>&nbsp;第七名</Checkbox>
            <Checkbox>&nbsp;第八名</Checkbox>
            <Checkbox>&nbsp;第九名</Checkbox>
            <Checkbox>&nbsp;第十名</Checkbox>
          </I-checkbox-group>
          <span class="mr-2">全选</span>
          <span>清空</span>
        </p>
      </div>
      <div class="rank-select dewdrop">
        <p class="mt-1">
          <span>筛选露珠：</span>
           <I-checkbox-group class="d-inline-block mr-2">
            <Checkbox>&nbsp;大小</Checkbox>
            <Checkbox>&nbsp;单双</Checkbox>
            <Checkbox>&nbsp;龙虎</Checkbox>
          </I-checkbox-group>
        </p>
      </div>
    </div>
    <div class="p-2" v-show=" iNumber === 2 ">
      <div class="font-size-1p5 rank-select">
        <p class="mt-1">
          <span>筛选露珠：</span>
          <I-checkbox-group class="d-inline-block mr-2">
            <Checkbox>&nbsp;大小</Checkbox>
            <Checkbox>&nbsp;单双</Checkbox>
            <Checkbox>&nbsp;龙虎</Checkbox>
          </I-checkbox-group>
          <span class="mr-2">全选</span>
          <span>清空</span>
        </p>
      </div>
       <div class="font-size-1p5 rank-select">
        <div class="mt-1">
          <span>筛选名次：</span>
           <I-radio-group v-model="ranking" type="button">
            <Radio label="冠军"></Radio>
            <Radio label="亚军"></Radio>
            <Radio label="第三名"></Radio>
            <Radio label="第四名"></Radio>
            <Radio label="第五名"></Radio>
            <Radio label="第六名"></Radio>
            <Radio label="第七名"></Radio>
            <Radio label="第八名"></Radio>
            <Radio label="第九名"></Radio>
            <Radio label="第十名"></Radio>
            <Radio label="冠亚和"></Radio>
          </I-radio-group>
        </div>
      </div>
    </div>
    <div class="p-2" v-show=" iNumber === 3 ">
      <div class="font-size-1p5 rank-select">
        <p class="mt-1">
          <span>选择名次：</span>
          <I-checkbox-group class="d-inline-block mr-2">
            <Checkbox>&nbsp;冠军</Checkbox>
            <Checkbox>&nbsp;亚军</Checkbox>
            <Checkbox>&nbsp;第三名</Checkbox>
            <Checkbox>&nbsp;第四名</Checkbox>
            <Checkbox>&nbsp;第五名</Checkbox>
            <Checkbox>&nbsp;第六名</Checkbox>
            <Checkbox>&nbsp;第七名</Checkbox>
            <Checkbox>&nbsp;第八名</Checkbox>
            <Checkbox>&nbsp;第九名</Checkbox>
            <Checkbox>&nbsp;第十名</Checkbox>
          </I-checkbox-group>
          <span class="mr-2">全选</span>
          <span>清空</span>
        </p>
      </div>
      <div class="font-size-1p5 rank-select">
        <p class="mt-1">
          <span>选择名次：</span>
          <I-radio-group v-model="ranking" type="button">
            <Radio label="大小"></Radio>
            <Radio label="单双"></Radio>
            <Radio label="龙虎"></Radio>
          </I-radio-group>
        </p>
      </div>
    </div>
    <div class="ml-2 mr-2 mb-1 dewdrop-table"  v-for="( item , i ) in 2" :key="i">
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
} from 'vue-property-decorator';

import {
  ITabs,
  IDivider,
  ICheckboxGroup,
  IRadioGroup,
  IDatePicker,
  ResultTable,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'ResultAnalysis',
  components: {
    ITabs,
    IDivider,
    ICheckboxGroup,
    IRadioGroup,
    IDatePicker,
    ResultTable,
  },
})
class ResultAnalysis extends Vue {
  public checkboxGroup1 = '第一球';
  public iNumber = 2;
  public ranking = '1';

  public toggleBackground( iNumber: number ) {
    this.iNumber = iNumber;
  }
}
export default ResultAnalysis;
</script>
