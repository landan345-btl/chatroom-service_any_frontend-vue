<template>
  <div class="popular-analysis background-white">
    <div class="pl-2 font-weight-bold head-top">
      <span class="font-size-2 line-height3">冷热分析</span>
    </div>
    <I-divider/>
    <div class="bottom p-2">
      <I-checkbox-group>
        <Checkbox label="true" v-model="isHotCountShowed">&nbsp;显示热号码出现次数</Checkbox>
      </I-checkbox-group>
      <div class="announcement">
        近20期内 热码：出现频繁、活跃的号码；冷码：出现频率低甚至没有出现的号码；温码：介于冷热之间的号码。
      </div>
      <table class="background-white w-100">
      <tr>
        <th class="align-middle text-center">{{ types === 'PK10' ? '名次' : '球次'}}</th>
        <th class="align-middle text-center">热</th>
        <th class="align-middle text-center">温</th>
        <th class="align-middle text-center">冷</th>
      </tr>
      <tr v-for="(oCounts, iPosition) in getNumersToPositionsToCounts" :key="iPosition">
        <td class="align-middle font-size-1 text-center">{{ types && texts[types] && texts[types][iPosition] ? texts[types][iPosition] : '第' + iPosition + '球' }} </td>
        <td class="align-middle text-left">
            <S-numbers
              :code="code"
              :counts="extensionLottery.numers_to_positions_to_counts[iPosition]"
              :isCountShowed=" isHotCountShowed "
              :numbers="chooseNumbersByCount(extensionLottery.numers_to_positions_to_counts[iPosition], 4, null)"
              :types="LOTTERIES[code].TYPES || types"
              :isRandom="false"
              :status="'NUMBER'"
              v-if="extensionLottery.numers_to_positions_to_counts && extensionLottery.numers_to_positions_to_counts[iPosition]" />
        </td>
        <td class="align-middle text-left">
          <S-numbers
            :code="code"
            :numbers="chooseNumbersByCount(extensionLottery.numers_to_positions_to_counts[iPosition], 2, 3)"
            :types="LOTTERIES[code].TYPES || types"
            :isRandom="false"
            :isCountShowed="false"
            :status="'NUMBER'"
            v-if="extensionLottery.numers_to_positions_to_counts && extensionLottery.numers_to_positions_to_counts[iPosition]" />
        </td>
        <td class="align-middle text-left">
          <S-numbers
            :code="code"
            :numbers="chooseNumbersByCount(extensionLottery.numers_to_positions_to_counts[iPosition], 0, 1)"
            :types="LOTTERIES[code].TYPES || types"
            :isRandom="false"
            :isCountShowed="false"
            :status="'NUMBER'"
            v-if="extensionLottery.numers_to_positions_to_counts && extensionLottery.numers_to_positions_to_counts[iPosition]" />
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
import {
  Component,
  Vue,
  Prop,
  Watch,
} from 'vue-property-decorator';

import {
  SNumbers,
  ICheckboxGroup,
  IDivider,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

import {
  Lottery as LotteryMixins,
} from '@/Mixins/';

@Component({
  name: 'PopularAnalysis',
  components: {
    SNumbers,
    ICheckboxGroup,
    IDivider,
  },
  mixins: [LotteryMixins, ],
})
class PopularAnalysis extends Vue {
  public isHotCountShowed = false ;

  @Prop()
  public code!: any;
  @Prop()
  public types!: any;

  public counts = null;
  public caculateNumbersToPositionsToCounts: any;
  public extensionLottery: any;

  public texts = {
    PK10: ['冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名', ],
    SSC: [ '第一球', '第二球', '第三球', '第四球', '第五球', ],
  };
  public chooseNumbersByCount (oCounts: any, iMinCount: number, iMaxCount: number) {
    let aNumbers: number[] = [];
    Object.keys(oCounts).forEach((sNumber: string) => {
      let iNumber = Number(sNumber);
      if (oCounts[iNumber] >= iMinCount && iMaxCount === null) {
        aNumbers.push(iNumber);
        return;
      }
      if (oCounts[iNumber] >= iMinCount && oCounts[ iNumber ] <= iMaxCount) {
        aNumbers.push(iNumber);
      }
    });
    return aNumbers;
  }

  public get getNumersToPositionsToCounts () {
    let oLotteryIssues = this.$store.state.lottery_issues;
    let oLotteries = this.$store.state.lotteries;
    let oNumersToPositionsToCounts = this.caculateNumbersToPositionsToCounts(oLotteryIssues, oLotteries, 20);
    return oNumersToPositionsToCounts;
  }
}

export default PopularAnalysis;
</script>
