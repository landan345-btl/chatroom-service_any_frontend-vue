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
      let request: {} = {
        path: '/lottery/all',
        params: {},
      };

      debugger;
      oAxiosHelper.get(request).then((response: any) => {
        debugger;
        console.log(response);
      }).catch((error) => {
        debugger;
        console.log(error);
      });

      let requests = [
        {
          path: '/lottery/all',
          params: {},
        },
      ];
      debugger;
      oAxiosHelper.get(requests).then((responses: any) => {
        debugger;
        console.log(responses);
      }).catch((error) => {
        debugger;
        console.log(error);
      });
  }
}

export default Home;
</script>
