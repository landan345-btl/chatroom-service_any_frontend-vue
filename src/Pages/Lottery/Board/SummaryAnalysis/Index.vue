<template>
  <div class="summary-analysis">
    <div class="top p-1 font-weight-bold">
      <span class="title">综合分析</span>
        <I-button class="ml-2" v-on:handle-click="toggleTodayTwoSideNumberStatics()" v-if="['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">今日双面/号码统计</I-button>
        <I-button class="ml-2" v-on:handle-click="toggleAccumulationRemider()" v-if="['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">长龙提醒</I-button>
        <I-button class="ml-2" v-on:handle-click="toggleNumberAnalysis()" v-if="['11X5','SSC' , 'PK10'].includes(types.toUpperCase())">号码分析</I-button>
    </div>
    <transition name="slide-fade">
      <div class="p-2 double-sided-statistics" v-show="isTodayTwoSideNumberStaticShowed ">
        <div> 
          <div class="font-size-2">今日号码统计</div>
          <table>
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
          <table>
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
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="p-2 " v-show="isAccumulationRemiderShowed">
        <div class="long-reminder">
          <div>长龙连开提醒</div>
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
      <div class="p-2" v-show="isNumberAnalysisShowed">
        <TodayTwoSideNumberStatics 
          :types="types" 
          :onNumbers="onNumbers" 
          :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
          @handle-toggle-number="toggleNumber" 
          @handle-toggle-oddoreven="toggleOddOrEven"
          />
      </div>
    </transition>

    <div class="p-2">
      <div>
        <table>
          <tr>
            <td>期数</td>
            <td>开奖号码</td>
            <td colspan="3">总和</td>
            <td>龙虎</td>
            <td colspan="5">1-5球大小</td>
            <td colspan="5">1-5球单双</td>
            <td>前三</td>
            <td>中三</td>
            <td>后三</td>
          </tr>
          <tr v-for="( item , i ) in lotteryIssues" :key="i">
            <td>{{ item.no }}</td>
            <td>
              <Numbers :code="code" :numbers=" JSON.parse( item.numbers )" :types="types" :onNumbers="onNumbers" :isRandom="false" class="status-number"/>
            </td>
            <td>{{ JSON.parse( item.numbers ) | sum }}</td>
            <td>{{ JSON.parse( item.numbers ) | sum | isSmallOrLarge( 20 , 21 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | sum | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | isDragonOrTiger( [ 0 , 4 ] ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 0 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 1 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 2 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 3 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 4 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 0 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 1 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 2 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 3 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 4 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | determineSequence( [ 0 , 1 , 2 ] )  }}</td>
            <td>{{ JSON.parse( item.numbers ) | determineSequence( [ 1 , 2 , 3] ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | determineSequence( [ 2 , 3 , 4 ] ) }}</td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue , Prop } from 'vue-property-decorator';
import LOTTERIES from '@/CONFIGS/LOTTERIES/index';
import IButton from '@/Components/IButton/Index.vue';
import Numbers from '@/Components/Numbers/Index.vue';
import TodayTwoSideNumberStatics from '@/Pages/Lottery/Board/LotteryIssue/NumberAnalysis/Index.vue';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断

@Component({
  name: 'SummaryAnalysis',
  components: {
    Numbers,
    TodayTwoSideNumberStatics,
    IButton,
  },
})
class SummaryAnalysis extends Vue {
  public changeBorder: any = [];

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
    this.onNumbers[iNumber] = !this.onNumbers[iNumber];
  }

  public toggleOddOrEven(sKey: string) {
   let iKey = String(sKey);
   this.onOddOrEvenOrSmallOrLargeOrPairRedcords[iKey] = !this.onOddOrEvenOrSmallOrLargeOrPairRedcords[iKey];
  }

  public numberFrequency( onNumbers: any , i: number ) {  // 号码出现次数
    let counts = 0;
    Object.keys( onNumbers ).forEach( ( sId ) => {
      for ( let n of JSON.parse( onNumbers[ sId ].numbers) ) {
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
