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
    <div class="ml-2 mr-2">
      <V-histogram  :data="getVhistogramData"/>
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
        <tr v-for="( lotteryIssue ,ikey ) in getLotteryIssues" :key="ikey">
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
              :previousNumbers="ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): []"
              :class="[number ? 'status-number-previous-' + number : '']"
               />
          </td>
          <td
            :class="{
              'color-red': '升' === isUpOrDown(JSON.parse(lotteryIssue.numbers),
              ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [],
              ikey < JSON.parse(getLotteryIssues.length - 2) ? JSON.parse(getLotteryIssues[ikey + 2].numbers): [],
              number),
              'color-deepskyblue': '降' === isUpOrDown(JSON.parse(lotteryIssue.numbers),
              ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [],
              ikey < JSON.parse(getLotteryIssues.length - 2) ? JSON.parse(getLotteryIssues[ikey + 2].numbers): [],
              number),
            }">
            {{ JSON.parse(lotteryIssue.numbers) | 
            isUpOrDown(ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [],
            ikey < JSON.parse(getLotteryIssues.length - 2) ? JSON.parse(getLotteryIssues[ikey + 2].numbers): [],
            number) }}
          </td>
          <td>
            <span 
              v-if="'单' === 
              parNumberOddOrEven(JSON.parse(lotteryIssue.numbers), ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [], 
              number)">
              {{ JSON.parse(lotteryIssue.numbers) | parNumberOddOrEven(ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [], number,5) }}
            </span>  
          </td>
          <td>
            <span  
              class="text-even"
              v-if="'双' === 
              parNumberOddOrEven(JSON.parse(lotteryIssue.numbers), ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [], 
              number)">
              {{ JSON.parse(lotteryIssue.numbers) | parNumberOddOrEven(ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [], number,5) }}
            </span>  
          </td>
          <td>
            <span 
              class="text-large"
              v-if="'大' === 
              parNumberSmallOrLarge(JSON.parse(lotteryIssue.numbers), ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [], 
              number,5)">
              {{ JSON.parse(lotteryIssue.numbers) | parNumberSmallOrLarge(ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [], number,5) }}
            </span>  
          </td>
          <td>
            <span 
              v-if="'小' === 
              parNumberSmallOrLarge(JSON.parse(lotteryIssue.numbers), ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [], 
              number,5)">
              {{ JSON.parse(lotteryIssue.numbers) | parNumberSmallOrLarge(ikey < JSON.parse(getLotteryIssues.length - 1) ? JSON.parse(getLotteryIssues[ikey + 1].numbers): [], number,5) }}
            </span>  
          </td>
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
  VHistogram,
} from '@/Components/';

import {
  LOTTERIES,
  LOTTERY_TYPES,
} from '@/CONFIGS/';

@Component({
  name: 'NumberOrLawCount',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
    SNumbers,
    VHistogram,
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
    let oLotteryIssue = aLotteryIssues.reverse().slice(0, 29);
    return oLotteryIssue;
  }
  
  public date = '最近30期';

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
   
  public vhistogramData = {
    columns: ['号码', '次数'],
    rows: [
      { '号码': '号码 1', '次数': 1, },
      { '号码': '号码 2', '次数': 2, },
      { '号码': '号码 3', '次数': 3, },
      { '号码': '号码 4', '次数': 4, },
      { '号码': '号码 5', '次数': 5, },
      { '号码': '号码 6', '次数': 6, },
      { '号码': '号码 7', '次数': 7, },
      { '号码': '号码 8', '次数': 8, },
      { '号码': '号码 9', '次数': 9, },
      { '号码': '号码 10', '次数': 10,},
    ]
  }
  public get getVhistogramData () {
    let aColumns: string[] = [];
    let aRows: object[] = [];
    this.number;
    this.lotteryIssues;
    let sTypes = this.types;
    if (sTypes.toUpperCase() === 'PK10') {
        aColumns = ['号码', '次数'];
        let oRow: any = {};
        let aNumbers = LOTTERY_TYPES[sTypes].NUMBERS;
        aNumbers.forEach((iNumber: any , iIndex: number) => {
          oRow = { '号码': `号码 ${iNumber}`, '次数': 10, }
          aRows.push(oRow);
        });
        
    }


    let oVhistogramData = {
      columns: aColumns,
      rows: aRows,
    }
    debugger;
    return oVhistogramData;
  }

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
