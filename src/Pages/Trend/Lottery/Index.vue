<template>
  <div class="lottery pt-2 pl-2 pr-2 w-xs-100 align-middle">
    <span class="icon p-1 d-inline-block align-middle">
      <div :class="['icon-' + lottery.code.toLowerCase() + '-circle']">
      </div>
      <div class="name mt-1 text-center font-weight-bold">{{ LOTTERIES[lottery.code].NAME || lottery.name }}</div>
    </span>
    <div class="list p-2 d-inline-block align-middle" v-if="'PK10'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        路珠分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '3' }}">
        冷热分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '5' }}">
        单双大小历史
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '6' }}">
        冠亚和走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '7' }}">
        龙虎统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '8' }}">
        龙虎路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '9' }}">
        冠亚和路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        号码规律统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        今日号码统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        位置走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        两面数据统计
      </router-link>
    </div>
    <div class="list p-2 d-inline-block align-middle" v-else-if="'SSC'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        路珠分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '2' }}">
        综合分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '3' }}">
        冷热分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '4' }}">
        每日长龙统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '4' }}">
        总和路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '7' }}">
        大小单双路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '8' }}">
        历史号码统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '9' }}">
        定位走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        龙虎走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        两面数据统计
      </router-link>
    </div>
    <div class="list p-2 d-inline-block align-middle" v-else-if="'11X5'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        路珠分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '2' }}">
        基本走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '3' }}">
        龙虎走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '4' }}">
        今日号码统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '4' }}">
        单双大小历史
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '7' }}">
        号码分布
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '8' }}">
        每日长龙统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '9' }}">
        总和路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        单双大小路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        和值走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        定位走势
      </router-link>
    </div>
    <div class="list p-2 d-inline-block align-middle" v-else-if="'K3'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        每日长龙统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '2' }}">
        总和路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '3' }}">
        历史号码统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '4' }}">
        和值走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '4' }}">
        号码路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '7' }}">
        定位走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '8' }}">
        大小走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '9' }}">
        基本走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        奇偶走势
      </router-link>
    </div>
    <div class="list p-2 d-inline-block align-middle" v-else-if="'KLSF'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        路珠分析
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '2' }}">
        总和路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '3' }}">
        中发白路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '4' }}">
        号码路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '4' }}">
        今日号码统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '7' }}">
        单双大小历史
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '8' }}">
        合数单双路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '9' }}">
        尾数大小路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        龙虎路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        单双大小路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        今日号码统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        东西南北路珠
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        两面统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        每日长龙统计
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        大小走势
      </router-link>
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '10' }}">
        单双走势
      </router-link>
    </div>
    <div class="list p-2 d-inline-block align-middle" v-else-if="'KL8'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        路珠分析
      </router-link>
    </div>
    <div class="list p-2 d-inline-block align-middle" v-else-if="'SIX'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        路珠分析
      </router-link>
    </div>
    <div class="list p-2 d-inline-block align-middle" v-else-if="'3D'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        路珠分析
      </router-link>
    </div>
    <div class="list p-2 d-inline-block align-middle" v-else-if="'XY28'===lottery.types.toUpperCase()">
      <router-link class="d-inline-block mr-1" :to="{ path: '/lottery', query: { code: lottery.code, tab: '1' }}">
        路珠分析
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
  Vue,
  Prop,
} from 'vue-property-decorator';

@Component({
  name: 'Lottery',
  components: {
  },
})
class Lottery extends Vue {

  @Prop()
  public lottery!: any;
}

export default Lottery;
</script>