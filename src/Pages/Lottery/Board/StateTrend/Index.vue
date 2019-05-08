<template>
  <div class="state-trend">
    <div class="top p-1 font-weight-bold">
      <span class="title">形态走势</span>
      <RadioGroup v-model="button1" type="button">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近50期"></Radio>
        <Radio label="最近100期"></Radio>
      </RadioGroup>
    </div>
    <div class="explain">
      <p>
        <span>说明：1.前三形态；</span>
        <span class="el-icon-arrow-down"></span>
      </p>
      <p> 2 豹子：第一球、第二球、第三球号码相同。如中奖号码为000、111、999等；</p>
      <p> 3 顺子：第一球、第二球、第三球数字都相连，不分顺序。如号码为123、901、321、546等;</p>
      <p> 4 对子：第一球、第二球、第三球任意两位数字相同。如号码为001、112、696等；</p>
      <p>5 半顺：第一球、第二球、第三球任意两位数字相连，不分顺序。如中奖号码为540、390、706等;</p>
      <p>6 杂六：不包括豹子、顺子、对子、半顺的所有组合号码，如号码为157、964等，号码位数之间没有关联性。</p>
      <p>7 组选3：第一球、第二球、第三球任意两位数字重复则为组选3。例如：112、211、122、221;</p>
      <p>8 组选6：第一球、第二球、第三球没有任何号码重复则为组选6。例如：123、321、132、213；</p>
    </div>
    <div>
      <RadioGroup v-model="button1" type="button">
        <Radio label="前三形态"></Radio>
        <Radio label="中三形态"></Radio>
        <Radio label="后三形态"></Radio>
      </RadioGroup>
      <CheckboxGroup v-model="fruit">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </CheckboxGroup>
    </div>
    <table class="number-trend" v-canvasTrend>
      <tr>
        <td rowspan="2"> <span>期号</span> </td>
        <td rowspan="2"> <span>开奖号码</span> </td>
        <td colspan="10">第三球号码走势</td>
        <td colspan="10">第四球号码走势</td>
        <td colspan="10">第五球号码走势</td>
        <td colspan="5">形态</td>
        <td colspan="3">组选类型</td>
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
        <td>豹子</td>
        <td>顺子</td>
        <td>对子</td>
        <td>半顺</td>
        <td>杂六</td>
        <td>组三</td>
        <td>组六</td>
        <td>豹子</td>
      </tr>
      <tr v-for="( item , i ) in 15" :key="i">
        <td>20190508048</td>
        <td class="color-red">42579</td>
        <td><span>43</span></td>
        <td><span class="background-orange-0">43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span class="background-blue-1">43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span class="background-cyan-2">43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        <td><span>43</span></td>
        
      </tr>
    </table>


  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'StateTrend',
  components: {
    ITabs,
  },
})
class StateTrend extends Vue {

}

export default StateTrend;
</script>
