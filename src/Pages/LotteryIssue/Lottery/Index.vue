<template>
  <div class="lottery">
    <div class="icon">
      <img :src="require(`@/assets/images/` + `${code}` + `-sm.png`)"/>
    </div>
    <div class="name-issue_no-numbers">
      code: {{code}}
    </div>
    <div class="countdown">
      
    </div>
    <div class="audio">
      
    </div>
    <div class="live">
      
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import ETabs from '@/Components/ETabs/Index.vue';
import ECollapse from '@/Components/ECollapse/Index.vue';

@Component({
  name: 'Lottery',
  components: {
    ECollapse,
  },
})
class Lottery extends Vue {
  @Prop()
  public code!: string;
}

export default Lottery;
</script>
