<template>
  <div class="">
    <Nav>
    </Nav>
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
      let request: {} = {
        path: '/lottery/all',
        params: {},
      };
      oAxiosHelper.get(request).then((response: any) => {
        // debugger;
        // console.log(response);
      });
  }
}

export default Home;
</script>
