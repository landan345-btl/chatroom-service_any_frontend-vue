<template>
  <div>
    <div class="summary-analysis">
      <div class="top p-1 ml-1 font-weight-bold">
        <span class="title font-size-2">综合分析</span>
          <I-button class="ml-2" v-on:handle-click="toggleTodayTwoSideNumberStatics()" v-if="types && ['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">今日双面/号码统计</I-button>
          <I-button class="ml-2" v-on:handle-click="toggleAccumulationRemider()" v-if="types && ['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">长龙提醒</I-button>
          <I-button class="ml-2" v-on:handle-click="toggleNumberAnalysis()" v-if="types && ['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">号码分析</I-button>
      </div>
      <transition name="slide-fade">
        <div class="p-2 double-sided-statistics" v-show="isTodayTwoSideNumberStaticShowed ">
          <div class="font-size-2p5">今日号码统计</div>
          <table class="mt-1 w-100">
            <tr>
              <td>号码</td>
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
            </tr>
            <tr>
              <td>出现次数</td>
              <td>{{ numberFrequency( lotteryIssues , 0 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 1 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 2 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 3 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 4 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 5 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 6 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 7 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 8 ) }}</td>
              <td>{{ numberFrequency( lotteryIssues , 9 ) }}</td>
            </tr>
          </table>
          <table class="w-100 mt-1">
            <tr>
              <td rowspan="2"> <span>球次</span> </td>
              <td colspan="4">总和</td>
              <td colspan="4">第一球</td>
              <td colspan="4">第二球</td>
              <td colspan="4">第三球</td>
              <td colspan="4">第四球</td>
              <td colspan="4">第五球</td>
            </tr>
            <tr>
              <td>单</td>
              <td>双</td>
              <td>大</td>
              <td>小</td>
              <td>单</td>
              <td>双</td>
              <td>大</td>
              <td>小</td>
              <td>单</td>
              <td>双</td>
              <td>大</td>
              <td>小</td>
              <td>单</td>
              <td>双</td>
              <td>大</td>
              <td>小</td>
              <td>单</td>
              <td>双</td>
              <td>大</td>
              <td>小</td>
              <td>单</td>
              <td>双</td>
              <td>大</td>
              <td>小</td>
            </tr>
            <tr>
              <td>出现次数</td>
              <td>{{ he( todayTwoSideRecords , 'small' ) }}</td>
              <td>{{ he( todayTwoSideRecords , 'large' ) }}</td>
              <td>{{ he( todayTwoSideRecords , 'odd' ) }}</td>
              <td>{{ he( todayTwoSideRecords , 'even' ) }}</td>
              <td v-for=" ( iOne , i ) in  todayTwoSideRecords[0]" :key="i">{{ iOne }}</td>
              <td v-for=" ( iOne , i ) in  todayTwoSideRecords[1]" :key="i">{{ iOne }}</td>
              <td v-for=" ( iOne , i ) in  todayTwoSideRecords[2]" :key="i">{{ iOne }}</td>
              <td v-for=" ( iOne , i ) in  todayTwoSideRecords[3]" :key="i">{{ iOne }}</td>
              <td v-for=" ( iOne , i ) in  todayTwoSideRecords[4]" :key="i">{{ iOne }}</td>
            </tr>
          </table>
        </div>
      </transition>
      <transition name="slide-fade">
        <div class="p-2" v-show="isAccumulationRemiderShowed">
          <div class="long-reminder">
            <div class="font-size-2p5">长龙连开提醒</div>
            <div>
              <div>第二球: 小  5  期</div>
              <div>第二球: 小  5  期</div>
              <div>第二球: 小  5  期</div>
              <div>第二球: 小  5  期</div>
              <div>第二球: 小  5  期</div>
              <div>第二球: 小  5  期</div>
              <div>第二球: 小  5  期</div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="slide-fade">
        <NumberAnalysis 
          v-show="isNumberAnalysisShowed"
          class="p-2" 
          :types="types" 
          :onNumbers="onNumbers" 
          :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
          @handle-toggle-number="toggleNumber" 
          @handle-toggle-oddoreven="toggleOddOrEven"
          @handle-reset="resetShow"/>
      </transition>
    </div>
    <Table 
      :lotteryIssues="lotteryIssues" 
      :lottery="lottery"
      :types="types"
      :code="code"
      :onNumbers="onNumbers"
      :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords" />
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { 
  Component,
  Vue, 
  Prop
} from 'vue-property-decorator';

import { 
  LOTTERIES,
} from '@/CONFIGS/';

import {
  IButton,
  SNumbers,
} from '@/Components/';

import NumberAnalysis from './NumberAnalysis/Index.vue';
import Table from './Table/Index.vue';

@Component({
  name: 'SummaryAnalysis',
  components: {
    SNumbers,
    NumberAnalysis,
    IButton,
    Table,
  },
})
class SummaryAnalysis extends Vue {
  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public todayTwoSideRecords!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public isTodayTwoSideNumberStaticShowed: boolean = false;
  public isAccumulationRemiderShowed: boolean = false;
  public isNumberAnalysisShowed: boolean = false;

  public onNumbers: {
    [key: string]: boolean} = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  };

  public onOddOrEvenOrSmallOrLargeOrPairRedcords: {
    [key: string]: boolean} = {
    odd: false,
    even: false,
    small: false,
    large: false,
    pair: false,
  };

  public toggleTodayTwoSideNumberStatics(): void {
    this.isTodayTwoSideNumberStaticShowed = !this.isTodayTwoSideNumberStaticShowed;
  }

  public toggleAccumulationRemider(): void {
    this.isAccumulationRemiderShowed = !this.isAccumulationRemiderShowed;
  }

  public toggleNumberAnalysis(): void {
    this.isNumberAnalysisShowed = !this.isNumberAnalysisShowed;
  }

  public he( oHe: any , s: any ) { // 总和单双大小
    let n = 0;
    Object.keys(oHe).forEach( (e: any) => {
      n += Number( oHe[e][ s ] );
    });
    return n;
  }

  public toggleNumber(sKey: string) {
    let iNumber: any = Number(sKey);
    let onOddOrEvenOrSmallOrLargeOrPairRedcord = Object.assign({}, this.onOddOrEvenOrSmallOrLargeOrPairRedcords);
    for ( let oddOrEvenOrSmallOrLargeOrPairRedcord in onOddOrEvenOrSmallOrLargeOrPairRedcord ) {
      if ( this.onNumbers[iNumber] === false ) {
        this.onOddOrEvenOrSmallOrLargeOrPairRedcords[ oddOrEvenOrSmallOrLargeOrPairRedcord ] = false;
     }
    }
    this.onNumbers[iNumber] = !this.onNumbers[iNumber];
   // debugger;
  }

  public toggleOddOrEven(sKey: string) {
   let iKey = String(sKey);
   let onNumber = Object.assign({}, this.onNumbers);
   for ( let  number in onNumber) {
     if ( this.onOddOrEvenOrSmallOrLargeOrPairRedcords[iKey] === false ) {
        this.onNumbers[number] = false;
        if ( iKey === 'odd') {
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.even = false;
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.pair = false;
        }
        if ( iKey === 'even') {
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.odd = false;
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.pair = false;
        }
        if ( iKey === 'small') {
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.large = false;
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.pair = false;
        }
        if ( iKey === 'large') {
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.small = false;
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.pair = false;
        }
        if ( iKey === 'pair') {
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.large = false;
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.odd = false;
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.even = false;
          this.onOddOrEvenOrSmallOrLargeOrPairRedcords.small = false;
        }
      }
    }
   this.onOddOrEvenOrSmallOrLargeOrPairRedcords[iKey] = !this.onOddOrEvenOrSmallOrLargeOrPairRedcords[iKey];
  }

  public resetShow( reset: string) {
    for (let sKey in this.onOddOrEvenOrSmallOrLargeOrPairRedcords) {
      if (this.onOddOrEvenOrSmallOrLargeOrPairRedcords.hasOwnProperty(sKey)) {
        this.onOddOrEvenOrSmallOrLargeOrPairRedcords[sKey] = false ;
      }
    }
    for ( let  sKey in this.onNumbers) {
      if (this.onNumbers.hasOwnProperty(sKey)) {
        this.onNumbers[sKey] = false;
      }
    }
  }

  public numberFrequency( oNumbers: any , i: number ) {  // 号码出现次数
    let counts = 0;
    Object.keys( oNumbers ).forEach( ( sId ) => {
      for ( let n of JSON.parse( oNumbers[ sId ].numbers) ) {
         if ( Number( n ) === Number(i) ) {
          counts++;
        }
      }
    });
    return counts;
  }
}

export default SummaryAnalysis;
</script>
