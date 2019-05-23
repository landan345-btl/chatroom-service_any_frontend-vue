<template>
  <div class="dragon-or-tiger-trend pb-2 background-white position-relative">
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
    <div class="announcement-wrapper mt-2 pr-1 font-size-1p5 position-absolute">
      <div @mouseleave="hideAnnouncement()" @click="toggleAnnouncement()" class="announcement" :class="[ isAnnouncementShowed ? 'announcement-showed' : '']">
        <p>
          <span>说明：1 第一球龙/虎：“第一球”号码大于“第五球”号码视为“龙”，小于视为“虎”。</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 遗漏期数：自上期开出到本期间隔的期数。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 分 隔 线 ：每五期使用分隔线，使横向导航更加清晰。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 出现次数：统计周期内，某个号码的累计出现次数。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 平均遗漏：统计期数内遗漏的平均值（计算公式：平均遗漏＝统计期内的总遗漏数/(出现次数+1)）。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6 最大遗漏：是指统计周期内所有遗漏值的最大值。</p>
      </div>
    </div>
    <div class="mb-2 pl-2 pr-2 font-size-1p5 filtrate-ranks">
      标注选择：
      <I-checkbox-group v-model="decorator" class="d-inline-block">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </I-checkbox-group>
    </div>
    <div class="ml-2 mr-2 trend-table">
      <table class="canvasTrend w-100" v-canvasTrend>
        <tr class="background-grey font-size-1p5">
          <td rowspan="2"><span>期号</span></td>
          <td rowspan="2"><span>开奖号码</span></td>
          <td colspan="10">第一球走势</td>
          <td colspan="10">第五球走势</td>
          <td colspan="3">龙虎</td>
        </tr>
        <tr class="background-grey">
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
          <td class="background-purple-3"><span>龙</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>

        </tr>
        <tr class="background-grey">
          <td rowspan="2" colspan="2"> <span>数据统计</span> </td>
          <td colspan="10">第一球号码走势</td>
          <td colspan="10">第五球号码走势</td>
          <td colspan="3">龙虎</td>
        </tr>
        <tr class="background-grey">
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
          <td colspan="2">出现次数</td>
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
          <td colspan="2">平均遗漏</td>
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
          <td colspan="2">最大遗漏</td>
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
          <td colspan="2">最大连出</td>
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
  public decorator = ['折线', '遗漏', ];

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement () {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement () {
    this.isAnnouncementShowed = false;
  }
}

export default DragonOrTigerTrend;
</script>
