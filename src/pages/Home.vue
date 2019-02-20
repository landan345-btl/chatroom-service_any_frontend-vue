<template>
  <div class="home">
    <Header/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Footer/>
  </div>


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Footer from '@/commons/Footer.vue'; // @ is an alias to /src
import Header from '@/commons/Header.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Header,
    Footer
  },
})
export default class Home extends Vue {}
</script>
