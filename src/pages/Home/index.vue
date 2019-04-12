<template>
  <div class="">
    <Header />
    <Nav />
    <main class="home">
    </main>
    <Footer />
  </div>
</template>
<style scoped lang="scss">

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import Header from '@/commons/Header/Index.vue';
import Nav from '@/commons/Nav/Index.vue';
import Footer from '@/commons/Footer/Index.vue';
import ERadio from '@/components/ERadio/Index.vue';
import ESelect from '@/components/ESelect/Index.vue';

import AxiosHelper from '@/helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Home',
  components: {
    Header,
    Nav,
    Footer,
    ERadio,
    ESelect,
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
}

export default Home;
</script>
