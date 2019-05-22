<template>
  <div class="odd-or-even-small-or-large-history">
    <div class="top pl-2 pb-1 font-weight-bold head-top">
      <span class="font-size-2 line-height3">单双大小历史</span>
    </div>
    <I-divider/>
    <div class="pl-2 pr-2 pb-2">
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
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import {
  ITabs,
  IDivider,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'OddOrEvenSmallOrLargeHistory',
  components: {
    ITabs,
    IDivider,
  },
})
class OddOrEvenSmallOrLargeHistory extends Vue {

}

export default OddOrEvenSmallOrLargeHistory;
</script>
