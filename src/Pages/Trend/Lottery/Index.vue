<template>
  <div class="lottery pt-2 pl-2 pr-2 w-xs-100 w-50 align-middle">
    <span class="icon p-1 d-inline-block align-middle">
      <img :src="require(`@/assets/images/` + `${code}` + `-sm.png`)"  />
    </span>
    <div class="list p-2 d-inline-block align-middle" >
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        路珠分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        综合分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        冷热分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        单双大小历史
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        单双大小历史
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        基本走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        大小单双路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        总和路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        历史号码统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/trend/information', query: { code: code, tab: 'BASIC' }}">
        号码路珠
      </router-link>      
    </div>
    <div class="line mt-1">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'Lottery',
  components: {
  },
})
class Lottery extends Vue {
  @Prop()
  public code!: any;
}

export default Lottery;
</script>










