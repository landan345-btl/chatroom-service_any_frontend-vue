<template>
  <div class="lottery">
    <div class="title">
      <p>推荐采种</p>
      <p>RECOMMEND LOTTERY</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Lottery-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Lottery',
  components: {
  },
})
class Lottery extends Vue {

}

export default Lottery;
</script>
