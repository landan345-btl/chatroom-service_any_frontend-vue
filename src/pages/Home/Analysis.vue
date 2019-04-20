<template>
  <div class="analysis">
    <div class="top position-relative">
      <span class="title font-weight-bold">分析工具</span>
      <span class="more position-absolute">更多</span>
    </div>
    <div class="line">
    </div>
    <div class="lotteries">
      <div class="lottery">
        <div class="head">
          <div class="icon">
            <img src="" />
          </div>
          <div class="title">
          </div>
        </div>
        <div class="trend">
          <font-awesome-icon icon="chart-line" class="d-inline-block"/>
        </div>
        <div class="candlestick">
          <font-awesome-icon icon="search-dollar" class="d-inline-block"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Analysis-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Prediction',
  components: {
  },
})
class Prediction extends Vue {
  public messages: string[] = [
    '山西11选5号码推荐4月19日上午',
    '辽宁11选5号码推荐4月19日上午',
    '吉林11选5号码推荐4月19日上午',
    '安徽快三出号分析对子11转热 4月18日',
    '吉林快三出号分析对子11转热 4月18日',
    '江西快三出号分析对子22转热 4月18日',
    '广东11选5号码推荐4月17日下午',
    '浙江11选5号码推荐4月17日下午',
    '湖北11选5号码推荐4月17日上午',
  ];
  public created(): void {
    let $root: any = this.$root;

  }



}

export default Prediction;
</script>
