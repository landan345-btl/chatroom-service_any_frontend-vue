<template>
  <div class="history-number">
    <table cellpadding="1" cellspacing="1" v-if="lotteryTypes[ code ].TYPES === 'PK10'">
      <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns">
            <span @click="showTitle(index)" 
            :class="{spanselect:index==titleStatus}" 
            v-for="(item,index) in titles" 
            :key="index">{{item}}
            </span>
          </th>
          <th colspan="3">冠亚和</th>
          <th colspan="5">1-5龙虎</th>
        </tr>
        <tr  v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers" v-if="switcher==='0'">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
              :class="['num-0'+number]"></li>
            </ul>
            <ul class="numbers" v-else-if="switcher==='1'">
              <li :class="{'odd' : (number % 2==1), 'even' : (number % 2==0)}" 
              v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i"></li>
            </ul>
            <ul class="numbers" v-else-if="switcher==='2'">
              <li :class="{'background-sm' : (number<=5), 'background-lg' : (number>5)}" 
               v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i"></li> 
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1])}}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isSmallOrLarge(10, 12) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isOddOrEven }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 9]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([1, 8]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([2, 7]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([3, 6]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([4, 5]) }}</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1"  v-if="lotteryTypes[ code ].TYPES === 'KL8'"> <!--kl8-->
      <tbody>
        <tr>
          <th width="140">时间</th>
          <th>期数</th>
          <th class="number-btns">显示号码</th>
          <th colspan="3">总和</th>
          <th>单双</th>
          <th>前后</th>
          <th>总和组合</th>
          <th>五行</th>
        </tr>
        <tr v-for="number in 15" :key="number" v-addColor>
          <td>2019-03-29 20:35:00</td>
          <td>20190329247</td>
          <td class="blue-ball">
            <ul>
             <li class="number-light-fine"><i>1</i></li>
             <li class="number-light-fine"><i>2</i></li>
             <li class="number-light-fine"><i>3</i></li>
             <li class="number-light-fine"><i>4</i></li>
             <li class="number-light-fine"><i>5</i></li>
             <li class="number-light-fine"><i>6</i></li>
             <li class="number-light-fine"><i>7</i></li>
             <li class="number-light-fine"><i>8</i></li>
             <li class="number-light-fine"><i>9</i></li>
             <li class="number-light-fine mr-10"><i>10</i></li>
             <li class="number-width-fine"><i>11</i></li>
             <li class="number-width-fine"><i>12</i></li>
             <li class="number-width-fine"><i>13</i></li>
             <li class="number-width-fine"><i>14</i></li>
             <li class="number-width-fine"><i>15</i></li>
             <li class="number-width-fine"><i>16</i></li>
             <li class="number-width-fine"><i>17</i></li>
             <li class="number-width-fine"><i>18</i></li>
             <li class="number-width-fine"><i>11</i></li>
             <li class="number-width-fine"><i>20</i></li>
             <li class="number-orange-fine"><i style="color:#f9982e">21</i></li>
            </ul> 
          </td>
          <td>716</td>
          <td>小</td>
          <td>单双和</td>
          <td>双多</td>
          <td>前后和</td>
          <td>总单小</td>
          <td>水</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1"  v-if="lotteryTypes[ code ].TYPES === 'K3'"> <!--k3-->
      <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns">显示号码</th>
          <th colspan="3">总和</th>
          <th colspan="5">鱼虾蟹</th>
        </tr>
        <tr v-for="number in 25" :key="number" v-addColor>
          <td>2019-03-29 20:35:00</td>
          <td>20190329247</td>
          <td class="blue-ball">
            <ul>
              <li class="k3-01"></li>
              <li class="k3-02"></li>
              <li class="k3-03"></li>
            </ul> 
          </td>
          <td>16</td>
          <td class="text-danger">双</td>
          <td>小</td>
          <td class="text-green">鱼</td>
          <td class="text-danger">虾</td>
          <td>葫芦</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1"  v-if="lotteryTypes[ code ].TYPES === 'KL10F'"> <!--klsf-->
      <tbody>
        <tr>
          <th class="th-width1">时间</th>
          <th class="th-width2">期数</th>
          <th class="number-btns th-width3">
            <span @click="showTitle(index)" 
            :class="{spanselect: index==titleStatus}" 
            v-for="(number,index) in titles" 
            :key="index">{{number}}
            </span>
          </th>
          <th colspan="3" class="th-width1">总和</th>
          <th>尾大小</th>
          <th colspan="4" >龙虎</th>
        </tr>
        <tr v-for="number in 25" :key="number"  v-addColor>
          <td>2019-03-29 20:35:00</td>
          <td>20190329247</td>
          <td class="blue-ball">
            <ul v-if="switcher==='0'">
              <li v-for="(isnum,i) in numbers" :key="i" class="number-blue-fine"><i>{{isnum.id}}</i></li>
            </ul>
            <ul v-else-if="switcher==='1'">
             <li :class="{'round-odd' : (isnum.id % 2==1), 'round-even' : (isnum.id % 2==0)}" v-for="(isnum,i) in numbers" :key="i"><i class="d-none">{{isnum.id}}</i></li>
            </ul>
            <ul v-else-if="switcher==='2'">
             <li :class="{'background-round-sm' : (isnum.id<=5), 'background-round-lg' : (isnum.id>5)}" v-for="(isnum,i) in numbers" :key="i"><i class="d-none">{{isnum.id}}</i></li>
            </ul>
          </td>
          <td>16</td>
          <td>双</td>
          <td>虎</td>
          <td>尾大</td>
          <td>虎</td>
          <td>龙</td>
          <td>虎</td>
          <td>龙</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1"  v-if="lotteryTypes[ code ].TYPES === '11X5'">  <!--11x5-->
      <tbody>
        <tr>
          <th class="th-width1">时间</th>
          <th class="th-width2">期数</th>
          <th class="number-btns th-width3">
            <span @click="showTitle(index)" 
            :class="{spanselect: index==titleStatus}" 
            v-for="(number,index) in titles" 
            :key="index">{{number}}
            </span>
          </th>
          <th colspan="3" class="th-width1">总和</th>
          <th>龙虎</th>
          <th>前三</th>
          <th>中三</th>
          <th>后三</th>
        </tr>
        <tr v-for="number in 25" :key="number" v-addColor>
          <td>2019-03-29 20:35:00</td>
          <td>20190329247</td>
          <td class="blue-ball">
            <ul v-if="switcher==='0'">
              <li v-for="(isnum,i) in numbers" :key="i" class="number-blue-fine"><i>{{isnum.id}}</i></li>
            </ul>
            <ul v-else-if="switcher==='1'">
             <li :class="{'round-odd' : (isnum.id % 2==1), 'round-even' : (isnum.id % 2==0)}" v-for="(isnum,i) in numbers" :key="i"><i class="d-none">{{isnum.id}}</i></li>
            </ul>
            <ul v-else-if="switcher==='2'">
             <li :class="{'background-round-sm' : (isnum.id<=5), 'background-round-lg' : (isnum.id>5)}" v-for="(isnum,i) in numbers" :key="i"><i class="d-none">{{isnum.id}}</i></li>
            </ul>
          </td>
          <td>16</td>
          <td>双</td>
          <td>小</td>
          <td>虎</td>
          <td>杂六</td>
          <td>杂六</td>
          <td>半顺</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1"  v-if="lotteryTypes[ code ].TYPES === '3D'">  <!--tc3-->
      <tbody>
        <tr>
          <th width="150">时间</th>
          <th width="130">期数</th>
          <th class="number-btns">号码</th>
          <th colspan="3">佰拾和</th>
          <th colspan="3">佰个和</th>
          <th colspan="3">拾个和</th>
          <th colspan="3">总和</th>
        </tr>
        <tr v-for="number in 25" :key="number" v-addColor>
          <td>2019-03-29 20:35:00</td>
          <td>20190329247</td>
          <td class="blue-ball">
            <ul>
              <li class="number-red"><i>3</i></li>
              <li class="number-red"><i>8</i></li>
              <li class="number-red"><i>4</i></li>
            </ul> 
          </td>
          <td>16</td>
          <td class="text-danger">双</td>
          <td>尾小</td>
          <td>16</td>
          <td>单</td>
          <td>尾小</td>
          <td>16</td>
          <td class="text-danger">双</td>
          <td>小</td>
          <td>16</td>
          <td>单</td>
          <td>小</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1"  v-if="lotteryTypes[ code ].TYPES === 'SSC'">   <!--ssc-->
     <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns">
            <span @click="showTitle(index)" 
            :class="{spanselect:index==titleStatus}" 
            v-for="(item,index) in titles" 
            :key="index">{{item}}
            </span>
          </th>
          <th colspan="3">冠亚和</th>
          <th colspan="5">1-5龙虎</th>
        </tr>
        <tr  v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers" v-if="switcher==='0'">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
              :class="['num-0'+number]"></li>
            </ul>
            <ul class="numbers" v-else-if="switcher==='1'">
              <li :class="{'odd' : (number % 2==1), 'even' : (number % 2==0)}" 
              v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i"></li>
            </ul>
            <ul class="numbers" v-else-if="switcher==='2'">
              <li :class="{'background-sm' : (number<=5), 'background-lg' : (number>5)}" 
               v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i"></li> 
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1])}}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isSmallOrLarge(10, 12) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isOddOrEven }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 9]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([1, 8]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([2, 7]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([3, 6]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([4, 5]) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
 </template>
<style lang="scss">
@import 'Index-scoped.scss';
</style>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import LOTERIES from '@/CONFIGS/LOTTERIES/index';

@Component({
  name: 'LoteryTable',
  })
class LotteryTable extends Vue {
  public lotteryTypes = LOTERIES;
  public titles = ['显示号码', '显示大小', '显示单双'];
  public titleStatus: any = 0;
  public switcher: any = '0';
  public name: any = '';  // 接受code

  @Prop({ default: null })
  public olotterys !: any ;   //  组件接收到的值
  @Prop({ default: null })
  public code !: any ;   //  组件接收到的code

  public get  dataScreen() {  // 对数据进行筛选
  console.log(this.code + '-----' + this.lotteryTypes);
    let _olotterys: any = {};
    for ( let olottery in this.olotterys ) {
      if ( this.olotterys[ olottery ].numbers == null ) {
        continue;
      }
      _olotterys[ olottery ] = this.olotterys[ olottery ];
    }
    return _olotterys;
  }
  public showTitle(index: number) {
    this.titleStatus = index;
    if ( this.titleStatus === 0 ) {
      this.switcher = '0';
    } else if ( this.titleStatus === 1 ) {
      this.switcher = '1';
    } else {
      this.switcher = '2';
    }
  }
}

export default LotteryTable;
</script>