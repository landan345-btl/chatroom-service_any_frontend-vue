<template>
  <div>
    <div class="today-two-side-number-statics pl-2 pb-2 pr-2 pt-1">
      <div class="font-size-2">
        今日双面统计
      </div>
      <table v-if="types && ['PK10'].includes(types.toUpperCase())"  class="font-size-1p5">
        <tbody>
          <tr>
            <th>名次</th>
              <th colspan="4" v-for="(rank, index) in ranks" :key="index">{{rank}}</th>
            </tr>
            <tr class="background-white text-center">
              <td>大小单双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
              <td>小</td>
              <td>大</td>
              <td>单</td>
              <td>双</td>
            </tr>
            <tr class="background-white text-center">
              <td>出现次数</td>
              <template v-for="(oNumberTypesToCounts, iPosition) in getPositionsToNumberTypesToCounts">
                <template v-for="(iCount, sNumberType) in oNumberTypesToCounts">
                  <td :key="iPosition + sNumberType" v-if="iPosition < 10">{{ iCount }}</td>
                </template>
              </template>
          </tr>
        </tbody>      
      </table>
      <table v-else-if="types && ['SSC'].includes(types.toUpperCase())">
        <tbody>
          <tr>
            <th class="w-30">号码</th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
          </tr>
          <tr class="background-white text-center">
            <td>出现次数</td>
            <td>{{  }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{  }}</td>
            <td>{{  }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{  }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
          </tr>
        </tbody>
      </table>
      <table v-else-if="types && ['11X5'].includes(types.toUpperCase())">
        <tbody>
          <tr>
            <th class="w-30">号码</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
          </tr>
          <tr class="background-white text-center">
            <td>出现次数</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
          </tr>
        </tbody>
      </table>
      <table class="mt-1 font-size-1p5" v-if="types && ['PK10'].includes(types.toUpperCase())">
        <tbody>
          <tr>
            <th>冠亚龙虎</th>
            <th colspan="4">冠亚和</th>
            <th colspan="2">第一名龙虎</th>
            <th colspan="2">第二名龙虎</th>
            <th colspan="2">第三名龙虎</th>
            <th colspan="2">第四名龙虎</th>
            <th colspan="2">第五名龙虎</th>
          </tr>
          <tr class="background-white text-center">
            <td>单双大小龙虎</td>
            <td>单</td>
            <td>双</td>
            <td>大</td>
            <td>小</td>
            <td>龙</td>
            <td>虎</td>
            <td>龙</td>
            <td>虎</td>
            <td>龙</td>
            <td>虎</td>
            <td>龙</td>
            <td>虎</td>
            <td>龙</td>
            <td>虎</td>
          </tr>
          <tr class="background-white text-center">
            <td>出现次数</td>
          </tr>
        </tbody>
      </table>
      <table v-else-if="types && ['SSC'].includes(types.toUpperCase())" class="mt-1">
        <tbody>
          <tr class="text-center">
            <th rowspan="2"><span class="ball-time  position-relative">球次</span></th>
            <th colspan="4" v-for="(number, index) in numbers" :key="index">{{number}}</th>
          </tr>
          <tr class="background-white text-center">
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
          </tr>
          <tr class="background-white text-center">
            <td>出现次数</td>
            <template v-for="(oNumberTypesToCounts, iPosition) in getPositionsToNumberTypesToCounts">
              <template v-for="(iCount, sNumberType) in oNumberTypesToCounts">
                <td :key="iPosition + sNumberType">{{ iCount }}</td>
              </template>
            </template>
          </tr> 
        </tbody>
      </table>
      <table v-else-if="types && ['11X5'].includes(types.toUpperCase())">
        <tbody>
          <tr class="text-center">
            <th rowspan="2"><span class="ball-time  position-relative">球次</span></th>
            <th colspan="4" v-for="(number, index) in numbers" :key="index">{{number}}</th>
          </tr>
          <tr class="background-white text-center">
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
            <td>小</td>
            <td>大</td>
            <td>单</td>
            <td>双</td>
          </tr>
          <tr class="background-white text-center">
            <td>出现次数</td>
            <template v-for="(oNumberTypesToCounts, iPosition) in getPositionsToNumberTypesToCounts">
              <template v-for="(iCount, sNumberType) in oNumberTypesToCounts">
                <td :key="iPosition + sNumberType">{{ iCount }}</td>
              </template>
            </template>
          </tr> 
        </tbody>
      </table>
    </div>
    <I-divider/>
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
  Lottery as LotteryMixin,
} from '@/Mixins/';

import {
  LOTTERIES, 
} from '@/CONFIGS/';

import {
  IDivider,
} from '@/Components/';

@Component({
  name: 'TodayTwoSideNumberStatics',
  components: {
    IDivider,
  },
  mixins: [LotteryMixin, ],
})
class TodayTwoSideNumberStatics extends Vue {
  @Prop()
  public types!: any;

  @Prop()
  public todayTwoSideRecords!: any;

  @Prop()
  public lotteries!: any;

  @Prop()
  public lottery!: any;

  public positionsToNumberTypesToCounts: any;

  public get getPositionsToNumberTypesToCounts() {
    let oLotteryIssues = this.$store.state.lottery_issues;
    let oLotteries = this.$store.state.lotteries;
    let oPositionsToNumberTypesToCounts = this.positionsToNumberTypesToCounts(oLotteryIssues, oLotteries);
    return oPositionsToNumberTypesToCounts;
  }

  public ranks = ['冠军', '亚军', '第三名	', '第四名', '第五名','第六名', '第七名', '第八名', '第九名','第十名'];
  public numbers = ['第一球', '第二球', '第三球	', '第四球', '第五球','总和'];
  public smallOrlagrOrOddOrEvens = ['小', '大', '单', '双'];
  public DragonOrTiger = ['龙', '虎'];
}

export default TodayTwoSideNumberStatics;
</script>
