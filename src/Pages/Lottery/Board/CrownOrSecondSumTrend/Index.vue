<template>
  <div class="crownOrSecondSumTrend background-white">
     <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">冠亚和走势</span>
      <I-radio-group :value="date" @input="date = $event"  type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近60期"></Radio>
        <Radio label="最近90期" class="d-xs-none"></Radio>
      </I-radio-group>
    </div>
    <I-divider/>
    <div class="pt-2 pl-2">
      <span class="mr-1">标注选择：</span>
        <I-checkbox-group class="d-inline-block" v-model="checkList">
          <Checkbox class="mr-2" label="遗漏">&nbsp;遗漏</Checkbox>
          <Checkbox class="mr-2">&nbsp;拆线</Checkbox>
          <Checkbox class="mr-2">&nbsp;遗漏分成</Checkbox>
          <Checkbox class="mr-2">&nbsp;分割线</Checkbox>
        </I-checkbox-group>
    </div>
    <div class="crown-table p-2">
      <table class="w-100">
        <tr class="font-size-1p5 background-tr">
          <td>期号</td>
          <td>开奖时间</td>
          <td class="w-15">开奖号码</td>
          <td>冠亚和</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr v-for="( lotteryIssue , iIndex ) in getLotteryIssues" :key="iIndex" class="font-size-1">
          <td class="w-6">{{ lotteryIssue.no }}</td>
          <td>{{ lotteryIssue.opened_time.split(' ')[1] && lotteryIssue.opened_time.split(' ')[1] !==undefined ? lotteryIssue.opened_time.split(' ')[1] : lotteryIssue.opened_time.split(' ')[0]}}</td>
          <td>
            <span v-for="( number, iIndex ) in JSON.parse(lotteryIssue.numbers)" :key="iIndex">{{ number }}</span>
          </td>
          <td class="crown-background">{{ JSON.parse(lotteryIssue.numbers) | sum([0, 1]) }}</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr class="background-tr font-size-1p5">
          <td colspan="4" class="font-size-1p5">数据统计</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr>
          <td colspan="4" class="font-size-1p5">出现总次数</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr>
          <td colspan="4" class="font-size-1p5">平均总遗漏</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr>
          <td colspan="4" class="font-size-1p5">最大连出值</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr>
          <td colspan="4" class="font-size-1p5">最大遗漏值</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
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
  IDivider,
  ICheckboxGroup,
  IRadioGroup,
  IDatePicker,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'DragonOrTigerCount',
  components: {
    IDivider,
    ICheckboxGroup,
    IRadioGroup,
    IDatePicker,
  },
})
class DragonOrTigerCount extends Vue {
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

  public get getLotteryIssues (): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0, 29);
    return oLotteryIssue;
  }

  public date = '最近30期';
  public checkList = ['遗漏', '拆线', ];
}
export default DragonOrTigerCount;
</script>
