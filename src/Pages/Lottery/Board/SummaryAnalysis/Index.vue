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
            <td>{{ he( todayTwoSideRecords , 'small' ) }}</td>
            <td>{{ he( todayTwoSideRecords , 'large' ) }}</td>
            <td>{{ he( todayTwoSideRecords , 'odd' ) }}</td>
            <td>{{ he( todayTwoSideRecords , 'even' ) }}</td>
            <td v-for=" ( iOne , i ) in  todayTwoSideRecords[0]" :key="i">{{ iOne }}</td>
            <td v-for=" ( iOne , i ) in  todayTwoSideRecords[1]" :key="i">{{ iOne }}</td>
            <td v-for=" ( iOne , i ) in  todayTwoSideRecords[2]" :key="i">{{ iOne }}</td>
            <td v-for=" ( iOne , i ) in  todayTwoSideRecords[3]" :key="i">{{ iOne }}</td>
            <td v-for=" ( iOne , i ) in  todayTwoSideRecords[4]" :key="i">{{ iOne }}</td>
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
            <span v-for="( item , i ) in 10" :key="i"  @click="changeClass( item )" :class="  addbackground.indexOf(item) !== -1 ? 'active' : ''">
              号码{{ i }}
              <span class=""></span>
            </span>
          </span>
        </div>
        <div>
          <span>大小单双分布：</span>
          <span>
            <span @click="showOdd(1)" v-bind:class=" isOdd === 1 ? 'active': ''  ">
              单
              <span></span>
            </span>
            <span @click="showOdd(0)" v-bind:class="  isOdd === 0 ? 'active': ''   ">
              双
              <span></span>
            </span>
            <span @click="showSmall(1)" v-bind:class=" isSmall === 1 ? 'active':''  ">
              大
              <span></span>
            </span>
            <span @click="showSmall(0)" v-bind:class=" isSmall === 0 ? 'active':''  ">
              小
              <span></span>
            </span>
            <span>
              对子号
              <span></span>  
            </span>
            <span class="background-orange-0">还原</span>
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
          <tr v-for="( item , i ) in lotteryIssues" :key="i">
            <td>{{ item.no }}</td>
            <td>
              <Numbers :code="code" :numbers=" JSON.parse( item.numbers )" :types="types" class="status-number"/>
            </td>
            <td>{{ JSON.parse( item.numbers ) | sum }}</td>
            <td>{{ JSON.parse( item.numbers ) | sum | isSmallOrLarge( 20 , 21 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | sum | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | isDragonOrTiger( [ 0 , 4 ] ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 0 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 1 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 2 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 3 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 4 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 0 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 1 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 2 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 3 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | substr( 4 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( item.numbers ) | determineSequence( [ 0 , 1 , 2 ] )  }}</td>
            <td>{{ JSON.parse( item.numbers ) | determineSequence( [ 1 , 2 , 3] ) }}</td>
            <td>{{ JSON.parse( item.numbers ) | determineSequence( [ 2 , 3 , 4 ] ) }}</td>
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
import { Component, Vue , Prop } from 'vue-property-decorator';
import LOTTERIES from '@/CONFIGS/LOTTERIES/index';
import Numbers from '@/Components/Numbers/Index.vue';

// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断

@Component({
  name: 'SummaryAnalysis',
  components: {
    Numbers,
  },
})
class SummaryAnalysis extends Vue {
  public changeBorder: any = [];

  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public todayTwoSideRecords!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public created() {
    
  }

  public toggleBorder( iNumber: number ) {
    if ( this.changeBorder.indexOf( iNumber ) !== -1 ) {
      this.changeBorder.splice( this.changeBorder.indexOf( iNumber ) , 1 );
      return;
    }
    this.changeBorder.push( iNumber );
  }

  public he( oHe: any , s: any ) { // 总和单双大小
    let n = 0;
    Object.keys(oHe).forEach( (e: any) => {
      n += Number( oHe[e][ s ] );
    });
    return n;
  }
}

export default SummaryAnalysis;
</script>
