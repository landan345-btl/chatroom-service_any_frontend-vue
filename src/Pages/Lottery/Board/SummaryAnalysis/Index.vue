<template>
  <div>
    <div class="summary-analysis">
      <div class="top pl-2 pt-1 pb-1 font-weight-bold">
        <span class="title font-size-2">综合分析</span>
          <I-button class="ml-2" v-on:handle-click="toggleTodayTwoSideNumberStatics()" v-if="types && ['11X5', 'SSC', 'PK10'].includes(types.toUpperCase())">今日双面/号码统计</I-button>
          <I-button class="ml-2" v-on:handle-click="toggleAccumulationRemider()" v-if="types && ['11X5', 'SSC', 'PK10'].includes(types.toUpperCase())">长龙提醒</I-button>
          <I-button class="ml-2" v-on:handle-click="toggleNumberAnalysis()" v-if="types && ['11X5', 'SSC', 'PK10'].includes(types.toUpperCase())">号码分析</I-button>
      </div>
      <transition name="slide-fade">
       <Today-two-side-number-statics 
        :types="types" 
        :lotteryIssues="lotteryIssues" 
        :todayTwoSideRecords="todayTwoSideRecords"
        v-show="isTodayTwoSideNumberStaticShowed"/>
      </transition>
      <transition name="slide-fade">
       <Accumulation-remider v-show="isAccumulationRemiderShowed"/>
      </transition>
      <transition name="slide-fade">
        <NumberAnalysis 
          v-show="isNumberAnalysisShowed"
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
  Prop,
} from 'vue-property-decorator';

import {
  LOTTERIES,
} from '@/CONFIGS/';

import {
  IButton,
  SNumbers,
} from '@/Components/';

import TodayTwoSideNumberStatics from './TodayTwoSideNumberStatics/Index.vue';
import AccumulationRemider from './AccumulationRemider/Index.vue';
import NumberAnalysis from './NumberAnalysis/Index.vue';
import Table from './Table/Index.vue';

@Component({
  name: 'SummaryAnalysis',
  components: {
    SNumbers,
    TodayTwoSideNumberStatics,
    AccumulationRemider,
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

  public toggleNumber(sKey: string) {
    let iNumber: any = Number(sKey);
    let onOddOrEvenOrSmallOrLargeOrPairRedcord = Object.assign({}, this.onOddOrEvenOrSmallOrLargeOrPairRedcords);
    for ( let oddOrEvenOrSmallOrLargeOrPairRedcord in onOddOrEvenOrSmallOrLargeOrPairRedcord ) {
      if ( this.onNumbers[iNumber] === false ) {
        this.onOddOrEvenOrSmallOrLargeOrPairRedcords[ oddOrEvenOrSmallOrLargeOrPairRedcord ] = false;
     }
    }
    this.onNumbers[iNumber] = !this.onNumbers[iNumber];
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
<<<<<<< HEAD
=======

  /**
   * 利用彩票开奖列表 计算 莫一个 number 的 次
   */
  public countNumber(oLotteryIssues: any, iNumber: number) {
    let iCount = 0;
    Object.keys(oLotteryIssues).forEach((sLotteryIssueKey) => {
      let aNumbers = JSON.parse(oLotteryIssues[sLotteryIssueKey].numbers) || [];
      for (let _iNumber of aNumbers) {
        if ( Number(_iNumber) === Number(iNumber)) {
          iCount++;
        }
      }
    });
    return iCount;
  }
>>>>>>> develop
}

export default SummaryAnalysis;
</script>
