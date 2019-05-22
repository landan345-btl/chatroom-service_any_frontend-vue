<template>
  <div class="state-trend  pb-2 background-white position-relative">
    <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">形态走势</span>
      <I-radio-group v-model="date" type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近60期"></Radio>
        <Radio label="最近90期" class="d-xs-none"></Radio>
      </I-radio-group>
    </div>
    <I-divider/>
    <div class="announcement-wrapper mt-2 pr-1 font-size-1p5 position-absolute">
      <div @mouseleave="hideAnnouncement()" @click="toggleAnnouncement()" class="announcement" :class="[ isAnnouncementShowed ? 'announcement-showed' : '']">
        <p>
          <span>说明：1 表格需从左向右浏览，右侧一列为最新结果；</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p> 2 豹子：第一球、第二球、第三球号码相同。如中奖号码为000、111、999等；</p>
        <p> 3 顺子：第一球、第二球、第三球数字都相连，不分顺序。如号码为123、901、321、546等;</p>
        <p> 4 对子：第一球、第二球、第三球任意两位数字相同。如号码为001、112、696等；</p>
        <p>5 半顺：第一球、第二球、第三球任意两位数字相连，不分顺序。如中奖号码为540、390、706等;</p>
        <p>6 杂六：不包括豹子、顺子、对子、半顺的所有组合号码，如号码为157、964等，号码位数之间没有关联性。</p>
        <p>7 组选3：第一球、第二球、第三球任意两位数字重复则为组选3。例如：112、211、122、221;</p>
        <p>8 组选6：第一球、第二球、第三球没有任何号码重复则为组选6。例如：123、321、132、213；</p>
      </div> 
    </div>
    <div class="pl-2 pr-2 d-flex justify-content-between">
      <I-radio-group v-model="position" type="button" class="line-height3">
        <Radio label="前三形态"></Radio>
        <Radio label="中三形态"></Radio>
        <Radio label="后三形态"></Radio>
      </I-radio-group>
      <I-checkbox-group v-model="decorators" class="pt-1">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </I-checkbox-group>
    </div>
    <div class="from-trend pl-2 pr-2 pt-1">
      <table class="number-trend w-100" v-canvasTrend>
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
  IDivider,
  IRadioGroup,
  ICheckboxGroup,
} from '@/Components/';
import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'StateTrend',
  components: {
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class StateTrend extends Vue {
  public date: any = '今天';
  public position: any = '前三形态';
  public decorators: any = ['遗漏'];

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement() {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement() {
     this.isAnnouncementShowed = false;
  }
}

export default StateTrend;
</script>
