<template>
  <div class="page lottery">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 20, offset: 2}" 
        :md="{span: 20, offset: 2}" 
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <Pannel 
            :lotteryIssue="getLastLotteryIssue" 
            :lottery="getLottery" 
            :code="getCode" 
            :types="getTypes"
             v-if="getLastLotteryIssue && getLottery && getTypes"/>
          <Board 
            :lotteryIssues="getLotteryIssues" 
            :lottery="getLottery" 
            :code="getCode" 
            :types="getTypes" 
            :todayTwoSideRecords="getTodayTwoSideRecords"
            :hotWarnColdPositions="getHotWarnColdPositions"/>
        </main>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import {
  Header,
  NavTop,
  NavRight,
  Footer,
} from '@/Commons/';

import {
  Lottery as LotteryHelper,
} from '@/Helpers/';

import Pannel from './Pannel/Index.vue';
import Board from './Board/Index.vue';

import {
  BACKEND,
  LOTTERIES,
  LOTTERY_TYPES,
} from '@/CONFIGS/';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    Pannel,
    Board,
  },
})
class Lottery extends Vue {
  public timer: any;

  public beforeCreate(): void {
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_EMPTY', {});
  }

  public created(): void {
    let $root: any = this.$root;
    let sCode = this.$route.query.code;
    this._redirecteIfWithoutCode();
    let oQueries = {
      code: sCode,
    };
    this.$store.dispatch('LOTTERY_ACTION_SHOW', oQueries);
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries);
    this.setIntervalLotteryIssueActionShow();
  }


  public setIntervalLotteryIssueActionShow() {
    this.timer = setInterval(() => {
      this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
    } , BACKEND.INTERVAL_TIME );
  }

  public beforeDestroy() {  // 组件销毁之前调用
    clearInterval( this.timer );
  }

  private _redirecteIfWithoutCode(): void {
    let mCode = this.$route.query.code;
    let sCode = mCode.toString();
    if (!(sCode in LOTTERIES)) {
      this.$router.push( { name: '/home'});
    }
  }

  public get getLottery(): any {
    let oLotteries: any = this.$store.state.lotteries;
    let aLotteries = Object.values(oLotteries);
    let oLottery = aLotteries.pop();
    return oLottery;
  }

  public get getCode(): string {
    let mCode = this.$route.query.code;
    let sCode = mCode.toString();
    return sCode;
  }

  public get getTypes(): string | void {

    try {
      let oLotteries: any = Object.assign({}, this.$store.state.lotteries);

      let aLotteries = Object.values(oLotteries);
      if (0 === aLotteries.length) {
        throw new Error('');
      }
      let oLottery: any = aLotteries.pop();
      if (!oLottery.hasOwnProperty('types')) {
        throw new Error('');
      }
      let sTypes = oLottery.types;
      return sTypes;
    } catch (oError) {
      return;
    } finally {
      // do nothing
    }
  }

  public get getLotteryIssues() {
    let oLotteryIssues: any = this.$store.state.lottery_issues;
    return oLotteryIssues;
  }

  public get getLastLotteryIssue() {
    let iLotteryIssueId: number;
    let _oLastLotteryIssues: any = {};
    let oLotteryIssues: { lottery_issue_id: any} = this.$store.state.lottery_issues;
    let oLotteryIssue: { lottery_issue_id: any} | undefined = Object.values(oLotteryIssues).pop();
    return oLotteryIssue;
  }

  public get getHotWarnColdPositions() {
    let oLotteryIssues: any = this.$store.state.lottery_issues;
    let oLotteries: any = this.$store.state.lotteries;
    let aLotteryIssues = Object.values(oLotteryIssues);

    let oHotWarnColdCountPositions: any = {};
    let oLotteryIssue: any;
    let iLoopCount = 0;
    while (20 > iLoopCount && 1 <= aLotteryIssues.length) {
      oLotteryIssue = aLotteryIssues.pop();
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      let sType = oLotteries[oLotteryIssue.lottery_id].types;
      aNumbers.forEach((iNumber: number, iIndex: number) => {
        if (!oHotWarnColdCountPositions.hasOwnProperty(iIndex)) {
          let oNumbersToCounts = LOTTERY_TYPES[sType].NUMBERS.reduce((_oNumbersToCounts: any, _iNumber: any) => {
            _oNumbersToCounts[_iNumber] = 0;
            return _oNumbersToCounts;
          }, {});
          oHotWarnColdCountPositions[iIndex] = oNumbersToCounts;
        }
        let oHotWarnColdPosition = oHotWarnColdCountPositions[iIndex];
        oHotWarnColdCountPositions[iIndex][iNumber] = oHotWarnColdPosition[iNumber] + 1;
      });
      iLoopCount++;
    }
    return oHotWarnColdCountPositions;
  }

  public get getTodayNumbers() {
    let oLotteryIssues: any = this.$store.state.lottery_issues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    aLotteryIssues.forEach((oLotteryIssue: any) => {
      let aNumbers = oLotteryIssue.numbers;

    });
    return false;
  }

  public get getTodayTwoSideRecords() {
    let oLotteryHelper = new LotteryHelper();
    let oLotteryIssues: any = this.$store.state.lottery_issues;
    let oLotteries: any = this.$store.state.lotteries;
    let oTodayTwoSideRecords: {
      [key: string]: any,
    } = {};
    let aLotteryIssues = Object.values(oLotteryIssues);

    aLotteryIssues.forEach((oLotteryIssue: any) => {
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      let iLotteryId = oLotteryIssue.lottery_id;
      let sTypes = oLotteries[iLotteryId].types;
      let iIndex: number = 0;
      for (iIndex = 0 ; iIndex < aNumbers.length ; iIndex++) {
        let iNumber = aNumbers[iIndex];
        let sIsNumberSmallOrLarge = oLotteryHelper.isNumberSmallOrLarge(iNumber, sTypes);
        let sOddOrEven = oLotteryHelper.isOddOrEven(iNumber, sTypes);
        if (!oTodayTwoSideRecords.hasOwnProperty(iIndex)) {
          oTodayTwoSideRecords = {
            ...oTodayTwoSideRecords,
            [iIndex]: {
              small: 0,
              large: 0,
              odd: 0,
              even: 0,
            },
          };
        }
        if ('小' === sIsNumberSmallOrLarge) {
          let oRecords = oTodayTwoSideRecords[iIndex];
          let sKey = 'small';
          oRecords[sKey] = oRecords[sKey] + 1;
        }

        if ('大' === sIsNumberSmallOrLarge) {
          let oRecords = oTodayTwoSideRecords[iIndex];
          let sKey = 'large';
          oRecords[sKey] = oRecords[sKey] + 1;
        }

        if ('单' === sOddOrEven) {
          let oRecords = oTodayTwoSideRecords[iIndex];
          let sKey = 'odd';
          oRecords[sKey] = oRecords[sKey] + 1;
        }

        if ('双' === sOddOrEven) {
          let oRecords = oTodayTwoSideRecords[iIndex];
          let sKey = 'even';
          oRecords[sKey] = oRecords[sKey] + 1;
        }
      }
    });
    return oTodayTwoSideRecords;
  }
}

export default Lottery;
</script>
