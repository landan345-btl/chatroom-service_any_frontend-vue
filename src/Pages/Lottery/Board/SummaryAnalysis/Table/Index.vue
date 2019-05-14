<template>
<div class="history-number text-center p-2">
  <div>
    <table class="w-100">
      <tr class="font-size-1p5">
        <th>期数</th>
        <th class="w-30">开奖号码</th>
        <th colspan="3">总和</th>
        <th>龙虎</th>
        <th colspan="5">1-5球大小</th>
        <th colspan="5">1-5球单双</th>
        <th>前三</th>
        <th>中三</th>
        <th>后三</th>
      </tr>
      <tr v-for="(lotteryIssue, iIndex ) in oLotteryIssues" :key="iIndex">
        <td>{{ lotteryIssue.no }}</td>
        <td>
          <S-numbers 
          :code="code" 
          :numbers="JSON.parse(lotteryIssue.numbers )" 
          :types="types" 
          :previousNumbers="iIndex > 0 ? JSON.parse(oLotteryIssues[iIndex - 1].numbers): []"
          :nextNumbers="iIndex < JSON.parse(oLotteryIssues.length - 1) ? JSON.parse(oLotteryIssues[iIndex + 1].numbers): []"
          :onNumbers="onNumbers"
          :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
          :isRandom="false" class="status-number"/>
        </td>
        <td>{{ JSON.parse( lotteryIssue.numbers ) | sum }}</td>
        <td :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(lotteryIssue.numbers)),20,21)}">{{ JSON.parse( lotteryIssue.numbers ) | sum | isSmallOrLarge(20, 21 ) }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(lotteryIssue.numbers)))}">{{ JSON.parse( lotteryIssue.numbers ) | sum | isOddOrEven }}</td>
        <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(lotteryIssue.numbers),[0,4])}">{{ JSON.parse( lotteryIssue.numbers ) | isDragonOrTiger( [ 0 , 4 ] ) }}</td>
        <td :class="{'text-big' : '大' === isSmallOrLarge(substr((JSON.parse(lotteryIssue.numbers)),0),4,5)}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 0 ) | isSmallOrLarge( 4 , 5 ) }}</td>
        <td :class="{'text-big' : '大' === isSmallOrLarge(substr((JSON.parse(lotteryIssue.numbers)),1),4,5)}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 1 ) | isSmallOrLarge( 4 , 5 ) }}</td>
        <td :class="{'text-big' : '大' === isSmallOrLarge(substr((JSON.parse(lotteryIssue.numbers)),2),4,5)}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 2 ) | isSmallOrLarge( 4 , 5 ) }}</td>
        <td :class="{'text-big' : '大' === isSmallOrLarge(substr((JSON.parse(lotteryIssue.numbers)),3),4,5)}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 3 ) | isSmallOrLarge( 4 , 5 ) }}</td>
        <td :class="{'text-big' : '大' === isSmallOrLarge(substr((JSON.parse(lotteryIssue.numbers)),4),4,5)}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 4 ) | isSmallOrLarge( 4 , 5 ) }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(substr((JSON.parse(lotteryIssue.numbers)),0))}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 0 ) | isOddOrEven }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(substr((JSON.parse(lotteryIssue.numbers)),1))}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 1 ) | isOddOrEven }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(substr((JSON.parse(lotteryIssue.numbers)),2))}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 2 ) | isOddOrEven }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(substr((JSON.parse(lotteryIssue.numbers)),3))}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 3 ) | isOddOrEven }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(substr((JSON.parse(lotteryIssue.numbers)),4))}">{{ JSON.parse( lotteryIssue.numbers ) | substr( 4 ) | isOddOrEven }}</td>
        <td :class="{'text-danger' : '对子' === determineSequence(JSON.parse(lotteryIssue.numbers),[0, 1 ,2])}">{{ JSON.parse( lotteryIssue.numbers ) | determineSequence( [ 0 , 1 , 2 ] )  }}</td>
        <td :class="{'text-danger' : '对子' === determineSequence(JSON.parse(lotteryIssue.numbers),[1, 2, 3])}">{{ JSON.parse( lotteryIssue.numbers ) | determineSequence( [ 1 , 2 , 3] ) }}</td>
        <td :class="{'text-danger' : '对子' === determineSequence(JSON.parse(lotteryIssue.numbers),[2, 3, 4])}">{{ JSON.parse( lotteryIssue.numbers ) | determineSequence( [ 2 , 3 , 4 ] ) }}</td>
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
  SNumbers,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'Table',
  components: {
    SNumbers,
  },
})
class Table extends Vue {
  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  @Prop()
  public onNumbers!: any;

  @Prop()
  public onOddOrEvenOrSmallOrLargeOrPairRedcords!: boolean;

  public get oLotteryIssues(): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0 , 99);
    return oLotteryIssue;
  }

}

export default Table;
</script>
