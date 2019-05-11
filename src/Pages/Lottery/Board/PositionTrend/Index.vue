<template>
  <div class="positon-trend">
    <div class="top p-1 font-weight-bold">
      <span class="title">定位走势</span>
      <el-radio-group v-model="radio1">
        <el-radio-button label="今天"></el-radio-button>
        <el-radio-button label="昨天"></el-radio-button>
        <el-radio-button label="前天"></el-radio-button>
        <el-radio-button label="最近30期"></el-radio-button>
        <el-radio-button label="最近60期"></el-radio-button>
        <el-radio-button label="最近90期"></el-radio-button>
      </el-radio-group>
    </div>

    <div class="p-2 ">
      <div>
        <div class="say mb-2">
          <p>
            <span> <span>说明：</span> 1大小：5 ~ 9 属大号，0 ~ 4属小号</span>
            <span class="el-icon-arrow-down"></span>
          </p>
          <p> 2 单双：1、3、5、7、9属单数，0、2、4、6、8属双数；</p>
          <p>3 质合：1、2、3、5、7属质数，0、4、6、8、9属合数;</p>
          <p> 4 遗漏期数：自上期开出到本期间隔的期数；</p>
          <p> 5 分隔线：每五期使用分隔线，使横向导航更加清晰;</p>
          <p> 6 出现次数：统计周期内，某个号码的累计出现次数。</p>
          <p>8 平均遗漏：统计期数内遗漏的平均值。（计算公式：平均遗漏＝统计期数/(出现次数+1)）；</p>
          <p> 9 最大遗漏：统计期数内遗漏的最大值;</p>
          <p> 10 最大连出值：统计期数内连续开出的最大值；</p>
        </div>

        <div class="mb-2">
          <el-radio-group v-model="radio2">
            <el-radio-button label="第一球"></el-radio-button>
            <el-radio-button label="第二球"></el-radio-button>
            <el-radio-button label="第三球"></el-radio-button>
            <el-radio-button label="第四球"></el-radio-button>
            <el-radio-button label="第五球"></el-radio-button>
          </el-radio-group>

          <el-checkbox-group v-model="checkList">
            <el-checkbox label="遗漏"></el-checkbox>
            <el-checkbox label="折线"></el-checkbox>
            <el-checkbox label="遗漏分层"></el-checkbox>
            <el-checkbox label="分隔线"></el-checkbox>
          </el-checkbox-group>
        </div>

        <table class="position-trend"  v-canvasTrend>
          <tr>
            <td rowspan="2"><span>期号</span></td>
            <td rowspan="2"><span>开奖号码</span> </td>
            <td colspan="10">第一球号码走势</td>
            <td colspan="6">形态特征</td>
            <td colspan="3">012路</td>
            <td colspan="3">升平降</td>
          </tr>
          <tr>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>大</td>
            <td>小</td>
            <td>单</td>
            <td>双</td>
            <td>合</td>
            <td>质</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>升</td>
            <td>平</td>
            <td>降</td>
          </tr>
          <tr v-for="( item , i ) in 15" :key="i">
            <td>20190510059</td>
            <td>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
            </td>
            <td class="background-beige"><span>11</span></td>
            <td class="background-beige"><span>11</span></td>
            <td class="background-beige"><span>11</span></td>
            <td class="background-beige"><span class="background-blue-1">11</span></td>
            <td class="background-beige"><span>11</span></td>
            <td class="background-beige"><span>11</span></td>
            <td class="background-beige"><span>11</span></td>
            <td class="background-beige"><span>11</span></td>
            <td class="background-beige"><span>11</span></td>
            <td class="background-beige"><span>11</span></td>
            <td>16</td>
            <td>16</td>
            <td class="background-blue-1">16</td>
            <td>16</td>
            <td>16</td>
            <td>16</td>
            <td class="background-orange-0">16</td>
            <td>16</td>
            <td>16</td>
            <td>16</td>
            <td>16</td>
            <td>16</td>
          </tr>
        </table>

      </div>
    </div>


  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ITabs from '@/Components/ITabs/Index.vue';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'PositionTrend',
  components: {
    ITabs,
  },
})
class PositionTrend extends Vue {
  public radio1 = '今天';
  public radio2 = '第一球';
  public checkList = ['遗漏'];
}

export default PositionTrend;
</script>
