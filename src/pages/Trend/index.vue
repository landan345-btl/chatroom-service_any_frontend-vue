<template>
  <html class="">
    <head>
      <meta name="description" content="免费在线教程">
      <meta name="keywords" content="HTML,CSS,XML,JavaScript">
      <meta name="author" content="runoob">
      <meta charset="UTF-8">
    </head>
    <Header/>
    <h1>trend </h1>
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
class Trend extends Vue {

}

export default Trend;
</script>
