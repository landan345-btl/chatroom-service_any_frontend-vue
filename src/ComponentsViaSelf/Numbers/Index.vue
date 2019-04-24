<template>
  <div class="numbers">
    <span class="number kl8" :class="{ 
      'kl8': True,
      }" v-for="(iNumber, sKey) in numbers" :key="sKey">
      <span>{{iNumber}}</span>
    </span>
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

  public created(): void {
    console.log(this.types);
  }
  @Prop()
  public code!: string;
  @Prop()
  public numbers!: number[];
  @Prop()
  public types: string = 'SSC';
}
export default Numbers;

</script>