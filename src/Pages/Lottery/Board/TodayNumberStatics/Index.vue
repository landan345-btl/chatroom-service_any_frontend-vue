<template>
  <div class="today-number-statics background-white">
    <div class="pl-2 font-weight-bold">
      <span class="font-size-2 line-height3">今日号码统计</span>
    </div>
    <I-divider/>
    <div class="top pl-2 pt-2 font-weight-bold font-size-1">
      <span>
        参数设置：当数值为
        <span>15</span>
        至
        <span>30</span>
        时为
        <span class="background-red bg-color"></span>
        色
      </span>
      <i class="cursor"> 
        <Icon type="md-remove-circle" v-if="changeHidden >= 1" @click="toggleHidden(1)" size="26"/>
        <Icon type="md-add-circle" v-else @click="toggleHidden(1)" size="26"/>
      </i>
      <span v-show=" changeHidden >= 1 ">
        参数设置：当数值为
        <span>31</span>
        至
        <span>40</span>
        时为
        <span class="background-blue bg-color"></span>
        色
      </span>
      <i class="cursor">
        <Icon type="md-remove-circle" v-if="changeHidden >= 2" @click="toggleHidden(2)" size="26"/>
        <Icon type="md-add-circle"  v-show=" changeHidden >= 1 " v-else @click="toggleHidden(2)" size="26"/>
      </i>  
      <span v-show=" changeHidden >= 2 ">
        参数设置：当数值为
        <span>41</span>
        至
        <span>50</span>
        时为
        <span class="background-green bg-color"></span>
        色
      </span>
      <Button type="primary" class="ml-1" size="small">确认</Button>
    </div>
    <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === 'SSC'">
      <tr>
        <td rowspan="2"> <span class="position-relative">号码</span> </td>
        <td colspan="4">第一球</td>
        <td colspan="4">第二球</td>
        <td colspan="4">第三球</td>
        <td colspan="4">第四球</td>
        <td colspan="4">第五球</td>
      </tr>
      <tr>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
        <td>总开</td>
        <td>最多连开</td>
        <td>当前遗漏</td>
        <td>最大遗漏</td>
      </tr>
      <tr v-for="( item , i ) in 10" :key="i">
        <td>{{ i }}</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
      </tr>
    </table>
    <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() !== 'SSC'">
      <tr>
        <td rowspan="2"> <span class="position-relative">号码</span></td>
        <td colspan="2">冠军</td>
        <td colspan="2">亚军</td>
        <td colspan="2">第三名</td>
        <td colspan="2">第四名</td>
        <td colspan="2">第五名</td>
        <td colspan="2">第六名</td>
        <td colspan="2">第七名</td>
        <td colspan="2">第八名</td>
        <td colspan="2">第九名</td>
        <td colspan="2">第十名</td>
      </tr>
      <tr>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
        <td>总开</td>
        <td>未开</td>
      </tr>
      <tr v-for="( item , i ) in 10" :key="i">
        <td class="">{{ i }}</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
        <td>22</td>
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
  Prop,
} from 'vue-property-decorator';

import {
  ITabs,
  IDivider,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'TodayNumberStatics',
  components: {
    ITabs,
    IDivider,
  },
})
class TodayNumberStatics extends Vue {
  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public changeHidden = 0;
  public toggleHidden (iNunmber: number) {
    if (this.changeHidden === 2 && iNunmber === 1) {
      this.changeHidden = 0;
      return;
    }
    if (this.changeHidden === iNunmber) {
      this.changeHidden = (iNunmber - 1);
      return;
    }
    this.changeHidden = iNunmber;
  }
}

export default TodayNumberStatics;
</script>
