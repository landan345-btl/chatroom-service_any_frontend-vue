<template>
  <div class="trend">
    <Header/>
    <h1>trend </h1>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src

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
