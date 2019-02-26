<template>
  <div class="about">
    <Header/>
    <h1>This is an /about page</h1>
    <Line> </Line>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/commons/Footer/index.vue'; // @ is an alias to /src
import Header from '@/commons/Header/index.vue'; // @ is an alias to /src
import Line from '@/components/Line/index.vue'; // @ is an alias to /src

@Component({
  components: {
    Header,
    Footer,
    Line,
  },
})
class About extends Vue {
}

export default About;
</script>
