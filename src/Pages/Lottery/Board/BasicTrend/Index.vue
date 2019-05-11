<template>
  <div class="basic-trend">
    <div class="top p-1 font-weight-bold">
      <span class="title">基本走势</span>
      <RadioGroup v-model="button1" type="button">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近60期"></Radio>
        <Radio label="最近90期"></Radio>
      </RadioGroup>
    </div>
    <div class="p-2">
      标注选择：
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="遗漏"></el-checkbox>
        <el-checkbox label="折线"></el-checkbox>
        <el-checkbox label="遗漏分层"></el-checkbox>
        <el-checkbox label="分隔线"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="p-2 fictitious">
      <div>
         <table class="basic-table" v-canvasTrend>
          <tr>
            <td rowspan="2"> <span>期号</span> </td>
            <td rowspan="2"> <span>开奖号码</span> </td>
            <td colspan="10">第一球</td>
            <td colspan="10">第二球</td>
            <td colspan="10">第三球</td>
            <td colspan="10">第四球</td>
            <td colspan="10">第五球</td>
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
          </tr>
          <tr v-for="( item , i ) in 15" :key="i">
            <td>20190508086</td>
            <td class="color-red">
              <span>2</span>
              <span>3</span>
              <span>3</span>
              <span>3</span>
              <span>3</span>
            </td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span class="background-orange-0">22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span class="background-blue-1">22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span class="background-cyan-2">22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span class="background-purple-3">22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span class="background-blackish-green-4">22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            <td><span>22</span></td>
            
          </tr>
        </table>
        <table>
          <tr>
            <td rowspan="2"><span>数据统计</span></td>
            <td colspan="10">第一球</td>
            <td colspan="10">第二球</td>
            <td colspan="10">第三球</td>
            <td colspan="10">第四球</td>
            <td colspan="10">第五球</td>
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
          </tr>
          <tr>
            <td>出现次数</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
          </tr>
          <tr>
            <td>平均遗漏</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
          </tr>
          <tr>
            <td>最大遗漏</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
          </tr>
           <tr>
            <td>最大连出</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
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
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'BasicTrend',
  components: {
    ITabs,
  },
})
class BasicTrend extends Vue {
  public button1 = '今天';
  public checkList = ['折线'];
}
export default BasicTrend;
</script>
