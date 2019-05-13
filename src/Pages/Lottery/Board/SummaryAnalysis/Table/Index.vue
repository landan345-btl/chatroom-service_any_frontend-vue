<template>
<div class="history-number text-center p-2">
   <!-- <div class="p-2">
      <div>
        <table class="w-100">
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
          <tr v-for="(lotteryIssue, iIndex ) in Object.values(lotteryIssues).slice(0, 99)" :key="iIndex">
            <td>{{ lotteryIssue.no }}</td>
            <td>
              <Numbers 
              :code="code" 
              :numbers="JSON.parse(lotteryIssue.numbers )" 
              :types="types" 
              :onNumbers="onNumbers"
              :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
              :isRandom="false" class="status-number"/>
            </td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | sum }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | sum | isSmallOrLarge(20, 21 ) }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | sum | isOddOrEven }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | isDragonOrTiger( [ 0 , 4 ] ) }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 0 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 1 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 2 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 3 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 4 ) | isSmallOrLarge( 4 , 5 ) }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 0 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 1 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 2 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 3 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | substr( 4 ) | isOddOrEven }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | determineSequence( [ 0 , 1 , 2 ] )  }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | determineSequence( [ 1 , 2 , 3] ) }}</td>
            <td>{{ JSON.parse( lotteryIssue.numbers ) | determineSequence( [ 2 , 3 , 4 ] ) }}</td>
          </tr>
        </table>
      </div>
    </div> -->
</div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Numbers from '@/Components/Numbers/Index.vue';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'Table',
  components: {
    Numbers,
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
