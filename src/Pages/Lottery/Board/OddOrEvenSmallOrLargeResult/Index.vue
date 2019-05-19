<template>
  <div class="odd-or-even-small-or-large-result background-white">
    <div class="pl-2 font-weight-bold head-top">
      <span class="font-size-2 line-height3">单双大小路珠</span>
    </div>
    <I-divider/>
    <div class="p-2">
      <span>选择名次：</span>
       <el-radio-group v-model="radio2">
        <el-radio-button label="第一球"></el-radio-button>
        <el-radio-button label="第二球"></el-radio-button>
        <el-radio-button label="第三球"></el-radio-button>
        <el-radio-button label="第四球"></el-radio-button>
        <el-radio-button label="第五球"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="p-2">
      <span>筛选路珠：</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="大小路珠"></el-checkbox>
        <el-checkbox label="单双路珠"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="p-2">
      <Result-table v-for="( utem , i ) in 2" :key="i"/>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {
  ResultTable,
  IDivider,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'OddOrEvenSmallOrLargeResult',
  components: {
    ResultTable,
    IDivider,
  },
})
class OddOrEvenSmallOrLargeResult extends Vue {
  public radio2: any = '第一球';
  public checkList: any = '大小路珠';

}

export default OddOrEvenSmallOrLargeResult;
</script>
