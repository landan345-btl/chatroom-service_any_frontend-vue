<template>
  <div class="trend">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <I-tabs :type="'card'" class="parent" v-on:handle-click="handleParentLotteryIssues">
            <TabPane label="PK拾" name="PK10">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="时时彩" name="SSC">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SSC' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SSC' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="11选5" name="11X5">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="快三" name="K3">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="快乐十分" name="KLSF">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types" class="mt-2 background-white"/>
              </div>   
            </TabPane>
            <TabPane label="快乐8" name="KL8">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="六合彩" name="SIX">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="3D" name="3D">
              <I-tabs v-on:handle-click="handleSonLotteryIssues" class="son">
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'3D' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :data="vLineData" :settings="vLineSettings" class="background-white p-4"/>
              <div class="lotteries d-flex flex-wrap justify-content-between">
                <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'3D' === oLottery.types" class="mt-2 background-white"/>
              </div>
            </TabPane>
            <TabPane label="幸运28" name="XY28">
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

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
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
    let sCode = TYPES_TO_CODE[sType] || void 0;
    let oQueries = {
      code: sCode,
    };
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries);
  }

  public vLineSettings = {
    axisSite: {
      right: ['号码'],
    },
  }

  public get vLineData(): any {
    let oLotteryIssues = this.$store.state.lottery_issues;
    let oLotteries = this.$store.state.lotteries;
    let oData: object = {};
    let aColums: any[] = [];
    let aRows: any[] = [];
    for( let sLotteryIssueId in oLotteryIssues) {
      let oLotteryIssue = oLotteryIssues[sLotteryIssueId];
      let iLotteryId = oLotteryIssue.lottery_id;
      let sCode = oLotteries[iLotteryId].code;
      let sTypes = oLotteries[iLotteryId].types || void 0;
      let iBeforeUntilNowTime = LOTTERTIES[sCode].LOTTERY_ISSUE.BEFORE_UNTIL_NOW_TIME;
      let iOpenedTime = new Date(oLotteryIssue.opened_time).getTime();
      let iNowTime = new Date().getTime();

      if ('PK10' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名' ];
        let oRow = {
          '期号': oLotteryIssue.no,
          '冠军': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '亚军': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三名': JSON.parse(oLotteryIssue.numbers)[2] || void 0, 
          '第四名': JSON.parse(oLotteryIssue.numbers)[3] || void 0, 
          '第五名': JSON.parse(oLotteryIssue.numbers)[4] || void 0, 
          '第六名': JSON.parse(oLotteryIssue.numbers)[5] || void 0, 
          '第七名': JSON.parse(oLotteryIssue.numbers)[6] || void 0, 
          '第八名': JSON.parse(oLotteryIssue.numbers)[7] || void 0, 
          '第九名': JSON.parse(oLotteryIssue.numbers)[8] || void 0, 
          '第十名': JSON.parse(oLotteryIssue.numbers)[9] || void 0,
        };
        aRows.push(oRow);
      }

      if ('SSC' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '第一球', '第二球', '第三球', '第四球', '第五球'];
        let oRow = {
          '期号': oLotteryIssue.no,
          '第一球': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '第二球': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三球': JSON.parse(oLotteryIssue.numbers)[2] || void 0, 
          '第四球': JSON.parse(oLotteryIssue.numbers)[3] || void 0, 
          '第五球': JSON.parse(oLotteryIssue.numbers)[4] || void 0, 
        };
        aRows.push(oRow);
      }

      if ('11X5' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '第一球', '第二球', '第三球', '第四球', '第五球'];
        let oRow = {
          '期号': oLotteryIssue.no,
          '第一球': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '第二球': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三球': JSON.parse(oLotteryIssue.numbers)[2] || void 0, 
          '第四球': JSON.parse(oLotteryIssue.numbers)[3] || void 0, 
          '第五球': JSON.parse(oLotteryIssue.numbers)[4] || void 0, 
        };
        aRows.push(oRow);
      }

      if ('K3' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '第一球', '第二球', '第三球'];
        let oRow = {
          '期号': oLotteryIssue.no,
          '第一球': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '第二球': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三球': JSON.parse(oLotteryIssue.numbers)[2] || void 0, 
        };
        aRows.push(oRow);
      }

      if ('KLSF' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '第一球', '第二球', '第三球', '第四球', '第五球', '第六球', '第七球', '第八球'];
        let oRow = {
          '期号': oLotteryIssue.no,
          '第一球': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '第二球': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三球': JSON.parse(oLotteryIssue.numbers)[2] || void 0,
          '第四球': JSON.parse(oLotteryIssue.numbers)[3] || void 0, 
          '第五球': JSON.parse(oLotteryIssue.numbers)[4] || void 0, 
          '第六球': JSON.parse(oLotteryIssue.numbers)[5] || void 0, 
          '第七球': JSON.parse(oLotteryIssue.numbers)[6] || void 0, 
          '第八球': JSON.parse(oLotteryIssue.numbers)[7] || void 0, 
        };
        aRows.push(oRow);
      }

      if ('KL8' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '第一球', '第二球', '第三球', '第四球', '第五球', '第六球', '第七球'];
        let oRow = {
          '期号': oLotteryIssue.no,
          '第一球': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '第二球': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三球': JSON.parse(oLotteryIssue.numbers)[2] || void 0,
          '第四球': JSON.parse(oLotteryIssue.numbers)[3] || void 0, 
          '第五球': JSON.parse(oLotteryIssue.numbers)[4] || void 0, 
          '第六球': JSON.parse(oLotteryIssue.numbers)[5] || void 0, 
          '第七球': JSON.parse(oLotteryIssue.numbers)[6] || void 0, 
        };
        aRows.push(oRow);
      }

      if ('SIX' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '第一球', '第二球', '第三球', '第四球', '第五球', '第六球', '特别号'];
        let oRow = {
          '期号': oLotteryIssue.no,
          '第一球': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '第二球': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三球': JSON.parse(oLotteryIssue.numbers)[2] || void 0,
          '第四球': JSON.parse(oLotteryIssue.numbers)[3] || void 0, 
          '第五球': JSON.parse(oLotteryIssue.numbers)[4] || void 0, 
          '第六球': JSON.parse(oLotteryIssue.numbers)[5] || void 0, 
          '特别号': JSON.parse(oLotteryIssue.numbers)[6] || void 0, 
        };
        aRows.push(oRow);
      }

      if ('3D' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '第一球', '第二球', '第三球'];
        let oRow = {
          '期号': oLotteryIssue.no,
          '第一球': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '第二球': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三球': JSON.parse(oLotteryIssue.numbers)[2] || void 0,
        };
        aRows.push(oRow);
      }

      if ('XY28' === sTypes.toUpperCase() && JSON.parse(oLotteryIssue.numbers) instanceof Array && 0 <= JSON.parse(oLotteryIssue.numbers).length && iBeforeUntilNowTime > iNowTime - iOpenedTime) {
        aColums = ['期号', '第一球', '第二球', '第三球'];
        let oRow = {
          '期号': oLotteryIssue.no,
          '第一球': JSON.parse(oLotteryIssue.numbers)[0] || void 0, 
          '第二球': JSON.parse(oLotteryIssue.numbers)[1] || void 0, 
          '第三球': JSON.parse(oLotteryIssue.numbers)[2] || void 0,
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
