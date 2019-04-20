<template>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
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
  name: 'ESelect',
})
class ESelect extends Vue {
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
export default ESelect;

</script>