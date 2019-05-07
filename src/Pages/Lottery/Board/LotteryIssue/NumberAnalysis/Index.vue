<template>
  <div class="number-analysis">
    <div class="head">
      <span>查看号码分布:</span>
      <span :class="{'active' :oHead.on}" 
        @click="showNumbers(index)" v-for="(oHead,index) in recordHeads" 
        :key="index">{{oHead.title}}
        <i></i>
      </span>
    </div>
    <div class="head">
      <span>查看大小分布:</span>
      <span :class="{'active' :oHead.on}" 
        @click="showSmallOrLarge(oindex)" v-for="(oHead,oindex) in recordHeads1" 
        :key="oindex">{{oHead.title}}
        <i></i>
      </span>
      <span class="reset">还原</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  name: 'TodayTwoSideNumberStatics',
  components: {
  },
})
class TodayTwoSideNumberStatics extends Vue {
  public recordHeads = [
    {title: '号码1', on: false}, {title: '号码2', on: false}, {title: '号码3', on: false}, {title: '号码4', on: false}, {title: '号码5', on: false},
    {title: '号码6', on: false}, {title: '号码7', on: false}, {title: '号码8', on: false}, {title: '号码9', on: false}, {title: '号码10', on: false},
    ];
  public recordHeads1 = [
    {title: '单', on: false}, {title: '双', on: false}, {title: '大', on: false}, {title: '小', on: false}, {title: '对子号', on: false},
    ];

  @Emit('bind-send')
  public send(index: any ) {
    return index;
  }
  public showNumbers(index: number) {
   this.recordHeads[index].on = !this.recordHeads[index].on;
   this.send(index + 1);
  }
  public showSmallOrLarge(oindex: number) {
   this.recordHeads1[oindex].on = !this.recordHeads1[oindex].on;
   this.send(oindex + 1);
  }
}

export default TodayTwoSideNumberStatics;
</script>
