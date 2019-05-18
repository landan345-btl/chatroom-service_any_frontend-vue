<template>
  <div class="number-analysis">
    <div class="head pt-1">
      <span class="font-size-2 font-weight-bold pr-1">查看号码分布:</span>
      <span :class="{'active': onNumbers[sKey]}" 
        @click="showNumber(sKey)" v-for="(iNumber, sKey) in record11x5Buttons" :key="sKey" v-if="types === '11X5'">
        号码&nbsp;{{iNumber}}
        <i></i>
      </span>
      <span :class="{'active': onNumbers[sKey]}" 
        @click="showNumber(sKey)" v-for="(iNumber, sKey) in recordSscButtons" :key="sKey" v-if="types === 'SSC'">
        号码&nbsp;{{iNumber}}
        <i></i>
      </span>
      <span :class="{'active': onNumbers[sKey]}" 
        @click="showNumber(sKey)" v-for="(iNumber, sKey) in recordPk10Buttons" :key="sKey" v-if="types === 'PK10'">
        号码&nbsp;{{iNumber}}
        <i></i>
      </span>
    </div>
    <div class="head pt-1">
      <span class="font-size-2 font-weight-bold pr-1">查看大小分布:</span>
      <span :class="{'active':onOddOrEvenOrSmallOrLargeOrPairRedcords[sKey]}"
        @click="showOddOrEven(sKey)" v-for="(sRecord, sKey) in recordOddOrEvens" :key="sKey">
        {{ sRecord }}
        <i></i>
      </span>
      <i class="reset d-inline-block"  @click="resetShow(reset)">还原</i>
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
  Emit,
} from 'vue-property-decorator';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'NumberAnalysi',
  components: {
  },
})
class NumberAnalysis extends Vue {
  @Prop()
  public types!: any;

  @Prop()
  public onNumbers!: any;

  @Prop()
  public onOddOrEvenOrSmallOrLargeOrPairRedcords!: any;

  public reset = 'reset';

  public record11x5Buttons = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
  };
  public recordSscButtons = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  public recordPk10Buttons = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
  };

  public recordOddOrEvens = {
    odd: '单',
    even: '双',
    large: '大',
    small: '小',
    pair: '对子号',
  };

  @Emit('handle-toggle-number')
  public handleToggleNumber(sKey: string) {
    return sKey;
  }

  @Emit('handle-toggle-oddoreven')
  public handleToggleOddOrEven(sKey: string) {
    return sKey;
  }

  @Emit('handle-reset')
  public handleResetShow(reset: string) {
    return reset;
  }

  public showNumber(sKey: string) {
    this.handleToggleNumber(sKey);
  }

  public showOddOrEven(sKey: string) {
    this.handleToggleOddOrEven(sKey);
  }

  public resetShow(reset: string) {
    this.handleResetShow(reset);
  }

}

export default NumberAnalysis;
</script>
