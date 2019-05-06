<template>
  <table class="table">
    <tr>
      <th>时间</th>
      <th>期数</th>
      <th>显示号码, 显示大小, 显示单双</th>
      <th colspan=3>总和</th>
      <th>1-5龙虎</th>
    </tr>
    <tr>
      <td>2019-05-06 21:30:45</td>
      <td>20190506052</td>
      <td>5,5,5,1,8</td>
      <td>33</td>
      <td>单</td>
      <td>大</td>
      <td>虎</td>
    </tr>
  </table>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'Table',
  components: {
  },
})
class Table extends Vue {
}

export default Table;
</script>
