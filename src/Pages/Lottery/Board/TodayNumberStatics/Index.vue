<template>
  <div class="today-number-statics">
    <div class="top p-1 font-weight-bold">
      <span>
        参数设置：当数值为
        <span>12</span>
        至
        <span>12</span>
        时为
        <span class="background-red"></span>
        色
      </span>
      <span class="border-radius background-gray el-icon-plus color-white"></span>
      <span>
        参数设置：当数值为
        <span>12</span>
        至
        <span>12</span>
        时为
        <span class="background-blue"></span>
        色
      </span>
      <span class="border-radius background-gray el-icon-plus color-white"></span>
      <span>
        参数设置：当数值为
        <span>12</span>
        至
        <span>12</span>
        时为
        <span class="background-green"></span>
        色
      </span>
    </div>
    <table>
      <tr>
        <td rowspan="2"> <span>号码</span> </td>
        <td colspan="4">第一球</td>
        <td colspan="4">第二球</td>
        <td colspan="4">第三球</td>
        <td colspan="4">第四球</td>
        <td colspan="4">第五球</td>
      </tr>
      <tr>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
      </tr>
      <tr v-for="( item , i ) in 10" :key="i">
        <td>{{ i }}</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
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

import {
  LOTTERIES
} from '@/CONFIGS/';

@Component({
  name: 'TodayNumberStatics',
  components: {
    ITabs,
  },
})
class TodayNumberStatics extends Vue {

}

export default TodayNumberStatics;
</script>
