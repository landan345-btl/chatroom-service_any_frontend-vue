<template>
  <el-table :data="data" style="width: 100%">
    <slot></slot>
  </el-table>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">

import { Component, Prop, Vue, } from 'vue-property-decorator';
@Component({
  name: 'ETable',
})
class ETable extends Vue {
  @Prop({ default: null, })
  public data: any;
}

export default ETable;

</script>
