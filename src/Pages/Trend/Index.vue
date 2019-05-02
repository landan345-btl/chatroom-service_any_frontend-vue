<template>
  <div class="trend">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 mb-2">
          <I-tabs :type="'card'">
            <TabPane class="background-white" label="PK拾" name="PK10">
              <I-tabs>
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types">
                </TabPane>
              </I-tabs>
              <V-line :chartData="vLineData" class="ml-4 mr-4"/>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types" class="d-inline-block"/>
            </TabPane>
            <TabPane class="background-white" label="时时彩" name="SSC">
              <I-tabs>
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SSC' === oLottery.types">
                </TabPane>
              </I-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SSC' === oLottery.types" class="d-inline-block"/>
            </TabPane>
            <TabPane class="background-white" label="11选5" name="11X5">
              <I-tabs>
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types">
                </TabPane>
              </I-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types" class="d-inline-block"/>
            </TabPane>
            <TabPane class="background-white" label="快三" name="K3">
              <I-tabs>
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types">
                </TabPane>
              </I-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types" class="d-inline-block"/>
            </TabPane>
            <TabPane class="background-white" label="快乐十分" name="KLSF">
              <I-tabs>
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types">
                </TabPane>
              </I-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types" class="d-inline-block"/>
            </TabPane>
            <TabPane class="background-white" label="快乐8" name="KL8">
              <I-tabs>
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types">
                </TabPane>
              </I-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types" class="d-inline-block"/>
            </TabPane>
            <TabPane class="background-white" label="六合彩" name="SIX">
              <I-tabs>
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types">
                </TabPane>
              </I-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types" class="d-inline-block"/>
            </TabPane>
            <TabPane class="background-white" label="幸运28" name="XY28">
              <I-tabs>
                <TabPane :label="LOTTERIES[oLottery.code].NAME || oLottery.name" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'XY28' === oLottery.types">
                </TabPane>
              </I-tabs>
              <Lottery :lottery="oLottery" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'XY28' === oLottery.types" class="d-inline-block"/>
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
  public activeLottery = 'bjpk10';
  public ischecked = 0;
  public ranks = ['冠军' , '亚军' , '第三名' , '第四名' , '第五名' , '第六名' , '第七名' , '第八名' , '第九名' , '第十名'];
  public created(): void {
    let $root: any = this.$root;
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {});
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
  }
  public tabShow(Tindex: number) {
    this.ischecked = Tindex;
  }
  public get getLotteries(): any {
    let oLotteries: any = this.$store.state.lotteries;
    return oLotteries;
  }

  public get vLineData(): any {
    let oData = {
      columns: ['日期', '访问用户', '下单用户', '下单率'],
      rows: [
        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
      ],
    };
    return oData;
  }
}

export default Trend;
</script>
