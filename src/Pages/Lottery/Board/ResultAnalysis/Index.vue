<template>
  <div class="result-analysis background-white">
     <div class="top p-2 font-weight-bold d-flex justify-content-start">
      <div :class=" iNumber === 1 ? 'background-brown':'' " @click="toggleBackground(1)">综合模式</div>
      <div :class=" iNumber === 2 ? 'background-brown':'' " @click="toggleBackground(2)">单选模式</div>
      <div :class=" iNumber === 3 ? 'background-brown':'' " @click="toggleBackground(3)">两面模式</div>
    </div>
    <I-divider/>
    <div class="p-2" v-show=" iNumber === 1">
      <div class="rank-select">
        <p class="mt-1">
          <span>筛选名次：</span>
          <I-checkbox-group class="d-inline-block mr-2">
            <Checkbox>&nbsp;第一名</Checkbox>
            <Checkbox>&nbsp;第二名</Checkbox>
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
      <div class="rank-select">
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
        <div class="mt-1">
          <span>筛选露珠：</span>
          <I-checkbox-group class="d-inline-block mr-2">
            <Checkbox>&nbsp;大小</Checkbox>
            <Checkbox>&nbsp;单双</Checkbox>
            <Checkbox>&nbsp;龙虎</Checkbox>
          </I-checkbox-group>
          <span class="mr-2">全选</span>
          <span>清空</span>
        </div>
      </div>
       <div class="font-size-1p5 rank-select">
        <div class="mt-1">
          <span>筛选名次：</span>
          
          <span class="mr-2">全选</span>
          <span>清空</span>
        </div>
      </div>
    </div>
    <div class="p-2" v-show=" iNumber === 3 ">
      <div class="font-size-1p5">
        <div class="mt-1">
          <span>选择名次：</span>
          <el-radio-group v-model="button1">
            <el-radio-button label="第一球"></el-radio-button>
            <el-radio-button label="第一球"></el-radio-button>
            <el-radio-button label="第一球"></el-radio-button>
            <el-radio-button label="第一球"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="p-2" style="border:1px solid red;">
        table
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
  },
})
class ResultAnalysis extends Vue {
  public checkboxGroup1 = '第一球';
  public iNumber = 2;
  public button1 = '第一球';

  public toggleBackground( iNumber: number ) {
    this.iNumber = iNumber;
  }
}
export default ResultAnalysis;
</script>
