<template>
  <countdown :time="0 <= time ? time : 0" class="chen-countdown" :class="{ 'theme-b': theme == 'theme-a'}">
    <template slot-scope="props">
      <span class="square d-inline-block align-middle ml-0p5" v-show="props.days > 0 || props.hours > 0">
        <span class="align-middle font-2p2">{{ props.hours }} </span> 
      </span> 
      <span class="align-middle ml-0p5" v-show="props.days > 0 || props.hours > 0"> 
        <span class="align-middle">时 </span> 
      </span>
      <span class="square d-inline-block align-middle ml-0p5" v-show="0 < props.days || 0 < props.hours || 0 < props.minutes || 0 < props.seconds">
        <span class="align-middle font-2p2">{{ props.minutes }} </span> 
      </span> 
      <span class="align-middle ml-0p5" v-show="0 < props.days || 0 < props.hours || 0 < props.minutes || 0 < props.seconds"> 
        <span class="align-middle">分 </span> 
      </span>
      <span class="square d-inline-block align-middle ml-0p5" v-show="0 < props.days || 0 < props.hours || 0 < props.minutes || 0 < props.seconds">
        <span class="align-middle font-2p2">{{ props.seconds }} </span> 
      </span>
      <span class="align-middle ml-0p5" v-show="0 < props.days || 0 < props.hours || 0 < props.minutes || 0 < props.seconds"> 
        <span class="align-middle">秒</span> 
      </span>
      <span class="lotteryImg" v-show="0 == props.days && 0 == props.hours && 0 == props.minutes && 0 == props.seconds">
        开奖中...
      </span>
    </template>
  </countdown>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'CountDownTime',
})
class CountDownTime extends Vue {
  @Prop()
  public time!: number;
  @Prop()
  public theme: string = 'theme-a';

}
export default CountDownTime;

</script>