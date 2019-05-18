<template>
  <div class="history-number-statics">
    <div class="pl-2 font-weight-bold head-top">
      <span class="font-size-2 line-height3">历史号码记录</span>
    </div>
    <I-divider/>
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
import {
  ITabs,
  IDivider,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'PopularAnalysis',
  components: {
    ITabs,
    IDivider,
  },
})
class PopularAnalysis extends Vue {

}

export default PopularAnalysis;
</script>
