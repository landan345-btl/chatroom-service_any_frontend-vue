<template>
  <div class="recommended-lottery text-center">
    <div class="title">
      <div class="font-weight-bold">推荐采种</div>
      <div class="mt-1">
        <span class="line"></span><span class="subtile">RECOMMENDED LOTTERY</span><span class="line"></span>
      </div>
    </div>
    <div class="lotteries">
      
      <router-link class="lottery d-inline-block" :to="{ path: '/lottery', query: { code: `${sCode}` }}"  v-for="(oLottery, sCode, iIndex) in lotteries" :key="sCode"  v-show="15 > iIndex">
        <div class="icon">
          <img :src="require(`@/assets/images/` + `${sCode}` + `-md.png`)" />

        </div>
        <div class="name">
          {{ oLottery.name }}
        </div>
      </router-link>

    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

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
  public lotteries!: object;
}

export default RecommendedLottery;
</script>
