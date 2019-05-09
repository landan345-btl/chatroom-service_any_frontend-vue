<template>
  <div class="number-analysis">
    <div class="head pt-1">
      <span class="font-size-2p5">查看号码分布:</span>
      <span :class="{'active': onNumbers[sKey]}" 
        @click="showNumber(sKey)" v-for="(iNumber, sKey) in record11x5Buttons" :key="sKey" v-if="types === '11X5'">
        号码{{iNumber}}
        <i></i>
      </span>
      <span :class="{'active': onNumbers[sKey]}" 
        @click="showNumber(sKey)" v-for="(iNumber, sKey) in recordSscButtons" :key="sKey" v-if="types === 'SSC'">
        号码{{iNumber}}
        <i></i>
      </span>
      <span :class="{'active': onNumbers[sKey]}" 
        @click="showNumber(sKey)" v-for="(iNumber, sKey) in recordPk10Buttons" :key="sKey" v-if="types === 'PK10'">
        号码{{iNumber}}
        <i></i>
      </span>
    </div>
    <div class="head pt-1">
      <span class="font-size-2p5">查看大小分布:</span>
      <span :class="{'active':onOddOrEvenOrSmallOrLargeOrPairRedcords[sKey]}"
        @click="showOddOrEven(sKey)" v-for="(sRecord, sKey) in recordOddOrEvens" :key="sKey">
        {{ sRecord }}
        <i></i>
      </span>
      <span class="reset">还原</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'TodayTwoSideNumberStatics',
  components: {
  },
})
class TodayTwoSideNumberStatics extends Vue {
  @Prop()
  public types!: any;

  @Prop()
  public onNumbers!: any;

  @Prop()
  public onOddOrEvenOrSmallOrLargeOrPairRedcords!: any;

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

  public showNumber(sKey: string) {
    this.handleToggleNumber(sKey);
  }

  public showOddOrEven(sKey: string) {
    this.handleToggleOddOrEven(sKey);
  }

}

export default TodayTwoSideNumberStatics;
</script>
