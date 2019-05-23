<template>
  <el-checkbox v-model="checked1" :disabled="disabled">
    <slot></slot>
  </el-checkbox>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';

@Component({
  name: 'ECheckbox',
})
class ECheckbox extends Vue {
  @Prop({ default: false, })
  public disabled: boolean = false;

  @Prop({ default: false, })
  public checked1: boolean = false;
}
export default ECheckbox;

</script>
