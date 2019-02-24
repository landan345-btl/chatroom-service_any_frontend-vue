<template>
  <div class="">
    <Header />
    <Nav />
    <main class="home">
        <div class="top_content">
          <div class="content">
            <div  v-show="bShowedAllLottery">
               <table border="0" v-on:click="handleTest">
                {{ this.$root.showedAllLottery }} -- {{ this.$root.test }} -- {{ this.$root.bTest }}
                <tr><th>当期奖号</th><th>下期倒计时</th><th>走势图</th></tr>
                <tr v-for="aLottery in oLotteries" :key="aLottery.id">
                  <td>
                  <!--   <img class="img"  :src="require('@/assets/images/'+ ${aLottery.name} + '.png)'"> -->
                    <img class="img"  :src="require(`@/assets/images/` + `${sImage}` + `.png`)">
                    <p>{{ $t('CQSSC') }}第1901290969 期</p>
                     <div>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </td><td>距离<span>728525</span>期开奖时间：<span>00:24</span></td>
                  <td><img src="@/assets/images/icon03.png"/></td>
                </tr>
                
              </table> 
            </div>
            <div v-show="bShowedPapularLottery">
              2
            </div>
            <div v-show="bShowedInstantLottery">
              3
            </div>
            <div v-show="bShowedPKTenLottery">
              4
            </div>
            <div v-show="bShowedFiveOfElevenLottery">
              5
            </div>
            <div v-show="bShowedFastThreeLottery">
              6
            </div>
            <div v-show="bShowedOtherLottery">
              7
            </div>
          </div>
        </div>
    </main>
    <Footer />
  </div>
</template>
<style scoped lang="scss">
.top{background-color: #ebebeb;height: 30px;}
    .nav_top,.nav_top1,.nav_top2{width: 1200px; margin: 0 auto;}
    .top .nav_top{font-size: 14px;line-height: 30px;}
    .top .nav_top img{margin-right: 5px; margin-top: -3px;}
      .FloatRight{float: right;}
  .top_logo{height: 100px;}
  .top_nav{height: 50px;background-color: #37b0e9;}
    .nav_top2 ul li{text-align: center;height: 50px;width: 170px;float: left;font-size: 16px;color: white;line-height: 50px;}
    .displayN{display: none !important;}
    .displayB{display: block !important;}
  .top_content{background-color: #ebebeb;padding-bottom: 30px;}
    .content{width: 1200px; margin: 0 auto;padding-top: 20px;}
      .content>div{background: #FFFFFF;border-top: 2px solid #37b0e9;padding: 20px;margin-bottom: 20px;}
        .content>div table th{height: 50px;background-color: #ebebeb;width: 400px;text-align: center;    line-height: 50px;}
        .content>div>table th:first-child{width: 600px;}
        .content>div>table th:last-child{width: 200px;}
        .content>div table td{height: 75px;text-align: center;line-height: 100px;position:relative;}
         .content>div table tr td:first-child{line-height: 50px;}
          .content>div table td .img{width: 50px;height: 50px;left: 111px;top: 23px;position: absolute;}
          .content>div table td p{position: absolute;margin-top: 6px;margin-left: 174px;}
          .content>div table td div{position: absolute;margin-left: 166px;margin-top: 41px;}
           .content>div table td div span{width: 30px; height: 30px; border-radius: 50%; background-color: #37b0e9; display: inline-block; line-height: 30px; color: white; margin-left: 20px;}

            .content>div table tr:nth-child(odd){background-color: #e9e9e9;}
     @media all and (max-width: 820px) {
        nav{width: 75rem;}
        main{width: 75rem;}
        .content>div>table{width:73rem;font-size:45px; }
        .content>div>table th{height: 100px;}
        .content>div>table tr td:first-child{width:60%;}
        .content>div table td img{width: 70px; height: 70px; position: relative; top: 56px;} 
        .content>div table td .img{width: 150px; height: 150px; left: 32px; top: 23px;}
        .content>div table td div{margin-left: 178px; margin-top: 110px; }
        .content>div table td div span{width: 75px; height: 75px; line-height: 75px;}

      }
</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import 'reset-css';

import Header from '@/commons/Header/index.vue'; // @ is an alias to /src
import Nav from '@/commons/Nav/index.vue'; // @ is an alias to /src
import Footer from '@/commons/Footer/index.vue'; // @ is an alias to /src

import AxiosHelper from '@/helpers/Axios';
import { warn } from 'vue-class-component/lib/util';
let oAxiosHelper = new AxiosHelper();
@Component({
  name: 'Home',
  components: {
    Header,
    Nav,
    Footer,
  },
})
class Home extends Vue {
  public sImage = 'CQSSC';
  public created(): void {
    let $root: any = this.$root;
    let oRequest: {} = {
      path: '/lottery/all',
      params: {},
    };

    this.$store.dispatch('LOTTERY_SHOW_ACTION');

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
        path: '/lottery/all',
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
