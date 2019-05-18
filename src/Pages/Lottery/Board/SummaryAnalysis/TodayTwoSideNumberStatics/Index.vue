<template>
  <div class="today-two-side-number-statics">
    <div class="font-size-2">今日双面统计</div>
      <div v-if=" types === 'PK10' ">
        <table>
          <tbody>
          <tr>
            <th>名次</th>
            <th colspan="4">冠军</th>
            <th colspan="4">亚军</th>
            <th colspan="4">第三名</th>
            <th colspan="4">第四名</th>
            <th colspan="4">第五名</th>
            <th colspan="4">第六名</th>
            <th colspan="4">第七名</th>
            <th colspan="4">第八名</th>
            <th colspan="4">第九名</th>
            <th colspan="4">第十名</th>
          </tr>
          <tr>
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
          <tr>
            <td>出现次数</td>



            <!-- <template  v-for="(sRecord) in todayTwoSideRecords">
              <td v-for="(x, y) in sRecord" :key="y">
              </td>
            </template > -->
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[0]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[1]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[2]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[3]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[4]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[5]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[6]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[7]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[8]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[9]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
          </tr>
          </tbody>
        </table>  
        <table class="mt-1">
          <tr>
            <th>冠亚龙虎</th>
            <th colspan="4">冠亚和</th>
            <th colspan="2">第一名龙虎</th>
            <th colspan="2">第二名龙虎</th>
            <th colspan="2">第三名龙虎</th>
            <th colspan="2">第四名龙虎</th>
            <th colspan="2">第五名龙虎</th>
          </tr>
          <tr>
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
          <tr>
            <td>出现次数</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table> 
      </div>   
      <div v-if="types && ['SSC', '11X5'].includes(types)" class="font-size-1p5">
        <table>
          <tbody>
          <tr>
            <th>号码</th>
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
            <td>64</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
          </tr>
          </tbody>
        </table>  
        <table class="mt-1">
          <tr class="text-center">
            <th rowspan="2"><span class="ball-time  position-relative">球次</span></th>
            <th colspan="4">总和</th>
            <th colspan="4">第一球</th>
            <th colspan="4">第二球</th>
            <th colspan="4">第三球</th>
            <th colspan="4">第四球</th>
            <th colspan="4">第五球</th>
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
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[0]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[1]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[2]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[3]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
            <td v-for="(sRecord , sKey, iIndex) in todayTwoSideRecords[4]" :key="sKey + '-' + iIndex">{{ sRecord }}</td>
          </tr>
        </table> 
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
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'TodayTwoSideNumberStatics',
  components: {
  },
})
class TodayTwoSideNumberStatics extends Vue {
  @Prop()
  public types!: any;

  @Prop()
  public todayTwoSideRecords!: any;

}

export default TodayTwoSideNumberStatics;
</script>
