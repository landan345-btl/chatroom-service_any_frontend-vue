<template>
  <div class="number-or-law-count pb-2 background-white position-relative">
    <div class="pl-2 pr-2 font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">号码规律统计</span>
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
    <div class="announcement-wrapper mt-2 font-size-1p5 position-absolute">
      <div @mouseleave="hideAnnouncement()" @click="toggleAnnouncement()" class="announcement" :class="[ isAnnouncementShowed ? 'announcement-showed' : '']">
        <p>
          <span>说明：1 表格需从左向右浏览，右侧一列为最新结果；</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 柱形图表为历史同位开出号码的次数分布，用于查看已开出号码的分布及趋势，亦可作为参考辅助杀号；</p>
      </div> 
    </div>
    <div class="mb-1 pl-2 pr-2 font-size-1p5">
       <span class="font-size-1p5 mr-2">号码规律统计: </span>
      <I-radio-group v-model="date" type="button" class="line-height3 mr-2">
        <Radio label="号码1"></Radio>
        <Radio label="号码2"></Radio>
        <Radio label="号码3"></Radio>
        <Radio label="号码4"></Radio>
        <Radio label="号码5"></Radio>
        <Radio label="号码6"></Radio>
        <Radio label="号码7"></Radio>
        <Radio label="号码8"></Radio>
        <Radio label="号码9"></Radio>
        <Radio label="号码10"></Radio>
      </I-radio-group>
      <span class="mr-2">全选</span>
      <span>清空</span>
    </div>
    <div class="p-2">
      canvas
    </div>
    <div class="p-2">
       <table class="w-100 font-size-1p5">
        <tr class="background-tr">
          <td class="w-10" rowspan="2"><span>期号</span></td>
          <td rowspan="2" class="w-10"><span>时间</span></td>
          <td rowspan="2" colspan="3" class="w-42"><span>同位开奖号码分布：<Checkbox></Checkbox> 显示同位号码</span></td>
          <td rowspan="2" class="w-10"><span>升平降</span></td>
          <td colspan="2">单双</td>
          <td colspan="2">大小</td>
        </tr>
        <tr>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
        </tr>
        <tr v-for="( lotteryIssue ,skey ) in oLotteryIssues" :key="skey">
          <td>{{lotteryIssue.no}}</td>
          <td>{{lotteryIssue.added_time.split(' ')[1]}}</td>
          <td colspan="3" class="parity-numbers font-size-1p5">
            <S-numbers 
              :code="code" 
              :numbers="JSON.parse(lotteryIssue.numbers)" 
              :types="types" 
              :showiPositon="true"
              :isRandom="false" 
              class="status-number"/>
          </td>
          <td>升</td>
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

  public get oLotteryIssues(): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0 , 99);
    return oLotteryIssue;
  }

  public date = '今天';
  public decorator = ['折线', '遗漏'];

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement() {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement() {
     this.isAnnouncementShowed = false;
  }


}

export default NumberOrLawCount;
</script>
