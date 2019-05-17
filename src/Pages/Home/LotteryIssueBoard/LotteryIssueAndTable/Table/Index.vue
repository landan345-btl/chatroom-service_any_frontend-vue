<template>
  <table class="text-center" v-if="'PK10' === lotteries[lotteryIssue.lottery_id].types">
    <tr>
      <th colspan=5>1-5龙虎</th>
      <th colspan=3>冠亚和</th>
    </tr>
    <tr>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([0, 9]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([1, 8]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([2, 7]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([3, 6]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([4, 5]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum([0, 1]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum([0, 1]) | isSmallOrLarge(10, 12) }}</td>
      <td :class="{ 
        'even': '双' === isOddOrEven(sum(JSON.parse(lotteryIssue.numbers), [0, 1])),
        'odd': '单' === isOddOrEven(sum(JSON.parse(lotteryIssue.numbers), [0, 1])),
        }
        ">{{ JSON.parse(lotteryIssue.numbers) | sum([0, 1]) | isOddOrEven }}</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'SSC' === lotteries[lotteryIssue.lottery_id].types">
    <tr>
      <th colspan=3>总和</th>
      <th>1-2龙虎</th>
      <th>前三</th>
      <th>中三</th>
      <th>后三</th>
    </tr>
    <tr>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum | isOddOrEven }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum | isSmallOrLarge(22, 23) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([0, 1]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | determineSequence([0, 1, 2]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | determineSequence([1, 2, 3]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | determineSequence([2, 3, 4]) }}</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'11X5' === lotteries[lotteryIssue.lottery_id].types">
    <tr>
      <th colspan=3>总和</th>
      <th>前三</th>
      <th>中三</th>
      <th>后三</th>
    </tr>
    <tr>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum | isSmallOrLarge(29, 30) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum | isOddOrEven }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | determineSequence([0, 1, 2]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | determineSequence([1, 2, 3]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | determineSequence([2, 3, 4]) }}</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'KLSF' === lotteries[lotteryIssue.lottery_id].types">
    <tr>
      <th colspan=4>总和</th>
      <th colspan=4>1-4龙虎</th>
    </tr>
    <tr>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum | isOddOrEven }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum | isSmallOrLarge(83, 85) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | sum | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([0, 7]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([1, 6]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([2, 5]) }}</td>
      <td>{{ JSON.parse(lotteryIssue.numbers) | isDragonOrTiger([3, 4]) }}</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'K3' === lotteries[lotteryIssue.lottery_id].types">
    <tr>
      <th class="w-50" colspan=3>总和</th>
      <th class="w-50" colspan=3>鱼虾蟹</th>
    </tr>
    <tr>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum | isOddOrEven }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum | isSmallOrLarge(10, 11) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | isFishOrShrimpOrCrab(0) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | isFishOrShrimpOrCrab(1) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | isFishOrShrimpOrCrab(2) }}</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="['3D', 'XY28'].includes(lotteries[lotteryIssue.lottery_id].types)">
    <tr>
      <th class="w-25" colspan=3>佰拾和</th>
      <th class="w-25" colspan=3>佰个和</th>
      <th class="w-25" colspan=3>拾个和</th>
      <th class="w-25" colspan=3>总和</th>
    </tr>
    <tr>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum([0, 1]) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum([0, 1]) | isOddOrEven }}</td>
      <td class="w-1_3">尾{{ JSON.parse(lotteryIssue.numbers) | sum([0, 1]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum([0, 2]) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum([0, 2]) | isOddOrEven }}</td>
      <td class="w-1_3">尾{{ JSON.parse(lotteryIssue.numbers) | sum([0, 2]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum([1, 2]) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum([1, 2]) | isOddOrEven }}</td>
      <td class="w-1_3">尾{{ JSON.parse(lotteryIssue.numbers) | sum([1, 2]) | substr(-1, 1) | isSmallOrLarge(4 , 5) }}</td>
      <td class="w-1_3" >{{ JSON.parse(lotteryIssue.numbers) | sum }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum | isOddOrEven }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum | isSmallOrLarge(13, 14) }}</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="['SIX'].includes(lotteries[lotteryIssue.lottery_id].types)">
    <tr>
      <th class="w-25" colspan=3>总和</th>
      <th class="w-25" colspan=4>特码</th>
    </tr>
    <tr>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum | isOddOrEven }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum | isSmallOrLarge(174, 175) }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | last }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | last | isOddOrEven }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | last | isSmallOrLarge(24, 25) }}</td>
      <td class="w-1_3">尾{{ JSON.parse(lotteryIssue.numbers) | last | substr(-1, 1) | isSmallOrLarge(4, 5)}}</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="['KL8'].includes(lotteries[lotteryIssue.lottery_id].types)">
    <tr>
      <th class="w-50" colspan=3>总合</th>
      <th class="w-25" colspan=1>单双</th>
      <th class="w-25" colspan=1>大小</th>
    </tr>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum | isOddOrEven }}</td>
      <td class="w-1_3">{{ JSON.parse(lotteryIssue.numbers) | sum | isSmallOrLarge(809, 811) }}</td>
      <td class="">{{ JSON.parse(lotteryIssue.numbers) | isFrontOrBack }}</td>
      <td class="">{{ JSON.parse(lotteryIssue.numbers) | isSmallOrLarge(39, 40)}}多</td>
    <tr>
    </tr>
  </table>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Table',
})
class Table extends Vue {
  @Prop()
  public lotteryIssue!: any;
  @Prop()
  public lotteries!: any;
}
export default Table;

</script>