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
      <LuZhuTable v-for="( utem , i ) in 6" :key="i"/>
    </div>


  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';
import LuZhuTable from '@/Components/LuZhuTable/index.vue';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'OddOrEvenSmallOrLargeResult',
  components: {
    ITabs,
    LuZhuTable,
  },
})
class OddOrEvenSmallOrLargeResult extends Vue {
  public checkboxGroup1 = '第一球';
  public checkList = '大小路珠';

}

export default OddOrEvenSmallOrLargeResult;
</script>
