<template>
  <div class="">
    <Header />
    <Nav />
    <main class="home">
      <div class="top_content">
        <div class="content">
          <div class="displayB">
            <table border="0">
              <tr><th>当期奖号</th><th>下期倒计时</th><th>走势图</th></tr>
              <tr v-for="aLottery in oLotteries" :key="aLottery.id">
                <td>ID: {{aLottery.id}}</td><td>{{aLottery.name}}</td><td><img src="@/assets/images/icon03.png"/></td>
              </tr>
            </table>
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            4
          </div>
          <div>
            5
          </div>
          <div>
            6
          </div>
          <div>
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
      .content>div{display: none;background: #FFFFFF;border-top: 2px solid #37b0e9;padding: 20px;margin-bottom: 20px;}
        .content>div table th{height: 50px;background-color: #ebebeb;width: 400px;text-align: center;    line-height: 50px;}
        .content>div>table th:first-child{width: 600px;}
        .content>div>table th:last-child{width: 200px;}
        .content>div table td{height: 100px;text-align: center;line-height: 50px;}
        .content>div table tr:nth-child(odd){background-color: #e9e9e9;}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'reset-css';


import Nav from '@/commons/Nav/index.vue'; // @ is an alias to /src
import Footer from '@/commons/Footer/index.vue'; // @ is an alias to /src
import Header from '@/commons/Header/index.vue'; // @ is an alias to /src

import AxiosHelper from '@/helpers/Axios';

let oAxiosHelper = new AxiosHelper();
@Component({
  name: 'Home',
  components: {
  Footer,
  Header,
  Nav,
  },
  })
class Home extends Vue {
    public created(): void {
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
    debugger;
    return this.$store.state.lotteries;
  }
}

export default Home;
</script>
