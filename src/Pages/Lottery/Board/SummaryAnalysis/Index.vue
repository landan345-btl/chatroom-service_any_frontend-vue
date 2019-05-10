<template>
  <div class="summary-analysis">
    <div class="top p-2 font-weight-bold">
      <span class="title">综合分析</span>
      <span @click="toggleBorder(1)" :class=" changeBorder.indexOf( 1 ) !== -1 ? 'border-orange':'' ">
        <span>今日双面统计/号码统计</span>
        <span class="background-image" v-show="changeBorder.indexOf( 1 ) !== -1"></span>
      </span> 
      <span @click="toggleBorder(2)" :class="  changeBorder.indexOf( 2 ) !== -1 ? 'border-orange':'' ">
        <span>长龙统计</span>
        <span class="background-image" v-show="changeBorder.indexOf( 2 ) !== -1"></span>
      </span> 
      <span @click="toggleBorder(3)" :class="  changeBorder.indexOf( 3 ) !== -1 ? 'border-orange':'' ">
        <span>号码分析</span>
        <span class="background-image" v-show="changeBorder.indexOf( 3 ) !== -1"></span>
      </span> 
    </div>

    <div class="p-2 double-sided-statistics" v-show=" changeBorder.indexOf( 1 ) !== -1 ">
      <div>
        <div class="font-size-2">今日号码统计</div>
        <table>
          <tr>
            <td>号码</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>出现次数</td>
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
        <table>
          <tr>
            <td rowspan="2"> <span>球次</span> </td>
            <td colspan="4">总和</td>
            <td colspan="4">第一球</td>
            <td colspan="4">第二球</td>
            <td colspan="4">第三球</td>
            <td colspan="4">第四球</td>
            <td colspan="4">第五球</td>
          </tr>
          <tr>
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
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
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
        </table>
      </div>
    </div>

    <div class="p-2 " v-show=" changeBorder.indexOf( 2 ) !== -1 ">
      <div class="long-reminder">
        <div>长龙连开提醒</div>
        <div>
          <div>第二球: 小  5  期</div>
          <div>第二球: 小  5  期</div>
          <div>第二球: 小  5  期</div>
          <div>第二球: 小  5  期</div>
          <div>第二球: 小  5  期</div>
          <div>第二球: 小  5  期</div>
          <div>第二球: 小  5  期</div>
        </div>
      </div>
    </div>

    <div class="p-2" v-show=" changeBorder.indexOf( 3 ) !== -1 ">
      <div class="ball-number-distribution">
        <div>
          <span>查看球号分布：</span>
          <span>
            <span v-for="( item , i ) in 10" :key="i">号码{{ i }}</span>
          </span>
        </div>
        <div>
          <span>大小单双分布：</span>
          <span>
            <span>单</span>
            <span>双</span>
            <span>大</span>
            <span>小</span>
            <span>对子号</span>
            <span>还原</span>
          </span>
        </div>
      </div>
    </div>

    <div class="p-2">
      <div>
        <table>
          <tr>
            <td>期数</td>
            <td>开奖号码</td>
            <td colspan="3">总和</td>
            <td>龙虎</td>
            <td colspan="5">1-5球大小</td>
            <td colspan="5">1-5球单双</td>
            <td>前三</td>
            <td>中三</td>
            <td>后三</td>
          </tr>
          <tr v-for="( item , i ) in 20" :key="i">
            <td>20190509066</td>
            <td>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </td>
            <td>12</td>
            <td>小</td>
            <td>双</td>
            <td>和</td>
            <td>小</td>
            <td>小</td>
            <td>大</td>
            <td>大</td>
            <td>大</td>
            <td>大</td>
            <td>大</td>
            <td>大</td>
            <td>大</td>
            <td>大</td>
            <td>顺子</td>
            <td>半顺</td>
            <td>杂六</td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LOTTERIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'SummaryAnalysis',
  components: {
  },
})
class SummaryAnalysis extends Vue {
  public changeBorder: any = [];
  public toggleBorder( iNumber: number ) {
    if ( this.changeBorder.indexOf( iNumber ) !== -1 ) {
      this.changeBorder.splice( this.changeBorder.indexOf( iNumber ) , 1 );
      return;
    }
    this.changeBorder.push( iNumber );
  }
}

export default SummaryAnalysis;
</script>
