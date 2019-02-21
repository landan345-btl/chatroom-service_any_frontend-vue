<template>
  <div class="">
    <Header>
    </Header>
    <main class="home">

    </main>
    <Footer>
    </Footer>
  </div>


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/commons/Footer/index.vue'; // @ is an alias to /src
import Header from '@/commons/Header/index.vue'; // @ is an alias to /src

import AxiosHelper from '@/helpers/Axios';

let oAxiosHelper = new AxiosHelper();
@Component({
  name: 'Home',
  components: {
  Footer,
  Header,
  },
  })
class Home extends Vue {
    public created(): void {
      let oRequest: {} = {
        path: '/lottery/all',
        params: {},
      };

      this.$store.dispatch('LOTTERY_SHOW_ACTION').then((s) => {
        debugger;
        console.log(s);
      }).catch((oError) => {
        console.log(oError);
      });

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
}

export default Home;
</script>
