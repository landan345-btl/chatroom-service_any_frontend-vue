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
          <th class="number-btns w-42">显示号码</th>
          <th colspan="3">总和</th>
          <th>单双</th>
          <th>前后</th>
          <th>总和组合</th>
          <th>五行</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers" style="height:78px;">
             <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                class="ml-1"
                :class="{'number-blue-fine' : (number>40), 'number-light-fine' : (number<=40),}">
                <i class="font-size-2p5">{{ number | firstAdd }}</i>
              </li>
            </ul> 
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(849, 851) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
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
          <th class="number-btns th-width4">显示号码</th>
          <th colspan="3">总和</th>
          <th colspan="5">鱼虾蟹</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                class="ml-0p5"
                :class="['k3-0'+ number]">
              </li>
            </ul> 
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isOddOrEven}}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(10, 11) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isFishOrShrimpOrCrab(0) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isFishOrShrimpOrCrab(1) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isFishOrShrimpOrCrab(2) }}</td>
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
        <tr v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul v-if="switcher==='0'"  class="numbers background-color h-4">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                class="ml-0p5"
                :class="{'number-red' : (number>18), 'number-blue' : (number<=18),}">
                <i class="font-size-2p5">{{ number | firstAdd }}</i>
              </li>
            </ul>
            <ul v-else-if="switcher==='1'" class="numbers background-color h-4">
              <li :class="{'background-round-sm' : (number<=10), 'background-round-lg' : (number>10)}" 
                v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i">
              </li> 
            </ul>
            <ul v-else-if="switcher==='2'" class="numbers background-color h-4">
              <li :class="{'round-odd' : (number % 2==1), 'round-even' : (number % 2==0)}" 
                v-for="(number,i) in JSON.parse(olottery.numbers)" :key="i">
              </li>
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(79, 81) }}</td>
          <td>尾{{ JSON.parse(olottery.numbers) | sum | substr(-1, 1) | isSmallOrLarge(3,5) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 7]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([1, 6]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([2, 5]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([3, 4]) }}</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1"  v-if="lotteryTypes[ code ].TYPES === '11X5'">  <!--11x5-->
      <tbody>
        <tr>
          <th class="th-width1">时间</th>
          <th class="th-width2">期数</th>
          <th class="number-btns th-width4">
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
        <tr v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul v-if="switcher==='0'" class="numbers background-color h-4">
             <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
              class="number-blue-fine"><i class="font-size-2p5">{{ number }}</i></li>
            </ul>
            <ul v-else-if="switcher==='1'" class="numbers background-color h-4">
             <li :class="{'round-odd' : (number % 2==1), 'round-even' : (number % 2==0)}" 
             v-for="(number,i) in JSON.parse(olottery.numbers)" :key="i"></li>
            </ul>
            <ul v-else-if="switcher==='2'" class="numbers background-color h-4">
             <li :class="{'background-round-sm' : (number<=5), 'background-round-lg' : (number>5),'background-round-sum' : (number==11)}" 
              v-for="(number,i) in JSON.parse(olottery.numbers)" :key="i"></li>
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(29, 31) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 4]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | determineSequence([0, 1, 2]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | determineSequence([1, 2, 3]) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | determineSequence([2, 3, 4]) }}</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1"  v-if="lotteryTypes[ code ].TYPES === '3D'">  <!--3D-->
      <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns w-30">号码</th>
          <th colspan="3">佰拾和</th>
          <th colspan="3">佰个和</th>
          <th colspan="3">拾个和</th>
          <th colspan="3">总和</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
              class="number-red ml-1"><i class="font-size-2p5">{{ number }}</i></li>
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1])}}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isOddOrEven }}</td>
          <td style="width:60px;">尾{{ JSON.parse(olottery.numbers) | sum([0, 1]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 2])}}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 2]) | isOddOrEven }}</td>
          <td style="width:60px;">尾{{ JSON.parse(olottery.numbers) | sum([0, 2]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([1, 2])}}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([1, 2] | isOddOrEven )}}</td>
          <td>尾{{ JSON.parse(olottery.numbers) | sum([1, 2]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(13, 14) }}</td>
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
        <tr v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4" v-if="switcher==='0'">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
              class="number-blue"><i class="font-size-2p5">{{ number }}</i></li>
            </ul>
            <ul class="numbers h-4" v-else-if="switcher==='1'">
              <li :class="{'round-odd' : (number % 2==1), 'round-even' : (number % 2==0)}" 
              v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i"></li>
            </ul>
            <ul class="numbers h-4" v-else-if="switcher==='2'">
              <li :class="{'background-round-sm' : (number<=5), 'background-round-lg' : (number>5)}" 
               v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i"></li> 
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1])}}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isSmallOrLarge(10, 12) }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isOddOrEven }}</td>
          <td>{{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 4]) }}</td>
        </tr>
      </tbody>
    </table>
    <table cellpadding="1" cellspacing="1" v-if="lotteryTypes[ code ].TYPES === 'XY28'">
      <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns w-30">号码</th>
          <th colspan="3">总和</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in dataScreen" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                class="number-red ml-1"><i class="font-size-2p5">{{ number }}</i></li>
            </ul>
            </td>
            <td>6,3,6</td>
            <td>{{ JSON.parse(olottery.numbers) | sum([0, 1])}}</td>
            <td>{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isOddOrEven }}</td>
            <td style="width:60px;">尾{{ JSON.parse(olottery.numbers) | sum([0, 1]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
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
import LOTTERIES from '@/CONFIGS/LOTTERIES/index';

@Component({
  name: 'LoteryTable',
  })
class LotteryTable extends Vue {
  public lotteryTypes = LOTTERIES;
  public titles = ['显示号码', '显示大小', '显示单双'];
  public titleStatus: any = 0;
  public switcher: any = '0';
  public name: any = '';  // 接受code

  @Prop({ default: null })
  public olotterys !: any ;   //  组件接收到的值
  @Prop({ default: null })
  public code !: any ;   //  组件接收到的code

  public get  dataScreen() {  // 对数据进行筛选
    console.log(this.lotteryTypes[ this.code ].NAME);
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