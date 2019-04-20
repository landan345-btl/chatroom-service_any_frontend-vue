<template>
  <div class="block">
    <el-carousel height="300px">
      <el-carousel-item v-for="iNumber in 3" :key="iNumber" >
        <img :src="require(`@/assets/images/banner-` + `1` + `.jpg`)" />
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
  @Prop({ default: null })
  public options: any = [{
    value: '选项1',
    label: '黄金糕',
  }, {
    value: '选项2',
    label: '双皮奶',
  }, {
    value: '选项3',
    label: '蚵仔煎',
  }, {
    value: '选项4',
    label: '龙须面',
  }, {
    value: '选项5',
    label: '北京烤鸭',
  }];
}
export default ECarousel;

</script>