<template>
  <div class="popular-analysis background-white">
    <div class="top p-1 font-weight-bold">
      <span class="title">冷热分析</span>
    </div>
    <div class="bottom p-2">
      <I-checkbox-group v-model="isHotCountShowed">
        <Checkbox label="true">&nbsp;显示热号码出现次数</Checkbox>
      </I-checkbox-group>
      <div class="announcement">
        近20期内 热码：出现频繁、活跃的号码；冷码：出现频率低甚至没有出现的号码；温码：介于冷热之间的号码。
      </div>
      <table class="background-white w-100">
      <tr>
        <th class="align-middle text-center">名次</th>
        <th class="align-middle text-center">热</th>
        <th class="align-middle text-center">温</th>
        <th class="align-middle text-center">冷</th>
      </tr>
      <!-- 第 iPosition + 1 位的开奖号码 -->
      <tr v-for="(oCounts, iPosition) in hotWarnColdPositions" :key="iPosition">
        <td class="align-middle font-size-1 text-center">{{ 'PK10' === types ? pk10Texts[iPosition] : '' }} {{ 'SSC' === types ? sscTexts[iPosition] : '' }} </td>
        <td class="align-middle text-left">
            <Numbers 
              :code="code" 
              :counts="hotWarnColdPositions[iPosition]"
              :isCountShowed=" isHotCountShowed "
              :numbers="chooseNumbersByCount(hotWarnColdPositions[iPosition], 4, null)" 
              :types="LOTTERIES[code].TYPES || types" 
              :isRandom="false" 
              :status="'NUMBER'" />
        </td>
        <td class="align-middle text-left">
          <Numbers 
            :code="code"
            :counts="hotWarnColdPositions[iPosition]"
            :numbers="chooseNumbersByCount(hotWarnColdPositions[iPosition], 2, 3)" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :isCountShowed=" false "
            :status="'NUMBER'" />
        </td>
        <td class="align-middle text-left">
          <Numbers 
            :code="code" 
            :counts="hotWarnColdPositions[iPosition]"
            :numbers="chooseNumbersByCount(hotWarnColdPositions[iPosition], 0, 1)" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :isCountShowed=" false "
            :status="'NUMBER'" />
        </td>
      </tr>
    </table>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import {
  Numbers,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'PopularAnalysis',
  components: {
    Numbers,
  },
})
class PopularAnalysis extends Vue {
  public isHotCountShowed = false ;

  @Prop()
  public hotWarnColdPositions!: any;
  @Prop()
  public lotteryIssues!: any;
  @Prop()
  public code!: any;
  @Prop()
  public types!: any;

  public pk10Texts = ['冠军' , '亚军' , '第三名' , '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
  public sscTexts = [ '第一球' , '第二球' , '第三球' , '第四球' , '第五球' ];

  public chooseNumbersByCount(oCounts: any , iMinCount: number , iMaxCount: number ) {
    let aNumbers: number[] = [];

    Object.keys(oCounts).forEach((sNumber: string ) => {
      let iNumber = Number(sNumber);
      if ( oCounts[iNumber] >= iMinCount && iMaxCount === null ) {
        aNumbers.push(iNumber);
        return;
      }
      if ( oCounts[iNumber] >= iMinCount && oCounts[ iNumber ] <= iMaxCount ) {
        aNumbers.push(iNumber);
      }
    });
    return aNumbers;
  }
}

export default PopularAnalysis;
</script>
