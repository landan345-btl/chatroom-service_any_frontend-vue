<template>
  <div class="today-two-side-number-statics">
    <div class="title">今日双面统计</div>
      <table>
        <tbody>
        <tr>
          <th>名次</th>
          <th colspan="4">冠军</th>
          <th colspan="4">亚军</th>
          <th colspan="4">第三名</th>
          <th colspan="4">第四名</th>
          <th colspan="4">第五名</th>
          <th colspan="4">第六名</th>
          <th colspan="4">第七名</th>
          <th colspan="4">第八名</th>
          <th colspan="4">第九名</th>
          <th colspan="4">第十名</th>
        </tr>
        <tr>
          <td>单双大小</td>
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
          <td>大</td>
          <td>小</td>
        </tr>
        <tr>
          <td>出现次数</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>  
      <table class="mt-1">
        <tr>
          <th>冠亚龙虎</th>
          <th colspan="4">冠亚和</th>
          <th colspan="2">第一名龙虎</th>
          <th colspan="2">第二名龙虎</th>
          <th colspan="2">第三名龙虎</th>
          <th colspan="2">第四名龙虎</th>
          <th colspan="2">第五名龙虎</th>
        </tr>
        <tr>
          <td>单双大小龙虎</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
          <td>龙</td>
          <td>虎</td>
          <td>龙</td>
          <td>虎</td>
          <td>龙</td>
          <td>虎</td>
          <td>龙</td>
          <td>虎</td>
          <td>龙</td>
          <td>虎</td>
        </tr>
        <tr>
          <td>出现次数</td>
          <td>98</td>
          <td>77</td>
          <td>69</td>
          <td>106</td>
          <td>90</td>
          <td>85</td>
          <td>85</td>
          <td>90</td>
          <td>83</td>
          <td>92</td>
          <td>98</td>
          <td>77</td>
          <td>82</td>
          <td></td>
        </tr>
      </table>   
  </div>
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
  name: 'TodayTwoSideNumberStatics',
  components: {
  },
})
class TodayTwoSideNumberStatics extends Vue {
}

export default TodayTwoSideNumberStatics;
</script>
