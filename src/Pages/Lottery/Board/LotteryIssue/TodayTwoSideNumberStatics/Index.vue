<template>
  <div class="today-two-side-number-statics">
    <div class="font-size-2p5">今日双面统计</div>
    {{ types }}
      <div v-if=" types === 'PK10' ">
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
      <div v-if=" types === 'SSC' ">
        <table>
          <tbody>
          <tr>
            <th>名次</th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
          </tr>
          <tr>
            <td>出现次数</td>
            <td>64</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
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
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'TodayTwoSideNumberStatics',
  components: {
  },
})
class TodayTwoSideNumberStatics extends Vue {
  @Prop()
  public types!: any;

}

export default TodayTwoSideNumberStatics;
</script>
