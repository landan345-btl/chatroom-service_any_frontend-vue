<template>
  <div class="trend">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
  },
})
class Trend extends Vue {

}

export default Trend;
</script>
