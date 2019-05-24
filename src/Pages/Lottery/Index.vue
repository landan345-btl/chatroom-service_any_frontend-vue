<template>
  <div class="page lottery">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <Row :gutter="0">
      <Col
        :xs="{span: 22, offset: 1}"
        :sm="{span: 20, offset: 2}"
        :md="{span: 20, offset: 2}"
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <Pannel
            :lotteryIssue="getLastLotteryIssue"
            :lotteries="getLotteries"
            :code="getCode"
            :types="getTypes"
             v-if="getLastLotteryIssue && getLottery && getTypes"/>
          <Board
            :lotteryIssues="getLotteryIssues"
            :lottery="getLottery"
            :lotteries="getLotteries"
            :code="getCode"
            :types="getTypes"
            v-if="getTypes"/>
        </main>
      </Col>
    </Row>
    <Footer/>
    <I-spin :isShowed="isSpinShowed"/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Watch, } from 'vue-property-decorator';

import {
  Header,
  NavTop,
  NavRight,
  Footer,
} from '@/Commons/';

import {
  ISpin,
} from '@/Components/';

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

import {
  Lottery as LotteryMixin,
} from '@/Mixins/';

@Component({
  components: {
    ISpin,
    Header,
    NavTop,
    NavRight,
    Footer,
    Pannel,
    Board,
  },
  mixins: [LotteryMixin, ],
})
class Lottery extends Vue {
  public interval: any = null;
  public isSpinShowed: boolean = true;

  public beforeCreate (): void {
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_EMPTY', {});
  }

  public created (): void {
    let $root: any = this.$root;
    let sCode = this.$route.query.code;
    this._redirecteIfWithoutCode();
    let oQueries = {
      code: sCode,
    };
    this.$store.dispatch('LOTTERY_ACTION_SHOW', oQueries);
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries).then(() => {
      this.isSpinShowed = false;
    });
    this.setIntervalLotteryIssueActionShow(oQueries);
  }

  public beforeMount () {
    // this.caculateNumbersToPositionsToCounts();
  }

  @Watch('$route', { immediate: true, deep: true, })
  public onRouteChange (oToRoute: any, oFromRoute: any) {
    if (oFromRoute && (oToRoute.query.code !== oFromRoute.query.code || oToRoute.query.path !== oFromRoute.query.path)) {
      // this.$store.dispatch('LOTTERY_ISSUE_ACTION_EMPTY', {});
      let sCode = oToRoute.query.code || '';
      let oQueries = {
        code: sCode,
      };

      Promise.all([
        this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries),
        this.$store.dispatch('LOTTERY_ACTION_SHOW', oQueries),
      ]).then(() => {
        this.isSpinShowed = false;
      });
      
      this.setIntervalLotteryIssueActionShow(oQueries);
    }
  }

  public setIntervalLotteryIssueActionShow (oQueries: any) {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries);
    }, BACKEND.INTERVAL_TIME);
  }

  public destroyed () {
    clearInterval(this.interval);
  }

  private _redirecteIfWithoutCode (): void {
    let mCode = this.$route.query.code;
    let sCode = mCode.toString();
    if (!(sCode in LOTTERIES)) {
      this.$router.push({ name: '/home', });
    }
  }

  public get getLottery (): any {
    let oLotteries: any = this.$store.state.lotteries;
    let aLotteries = Object.values(oLotteries);
    let oLottery = aLotteries.pop();
    return oLottery;
  }

  public get getLotteries (): any {
    let oLotteries: any = this.$store.state.lotteries;
    return oLotteries;
  }

  public get getCode (): string {
    let mCode = this.$route.query.code;
    let sCode = mCode.toString();
    return sCode;
  }

  public get getTypes (): string | void {
    try {
      let oLotteries: any = Object.assign({}, this.$store.state.lotteries);

      let aLotteries = Object.values(oLotteries);
      if (aLotteries.length === 0) {
        throw new Error('');
      }
      let oLottery: any = aLotteries.pop();
      if (!oLottery || !oLottery.hasOwnProperty('types')) {
        throw new Error('');
      }
      let sTypes = oLottery.types;
      return sTypes;
    } catch (Error) {

    } finally {
      // do nothing
    }
  }

  public get getLotteryIssues () {
    let oLotteryIssues: any = this.$store.state.lottery_issues;
    return oLotteryIssues;
  }

  public get getLastLotteryIssue () {
    let iLotteryIssueId: number;
    let _oLastLotteryIssues: any = {};
    let oLotteryIssues: { lottery_issue_id: any} = this.$store.state.lottery_issues;
    let oLotteryIssue: { lottery_issue_id: any} | undefined = Object.values(oLotteryIssues).pop();
    return oLotteryIssue;
  }

  public get getTodayNumbers () {
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
