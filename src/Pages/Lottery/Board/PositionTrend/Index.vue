<template>
  <div class="positon-trend background-white">
    <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">定位走势</span>
      <I-radio-group v-model="date" type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近60期"></Radio>
        <Radio label="最近90期" class="d-xs-none"></Radio>
      </I-radio-group>
    </div>
    <I-divider/>
    <div class="announcement-wrapper mt-2 font-size-1p5 position-absolute">
      <div @mouseleave="hideAnnouncement()" @click="toggleAnnouncement()" class="announcement" :class="[ isAnnouncementShowed ? 'announcement-showed' : '']">
        <p>
          <span>说明： 1 奇偶：除2余数为1的为奇数，含1、3、5、7、9，除2余0的为偶数，含2、4、6、8、10；</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 单双：1、3、5、7、9属单数，0、2、4、6、8属双数；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 质合：1、2、3、5、7属质数，0、4、6、8、9属合数;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 遗漏期数：自上期开出到本期间隔的期数；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 分隔线：每五期使用分隔线，使横向导航更加清晰;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 出现次数：统计周期内，某个号码的累计出现次数。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 遗漏：自上期开出到本期间隔的期数;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 平均遗漏：统计期数内遗漏的平均值。（计算公式：平均遗漏＝统计期数/(出现次数+1)）；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 最大遗漏：统计期数内遗漏的最大值;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10 最大连出值：统计期数内连续开出的最大值；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11 最大连出值：统计期数内连续开出的最大值;</p>
      </div>
    </div>
    <div class="mb-1 pl-2 pr-2 font-size-1p5">
      <I-radio-group v-model="position" type="button" class="line-height3">
        <Radio label="第一球"></Radio>
        <Radio label="第二球"></Radio>
        <Radio label="第三球"></Radio>
        <Radio label="第四球"></Radio>
        <Radio label="第五球"></Radio>
      </I-radio-group>
      <I-checkbox-group v-model="decorator">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </I-checkbox-group>
    </div>
    <div class="p-2">
      <table class="position-trend text-center w-100">
        <tr>
          <td rowspan="2"><span>期号</span></td>
          <td rowspan="2"><span>开奖号码</span> </td>
          <td colspan="10">第一球号码走势</td>
          <td colspan="6">形态特征</td>
          <td colspan="3">012路</td>
          <td colspan="3">升平降</td>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>大</td>
          <td>小</td>
          <td>单</td>
          <td>双</td>
          <td>合</td>
          <td>质</td>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td>升</td>
          <td>平</td>
          <td>降</td>
        </tr>
        <tr v-for="( item , i ) in 15" :key="i">
          <td>20190510059</td>
          <td>
            <span class="color-red">1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
          </td>
          <td class="background-beige"><span>11</span></td>
          <td class="background-beige"><span>11</span></td>
          <td class="background-beige"><span>11</span></td>
          <td class="background-beige"><span class="background-blue-1">11</span></td>
          <td class="background-beige"><span>11</span></td>
          <td class="background-beige"><span>11</span></td>
          <td class="background-beige"><span>11</span></td>
          <td class="background-beige"><span>11</span></td>
          <td class="background-beige"><span>11</span></td>
          <td class="background-beige"><span>11</span></td>
          <td>16</td>
          <td>16</td>
          <td class="background-blue-1">16</td>
          <td>16</td>
          <td>16</td>
          <td>16</td>
          <td class="background-orange-0">16</td>
          <td>16</td>
          <td>16</td>
          <td>16</td>
          <td>16</td>
          <td>16</td>
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
  name: 'PositionTrend',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class PositionTrend extends Vue {
  public date = '今天';
  public position = '第一球';
  public decorator = ['遗漏', ];

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement () {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement () {
    this.isAnnouncementShowed = false;
  }
}

export default PositionTrend;
</script>
