<template>
  <div class="popular-analysis background-white">
    <div class="top p-2 font-weight-bold">
      <span class="title">冷热分析</span>
    </div>
    <div class="bottom p-2">
      <CheckboxGroup v-model="fruit">
        <Checkbox label="1">显示热号码出现次数</Checkbox>
      </CheckboxGroup>
      <div class="announcement">
        近20期内 热码：出现频繁、活跃的号码；冷码：出现频率低甚至没有出现的号码；温码：介于冷热之间的号码。
      </div>
      <table class="background-white text-center w-100">
      <tr>
        <th class="align-middle">名次</th>
        <th class="align-middle">热</th>
        <th class="align-middle">温</th>
        <th class="align-middle">冷</th>
      </tr>
      <!-- 第 iPosition + 1 位的开奖号码 -->
      <tr v-for=" ( oCounts , iPosition ) in hotWarnColdPositions" :key="iPosition">
        <td class="align-middle">{{ headerClassification( iPosition ) }}</td>
        <td class="align-middle">
            <Numbers 
              :code="code" 
              :counts="hotWarnColdPositions[iPosition]"
              :isCountShowed=" true "
              :numbers="chooseNumbersByCount(hotWarnColdPositions[iPosition], 4, null)" 
              :types="LOTTERIES[code].TYPES || types" 
              :isRandom="false" 
              :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code"
            :counts="hotWarnColdPositions[iPosition]"
            :numbers="chooseNumbersByCount(hotWarnColdPositions[iPosition], 2, 3)" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :isCountShowed=" false "
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
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
  public fruit = ['1'];

  @Prop()
  public hotWarnColdPositions!: any;
  @Prop()
  public lotteryIssues!: any;
  @Prop()
  public code!: any;
  @Prop()
  public types!: any;

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
    })
    return aNumbers;
  }

  public headerClassification( id: any ) {
    let td: any;
    switch (this.types) {
      case 'PK10':
        td = [ '冠军' , '亚军' , '第三名' , '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名' ];
        return td[ id ];
      case 'SSC' :
        td = [ '第一球' , '第二球' , '第三球' , '第四球' , '第五球' ];
        return td[ id ];
    }
  }

}

export default PopularAnalysis;
</script>
