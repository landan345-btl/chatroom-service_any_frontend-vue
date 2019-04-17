<template>
  <div class="recommend-lottery">
    <div class="title">

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

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'RecommendLottery',
  components: {
  },
})
class RecommendLottery extends Vue {

}

export default RecommendLottery;
</script>
