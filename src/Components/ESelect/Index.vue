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
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ESelect',
})
class ESelect extends Vue {
  public value: any = '2期';
  @Prop({ default: null })
  public options!: any;
}
export default ESelect;

</script>