<template>
  <div class="numbers"
    :class="[ 'NUMBER' === status ? 'status-number' : '',
              'SMALL_LARGE' === status ? 'status-small-large' : '',
              'ODD_EVEN' === status ? 'status-odd-even' : '', ]">
    <div class="number"
      v-for="(iNumber, iIndex) in numbers" 
      :key="iIndex" 
      v-randomNumber="{ isRandom: isRandom, types: types }"
      :class="[
            undefined === onNumbers || undefined === onOddOrEvenOrSmallOrLargeOrPairRedcords ||
            ((true === onNumbers[iNumber] || false === union(onNumbers)) &&
            false === onOddOrEvenOrSmallOrLargeOrPairRedcords.pair ) ||
            (true === onOddOrEvenOrSmallOrLargeOrPairRedcords.pair &&  nextNumbers[iIndex] === iNumber || previousNumbers[iIndex] === iNumber) ? '' : 'opacity-0p1', //判断对子
              // true    并且odd 为 false 时
            undefined === onNumbers || undefined === onOddOrEvenOrSmallOrLargeOrPairRedcords || // 默认undefined时显示全部图片/其它数字图片一直显示
            ((true === onNumbers[iNumber] || false === union(onNumbers)) &&
            false === onOddOrEvenOrSmallOrLargeOrPairRedcords.odd ) ||
            (true === onOddOrEvenOrSmallOrLargeOrPairRedcords.odd && '单' === isOddOrEven(iNumber)) ? '' : 'opacity-0p1',

            ((undefined === onNumbers || undefined === onOddOrEvenOrSmallOrLargeOrPairRedcords) ||
            (true === onNumbers[iNumber] || false === union(onNumbers)) && false === onOddOrEvenOrSmallOrLargeOrPairRedcords.even ) ||
            (true === onOddOrEvenOrSmallOrLargeOrPairRedcords.even && '双' === isOddOrEven(iNumber)) ? '' : 'opacity-0p1',

            ((undefined === onNumbers || undefined === onOddOrEvenOrSmallOrLargeOrPairRedcords) ||
            (true === onNumbers[iNumber] || false === union(onNumbers)) && false === onOddOrEvenOrSmallOrLargeOrPairRedcords.large ) ||
            (true === onOddOrEvenOrSmallOrLargeOrPairRedcords.large && '大' === isSmallOrLarge(iNumber, getSmallUpperBound, getLargelowerBound)) ? '' : 'opacity-0p1',

            ((undefined === onNumbers || undefined === onOddOrEvenOrSmallOrLargeOrPairRedcords) ||
            (true === onNumbers[iNumber] || false === union(onNumbers)) && false === onOddOrEvenOrSmallOrLargeOrPairRedcords.small ) ||
            (true === onOddOrEvenOrSmallOrLargeOrPairRedcords.small && '小' === isSmallOrLarge(iNumber, getSmallUpperBound, getLargelowerBound)) ? '' : 'opacity-0p1',
            previousNumbers && previousNumbers[iIndex] ? 'previous-' + previousNumbers[iIndex] : '',
            '单' === isOddOrEven(iNumber) ? 'number-odd' : '',
            '双' === isOddOrEven(iNumber) ? 'number-even' : '',
            '小' === isSmallOrLarge(iNumber, getSmallUpperBound, getLargelowerBound) ? 'number-small' : '',
            '大' === isSmallOrLarge(iNumber, getSmallUpperBound, getLargelowerBound) ? 'number-large' : '',
            types ? 'number-' + types.toLowerCase() : '',
            code ? 'number-'+ code.toLowerCase() : '',
            types ? 'number-'+ types.toLowerCase() + '-' + iNumber :'']" >
      <Badge :count="true === isCountShowed ? counts[iNumber] : 0">
        <span>{{iNumber}}</span>
      </Badge>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';
import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'SNumbers',
})
class SNumbers extends Vue {
  @Prop()
  public code!: string;

  @Prop()
  public numbers!: number[];

  @Prop()
  public counts!: any;

  @Prop()
  public types!: string;

  @Prop()
  public isRandom!: boolean;

  @Prop()
  public status!: string;

  @Prop()
  public onNumbers!: any;

  @Prop()
  public isCountShowed!: boolean;

  @Prop()
  public showiPositon!: boolean;

  @Prop()
  public onOddOrEvenOrSmallOrLargeOrPairRedcords!: any;

  @Prop()
  public previousNumbers!: any; // 传过来的上一组数据

  @Prop()
  public nextNumbers!: any; // 传过来的下一组数据

  public get getSmallUpperBound () {
    let sCodes = this.code;
    let iSmallUpperBound = LOTTERIES[sCodes].SMALL_UPPER_BOUND;
    return iSmallUpperBound;
  }
  public get getLargelowerBound () {
    let sCodes = this.code;
    let iSlargelowerBound = LOTTERIES[sCodes].LARGE_LOWER_BOUND;
    return iSlargelowerBound;
  }

  public union (oBooleans: { [key: string]: boolean }) {
    let bResult = false;
    let bBoolean;
    for (let sKey in oBooleans) {
      if (oBooleans.hasOwnProperty(sKey)) {
        bBoolean = oBooleans[sKey];
        bResult = bResult || bBoolean;
        // 如果运算的值是true就 break;
        if (bResult === true) {
          break;
        }
      }
    }
    return bResult;
  }
}
export default SNumbers;

</script>
