<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value">
    </el-option>
  </el-select>
</template>

<style scoped lang="scss">

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