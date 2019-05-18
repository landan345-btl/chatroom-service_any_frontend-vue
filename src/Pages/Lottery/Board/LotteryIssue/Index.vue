<template>
  <div class="lottery-issue">
    <div class="top pl-2 pt-1 pb-1 font-weight-bold">
      <span class="font-size-2">即时开奖</span>
      <I-button class="ml-2" v-on:handle-click="toggleTodayTwoSideNumberStatics()" v-if="types && ['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">今日双面/号码统计</I-button>
      <I-button class="ml-2" v-on:handle-click="toggleAccumulationRemider()" v-if="types && ['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">长龙提醒</I-button>
      <I-button class="ml-2" v-on:handle-click="toggleNumberAnalysis()" v-if="types && ['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">号码分析</I-button>
    </div>
    <I-divider/>
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
      <Number-analysis 
        :types="types" 
        v-show="isNumberAnalysisShowed" 
        @handle-toggle-number="toggleNumber" 
        @handle-toggle-oddoreven="toggleOddOrEven"
        @handle-reset="resetShow"
        :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords" 
        :onNumbers="onNumbers"/>
    </transition>  
    <Table 
        :lotteryIssues="lotteryIssues" 
        :lottery="lottery" 
        :code="code" 
        :types="types" 
        :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
        :onNumbers="onNumbers"/>
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
  Emit,
} from 'vue-property-decorator';

import {
  ITabs,
  IButton,
  IDivider,
} from '@/Components/';

import TodayTwoSideNumberStatics from './TodayTwoSideNumberStatics/Index.vue';
import AccumulationRemider from './AccumulationRemider/Index.vue';
import NumberAnalysis from './NumberAnalysis/Index.vue';
import Table from './Table/Index.vue';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'LotteryIssue',
  components: {
    ITabs,
    IButton,
    IDivider,
    TodayTwoSideNumberStatics,
    AccumulationRemider,
    NumberAnalysis,
    Table,
  },
})
class LotteryIssue extends Vue {
  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  @Prop()
  public todayTwoSideRecords!: any;

  public isTodayTwoSideNumberStaticShowed: boolean = false;
  public isAccumulationRemiderShowed: boolean = false;
  public isNumberAnalysisShowed: boolean = false;

  public onNumbers: {
    [key: string]: boolean,
    } = {
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
    [key: string]: boolean,
    } = {
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
}

export default LotteryIssue;
</script>
