<template>
  <div class="advertisment-a">
    <div class="advertisments">
      <router-link class="advertisment d-inline-block" :to="{ path: '/plan', query: { code: 'PK10' }}">
        <img src="@/assets/images/advertisment-pk10.png"/>
      </router-link>
      <router-link class="advertisment d-inline-block" :to="{ path: '/plan', query: { code: 'CCS' }}">
        <img src="@/assets/images/advertisment-ccs.png"/>
      </router-link>
      <router-link class="advertisment d-inline-block" :to="{ path: '/plan', query: { code: '11X5' }}">
        <img src="@/assets/images/advertisment-11x5.png"/>
      </router-link>
      <router-link class="advertisment d-inline-block" :to="{ path: '/plan', query: { code: 'K3' }}">
        <img src="@/assets/images/advertisment-k3.png"/>
      </router-link>
      <router-link class="advertisment d-inline-block" :to="{ path: '/plan', query: { code: 'PCDD' }}">
        <img src="@/assets/images/advertisment-pcdd.png"/>
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

@Component({
  name: 'AdvertismentA',
  components: {
  },
})
class AdvertismentA extends Vue {

  @Prop()
  public lotteries!: object;
}

export default AdvertismentA;
</script>
