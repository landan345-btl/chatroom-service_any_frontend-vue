<template>
  <div class="analysis">
    <div class="top position-relative">
      <span class="title font-weight-bold">分析工具</span>
      <span class="more position-absolute">更多</span>
    </div>
    <div class="line"> </div>
    <div class="lotteries">
      <div v-for="(oLottery, iLotteryId, iIndex) in lotteries" :key="iIndex">
        <div class="line" v-if="(iIndex - Math.floor((Math.random() * 8) + 1)) >= -1 && (iIndex - Math.floor((Math.random() * 8) + 1)) <= 1"></div>
        <div class="lottery" v-if="(iIndex - Math.floor((Math.random() * 8) + 1)) >= -1 && (iIndex - Math.floor((Math.random() * 8) + 1)) <= 1">
          <div class="top">
            <span class="icon d-inline-block align-middle">
              <div :class="['icon-' + oLottery.code.toLowerCase() ]">
              </div>
            </span>
            <span class="title align-middle ml-2">
              {{ LOTTERIES[oLottery.code].NAME | or(oLottery.name) }}
            </span>
          </div>
          <div class="line">
          </div>
          <div class="trend">
            <div class="top">          
              <font-awesome-icon icon="chart-line" class="d-inline-block color-deepskyblue font-size-2p5"/>
              <span>&nbsp;走势</span>
            </div>
            <ul class="middle list">
              <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 1 }}">
                <li>冠亚和走势</li>
              </router-link>
              <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 2 }}">
                <li>位置走势</li>
              </router-link>
              <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 3 }}">
                <li>号码走势</li>
              </router-link>
            </ul>
          </div>
          <div class="line">
          </div>
          <div class="candlestick">
            <div class="top">
              <font-awesome-icon icon="search-dollar" class="d-inline-block color-red font-size-2p5"/>
              <span>&nbsp;遗漏</span>
            </div>
            <ul class="middle list">
              <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 4 }}">
                <li>综合分析</li>
              </router-link>
              <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 5 }}">
                <li>定位走势</li>
              </router-link>
              <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 6 }}">
                <li>第二球走势</li>
              </router-link>
              <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 7 }}">
                <li>第三球走势</li>
              </router-link>
              <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 8 }}">
                <li>第四球走势</li>
              </router-link>
                <router-link class="" :to="{ path: '/lottery', query: { code: `${oLottery.code}`, type: 9 }}">
                <li>综合分析</li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import LOTTERIES from '@/CONFIGS/LOTTERIES';
import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Analysis',
  components: {
  },
})
class Analysis extends Vue {
  // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated:
  // 子 component 不能改变 父 compoent 传来的 Props
  @Prop()
  public lotteries!: object;
  public messages: string[] = [
    '山西11选5号码推荐4月19日上午',
    '辽宁11选5号码推荐4月19日上午',
    '吉林11选5号码推荐4月19日上午',
    '安徽快三出号分析对子11转热 4月18日',
    '吉林快三出号分析对子11转热 4月18日',
    '江西快三出号分析对子22转热 4月18日',
    '广东11选5号码推荐4月17日下午',
    '浙江11选5号码推荐4月17日下午',
    '湖北11选5号码推荐4月17日上午',
  ];
  public created(): void {
    let $root: any = this.$root;

  }

  // public get getLotteries(): any {
  //   return this.lotteries;
  // }
}

export default Analysis;
</script>
