<template>
  <div class="recommended-lottery text-center">
    <div class="title">
      <div class="font-weight-bold">推荐采种</div>
      <div class="mt-1">
        <span class="line"></span>RECOMMENDED LOTTERY<span class="line"></span>
      </div>
    </div>
    <div class="lotteries">
      <div class="lottery d-inline-block" v-for="(oLottery, sCode) in lotteries" :key="sCode">
        <div class="icon">
          <!-- <img src="@/assets/images/SGFT.png"/> -->
          <img :src="require(`@/assets/images/JX11X5-md.png`)" />

        </div>
          <div class="name">
            {{ oLottery.name }}
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'RecommendedLottery-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'RecommendedLottery',
  components: {
  },
})
class RecommendedLottery extends Vue {

  @Prop()
  public lotteries: object = {};
}

export default RecommendedLottery;
</script>
