<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="期号" width="180"> </el-table-column>
    <el-table-column prop="0" label="0"> </el-table-column>
    <el-table-column prop="1" label="1"> </el-table-column>
    <el-table-column prop="2" label="2"> </el-table-column>
    <el-table-column prop="3" label="3"> </el-table-column>
    <el-table-column prop="4" label="4"> </el-table-column>
    <el-table-column prop="5" label="5"> </el-table-column>
    <el-table-column prop="6" label="6"> </el-table-column>
    <el-table-column prop="7" label="7"> </el-table-column>
    <el-table-column prop="8" label="8"> </el-table-column>
    <el-table-column prop="9" label="9"> </el-table-column>
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
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }];
}

export default ETable;

</script>