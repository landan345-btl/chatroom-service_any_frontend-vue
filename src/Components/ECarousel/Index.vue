<template>
  <div class="block">

    <el-carousel height="300px">
      <el-carousel-item v-for="(sImage, iIndex) in images" :key="iIndex" >
        <img :src="require(`${sImage}`)" />
              {{sImage}}
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ECarousel',
})
class ECarousel extends Vue {
  @Prop()
  public images: any;
}
export default ECarousel;

</script>