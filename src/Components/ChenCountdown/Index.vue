<template>
  <countdown :time="time" class="chen-countdown">
    <template slot-scope="props">
      <span class="square d-inline-block align-middle ml-0p5" v-show="props.days > 0 || props.hours > 0">
        <span class="align-middle">{{ props.hours }} </span> 
      </span> 
      <span class="align-middle ml-0p5" v-show="props.days > 0 || props.hours > 0"> 
        <span class="align-middle ">时 </span> 
      </span>
      <span class="square d-inline-block align-middle ml-0p5">
        <span class="align-middle">{{ props.minutes }} </span> 
      </span> 
      <span class="align-middle ml-0p5"> 
        <span class="align-middle">分 </span> 
      </span>
      <span class="square d-inline-block align-middle ml-0p5">
        <span class="align-middle">{{ props.seconds }} </span> 
      </span>
      <span class="align-middle ml-0p5"> 
        <span class="align-middle">秒</span> 
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
  name: 'ChenCountdown',
})
class ChenCountdown extends Vue {
  @Prop()
  public time!: number;
}
export default ChenCountdown;

</script>