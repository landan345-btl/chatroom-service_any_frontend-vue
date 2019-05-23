<template>
  <div class="about">
    <Header/>
  <!--   <h1>This is an /about page</h1> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { Component, Vue, } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src

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
