<template>
  <div class="advertisment-b">
    <div class="advertisments">

      <router-link class="advertisment d-inline-block" :to="{ path: '/plan', query: { code: 'PK10' }}">
        <img src="@/assets/images/adviertisement-analysis-bjpk10.png"/>
      </router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import {
  Component,
  Watch,
  Vue,
  Prop,
} from 'vue-property-decorator';

import {
  warn,
} from 'vue-class-component/lib/util';

@Component({
  name: 'AdvertismentB',
  components: {
  },
})
class AdvertismentB extends Vue {

}

export default AdvertismentB;
</script>
