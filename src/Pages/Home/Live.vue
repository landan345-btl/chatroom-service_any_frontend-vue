<template>
  <div class="live">
    <div class="lotteries"> 
      <img :src="require(`@/` + `${sImage}`)" class="lottery" v-for="(sImage, iIndex) in images" :key="iIndex"/>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Live-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import ECarousel from '@/Components/ECarousel/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Live',
  components: {
    ECarousel,
  },
})
class Live extends Vue {

  public images: string[] = [
    'assets/images/live-CQKLSF.jpg',
    'assets/images/live-FC3D.jpg',
    'assets/images/live-GSKLSF.png',
    'assets/images/live-K3.png',
    'assets/images/live-PK10.png',
    // 'assets/images/live-TJKSF.jpg',
    // 'assets/images/live-SD11X5.png',
  ];
}

export default Live;
</script>