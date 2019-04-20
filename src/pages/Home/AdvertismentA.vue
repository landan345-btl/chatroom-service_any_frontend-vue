<template>
  <div class="advertisment-a">
    <div class="advertisments">
      <div class="advertisment d-inline-block">
        <img src="@/assets/images/advertisment-pk10.png"/>
      </div>
      <div class="advertisment  d-inline-block">
        <img src="@/assets/images/advertisment-ccs.png"/>
      </div>
      <div class="advertisment  d-inline-block">
        <img src="@/assets/images/advertisment-11x5.png"/>
      </div>
      <div class="advertisment  d-inline-block">
        <img src="@/assets/images/advertisment-k3.png"/>
      </div>
      <div class="advertisment  d-inline-block">
        <img src="@/assets/images/advertisment-pcdd.png"/>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'AdvertismentA-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'AdvertismentA',
  components: {
  },
})
class AdvertismentA extends Vue {

  @Prop()
  public lotteries: object = {};
}

export default AdvertismentA;
</script>
