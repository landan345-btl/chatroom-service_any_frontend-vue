<template>
  <div class="popular-analysis background-white">

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
