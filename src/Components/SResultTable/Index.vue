<template>
  <div class="result-table ml-2 mr-2 font-size-1p5 background-white">
    <div>
      <div class="pl-1 pt-1 pb-1 table-top">
        <span class="mr-1">连续出现次数</span>
        <input class="mr-1" type="number" min="0" placeholder="1"/>
        <span  class="mr-1">次以上</span>
        <select class="mr-1">
          <option value="大">大</option>
          <option value="小">小</option>
        </select>
        <Button type="primary" size="small">确定</Button>
        <span>
          出现的次数为：
          <span>0</span>
        </span>
        <span class="float-right m-1 grand">
          <span>今天</span>
          <span>累计:</span>
          <span v-for="(count , iIndex) in oDragonOrTigerCount" :key="iIndex"> {{oddOrEvenOrSmallOrLargeOrDragonOrTiger(iIndex)}}({{count}})</span>
          <span class="color-red">&nbsp;&nbsp;{{ rank }}</span>&nbsp;&nbsp;
          <span class="color-red">{{ isoddEvenOrSmallOrLarge }}</span>&nbsp;&nbsp;
          <span class="color-red">最新</span>&nbsp;&nbsp;
          <span class="color-red"><Icon type="md-arrow-down" /></span>
        </span>
      </div>
      <div class="table-con w-100" dir=rtl>
        <table class="faloat-right text-center">
          <tbody>
            <tr>
              <td v-for="(aOddEvenOrSmallOrLarge, iIndex ) in oddEvenOrSmallOrLargeStrings" :key="iIndex" :class="iIndex % 2 === 1 ? 'background-even':''" >
                <p v-for="(iCount, index) in aOddEvenOrSmallOrLarge" :key="index">{{ iCount }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'SResultTable',
})

class SResultTable extends Vue {
  @Prop()
  public resultOddOrEvensAndSmallOrLarges!: any;

  @Prop()
  public rank: any;

  @Prop()
  public oddEvenOrSmallOrLarge!: any;

  @Prop()
  public oDragonOrTigerCount!: any;

  public oddEvenOrSmallOrLargeStrings =[
    ['双','双'],['单','单','单'],['双','双','双','双','双','双','双','双','双'],
    ['双','双','双'],['双','双'],['单','单','单'],['双','双','双'],['双','双','双'],
    ['双','双'],['单','单','单'],['双','双','双'],['双','双','双'],['单','单','单'],
    ['双','双','双'],['双','双','双'],['单','单','单'],['双','双','双'],['双','双','双'],
    ['单','单','单'],['双','双','双'],['双','双','双'],['单','单','单'],['双','双','双'],
    ['双','双','双'],['单','单','单'],['双','双','双'],['双','双','双'],['单','单','单'],
    ['双','双','双'],['双','双','双'],['单','单','单'],['双','双','双'],
    ['双','双','双','双','双','双','双','双','双'], ['双','双','双','双','双','双','双','双','双','双'], 
    ['双','双','双','双','双','双','双','双','双'], ['双','双','双','双','双','双','双','双','双'], 
    ['双','双','双','双','双','双','双','双','双'], ['双','双','双','双','双','双','双','双','双'], 
    ['双','双','双','双','双','双','双','双','双'], ['双','双','双','双','双','双','双','双','双'], 
    ['双','双','双','双','双','双','双','双','双'], ['双','双','双','双','双','双','双','双','双'], 
    ['双','双','双','双','双','双','双','双','双'], ['双','双','双','双','双','双','双','双','双'], 
    ['双','双','双','双','双','双','双','双','双'], ['双','双','双','双','双','双','双','双','双'],
  ];

  public get isoddEvenOrSmallOrLarge() {
    let aOddEvenOrSmallOrLarge: any = {
      smallOrLarge: '大小',
      oddOrEven: '单双',
      odd: '单双',
      small: '大小',
      dragon: '龙虎',
      guanyaodd: '单双',
      guanyasmall: '大小',
    };
    return aOddEvenOrSmallOrLarge[this.oddEvenOrSmallOrLarge];
  }

  public oddOrEvenOrSmallOrLargeOrDragonOrTiger(sKey: string) {
    let oResult: any = {
      odd: '单',
      even: '双',
      small: '小',
      large: '大',
      dragon: '龙',
      tiger: '虎',
    };
    return oResult[sKey];
  }

}

export default SResultTable;
</script>
