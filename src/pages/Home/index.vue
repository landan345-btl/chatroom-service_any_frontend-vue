<template>
  <div class="">
    <Nav>
    </Nav>
    <Header>
    </Header>
    <main class="home">
      <div v-for="aLottery in oLotteries" :key="aLottery.id">
        ID: {{aLottery.id}}, name: {{aLottery.name}}
      </div>
    </main>
    <Footer>
    </Footer>
  </div>


</template>

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
