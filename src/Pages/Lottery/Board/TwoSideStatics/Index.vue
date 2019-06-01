<template>
  <div class="two-side-statics background-white">
    <div class="pl-2 font-weight-bold head-top">
      <span class="font-size-2 line-height3">两面统计</span>
    </div>
    <I-divider/>
    <div class="explain w-100 ml-2 mr-2 mt-2">
      <span>说明：</span>
      <span>以每10期为一组，统计最近20组中单双大小的出现次数。</span>
    </div>
    <div class="pl-2 pt-1 pb-1">
      <I-radio-group @on-change="checkRank = $event" :value="checkRank" type="button" class="line-height3">
       <Radio :label="sKey" v-for="(rank, sKey) in texts[ types ]" :key="sKey">{{ rank }}</Radio>
      </I-radio-group>
    </div>
    <div class="pb-2 pl-2 pr-2 two-side-table">
      <table class="w-100 text-center">
        <tr class="font-size-1p5">
          <td>日期</td>
          <td>单</td>
          <td>双</td>
          <td>大</td>
          <td>小</td>
        </tr>
        <tr v-for="(item ,i) in 15" :key="i">
          <td>05月08日&nbsp;&nbsp;&nbsp;<span>20190508033</span> - <span>20190508042</span>期</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
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

import LOTTERIES from '@/CONFIGS/LOTTERIES/index';

@Component({
  name: 'TwoSideStatics',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class TwoSideStatics extends Vue {
  @Prop()
  public types!: any;

  public texts = {
    PK10: ['冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名', ],
    SSC: [ '第一球', '第二球', '第三球', '第四球', '第五球', ],
  };  

  public checkRank: number = 0;

}

export default TwoSideStatics;
</script>
