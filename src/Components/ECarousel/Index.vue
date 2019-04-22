<template>
  <div class="block">

    <el-carousel>
      <el-carousel-item v-for="(sImage, iIndex) in images" :key="iIndex" >
        <!-- @ 要在 reuqire 语句中 -->
        <img :src="require(`@/` + `${sImage}`)" />
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
  public images!: string[];
  @Prop()
  public height!: string;
}
export default ECarousel;

</script>