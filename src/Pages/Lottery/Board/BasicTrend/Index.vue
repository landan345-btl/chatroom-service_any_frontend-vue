<template>
  <div class="basic-trend">
    <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">基本走势</span>
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
    <div class="pt-2 pl-2">
      标注选择：
      <I-checkbox-group v-model="decorator">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </I-checkbox-group>
    </div>
    <div class="p-2 fictitious"> 
      <div>
         <table class="basic-table" > 
          <tr>
            <td rowspan="2" class="w-7"> <span>期号</span> </td>
            <td rowspan="2" class="w-6"> <span>开奖号码</span> </td>
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
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 0 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 1 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 2 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 3 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 4 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 5 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 6 ? 'background-orange-0':''">{{ JSON.parse(oLotteryIssue.numbers) | substr(0) }}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 7 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 8 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
            <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 9 ? 'background-orange-0':''">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>

            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 0 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 1 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 2 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 3 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 4 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 5 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 6 ? 'background-blue-1':''">{{ JSON.parse(oLotteryIssue.numbers) | substr(1) }}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 7 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 8 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 9 ? 'background-blue-1':''">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
            
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 0 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 1 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 2 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 3 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 4 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 5 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 6 ? 'background-cyan-2':''">{{ JSON.parse(oLotteryIssue.numbers) | substr(2) }}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 7 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 8 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 9 ? 'background-cyan-2':''">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
            
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 0 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 1 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 2 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 3 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 4 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 5 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 6 ? 'background-purple-3':''">{{ JSON.parse(oLotteryIssue.numbers) | substr(3) }}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 7 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 8 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 9 ? 'background-purple-3':''">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
            
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 0 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 1 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 2 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 3 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 4 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 5 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 6 ? 'background-blackish-green-4':''">{{ JSON.parse(oLotteryIssue.numbers) | substr(4) }}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 7 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 8 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 9 ? 'background-blackish-green-4':''">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
          </tr>
          <tr class="data-count">
            <td rowspan="2" colspan="2"><span>数据统计</span></td>
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
            <td colspan="2">出现次数</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
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
            <td colspan="2">平均遗漏</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
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
            <td colspan="2">最大遗漏</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
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
            <td colspan="2">最大连出</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
            <td>66</td>
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
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import {
  ITabs,
  IDivider,
  IButton,
  IRadioGroup,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERY_TYPES,
} from '@/CONFIGS/';

@Component({
  name: 'BasicTrend',
  components: {
    ITabs,
    IDivider,
    IButton,
    IRadioGroup,
    ICheckboxGroup,
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

  public date = '今天';
  public position = '第一球';
  public decorator = ['遗漏'];

  public get oLotteryIssues(): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0 , 14);
    return oLotteryIssue;
  }
}
export default BasicTrend;
</script>
