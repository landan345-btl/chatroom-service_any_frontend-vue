<template>
  <div class="history-number-statics">
    <div class="top p-1 font-weight-bold">
      <span class="title">历史号码统计</span>
    </div>
    <table>
      <tr>
        <td>日期</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9 </td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>龙</td>
        <td>虎</td>
        <td>平</td>
      </tr>
      <tr v-for="( item , i ) in 15" :key="i">
        <td>2019-05-08</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
        <td>14</td>
      </tr>
    </table>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'PopularAnalysis',
  components: {
    ITabs,
  },
})
class PopularAnalysis extends Vue {

}

export default PopularAnalysis;
</script>
