<template>
  <div class="odd-or-even-small-or-large-history">
    <div class="top p-1 font-weight-bold ">
      <span class="title">单双大小历史</span>
    </div>
    <div class="p-2">
      <table>
        <tr>
          <td rowspan="2">
            <span>日期</span>
          </td>
          <td colspan="4">第一球</td>
          <td colspan="4">第二球</td>
          <td colspan="4">第三球</td>
          <td colspan="4">第四球</td>
          <td colspan="4">第五球</td>
        </tr>
        <tr>
          <td>大</td>
          <td>小</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
          <td>单</td>
          <td>双</td>
        </tr>
        <tr v-for="( item , i ) in 15" :key="i">
          <td>2019-05-07</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
      </table>
    </div>
    
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'OddOrEvenSmallOrLargeHistory',
  components: {
    ITabs,
  },
})
class OddOrEvenSmallOrLargeHistory extends Vue {

}

export default OddOrEvenSmallOrLargeHistory;
</script>
