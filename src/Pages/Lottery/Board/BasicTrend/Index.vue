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
    <div class="pt-2 pl-2">
      标注选择：
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="遗漏"></el-checkbox>
        <el-checkbox label="拆线"></el-checkbox>
        <el-checkbox label="遗漏分层"></el-checkbox>
        <el-checkbox label="分隔线"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="p-2 fictitious">
      <div>
         <table class="basic-table">
          <tr>
            <td rowspan="2" class="w-10"> <span>期号</span> </td>
            <td rowspan="2" class="w-8"> <span>开奖号码</span> </td>
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
          <tr v-for="( oLotteryIssue , iIndex ) in oLotteryIssues" :key="iIndex">
            <td>{{oLotteryIssue.no}}</td>
            <td class="color-red w-10" >
              <span v-for="( numbers , index ) in JSON.parse(oLotteryIssue.numbers)" :key="index">{{ numbers }}</span>
            </td>
              <td v-for="( iNumbers , iIndex ) in JSON.parse(oLotteryIssue.numbers)" :key="iIndex"><span class="background-orange-0">{{iNumbers | substr(0, 1)}}</span></td> 
            <!-- <td><span class="background-blue-1">5</span></td>
            <td><span class="background-cyan-2">5</span></td>
            <td><span class="background-purple-3">3</span></td>
            <td><span class="background-blackish-green-4">2</span></td> -->
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
import {Component, Vue, Prop } from 'vue-property-decorator';

import {ITabs } from '@/Components/';

import {LOTTERY_TYPES } from '@/CONFIGS/';

@Component({
  name: 'BasicTrend',
  components: {
    ITabs,
  },
})
class BasicTrend extends Vue {

  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public button1 = '今天';
  public checkList = ['遗漏', '拆线'];

  public get oLotteryIssues(): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0 , 14);
    return oLotteryIssue;
  }
}
export default BasicTrend;
</script>
