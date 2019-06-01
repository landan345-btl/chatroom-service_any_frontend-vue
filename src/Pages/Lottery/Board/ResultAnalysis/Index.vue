<template>
  <div class="result-analysis background-white pb-1">
    <div class="">
      <span class="top ml-2 text-center font-size-2">
        <span class="d-inline-block" :class=" pattern === 'synthesize' ? 'background-brown':'' " @click="toggleBackground('synthesize')">综合模式</span>
        <span class="d-inline-block" :class=" pattern === 'radio' ? 'background-brown':'' " @click="toggleBackground('radio')">单选模式</span>
        <span class="d-inline-block" :class=" pattern === 'twoSides' ? 'background-brown':'' " @click="toggleBackground('twoSides')">两面模式</span>
      </span>
      <span class="date-selection d-inline-block text-right">
        <I-radio-group @on-change="onChangeDateOrLimit" :value="date" type="button" class="line-height8">
          <Radio label="TODAY">今天</Radio>
          <Radio label="YESTERDAY">昨天</Radio>
          <Radio label="THE_DAY_BEFORE_YESTERDAY">前天</Radio>
        </I-radio-group>
      </span>
      <span class="float-right d-inline mr-2 ml-2 picker d-xs-none">
        <I-date-picker :value="date" @on-change="onChangeDateOrLimit"/>
      </span>
    </div>
    <I-divider/>
    <div class="p-2" v-show=" pattern === 'synthesize'">
      <div class="rank-select">
        <p class="mt-1">
          <span>筛选名次：</span>
          <I-checkbox-group class="d-inline-block mr-2" @input="ranks" :value="checkRanks"> 
            <Checkbox label="冠军">&nbsp;冠军</Checkbox>
            <Checkbox label="亚军">&nbsp;亚军</Checkbox>
            <Checkbox label="第三名">&nbsp;第三名</Checkbox>
            <Checkbox label="第四名">&nbsp;第四名</Checkbox>
            <Checkbox label="第五名">&nbsp;第五名</Checkbox>
            <Checkbox label="第六名">&nbsp;第六名</Checkbox>
            <Checkbox label="第七名">&nbsp;第七名</Checkbox>
            <Checkbox label="第八名">&nbsp;第八名</Checkbox>
            <Checkbox label="第九名">&nbsp;第九名</Checkbox>
            <Checkbox label="第十名">&nbsp;第十名</Checkbox>
            <Checkbox label="冠亚和">&nbsp;冠亚和</Checkbox>
          </I-checkbox-group>
          <span class="mr-2" @click="syntheSizeCheckAll">全选</span>
          <span @click="syntheEmptyAll">清空</span>
        </p>
      </div>
      <div class="rank-select dewdrop">
        <p class="mt-1">
          <span>筛选路珠：</span>
          <I-checkbox-group class="d-inline-block mr-2" @on-change="ranks" :value="checkAnalysis">
            <Checkbox label="大小">&nbsp;大小</Checkbox>
            <Checkbox label="单双">&nbsp;单双</Checkbox>
            <Checkbox label="龙虎">&nbsp;龙虎</Checkbox>
          </I-checkbox-group>
        </p>
      </div>
    </div>
     <div class="p-2" v-show=" pattern === 'radio'">
      <div class="font-size-1p5 rank-select">
        <p class="mt-1">
          <span>筛选路珠：</span>
          <I-checkbox-group class="d-inline-block mr-2" v-model="checkRadioAnalysis">
            <Checkbox label="大小">&nbsp;大小</Checkbox>
            <Checkbox label="单双">&nbsp;单双</Checkbox>
            <Checkbox label="龙虎">&nbsp;龙虎</Checkbox>
          </I-checkbox-group>
          <span class="mr-2"  @click="radioCheckAll">全选</span>
          <span @click="radioEmptyAll">清空</span>
        </p>
      </div>
       <div class="font-size-1p5 rank-select">
        <div class="mt-1">
          <span>筛选名次：</span>
          <I-radio-group :value="checkRadioRank" type="button" >
            <Radio label="冠军"></Radio>
            <Radio label="亚军"></Radio>
            <Radio label="第三名"></Radio>
            <Radio label="第四名"></Radio>
            <Radio label="第五名"></Radio>
            <Radio label="第六名"></Radio>
            <Radio label="第七名"></Radio>
            <Radio label="第八名"></Radio>
            <Radio label="第九名"></Radio>
            <Radio label="第十名"></Radio>
            <Radio label="冠亚和"></Radio>
          </I-radio-group>
        </div>
      </div>
    </div>
    <div class="p-2" v-show=" pattern === 'twoSides'">
      <div class="font-size-1p5 rank-select">
        <p class="mt-1">
          <span>筛选名次：</span>
          <I-checkbox-group class="d-inline-block mr-2" v-model="checkTwoSidesRanks">
            <Checkbox label="冠军">&nbsp;冠军</Checkbox>
            <Checkbox label="亚军">&nbsp;亚军</Checkbox>
            <Checkbox label="第三名">&nbsp;第三名</Checkbox>
            <Checkbox label="第四名">&nbsp;第四名</Checkbox>
            <Checkbox label="第五名">&nbsp;第五名</Checkbox>
            <Checkbox label="第六名">&nbsp;第六名</Checkbox>
            <Checkbox label="第七名">&nbsp;第七名</Checkbox>
            <Checkbox label="第八名">&nbsp;第八名</Checkbox>
            <Checkbox label="第九名">&nbsp;第九名</Checkbox>
            <Checkbox label="第十名">&nbsp;第十名</Checkbox>
          </I-checkbox-group>
          <span class="mr-2" @click="twoSidesCheckAll">全选</span>
          <span @click="twoSidesEmptyAll">清空</span>
        </p>
      </div>
      <div class="font-size-1p5 rank-select">
        <p class="mt-1">
          <span>筛选路珠：</span>
          <I-radio-group v-model="checkTwoSidesAnalysis" type="button">
            <Radio label="大小"></Radio>
            <Radio label="单双"></Radio>
            <Radio label="龙虎"></Radio>
          </I-radio-group>
        </p>
      </div>
    </div>
    <div class="dewdrop-table mb-1" v-for="(oddOrEvensAndaSmallOrLarge , iIndex ) in mergeOddEvenSmallLargeDragonTiger" :key="iIndex">
      <S-result-table 
        :resultOddOrEvensAndSmallOrLarges="resultOddOrEvensAndSmallOrLarges"
        :rank="checkRanks[iIndex.split('_')[0]]"
        :oddEvenOrSmallOrLarge="iIndex.split('_')[1]"
        :oDragonOrTigerCount="count[iIndex.split('_')[1]][iIndex.split('_')[0]] "
        v-show="(toggleOddEvent.indexOf(iIndex.split('_')[1]) !== -1 || toggleOddEvent.length === 0) && actualScreens.indexOf(checkRanks[iIndex.split('_')[0]]) !== -1"
        />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import moment from 'moment';

import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import {
  ITabs,
  IDivider,
  ICheckboxGroup,
  IRadioGroup,
  IDatePicker,
  SResultTable,
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
    IDatePicker,
    SResultTable,
  },
})
class ResultAnalysis extends Vue {
  @Prop()
  public resultOddOrEvensAndSmallOrLarges!: any;

  @Prop()
  public oddOrEvensAndSmallOrLargeCount!: any;

  @Prop()
  public dragonOrTigerResult!: any;

  @Prop()
  public dragonOrTigerCount!: any;

  @Prop()
  public firstAndSecondSummation!: any;
  
  @Prop()
  public firstAndSecondSummationCount!: any;

  @Prop()
  public code!: string;

  public get mergeOddEvenSmallLargeDragonTiger() {
    let oResult = {
      ...this.resultOddOrEvensAndSmallOrLarges,
      ...this.dragonOrTigerResult,
      ...this.firstAndSecondSummation,
    }; 
    return oResult;
  }

  public onChangeDateOrLimit(sDate: string) {
    let oQueries = {};
    let _sDate = ''
    switch(sDate) {
      case 'TODAY':
        _sDate = moment().format('YYYY-MM-DD');   
        oQueries = {
          date: _sDate,
          code: this.code,
        };
        break;
      case 'YESTERDAY':
        _sDate = moment().subtract(1, 'days').format('YYYY-MM-DD');   

        break;
      case 'LIMIT_30':
        oQueries = {
          limit: 30,
        }
      break;  
     default:
    } 
  }

  public ranks(sRank: string) {
   //  console.log(sRank);
  }

  public toggleOddEvent: any = ['small' , 'odd' , 'dragon' , 'guanyaodd' , 'guanyasmall' ];
  public checkRanks: any = ['冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名','冠亚和'];
    // public checkRanks: object = {
    //   CHAMPION: '冠军',
    //   SECOND: '亚军',
    //   THIRD: '第三名',
    //   FOURTH: '第四名',
    //   FIFTH: '第五名',
    //   SIXTH: '第六名',
    //   SEVENTH: '第七名',
    //   EIGHTH: '第八名',
    //   NINTH: '第九名',
    //   TENTH: '第十名',
    //   CROWNORSECONDSUM: '冠亚和',
    // }
  public checkAnalysis: any = ['大小', '单双', '龙虎'];
  public checkRadioRank: any= '冠军';
  public checkRadioAnalysis: any = ['大小', '单双', '龙虎'];
  public checkTwoSidesRanks: any = ['冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
  public checkTwoSidesAnalysis: string = '大小';
  public actualScreens: any[] = [
    '冠军' ,
    '亚军' ,
    '第三名',
    '第四名',
    '第五名',
    '第六名',
    '第七名',
    '第八名',
    '第九名',
    '第十名',
    '冠亚和',
    '单双' ,
    '大小',
    '龙虎',
  ];

  public pattern = 'synthesize';
  public date = 'TODAY';

  public toggleBackground( pattern: string ) {
    this.pattern = pattern;
  }

  public get count() {
    let oddsmall = this.changeDataStructure(this.oddOrEvensAndSmallOrLargeCount);
    let obj = {
      odd: { ...oddsmall.odd },
      small: { ...oddsmall.small },
      dragon: { ...this.dragonOrTigerCount },
      guanyaodd: { 10: { ...this.firstAndSecondSummationCount.odd } },
      guanyasmall: { 10: { ...this.firstAndSecondSummationCount.small } },
    };
    return obj;
  }

  public changeDataStructure( objSmall: any ) { //  数据格式
    let odd: any = 'odd';
    let small: any = 'small';
    let aObjSmalls = Object.values(objSmall);
    let _odd = aObjSmalls.reduce((interval: any , item: any , index ) => {
      interval[index] = item[odd];
      return interval;
    } , {});
    let _small = aObjSmalls.reduce((interval: any , item: any , index ) => {
      interval[index] = item[small];
      return interval;
    } , {});
    return { odd: _odd , small: _small  };
  }

  public syntheSizeCheckAll() { // 综合模式全选
    this.checkRanks = ['冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名', '冠亚和'];
    this.checkAnalysis = ['大小', '单双', '龙虎'];
  }

  public syntheEmptyAll() {
     this.checkRanks = [];
     this.checkAnalysis = [];
  }

  public radioCheckAll() { // 单选模式全选
    this.checkRadioAnalysis = ['大小', '单双', '龙虎'];
  }

  public radioEmptyAll() {
    this.checkRadioAnalysis = [];
  }

  public twoSidesCheckAll() { // 两面模式全选
    this.checkTwoSidesRanks = ['冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
  }

  public twoSidesEmptyAll() {
    this.checkTwoSidesRanks = [];
  }

}
export default ResultAnalysis;
</script>
