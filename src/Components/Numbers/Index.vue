<template>
  <div class="numbers">
    <span class="number ccs" v-for="(iNumber, sKey) in numbers" :key=sKey>
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
  @Prop()
  public code!: string;
  @Prop()
  public numbers!: number[];
}
export default Numbers;

</script>