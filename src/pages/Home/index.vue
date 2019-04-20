<template>
  <div class="home">
    <Header />
    <NavTop />
    <NavRight />
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 15, offset: 2}" :md="{span: 12, offset: 3}" :lg="{span: 11, offset: 4}">
        <main>
          MAIN
        </main>
      </el-col>
      <el-col :xs="{span: 0}" :sm="{span: 5}" :md="{span: 6}" :lg="{span: 5}">
        <aside>
          <Recommended-lottery v-bind:lotteries="recommendedLotteries"/>
          <Advertisment-a />
        </aside>
      </el-col>
    </el-row>

    <Footer />
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import Header from '@/Commons/Header/Index.vue';
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import Footer from '@/Commons/Footer/Index.vue';
import ERadio from '@/Components/ERadio/Index.vue';
import ESelect from '@/Components/ESelect/Index.vue';
import RecommendedLottery from './RecommendedLottery.vue';
import AdvertismentA from './AdvertismentA.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

import LOTTERIES from '@/CONFIGS/LOTTERIES/';

@Component({
  name: 'Home',
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ERadio,
    ESelect,
    RecommendedLottery,
    AdvertismentA,
  },
})
class Home extends Vue {
  public sImage = 'CQSSC';
  public created(): void {
    let $root: any = this.$root;
    let oRequest: {} = {
      path: '/lottery/show',
      params: {},
    };

    this.$store.dispatch('LOTTERY_ACTION_SHOW');
    this.$store.dispatch('ISSUE_ACTION_SHOW', 7);
    // debugger;
    oAxiosHelper.get(oRequest).then((oResponse: any) => {
      // debugger;
      // console.log(oResponse);
    }).catch((oError) => {
      // debugger;
      // console.log(oError);
    });

    let aRequests = [
      {
        path: '/lottery/show',
        params: {},
      },
    ];
    // debugger;
    oAxiosHelper.get(aRequests).then((aResponses: any) => {
      // debugger;
      // console.log(aResponses);
    }).catch((oError) => {
      // debugger;
      // console.log(oError);
    });
  }

  public get oLotteries(): object {
    // debugger;
    return this.$store.state.lotteries;
  }

  public handleTest(): void {
    let $root: any = this.$root;
    $root.test = $root.test + 1;
    console.log($root.test);
  }

  public get bShowedAllLottery(): boolean {
    let $root: any = this.$root;
    return $root.showedAllLottery;
  }
  public get bShowedPapularLottery(): boolean {
    let $root: any = this.$root;
    return $root.showedPapularLottery;
  }
   public get bShowedInstantLottery(): boolean {
    let $root: any = this.$root;
    return $root.showedInstantLottery;
  }
  public get bShowedPKTenLottery(): boolean {
    let $root: any = this.$root;
    return $root.showedPKTenLottery;
  }
  public get bShowedFiveOfElevenLottery(): boolean {
    let $root: any = this.$root;
    return $root.showedFiveOfElevenLottery;
  }
  public get bShowedFastThreeLottery(): boolean {
    let $root: any = this.$root;
    return $root.showedFastThreeLottery;
  }
  public get bShowedOtherLottery(): boolean {
    let $root: any = this.$root;
    return $root.showedOtherLottery;
  }

  public get recommendedLotteries(): object {
    let oLotteries: any = this.$store.state.lotteries;
    let _oLotteries: {} = {};
    let iLotteryId: string;
    let sLotteryCode;
    type sLotteryCode = 'SGFT' | 'BJPK10' | 'JSPK10' | 'PCDD' | 'CQKLSF' | 'JX11X5' | 'SD11X5' | 'JSK3';
    for (iLotteryId in oLotteries) {
      if (oLotteries.hasOwnProperty(Number(iLotteryId))) {
        sLotteryCode = oLotteries[iLotteryId].code;
        if (sLotteryCode in LOTTERIES) {
          let _lottery = {
            name: LOTTERIES[sLotteryCode].NAME,
            src: LOTTERIES[sLotteryCode].SRC,
          };
          let __oLotteries = {
            [sLotteryCode]: _lottery,
          };
          _oLotteries = Object.assign(_oLotteries, __oLotteries);

        }
      }

    }
    return _oLotteries;
  }
}

export default Home;
</script>
