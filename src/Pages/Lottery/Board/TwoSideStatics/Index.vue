<template>
  <div class="two-side-statics">
    <div class="top p-1 font-weight-bold">
      <div class="title">两面统计</div>
    </div>
    <div class="explain">
      <span>说明：</span>
      <span>以每10期为一组，统计最近20组中单双大小的出现次数。</span>
    </div>
    <div class="ball-number">
      <RadioGroup v-model="button1" type="button">
        <Radio label="第一球"></Radio>
        <Radio label="第二球"></Radio>
        <Radio label="第三球"></Radio>
        <Radio label="第四球"></Radio>
        <Radio label="第五球"></Radio>
      </RadioGroup>
    </div>
    <table>
      <tr>
        <td>日期</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
      </tr>
      <tr v-for="( item , i ) in 15" :key="i">
        <td>05月08日&nbsp;&nbsp;&nbsp;20190508033 - 20190508042期</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
      </tr>
    </table>
    

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
  ITabs
} from '@/Components/';

import LOTTERIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'TwoSideStatics',
  components: {
    ITabs,
  },
})
class TwoSideStatics extends Vue {
  public button1 = '第一球';
}

export default TwoSideStatics;
</script>
