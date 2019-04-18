<template>
  <div class="recommended-lottery text-center">
    <div class="title">
      <div class="font-weight-bold">推荐采种</div>
      <div class="mt-1">
        <span class="line"></span>RECOMMENDED LOTTERY<span class="line"></span>
      </div>
    </div>
    <div class="lotteries">
      <div class="lottery">
        <div class="icon">
        </div>
        <div class="name">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'RecommendedLottery-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'RecommendedLottery',
  components: {
  },
})
class RecommendedLottery extends Vue {
  public recommendedLotteries:object = {};
}

export default RecommendedLottery;
</script>
