<template>
  <div class="numbers">
    <div class="number" 
      :class="[size, 
               '单' === isOddOrEven(iNumber) ? 'number-odd' : '',
               '双' === isOddOrEven(iNumber) ? 'number-even' : '',
               // '小' === isSmallOrLarge(smallUpperBound, largelowerBound) ? 'number-small' : '',
               //'大' === isSmallOrLarge(smallUpperBound, largelowerBound) ? 'number-large' : '',
               // 'number-' + types.toLowerCase(), 
               'number-'+ code.toLowerCase(), 
               //'number-'+ types.toLowerCase() + '-' + iNumber
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
  public smallUpperBound!: number;
  @Prop()
  public largelowerBound!: number;
  @Prop()
  public size!: string;

  @Prop()
  public isRandom!: boolean;


}
export default Numbers;

</script>