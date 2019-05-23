<template>
  <div class="number-or-front-or-back-result pb-2 background-white position-relative">
    <div class="pl-2 pr-2 font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">号码前后露珠</span>
      <I-radio-group v-model="date" type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近50期"></Radio>
        <Radio label="最近100期" class="d-xs-none"></Radio>
      </I-radio-group>
    </div>
    <I-divider/>
    <div class="announcement-wrapper mt-2 pr-1 font-size-1p5 position-absolute">
      <div @mouseleave="hideAnnouncement()" @click="toggleAnnouncement()" class="announcement" :class="[ isAnnouncementShowed ? 'announcement-showed' : '']">
        <p>
          <span>说明：1 表格需从左向右浏览，右侧一列为最新结果；</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 当长龙中断时，则另起一列显示结果；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 “前”表示号码开出在前5名，“后”表示号码开出在后5名</p>
      </div>
    </div>
    <div class="mb-2 pl-2 pr-2 font-size-1p5">
      筛选名次：
      <I-checkbox-group v-model="numbers" class="d-inline-block mr-2">
        <Checkbox label="号码1"></Checkbox>
        <Checkbox label="号码2"></Checkbox>
        <Checkbox label="号码3"></Checkbox>
        <Checkbox label="号码4"></Checkbox>
        <Checkbox label="号码5"></Checkbox>
        <Checkbox label="号码6"></Checkbox>
        <Checkbox label="号码7"></Checkbox>
        <Checkbox label="号码8"></Checkbox>
        <Checkbox label="号码9"></Checkbox>
        <Checkbox label="号码10"></Checkbox>
      </I-checkbox-group>
      <span class="mr-2" @click="checkAll">全选</span>
      <span @click="callAll">清空</span>
    </div>
    <div>
      <Result-table />
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
  ResultTable,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'NumberOrFrontOrBackResult',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
    ResultTable,
  },
})
class NumberOrFrontOrBackResult extends Vue {
  public date = '今天';
  public numbers = ['号码1', '号码2', '号码3', '号码4', '号码5', '号码6', '号码7', '号码8', '号码9', '号码10'];

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement () {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement () {
    this.isAnnouncementShowed = false;
  }

   public checkAll() {
    this.numbers = ['号码1', '号码2', '号码3', '号码4', '号码5', '号码6', '号码7', '号码8', '号码9', '号码10'];
  }
  public callAll() {
    this.numbers = [];
  }

}

export default NumberOrFrontOrBackResult;
</script>
