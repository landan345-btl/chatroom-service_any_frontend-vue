<template>
  <div class="trend">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <E-tabs :type="'card'" :model="'PK10'">
            <el-tab-pane label="PK拾" name="PK10">
              <E-tabs>
                <el-tab-pane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types">
                  <V-line :data="vLineData"/>
                </el-tab-pane>
                BB
              </E-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types" class="d-inline-block"/>
            </el-tab-pane>
            <el-tab-pane label="时时彩" name="SSC">
              <E-tabs>
                <el-tab-pane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SSC' === oLottery.types">
                </el-tab-pane>
              </E-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SSC' === oLottery.types" class="d-inline-block"/>
            </el-tab-pane>
            <el-tab-pane label="11选5" name="11X5">
              <E-tabs>
                <el-tab-pane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types">
                </el-tab-pane>
              </E-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types" class="d-inline-block"/>
            </el-tab-pane>
            <el-tab-pane label="快三" name="K3">
              <E-tabs>
                <el-tab-pane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types">
                </el-tab-pane>
              </E-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types" class="d-inline-block"/>
            </el-tab-pane>
            <el-tab-pane label="快乐十分" name="KLSF">
              <E-tabs>
                <el-tab-pane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types">
                </el-tab-pane>
              </E-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types" class="d-inline-block"/>
            </el-tab-pane>
            <el-tab-pane label="快乐8" name="KL8">
              <E-tabs>
                <el-tab-pane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types">
                </el-tab-pane>
              </E-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types" class="d-inline-block"/>
            </el-tab-pane>
            <el-tab-pane label="六合彩" name="SIX">
              <E-tabs>
                <el-tab-pane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types">
                </el-tab-pane>
              </E-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types" class="d-inline-block"/>
            </el-tab-pane>
            <el-tab-pane label="幸运28" name="XY28">
              <E-tabs>
                <el-tab-pane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'XY28' === oLottery.types">
                </el-tab-pane>
              </E-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'XY28' === oLottery.types" class="d-inline-block"/>
            </el-tab-pane>
          </E-tabs>
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
import ETabs from '@/Components/ETabs/Index.vue';
import VLine from '@/Components/VLine/Index.vue';
import Lottery from './Lottery/Index.vue';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ETabs,
    VLine,
    Lottery,
  },
})
class Trend extends Vue {
  public created(): void {
    let $root: any = this.$root;
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {});
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
  }
  public get getLotteries(): any {
    let oLotteries: any = this.$store.state.lotteries;
    return oLotteries;
  }

  public get vLineData(): any {
    let oData = {
      columns: ['date', 'view users', 'order users', 'rate'],
      rows: [
        { 'date': '1/1', 'view users': 1393, 'order users': 1093, 'rate': 0.32 },
        { 'date': '1/2', 'view users': 3530, 'order users': 3230, 'rate': 0.26 },
        { 'date': '1/3', 'view users': 2923, 'order users': 2623, 'rate': 0.76 },
        { 'date': '1/4', 'view users': 1723, 'order users': 1423, 'rate': 0.49 },
        { 'date': '1/5', 'view users': 3792, 'order users': 3492, 'rate': 0.323 },
        { 'date': '1/6', 'view users': 4593, 'order users': 4293, 'rate': 0.78 },
      ],
    };
    return oData;
  }
}

export default Trend;
</script>
