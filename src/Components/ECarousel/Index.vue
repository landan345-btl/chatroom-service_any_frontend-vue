<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item v-for="(sImage, iIndex) in images" :key="iIndex" >
        <!-- @ 要在 reuqire 语句中 -->
        <img :src="require(`@/assets/images/banner-default.jpg`)" />
        <span>{{sImage}}</span>
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
  public images: string[] = [
    'assets/images/banner-default.jpg',
  ];
  @Prop()
  public height!: string;
  // @Prop()
  // public type: string = '';
}
export default ECarousel;

</script>