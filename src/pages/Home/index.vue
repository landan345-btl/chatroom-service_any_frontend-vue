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

@Component({
  components: {
  Footer,
  Header,
  },
  })
class Home extends Vue {
}

export default Home;
</script>
