<template>
  <div class="numbers">
    <div class="number" :class="[types.toLowerCase(), types.toLowerCase() + '-' + iNumber]" v-for="(iNumber, sKey) in numbers" :key="sKey">
      <span>{{iNumber}}</span>
    </div>
    <div class="pk10 pk10-2">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Numbers',
})
class Numbers extends Vue {
  @Prop()
  public code!: string;
  @Prop()
  public numbers!: number[];
  @Prop()
  public types!: string;

}
export default Numbers;

</script>