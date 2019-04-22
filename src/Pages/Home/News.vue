<template>
  <div class="news">
    <span class="left d-inline-block">
      <E-carousel />
    </span>
    <span class="right d-inline-block">
      <div class="top position-relative">
        <span class="title font-weight-bold">行业新闻</span>
        <span class="more position-absolute">更多</span>
      </div>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import 'News-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import ECarousel from '@/Components/ECarousel/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Lottery',
  components: {
    ECarousel,
  },
})
class Lottery extends Vue {

}

export default Lottery;
</script>
