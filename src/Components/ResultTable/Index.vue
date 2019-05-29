<template>
  <div class="result-table ml-2 mr-2 font-size-1p5 background-white">
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
        <span> 累计：单(</span>
        <!-- <span v-for="(item , i) in oDragonOrTigerCount" :key="i"> {{oddOrEvenOrSmallOrLargeOrDragonOrTiger(i)}}({{item}})</span> -->
        <span>123</span>
        <span>)&nbsp;&nbsp;双(</span>
        <span>456</span>)
        <span class="color-red">&nbsp;&nbsp;冠军</span>&nbsp;&nbsp;
        <span class="color-red">龙虎</span>&nbsp;&nbsp;
        <span class="color-red">最新</span>&nbsp;&nbsp;
        <span class="color-red"><Icon type="md-arrow-down" /></span>
      </span>
    </div>
    <div class="table-con w-100" dir=rtl>
      <table class="faloat-right text-center">
        <tbody>
          <tr>
            <td  v-for="(aOddEvenOrSmallOrLarge, iIndex ) in oddEvenOrSmallOrLargeStrings" :key="iIndex" :class="iIndex % 2 === 0 ? 'background-even':''" >
              <p v-for="(iCount, index) in aOddEvenOrSmallOrLarge" :key="index">{{ iCount }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'ResultTable',
})

class ResultTable extends Vue {
  @Prop()
  public resultOddOrEvensAndSmallOrLarges!: any;

  @Prop()
  public oddOrEvensAndSmallOrLargeCount!: any;

  @Prop()
  public dragonOrTigerResult!: any;

  @Prop()
  public dragonOrTigerCount!: any;

  @Prop()
  public firstAndSecondSummation!: any;
  
  @Prop()
  public firstAndSecondSummationCount!: any;

  public oddEvenOrSmallOrLargeStrings =[
    ['双','双'],['单','单','单'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双'],['双','双','双']
  ];

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

export default ResultTable;
</script>
