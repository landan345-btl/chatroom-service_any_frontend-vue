<template>
  <div class="lottery">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <Top :lotteryIssue="getLastLotteryIssue" :lotteries="getLotteries" :code="getCode"/>
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
import ITabs from '@/Components/ITabs/Index.vue';
import Top from './Top/Index.vue';
import TabsAndTabPanes from './TabsAndTabPanes/Index.vue';

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
    ITabs,
    Top,
  },
})
class Lottery extends Vue {
  public created(): void {
    let $root: any = this.$root;
    let sCode = this.$route.query.code;
    this._redirecteIfWithoutCode();
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {});
    let oQueries = {
      code: sCode,
    };
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries);
  }

  private _redirecteIfWithoutCode(): void {
    let mCode = this.$route.query.code;
    let sCode = mCode.toString();
    if (!(sCode in LOTTERIES)) {
      this.$router.push( { name: '/home'});
    }
  }

  public get getLotteries(): any {
    let oLotteries: any = this.$store.state.lotteries;
    return oLotteries;
  }

  public get getCode(): string {
    let mCode = this.$route.query.code;
    let sCode = mCode.toString();
    return sCode;
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
}

export default Lottery;
</script>
