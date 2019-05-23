<template>
  <Carousel autoplay v-model="value" loop>
    <CarouselItem v-for="(sImage, iIndex) in images" :key="iIndex" >
      <!-- @ 要在 reuqire 语句中 -->
      <img :src="require(`@/` + `${sImage}`)" />
    </CarouselItem>
  </Carousel>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';

@Component({
  name: 'ECarousel',
})
class ECarousel extends Vue {
  @Prop()
  public images!: string[];
  @Prop()
  public height!: string;
  @Prop()
  public type!: string;

  public value: number = 0;
}
export default ECarousel;

</script>
