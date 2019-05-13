<template>
  <div class="page trend">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <I-tabs :type="'card'" class="parent" v-on:handle-click="handleParentLotteryIssues">
            <TabPane label="PK拾" name="trend-PK10">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="时时彩" name="trend-SSC">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SSC' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SSC' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="11选5" name="trend-11X5">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="快三" name="trend-K3">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="快乐十分" name="trend-KLSF">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types" class="mt-2 background-white"/>
              </div>   
            </TabPane>
            <TabPane label="快乐8" name="trend-KL8">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="六合彩" name="trend-SIX">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="3D" name="trend-3D">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'3D' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'3D' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="幸运28" name="trend-XY28">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'XY28' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'XY28' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
          </I-tabs>
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
import VLine from '@/Components/VLine/Index.vue';
import Lottery from './Lottery/Index.vue';

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
    VLine,
    Lottery,
  },
})
class Trend extends Vue {

  public vLineSettings = {
    labelMap: {
      no: '期號',
      first: '冠軍',
      second: '亞軍',
      third: '第三名',
      forth: '第三名',
      fifth: '第三名',
      sixth: '第三名',
      seventh: '第三名',
      eighth: '第三名',
      nineth: '第九名',
      tenth: '第十名',
      first_ball: '第一球',
      second_ball: '第二球',
      third_ball: '第三球',
      forth_ball: '第四球',
      fifth_ball: '第五球',
      sixth_ball: '第六球',
      seventh_ball: '第七球',
      eighth_ball: '第八球',
      special_ball: '特別號',
    },
    axisSite: {
      right: ['号码'],
    },
  };
  public created(): void {
    let $root: any = this.$root;
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {});
    let oQueries = {
      code: 'MLAFT',
    };
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries);
  }

  public get getLotteries(): any {
    let oLotteries: any = this.$store.state.lotteries;
    return oLotteries;
  }

  public handleParentLotteryIssues(sType: string): void {
    // 预设读取的彩种
    const TYPES_TO_CODE: any = {
      'PK10': 'MLAFT',
      'SSC': '3FSSC',
      '11X5': 'FF11X5',
      'K3': 'FF11X5',
      'KLSF': 'GDKLSF',
      'KL8': 'BJKL8',
      'SIX': '5FSIX',
      '3D': 'TW3D',
      'XY28': 'PCDD',
    };
    let sCode = TYPES_TO_CODE[sType];
    let oQueries = {
      code: sCode,
    };
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries);
  }

  public get vLineData(): any {
    let oLotteryIssues = this.$store.state.lottery_issues;
    let oLotteries = this.$store.state.lotteries;
    let oData: object = {};
    let aColums: any[] = [];
    let aRows: any[] = [];

    for (let sLotteryIssueId of Object.keys(oLotteryIssues)) {
      let oLotteryIssue = oLotteryIssues[sLotteryIssueId];
      let iLotteryId = oLotteryIssue.lottery_id;
      let sCode = oLotteries[iLotteryId].code;
      let sTypes = oLotteries[iLotteryId].types;
      let iBeforeUntilNowTime = LOTTERIES[sCode].LOTTERY_ISSUE.BEFORE_UNTIL_NOW_TIME;
      let iOpenedTime = new Date(oLotteryIssue.opened_time).getTime();
      let iNowTime = new Date().getTime();

      if ('PK10' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth' ];
        let oRow = {
          no: oLotteryIssue.no,
          first: JSON.parse(oLotteryIssue.numbers)[0],
          second: JSON.parse(oLotteryIssue.numbers)[1],
          third: JSON.parse(oLotteryIssue.numbers)[2],
          forth: JSON.parse(oLotteryIssue.numbers)[3],
          fifth: JSON.parse(oLotteryIssue.numbers)[4],
          sixth: JSON.parse(oLotteryIssue.numbers)[5],
          seventh: JSON.parse(oLotteryIssue.numbers)[6],
          eighth: JSON.parse(oLotteryIssue.numbers)[7],
          nineth: JSON.parse(oLotteryIssue.numbers)[8],
          tenth: JSON.parse(oLotteryIssue.numbers)[9],
        };
        aRows.push(oRow);
      }

      if ('SSC' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first_ball', 'second_ball', 'third_ball', 'forth_ball', 'fifth_ball'];
        let oRow = {
          no: oLotteryIssue.no,
          first_ball: JSON.parse(oLotteryIssue.numbers)[0],
          second_ball: JSON.parse(oLotteryIssue.numbers)[1],
          third_bal: JSON.parse(oLotteryIssue.numbers)[2],
          forth_ball: JSON.parse(oLotteryIssue.numbers)[3],
          fifth_ball: JSON.parse(oLotteryIssue.numbers)[4],
        };
        aRows.push(oRow);
      }

      if ('11X5' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first_ball', 'second_ball', 'third_ball', 'forth_ball', 'fifth_ball'];
        let oRow = {
          no: oLotteryIssue.no,
          first_ball: JSON.parse(oLotteryIssue.numbers)[0],
          second_ball: JSON.parse(oLotteryIssue.numbers)[1],
          third_ball: JSON.parse(oLotteryIssue.numbers)[2],
          forth_ball: JSON.parse(oLotteryIssue.numbers)[3],
          fifth_ball: JSON.parse(oLotteryIssue.numbers)[4],
        };
        aRows.push(oRow);
      }

      if ('K3' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first_ball', 'second_ball', 'third_ball'];
        let oRow = {
          no: oLotteryIssue.no,
          first_ball: JSON.parse(oLotteryIssue.numbers)[0],
          second_ball: JSON.parse(oLotteryIssue.numbers)[1],
          third_ball: JSON.parse(oLotteryIssue.numbers)[2],
        };
        aRows.push(oRow);
      }

      if ('KLSF' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first_ball', 'second_ball', 'third_ball', 'forth_ball', 'fifth_ball', 'sixth_ball', 'seventh_ball', 'eighth_ball'];
        let oRow = {
          no: oLotteryIssue.no,
          first_ball: JSON.parse(oLotteryIssue.numbers)[0],
          second_ball: JSON.parse(oLotteryIssue.numbers)[1],
          third_ball: JSON.parse(oLotteryIssue.numbers)[2],
          forth_ball: JSON.parse(oLotteryIssue.numbers)[3],
          fifth_ball: JSON.parse(oLotteryIssue.numbers)[4],
          sixth_ball: JSON.parse(oLotteryIssue.numbers)[5],
          seventh_ball: JSON.parse(oLotteryIssue.numbers)[6],
          eighth_ball: JSON.parse(oLotteryIssue.numbers)[7],
        };
        aRows.push(oRow);
      }

      if ('KL8' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first_ball', 'second_ball', 'third_ball', 'forth_ball', 'fifth_ball', 'sixth_ball', 'seventh_ball'];
        let oRow = {
          no: oLotteryIssue.no,
          first_ball: JSON.parse(oLotteryIssue.numbers)[0],
          second_ball: JSON.parse(oLotteryIssue.numbers)[1],
          third_ball: JSON.parse(oLotteryIssue.numbers)[2],
          forth_ball: JSON.parse(oLotteryIssue.numbers)[3],
          fifth_ball: JSON.parse(oLotteryIssue.numbers)[4],
          sixth_ball: JSON.parse(oLotteryIssue.numbers)[5],
          seventh_ball: JSON.parse(oLotteryIssue.numbers)[6],
        };
        aRows.push(oRow);
      }

      if ('SIX' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first_ball', 'second_ball', 'third_ball', 'forth_ball', 'fifth_ball', 'sixth_ball', 'special_ball'];
        let oRow = {
          no: oLotteryIssue.no,
          first_ball: JSON.parse(oLotteryIssue.numbers)[0],
          second_ball: JSON.parse(oLotteryIssue.numbers)[1],
          third_ball: JSON.parse(oLotteryIssue.numbers)[2],
          forth_ball: JSON.parse(oLotteryIssue.numbers)[3],
          fifth_ball: JSON.parse(oLotteryIssue.numbers)[4],
          sixth_ball: JSON.parse(oLotteryIssue.numbers)[5],
          special_ball: JSON.parse(oLotteryIssue.numbers)[6],
        };
        aRows.push(oRow);
      }

      if ('3D' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first_ball', 'second_ball', 'third_ball'];
        let oRow = {
          no: oLotteryIssue.no,
          first_ball: JSON.parse(oLotteryIssue.numbers)[0],
          second_ball: JSON.parse(oLotteryIssue.numbers)[1],
          third_ball: JSON.parse(oLotteryIssue.numbers)[2],
        };
        aRows.push(oRow);
      }

      if ('XY28' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['no', 'first_ball', 'second_ball', 'third_ball'];
        let oRow = {
          no: oLotteryIssue.no,
          first_ball: JSON.parse(oLotteryIssue.numbers)[0],
          second_ball: JSON.parse(oLotteryIssue.numbers)[1],
          third_ball: JSON.parse(oLotteryIssue.numbers)[2],
        };
        aRows.push(oRow);
      }

    }
    oData = {
      columns: aColums,
      rows: aRows,
    };
    return oData;
  }

  public handleSonLotteryIssues(sCode: string): void {
    let oQueries = {
      code: sCode,
    };
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries);
  }
}

export default Trend;
</script>
