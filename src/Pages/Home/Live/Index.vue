<template>
  <div class="live">
    <div class="lotteries d-flex justify-content-between"> 
      <div class="lottery" v-for="(sImage, iIndex) in images" :key="iIndex" v-bind:second="1">
        <img :src="require(`@/` + `${sImage}`)"/>
        <div class="content text-center">倒数&nbsp;&nbsp;&nbsp; 03:05</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import ECarousel from '@/Components/ECarousel/Index.vue';

@Component({
  name: 'Live',
  components: {
    ECarousel,
  },
})
class Live extends Vue {

  public images: string[] = [
    'assets/images/live-JSFT.png',
    'assets/images/live-3D.jpg',
    'assets/images/live-KLSF.png',
    'assets/images/live-K3.png',
    'assets/images/live-PK10.png',
    // 'assets/images/live-TJKSF.jpg',
    // 'assets/images/live-SD11X5.png',
  ];
}

export default Live;
</script>