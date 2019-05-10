<template>
  <div class="odd-or-even-small-or-large-result">
    <div class="top p-2 font-weight-bold">
      <span class="title">单双大小路珠</span>
    </div>
    <div class="p-2">
      <span>选择名次：</span>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button>第一球</el-checkbox-button>
        <el-checkbox-button>第二球</el-checkbox-button>
        <el-checkbox-button>第三球</el-checkbox-button>
        <el-checkbox-button>第四球</el-checkbox-button>
        <el-checkbox-button>第五球</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div class="p-2">
      <span>筛选路珠：</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="大小路珠"></el-checkbox>
        <el-checkbox label="单双路珠"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="p-2">
      <Result-table v-for="( utem , i ) in 6" :key="i"/>
    </div>


  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  ResultTable
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'OddOrEvenSmallOrLargeResult',
  components: {
    ResultTable,
  },
})
class OddOrEvenSmallOrLargeResult extends Vue {
  public checkboxGroup1 = '第一球';
  public checkList = '大小路珠';

}

export default OddOrEvenSmallOrLargeResult;
</script>
