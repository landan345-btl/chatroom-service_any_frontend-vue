<template>
  <div class="number-or-law-count background-white position-relative">
    <div class="pl-2 pr-2 font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">号码规律统计</span>
      <I-radio-group :value="date" @input="date = $event"  type="button" class="line-height3">
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
          <span>说明：1 【号码规律统计】提供号码开出位置的历史同位号码统计。例如第1期开出号码1后，在第1期开出号码1的相同位置，第2期开出号码为2，则把号码2标示；</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 柱形图表为历史同位开出号码的次数分布，用于查看已开出号码的分布及趋势，亦可作为参考辅助杀号；</p>
      </div>
    </div>
    <div class="mb-1 pl-2 pr-2 font-size-1p5">
      <span class="font-size-1p5 mr-2">号码规律统计: </span>
      <I-radio-group :value="number" @input="number = $event" type="button" class="line-height3">
        <Radio :label="sNumber" :key="iIndex" v-for="(sNumber, iIndex) in numbers">号码 {{ sNumber }}</Radio>
      </I-radio-group>
    </div>
    <div class="p-2">
      条形统计图
    </div>
    <div class="p-2">
       <table class="w-100 font-size-1p5">
        <tr class="background-tr">
          <td class="w-10" rowspan="2"><i class="position-relative">期号</i></td>
          <td rowspan="2" class="w-10"><i class="position-relative">时间</i></td>
          <td rowspan="2" colspan="3" class="w-42">
            <i class="position-relative">同位开奖号码分布:&nbsp;
              <Checkbox v-model="isPositionShowed"></Checkbox>
            显示同位号码</i> 
          </td>
          <td rowspan="2" class="w-10"><i class="position-relative">升平降</i></td>
          <td colspan="2">单双</td>
          <td colspan="2">大小</td>
        </tr>
        <tr>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
        </tr>
        <tr v-for="( lotteryIssue ,skey ) in getLotteryIssues" :key="skey">
          <td>{{lotteryIssue.no}}</td>
          <td>{{lotteryIssue.opened_time.split(' ')[1]}}</td>
          <td colspan="3" class="parity-numbers font-size-1p5">
            <!-- 上个数字是1的图片点亮 -->
            <S-numbers 
              :code="code"
              :numbers="JSON.parse(lotteryIssue.numbers)"
              :types="types"
              :isPositionShowed="isPositionShowed"
              :isRandom="false"
              :previousNumbers="skey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[skey + 1].numbers): []"
              :class="[number ? 'status-number-previous-' + number : '']"
               />
          </td>
          <td>{{JSON.parse(lotteryIssue.numbers) | isUpOrDown}}</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
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
  name: 'NumberOrLawCount',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
    SNumbers,
  },
})
class NumberOrLawCount extends Vue {
  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public lotteries!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public get getLotteryIssues (): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0, 99);
    return oLotteryIssue;
  }
  
  public date = '今天';
  public number: number = 1;
  public isPositionShowed: boolean = false;
  public numbers: object = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
  };

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement () {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement () {
    this.isAnnouncementShowed = false;
  }
  
}
export default NumberOrLawCount;
</script>
