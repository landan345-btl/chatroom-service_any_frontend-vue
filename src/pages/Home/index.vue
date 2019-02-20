<template>
  <div class="home">
    <Header/>

    <Footer/>
  </div>


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/commons/Footer/index.vue'; // @ is an alias to /src
import Header from '@/commons/Header/index.vue'; // @ is an alias to /src

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
