<template>
  <div class="dragonOrTigerCount background-white">
     <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">龙虎统计</span>
    </div>
    <I-divider/>
    <div class="crown-table p-2">
      <table class="w-100">
        <tr class="font-size-1p5 background-tr">
          <td class="w-15">日期</td>
          <td>冠军龙</td>
          <td>冠军虎</td>
          <td>亚军龙</td>
          <td>亚军虎</td>
          <td>第三名龙</td>
          <td>第三名虎</td>
          <td>第四名龙</td>
          <td>第四名虎</td>
          <td>第五名龙</td>
          <td>第五名虎</td>
        </tr>
        <tr v-for="(lotteryIssue, iIndex ) in getdragonOrTigerCount" :key="iIndex" >
          <td v-for="(iCount, index) in lotteryIssue" :key="index">{{ iCount }}</td>
        </tr>
      </table>
      <p class="pl-2 pr-2 pt-2 font-size-1p5">使用说明：统计开奖号码的龙虎出现次数</p>
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
  IDivider,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';
import { JSONparse } from '../../../../filters';

@Component({
  name: 'CrownOrSecondSumTrend',
  components: {
    IDivider,
  },
})
class CrownOrSecondSumTrend extends Vue {

  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public lotteries!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public getdragonOrTigerCount = {
    "882749": {
      date: "2019-05-29",
      first_dragon: 100,
      first_tiger: 12,
      second_dragon: 17,
      second_tiger: 11,
      thirdly_dragon: 10,
      thirdly_tiger: 22,
      fourthly_dragon: 182,
      fourthly_tiger: 142,
      fifth_dragon: 60,
      fifth_tiger: 182,
    },
    "882748": {
      date: "2019-05-30",
      first_dragon: 21,
      first_tiger: 54,
      second_dragon: 68,
      second_tiger: 45,
      thirdly_dragon: 86,
      thirdly_tiger: 44,
      fourthly_dragon: 54,
      fourthly_tiger: 65,
      fifth_dragon: 45,
      fifth_tiger: 88,
    },
    "882747": {
      date: "2019-05-31",
      first_dragon: 32,
      first_tiger: 12,
      second_dragon: 23,
      second_tiger: 45,
      thirdly_dragon: 45,
      thirdly_tiger: 22,
      fourthly_dragon: 142,
      fourthly_tiger: 142,
      fifth_dragon: 60,
      fifth_tiger: 18,
    },
  }

}
export default CrownOrSecondSumTrend;
</script>


{
      "date": "2019-05-29",
      "count": [
          {
          "championDragon": 100,
          "championTiger": 122,
          },
          {
          "secondDragon": 105,
          "secondTiger": 299,
          },
          {
          "thirdlyDragon": 150,
          "thirdlyTiger": 199,
          },
          {
          "fourthlyDragon": 150,
          "fourthlyTiger": 399,
          },
          {
          "fifthDragon": 120,
          "fifthTiger": 288,
          },
      ],
    }