<template>
  <countdown :time="59 * 60 * 1000" class="chen-countdown">
    <template slot-scope="props">
      <span class="square d-inline-block" v-show="props.days > 0 || props.hours > 0">{{ props.hours }} </span> <span v-show="props.days > 0 || props.hours > 0"> 时 </span>
      <span class="square d-inline-block">{{ props.minutes }} </span> <span> 分 </span>
      <span class="square d-inline-block">{{ props.seconds }} </span> <span> 秒 </span>
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
  public time: number = 0;
}
export default ChenCountdown;

</script>