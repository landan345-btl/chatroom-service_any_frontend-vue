<template>
  <el-table :data="tableData" style="width: 100%">
    <slot></slot>
  </el-table>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'ETable',
})
class ETable extends Vue {
  @Prop({ default: null })
  public tableData: any = [{
    date: '2016-05-02',
    name: '王小虎hhh',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  }];
}

export default ETable;

</script>