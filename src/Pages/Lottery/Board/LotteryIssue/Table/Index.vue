<template>
<div class="history-number text-center">
  <table v-if="lotteryTypes[ code ].TYPES === 'PK10'">
    <tbody>
      <tr>
        <th>时间</th>
        <th>期数</th>
        <th class="number-btns">
          <span @click="switchStatus(index)" :class="{spanselect:index==titleStatus}" v-for="(item,index) in titles" :key="index">{{item}}</span>
        </th>
        <th colspan="3">冠亚和</th>
        <th colspan="5">1-5龙虎</th>
      </tr>
      <tr v-for="(lotterys,Index) in oLotteryIssues" :key="Index">
        <td>{{lotterys.added_time}}</td>
        <td>{{lotterys.no}}</td>
        <td>
          <Numbers :code="code" :numbers="JSON.parse(lotterys.numbers)" :types="types" :isRandom="false" :status="switcher"/>
        </td>
        <td>{{ JSON.parse(lotterys.numbers) | sum([0, 1])}}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(lotterys.numbers),[0,1]),11,12)}">
            {{ JSON.parse(lotterys.numbers) | sum([0, 1]) | isSmallOrLarge(11,12) }}
          </td>
          <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(lotterys.numbers),[0,1]))}">{{ JSON.parse(lotterys.numbers) | sum([0, 1]) | isOddOrEven }}
          </td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[0,9])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([0, 9]) }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[1,8])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([1, 8]) }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[2,7])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([2, 7]) }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[3,6])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([3, 6]) }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[4,5])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([4, 5]) }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="lotteryTypes[ code ].TYPES === 'SSC'">
    <tbody>
      <tr>
        <th>时间</th>
        <th>期数</th>
        <th class="number-btns">
          <span @click="switchStatus(index)" :class="{spanselect:index==titleStatus}" v-for="(item,index) in titles" :key="index">{{item}}</span>
        </th>
        <th colspan="3">总和</th>
        <th colspan="5">1-5龙虎</th>
      </tr>
      <tr v-for="(lotterys,Index) in oLotteryIssues" :key="Index">
        <td>{{lotterys.added_time}}</td>
        <td>{{lotterys.no}}</td>
        <td>
          <Numbers :code="code" :numbers="JSON.parse(lotterys.numbers)" :types="types" :isRandom="false" :status="switcher"/>
        </td>
        <td>{{ JSON.parse(lotterys.numbers) | sum }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(lotterys.numbers)),20,21)}">
            {{ JSON.parse(lotterys.numbers) | sum | isSmallOrLarge(20,21) }}
          </td>
          <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(lotterys.numbers)))}">{{ JSON.parse(lotterys.numbers) | sum | isOddOrEven }}
          </td>
          <td :class="{
            'text-sum' : '和' === isDragonOrTiger(JSON.parse(lotterys.numbers),[0,4]),
            'text-danger' : '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[0,4])}">
            {{ JSON.parse(lotterys.numbers) | isDragonOrTiger([0, 4]) }}
          </td>
      </tr>
    </tbody>
  </table>
  <table v-if="lotteryTypes[ code ].TYPES === '11X5'">  
    <tbody>
      <tr>
        <th class="th-width1">时间</th>
        <th class="th-width2">期数</th>
        <th class="number-btns th-width4">
          <span @click="switchStatus(index)" :class="{spanselect:index==titleStatus}" v-for="(item,index) in titles" :key="index">{{item}}</span>
        </th>
        <th colspan="3" class="th-width1">总和</th>
        <th>龙虎</th>
        <th>前三</th>
        <th>中三</th>
        <th>后三</th>
      </tr>
      <tr v-for=" ( lotterys , lotteryid ) in oLotteryIssues" :key="lotteryid">
        <td>{{ lotterys.added_time }}</td>
        <td>{{ lotterys.no}}</td>
        <td>
          <Numbers :code="code" :numbers="JSON.parse(lotterys.numbers)" :types="types" :isRandom="false" :status="switcher"/>
        </td>
        <td>{{ JSON.parse(lotterys.numbers) | sum }}</td>
        <td :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(lotterys.numbers)),29,31)}">{{ JSON.parse(lotterys.numbers) | sum | isSmallOrLarge(29, 31) }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(lotterys.numbers),29,31))}">{{ JSON.parse(lotterys.numbers) | sum | isOddOrEven }}</td>
        <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[0,4])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([0, 4]) }}</td>
        <td :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(lotterys.numbers),[0,1,2])}">{{ JSON.parse(lotterys.numbers) | determineSequence([0, 1, 2]) }}</td>
        <td :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(lotterys.numbers),[1,2,3])}">{{ JSON.parse(lotterys.numbers) | determineSequence([1, 2, 3]) }}</td>
        <td :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(lotterys.numbers),[2,3,4])}">{{ JSON.parse(lotterys.numbers) | determineSequence([2, 3, 4]) }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="lotteryTypes[ code ].TYPES === 'K3'">
    <tbody>
      <tr>
        <th>时间</th>
        <th>期数</th>
        <th class="number-btns th-width4">显示号码</th>
        <th colspan="3">总和</th>
        <th colspan="5">鱼虾蟹</th>
      </tr>
      <tr v-for=" ( lotterys , lotteryid ) in oLotteryIssues" :key="lotteryid">
        <td>{{ lotterys.added_time }}</td>
        <td>{{ lotterys.no}}</td>
        <td>
          <Numbers :code="code" :numbers="JSON.parse(lotterys.numbers)" :types="types" :isRandom="false" class="status-number"/>
        </td>
        <td>{{ JSON.parse(lotterys.numbers) | sum }}</td>
        <td :class="{'text-even': '双'===isOddOrEven(sum(JSON.parse(lotterys.numbers)))}">{{ JSON.parse(lotterys.numbers) | sum | isOddOrEven}}</td>
        <td :class="{'text-big': '大' === isSmallOrLarge(sum(JSON.parse(lotterys.numbers)),10,11)}">{{ JSON.parse(lotterys.numbers) | sum | isSmallOrLarge(10, 11) }}</td>
        <td :class="{
          'text-fish': '鱼'=== isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),0),
          'text-chicken': '鸡' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),0),
          'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),0),
          'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),0)}">
            {{ JSON.parse(lotterys.numbers) | isFishOrShrimpOrCrab(0) }}
        </td>
        <td :class="{
          'text-chicken': '鸡' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),1),
          'text-fish': '鱼' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),1),
          'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),1),
          'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),1)}">
            {{ JSON.parse(lotterys.numbers) | isFishOrShrimpOrCrab(1) }}
        </td>
        <td :class="{
          'text-fish': '鱼' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),2),
          'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),2),
          'text-chicken': '鸡' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),2),
          'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(lotterys.numbers),2)}">
            {{ JSON.parse(lotterys.numbers) | isFishOrShrimpOrCrab(2) }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="lotteryTypes[ code ].TYPES === 'KLSF'"> 
    <tbody>
      <tr>
        <th class="th-width1">时间</th>
        <th class="th-width2">期数</th>
        <th class="number-btns th-width3">
          <span @click="switchStatus(index)" :class="{spanselect:index==titleStatus}" v-for="(item,index) in titles" :key="index">{{item}}</span>
        </th>
        <th colspan="3" class="th-width1">总和</th>
        <th>尾大小</th>
        <th colspan="4" >龙虎</th>
      </tr>
      <tr v-for=" ( lotterys , lotteryid ) in oLotteryIssues" :key="lotteryid">
        <td>{{ lotterys.added_time }}</td>
        <td>{{ lotterys.no}}</td>
        <td>
          <Numbers :code="code" :numbers="JSON.parse(lotterys.numbers)" :types="types" :isRandom="false" :status="switcher"/>
        </td>
        <td>{{ JSON.parse(lotterys.numbers) | sum }}</td>
        <td :class="{'text-even': '双'===isOddOrEven(sum(JSON.parse(lotterys.numbers)))}">{{ JSON.parse(lotterys.numbers) | sum | isOddOrEven }}</td>
        <td :class="{'text-big': '大'===isSmallOrLarge(sum(JSON.parse(lotterys.numbers)),83,85),'text-sum': '和'===isSmallOrLarge(sum(JSON.parse(lotterys.numbers)),83,85)}">{{ JSON.parse(lotterys.numbers) | sum | isSmallOrLarge(83, 85) }}</td>
        <td :class="{'text-big': '大'===isSmallOrLarge(substr(sum(JSON.parse(lotterys.numbers)),(-1,1)),4,4)}">尾{{ JSON.parse(lotterys.numbers) | sum | substr(-1, 1) | isSmallOrLarge(4,4) }}</td>
        <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[0,7])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([0, 7]) }}</td>
        <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[1,6])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([1, 6]) }}</td>
        <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[2,5])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([2, 5]) }}</td>
        <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(lotterys.numbers),[3,4])}">{{ JSON.parse(lotterys.numbers) | isDragonOrTiger([3, 4]) }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="lotteryTypes[ code ].TYPES === 'SIX'">
      <tbody>
        <tr>
          <th class="w-15">时间</th>
          <th class="w-15">期数</th>
          <th class="number-btns w-30">号码</th>
          <th colspan="3">总和</th>
          <th colspan="4">特码</th>
        </tr>
        <tr v-for=" ( lotterys , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ lotterys.added_time }}</td>
          <td>{{ lotterys.no}}</td>
          <td>
            <ul class="numbers h-4">
              <li v-for="( number , i ) in JSON.parse(lotterys.numbers)" :key="i" class="number-blue ml-2p5 six-lottery">
                <i class="font-size-2p5 font-weight-bold">{{ number }}</i>
              </li>
            </ul>
          </td>
          <td class="w-1_3">{{ JSON.parse(lotterys.numbers) | sum }}</td>
          <td :class="{'text-even': '双' === isOddOrEven(sum(JSON.parse(lotterys.numbers)))}" class="w-1_3">{{ JSON.parse(lotterys.numbers) | sum | isOddOrEven }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(lotterys.numbers)),174,175)}" class="w-1_3">{{ JSON.parse(lotterys.numbers) | sum | isSmallOrLarge(174, 175) }}</td>
          <td class="w-1_3">{{ JSON.parse(lotterys.numbers) | last }}</td>
          <td :class="{'text-even' : '双' === isSmallOrLarge(last(JSON.parse(lotterys.numbers)))}" class="w-1_3">{{ JSON.parse(lotterys.numbers) | last | isOddOrEven }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(last(JSON.parse(lotterys.numbers)),24,25)}" class="w-1_3">{{ JSON.parse(lotterys.numbers)| last | isSmallOrLarge(24, 25) }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(substr(last(JSON.parse(lotterys.numbers)),-1,1),4,5)}" class="w-1_3">尾{{ JSON.parse(lotterys.numbers) | last | substr(-1, 1) | isSmallOrLarge(4, 5)}}</td>
        </tr>
      </tbody>
    </table>
</div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
import Numbers from '@/Components/Numbers/Index.vue';

@Component({
  name: 'Table',
  components: {
    Numbers,
  },
})
class Table extends Vue {
  @Prop()
  public lotteryIssue!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public lotteryTypes = LOTTERTIES;

  public titles = ['显示号码', '显示大小', '显示单双'];

  public titleStatus: any = 0;
  public switcher: any = '0';

  public get oLotteryIssues(): object {
    let oLotteryIssues = this.lotteryIssue;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0 , 99);
    return oLotteryIssue;
  }

 public created() {
  this.getName();  // 接受兄弟传来的值
 }

  public getName() {
  // console.log(this.number);
  }

  public switchStatus(index: number) {
    this.titleStatus = index;
    if ( this.titleStatus === 0 ) {
      this.switcher = 'NUMBER';
    } else if ( this.titleStatus === 1 ) {
      this.switcher = 'SMALL_LARGE';
    } else {
      this.switcher = 'ODD_EVEN';
    }
  }
}

export default Table;
</script>
