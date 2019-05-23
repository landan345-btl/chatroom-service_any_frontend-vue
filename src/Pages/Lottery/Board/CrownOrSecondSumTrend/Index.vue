<template>
  <div class="crownOrSecondSumTrend background-white">
     <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">冠亚和走势</span>
      <RadioGroup v-model="button1" type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近60期"></Radio>
        <Radio label="最近90期" class="d-xs-none"></Radio>
      </RadioGroup>
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
          <td>日期</td>
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
        <tr v-for="( item , i ) in 15" :key="i">
          <td>20190520916</td>
          <td>10:10:00</td>
          <td>
            <span class="color-red">1</span>
            <span class="color-deepskyblue">2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            </td>
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
          <td>19</td>
        </tr>
        <tr class="background-tr">
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
  public button1 = '今天';
  public checkList = ['遗漏', '拆线'];

}
export default DragonOrTigerCount;
</script>
