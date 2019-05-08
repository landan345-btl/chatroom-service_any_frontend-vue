<template>
  <div class="lottery">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <Top :lotteryIssue="getLastLotteryIssue" :lottery="getLottery" :code="getCode" :types="getTypes" v-if="getLastLotteryIssue && getLottery && getTypes"/>
          <Board :lotteryIssue="getLotteryIssues" :hotWarnColdPositions="getHotWarnColdPositions" :lottery="getLottery" :code="getCode" :types="getTypes"  v-if="getLotteryIssues && getLottery && getTypes"/>
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

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import Top from './Top/Index.vue';
import Board from './Board/Index.vue';

import LOTTERIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
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

    public get getTypes(): string {
    let oLotteries: any = this.$store.state.lotteries;
    let aLotteries = Object.values(oLotteries);
    let oLottery: any  = aLotteries.pop();
    let sTypes = oLottery.types;
    return sTypes;
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
}

export default Lottery;
</script>
