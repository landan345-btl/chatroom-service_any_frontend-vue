<template>
  <div class="positon-trend background-white">
    <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">定位走势</span>
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
    <div class="announcement-wrapper mt-2 font-size-1p5 position-absolute">
      <div @mouseleave="hideAnnouncement()" @click="toggleAnnouncement()" class="announcement" :class="[ isAnnouncementShowed ? 'announcement-showed' : '']">
        <p>
          <span>说明：1 单双：除2余数为1的为单数，含1、3、5、7、9，除2余0的为双数，含2、4、6、8、10；</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 质合：1、2、3、5、7属质数，0、4、6、8、9属合数;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 遗漏期数：自上期开出到本期间隔的期数；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 分隔线：每五期使用分隔线，使横向导航更加清晰;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 出现次数：统计周期内，某个号码的累计出现次数。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6 遗漏：自上期开出到本期间隔的期数;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 平均遗漏：统计期数内遗漏的平均值。（计算公式：平均遗漏＝统计期数/(出现次数+1)）；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 最大遗漏：统计期数内遗漏的最大值;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 最大连出值：统计期数内连续开出的最大值；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 最大连出值：统计期数内连续开出的最大值;</p>
      </div>
    </div>
    <div class="pl-2 pr-2 font-size-1p5">
      <I-radio-group @on-change="checkRank = $event" :value="checkRank" type="button" class="line-height3">
        <Radio :label="sKey" v-for="(rank, sKey) in positionRanks" :key="sKey">{{ rank }}</Radio>
      </I-radio-group>
      <I-checkbox-group v-model="decorator">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </I-checkbox-group>
    </div>
    <div class="p-2">
      <table class="text-center w-100 position-trend" v-canvasTrend>
        <tr class="background-tr">
          <td rowspan="2" class="pl-1 pr-1"><span>期号</span></td>
          <td rowspan="2"><span>开奖号码</span> </td>
          <td colspan="10">冠军分布</td>
          <td colspan="6">形态特征</td>
          <td colspan="3">012路</td>
          <td colspan="3">升平降</td>
        </tr> 
        <tr class="background-tr">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
          <td>质</td>
          <td>合</td>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td>升</td>
          <td>平</td>
          <td>降</td>
        </tr>
        <tr v-for="(lotteryIssue, index ) in getLotteryIssues" :key="index">
          <td>{{ lotteryIssue.no }}</td>
          <td class="w-15 lottery-red"> 
            <span v-for="(iNumbers, iIndex) in JSON.parse(lotteryIssue.numbers)" :key="iIndex">{{iNumbers}}</span>
          </td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 1 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 2 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 3 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 4 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 5 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 6 ? 'background-orange-0':'d-none'">{{ JSON.parse(lotteryIssue.numbers) | substr(0) }}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 7 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 8 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 9 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td class="background-shallow-beige"><span :class="substr(JSON.parse(lotteryIssue.numbers),0) === 10 ? 'background-orange-0':'d-none'">{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</span></td>
          <td :class="'单'=== isOddOrEven(substr(JSON.parse(lotteryIssue.numbers),0))?'background-orange-font-white':''">
            <template 
              v-if="'单'=== isOddOrEven(substr(JSON.parse(lotteryIssue.numbers),0))">
              {{JSON.parse(lotteryIssue.numbers) | substr(0) | isOddOrEven}}
            </template >
          </td>
          <td :class="'双'=== isOddOrEven(substr(JSON.parse(lotteryIssue.numbers),0))?'background-blue-font-white':''">
            <template 
              v-if="'双'=== isOddOrEven(substr(JSON.parse(lotteryIssue.numbers),0))">
              {{JSON.parse(lotteryIssue.numbers) | substr(0) | isOddOrEven}}
            </template >
          </td>
          <td :class="'大'=== isSmallOrLarge(substr(JSON.parse(lotteryIssue.numbers),0),5,5)?'background-orange-font-white':''">
            <template  
              v-if="'大'=== isSmallOrLarge(substr(JSON.parse(lotteryIssue.numbers),0),5,5)">
              {{JSON.parse(lotteryIssue.numbers) | substr(0) | isSmallOrLarge(5,5)}}
            </template >
          </td>
          <td :class="'小'=== isSmallOrLarge(substr(JSON.parse(lotteryIssue.numbers),0),5,5)?'background-blue-font-white':''">
            <template 
              v-if="'小'=== isSmallOrLarge(substr(JSON.parse(lotteryIssue.numbers),0),5,5)">
              {{JSON.parse(lotteryIssue.numbers) | substr(0) | isSmallOrLarge(5,5)}}
            </template>
          </td>
          <td>16</td>
          <td>16</td>
          <td :class="'0' === isZeroOrOneOrTwo(substr(JSON.parse(lotteryIssue.numbers),0))?'background-orange-font-white':''">
            <template v-if="'0' === isZeroOrOneOrTwo(substr(JSON.parse(lotteryIssue.numbers),0))">
              {{JSON.parse(lotteryIssue.numbers) | substr(0) | isZeroOrOneOrTwo}}
            </template>
          </td>
          <td :class="'1' === isZeroOrOneOrTwo(substr(JSON.parse(lotteryIssue.numbers),0))?'background-blue-font-white':''">
            <template v-if="'1' === isZeroOrOneOrTwo(substr(JSON.parse(lotteryIssue.numbers),0))">
              {{JSON.parse(lotteryIssue.numbers) | substr(0) | isZeroOrOneOrTwo}}
            </template>
          </td>
          <td :class="'2' === isZeroOrOneOrTwo(substr(JSON.parse(lotteryIssue.numbers),0))?'background-orange-font-white':''">
            <template v-if="'2' === isZeroOrOneOrTwo(substr(JSON.parse(lotteryIssue.numbers),0))">
              {{JSON.parse(lotteryIssue.numbers) | substr(0) | isZeroOrOneOrTwo}}
            </template>
          </td>
          <td>{{JSON.parse(lotteryIssue.numbers) | substr(0)}}</td>
          <td>16</td>
          <td>16</td>
        </tr>
        <tr class="background-tr">
          <td rowspan="2" colspan="2"><span>数据统计</span></td>
          <td colspan="10">冠军分布</td>
          <td colspan="6">形态特征</td>
          <td colspan="3">012路</td>
          <td colspan="3">升平降</td>
        </tr>
        <tr class="background-tr">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
          <td>质</td>
          <td>合</td>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td>升</td>
          <td>平</td>
          <td>降</td>
        </tr>
        <tr>
          <td colspan="2" class="font-size-1p5">总次数</td>
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
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr>
          <td colspan="2" class="font-size-1p5">平均遗漏</td>
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
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr>
          <td colspan="2" class="font-size-1p5">当前遗漏</td>
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
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr>
          <td colspan="2" class="font-size-1p5">最大连出</td>
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
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
        </tr>
        <tr>
          <td colspan="2" class="font-size-1p5">最大遗漏</td>
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
  ITabs,
  IDivider,
  IRadioGroup,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'PositionTrend',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class PositionTrend extends Vue {
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

  public date = '今天';
  public checkRank = 'CHAMPION';
  public decorator = ['遗漏', ];

  public positionRanks: object = {
      CHAMPION: '冠军',
      SECOND: '亚军',
      THIRD: '第三名',
      FOURTH: '第四名',
      FIFTH: '第五名',
      SIXTH: '第六名',
      SEVENTH: '第七名',
      EIGHTH: '第八名',
      NINTH: '第九名',
      TENTH: '第十名',
    }

  public get getLotteryIssues (): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse();
    return oLotteryIssue;
  }

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement () {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement () {
    this.isAnnouncementShowed = false;
  }
}

export default PositionTrend;
</script>
