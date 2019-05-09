<template>
  <div class="numbers" 
    :class="[ 'NUMBER' === status ? 'status-number' : '', 
              'SMALL_LARGE' === status ? 'status-small-large' : '',
              'ODD_EVEN' === status ? 'status-odd-even' : '', ]">
    <div class="number" 
      :class="[ false === onNumbers[iNumber] || false === union(onNumbers) ? 'opacity-0p1' : '',
               '单' === isOddOrEven(iNumber) ? 'number-odd' : '',
               '双' === isOddOrEven(iNumber) ? 'number-even' : '',
               '小' === isSmallOrLarge(iNumber, getSmallUpperBound, getLargelowerBound) ? 'number-small' : '',
               '大' === isSmallOrLarge(iNumber, getSmallUpperBound, getLargelowerBound) ? 'number-large' : '',
               'number-' + types.toLowerCase(), 
               'number-'+ code.toLowerCase(), 
               'number-'+ types.toLowerCase() + '-' + iNumber
               ]" v-for="(iNumber, sKey) in numbers" :key="sKey" v-randomNumber="{ isRandom: isRandom }">
      <span>{{iNumber}}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LOTTERIES from '@/CONFIGS/LOTTERIES';

@Component({
  name: 'Numbers',
})
class Numbers extends Vue {
  @Prop()
  public code!: string;
  @Prop()
  public numbers!: number[];
  @Prop()
  public types!: string;

  @Prop()
  public isRandom!: boolean;

  @Prop()
  public status!: string;

  @Prop()
  public onNumbers!: any;

  // @Prop()
  // public onOddOrEvens!: any;

  public get getSmallUpperBound() {
    let sCodes = this.code;
    let iSmallUpperBound = LOTTERIES[sCodes].SMALL_UPPER_BOUND;
    return iSmallUpperBound;
  }
  public get getLargelowerBound() {
    let sCodes = this.code;
    let iSlargelowerBound = LOTTERIES[sCodes].LARGE_LOWER_BOUND;
    return iSlargelowerBound;
  }

  public union(oBooleans: object) {
   // debugger;
    let bResult = false;
    for (let bBoolean in oBooleans) {
      if (bBoolean) {
        bResult = bResult || bBoolean;
      }
    }
    return bResult;
  }
}
export default Numbers;

</script>