<template>
<div class="history-number text-center">
  <table>
    <tbody>
      <tr>
        <th>时间</th>
        <th>期数</th>
        <th class="number-btns">
           <span @click="showTitle(index)" :class="{spanselect:index==titleStatus}" v-for="(item,index) in titles" :key="index">{{item}}</span>
        </th>
        <th colspan="3">冠亚和</th>
        <th colspan="5">1-5龙虎</th>
      </tr>
      <tr v-for="(lotterys,Index) in oLotteryIssues" :key="Index">
        <td>{{lotterys.added_time}}</td>
        <td>{{lotterys.no}}</td>
        <td>
          <span v-if="switcher==='0'">
            <Numbers :code="code" :numbers="JSON.parse(lotterys.numbers)" :types="types" />
          </span>
          <span v-else-if="switcher==='1'">
           22
          </span>
          <span v-else-if="switcher==='2'">
           33
          </span>
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
</div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
import Numbers from '@/Components/Numbers/Index.vue';

// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
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

export default Table;
</script>
