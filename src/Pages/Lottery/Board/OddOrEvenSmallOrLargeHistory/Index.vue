<template>
  <div class="odd-or-even-small-or-large-history background-white">
    <div class="top pl-2 pb-1 font-weight-bold head-top">
      <span class="font-size-2 line-height3">单双大小历史</span>
    </div>
    <I-divider/>
    <div class="pl-2 mr-2 pb-2">
      <table class="w-100 mt-2">
        <tr v-if="['PK10'].includes(types.toUpperCase())">
          <td rowspan="2">
            <span>日期</span>
          </td>
            <td colspan="4" v-for="(aNumbersRanks, iIndex) in recordPk10" :key="iIndex">
              {{ aNumbersRanks }}
            </td>
        </tr>
        <tr v-if="['SSC'].includes(types.toUpperCase())">
          <td rowspan="2">
            <span>日期</span>
          </td>
            <td colspan="4" v-for="(aNumbersRanks, iIndex) in recordSsc" :key="iIndex">
              {{ aNumbersRanks }}
            </td>
        </tr>

        <tr v-if="['PK10'].includes(types.toUpperCase())">
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
        <tr v-if="['SSC'].includes(types.toUpperCase())">
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
          <td>大</td>
          <td>小</td>
          <td>单</td>
          <td>双</td>
        </tr>

        <tr v-for="( item , i ) in 5" :key="i"  v-if="['PK10'].includes(types.toUpperCase())">
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
        <tr v-for="( item , i ) in 5" :key="i"  v-if="['SSC'].includes(types.toUpperCase())">
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
  Prop,
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
  @Prop()
  public types!: any;

  public recordSsc = ['第一球', '第二球', '第三球', '第四球', '第五球'];
  public recordPk10 = ['冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
}

export default OddOrEvenSmallOrLargeHistory;
</script>
