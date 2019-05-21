<template>
  <div class="dragon-or-tiger-trend pb-2">
    <div class="pl-2 pr-2 font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">龙虎走势</span>
      <I-radio-group v-model="date" type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近50期"></Radio>
        <Radio label="最近100期" class="d-xs-none"></Radio>
      </I-radio-group>
    </div>
    <I-divider/>
    <div class="explain z-1000 m-2 font-size-1p5">
      <p>
        <span>说明：1.前三形态；</span>
        <span class="el-icon-arrow-down" @click="showExplain()"></span>
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 豹子：第一球、第二球、第三球号码相同。如中奖号码为000、111、999等；</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 顺子：第一球、第二球、第三球数字都相连，不分顺序。如号码为123、901、321、546等;</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 对子：第一球、第二球、第三球任意两位数字相同。如号码为001、112、696等；</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 半顺：第一球、第二球、第三球任意两位数字相连，不分顺序。如中奖号码为540、390、706等;</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6 杂六：不包括豹子、顺子、对子、半顺的所有组合号码，如号码为157、964等，号码位数之间没有关联性。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 组选3：第一球、第二球、第三球任意两位数字重复则为组选3。例如：112、211、122、221;</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 组选6：第一球、第二球、第三球没有任何号码重复则为组选6。例如：123、321、132、213；</p>
    </div>
    <div class="mt-2 mb-2 pl-2 pr-2 font-size-1p5">
      标注选择：
      <I-checkbox-group v-model="decorator">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </I-checkbox-group>
    </div>
    <table class="canvasTrend pl-2 pr-2" v-canvasTrend>
      <tr class=" font-size-1p5">
        <td rowspan="2"><span>期号</span></td>
        <td rowspan="2"><span>开奖号码</span></td>
        <td colspan="10">第一球走势</td>
        <td colspan="10">第五球走势</td>
        <td colspan="3" class="d-xs-none">龙虎</td>
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
        <td class="d-xs-none">龙</td>
        <td class="d-xs-none">虎</td>
        <td class="d-xs-none">和</td>
      </tr>
      <tr v-for="( item , i ) in 15" :key="i">
        <td>20190508064</td>
        <td class="color-red">70411</td>
        <td><span>22</span></td>
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
        <td class="background-purple-3 d-xs-none"><span>龙</span></td>
        <td class="d-xs-none"><span>22</span></td>
        <td class="d-xs-none"><span>22</span></td>
        
      </tr>
    </table>
    <table class="pl-2 pr-2 font-size-1p5">
      <tr>
        <td rowspan="2"> <span>数据统计</span> </td>
        <td colspan="10">第一球号码走势</td>
        <td colspan="10">第五球号码走势</td>
        <td colspan="3">龙虎</td>
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
        <td>龙</td>
        <td>虎</td>
        <td>和</td>
      </tr>
      <tr>
        <td>出现次数</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
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
      <tr>
        <td>平均遗漏</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
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
      <tr>
        <td>最大遗漏</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
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
      <tr>
        <td>最大连出</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
        <td>55</td>
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
    </table>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {
  ITabs,
  IDivider,
  IRadioGroup,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'DragonOrTigerTrend',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class DragonOrTigerTrend extends Vue {
  public date = '今天';
  public decorator = ['折线', '遗漏'];

}

export default DragonOrTigerTrend;
</script>
