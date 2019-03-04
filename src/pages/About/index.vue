<template>
  <html class="">
    <head>
      <meta name="description" content="免费在线教程">
      <meta name="keywords" content="HTML,CSS,XML,JavaScript">
      <meta name="author" content="runoob">
      <meta charset="UTF-8">
    </head>
    <Header/>
  <!--   <h1>This is an /about page</h1> -->
    <router-view></router-view>
    <Footer/>
  </html>
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
class About extends Vue {
}

export default About;
</script>
