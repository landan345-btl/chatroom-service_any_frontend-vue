<template>
  <div class="numbers">
    <div class="number" :class="['number-' + types.toLowerCase(), 'number-'+ code.toLowerCase(), 'number-'+ types.toLowerCase() + '-' + iNumber]" v-for="(iNumber, sKey) in numbers" :key="sKey" v-randomNumber>
      <span>{{iNumber}}</span>
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