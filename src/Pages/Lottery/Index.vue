<template>
  <div class="lottery">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <Top :lotteryIssue="getLastLotteryIssue" :lottery="getLottery" :code="getCode" :types="getTypes" v-if="getLastLotteryIssue && getLottery && getTypes"/>
          <Board 
            :lotteryIssues="getLotteryIssues" 
            :lottery="getLottery" 
            :code="getCode" 
            :types="getTypes" 
            :todayTwoSideRecords="getTodayTwoSideRecords"/>
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
  Footer,
  Header,
  NavTop,
  NavRight,
} from '@/Commons/';

import Top from './Top/Index.vue';
import Board from './Board/Index.vue';

import {
  Lottery as LotteryHelper,
} from '@/Helpers/';

import {
  LOTTERIES
} from '@/CONFIGS/';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    Top,
    Board,
  },
})
class Lottery extends Vue {

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
    } catch(oError) {
      return;
    } finally {

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
    let aLotteryIssues = Object.values(oLotteryIssues);

    let aHotWarnColdPositions: any = [
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0},
    ];
    let oLotteryIssue: any;
    let iLoopCount = 0;
    while (20 > iLoopCount && 1 <= aLotteryIssues.length) {
      oLotteryIssue = aLotteryIssues.pop();
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      aNumbers.forEach((iNumber: number, iIndex: number) => {
          let oHotWarnColdPosition = aHotWarnColdPositions[iIndex];
          aHotWarnColdPositions[iIndex][iNumber] = oHotWarnColdPosition[iNumber] + 1;
        });
      iLoopCount++;
    }
    return aHotWarnColdPositions;
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
    let TodayTwoSideRecords: {
      [key: string] : any
    } = {};
    let aLotteryIssues = Object.values(oLotteryIssues);
    aLotteryIssues.forEach((oLotteryIssue: any) => {
      let aNumbers = JSON.parse(oLotteryIssue.numbers);
      let iLotteryId = oLotteryIssue.lottery_id;
      let sTypes = oLotteries[iLotteryId].types;
      let iInedex: number = 0;
      for (iInedex = 0 ; iInedex < aNumbers.length ; iInedex++) {
        let iNumber = aNumbers[iInedex];
        let sIsNumberSmallOrLarge = oLotteryHelper.isNumberSmallOrLarge(iNumber, sTypes);
        let sOddOrEven = oLotteryHelper.isOddOrEven(iNumber, sTypes);
        if (!TodayTwoSideRecords.hasOwnProperty(iInedex)) {
          TodayTwoSideRecords = {
            ...TodayTwoSideRecords,
            [iInedex]: {
              small: 0,
              large: 0,
              odd: 0,
              even: 0,
            }
          };
        }
        if ('小' === sIsNumberSmallOrLarge) {
          let oRecords = TodayTwoSideRecords[iInedex];
          oRecords['small'] = oRecords['small'] + 1;
        }

        if ('大' === sIsNumberSmallOrLarge) {
          let oRecords = TodayTwoSideRecords[iInedex];
          oRecords['large'] = oRecords['large'] + 1;
        }

        if ('单' === sOddOrEven) {
          let oRecords = TodayTwoSideRecords[iInedex];
          oRecords['odd'] = oRecords['odd'] + 1;
        }

        if ('双' === sOddOrEven) {
          let oRecords = TodayTwoSideRecords[iInedex];
          oRecords['even'] = oRecords['even'] + 1;
        }
      }
    });
    return TodayTwoSideRecords;
  }
}

export default Lottery;
</script>
