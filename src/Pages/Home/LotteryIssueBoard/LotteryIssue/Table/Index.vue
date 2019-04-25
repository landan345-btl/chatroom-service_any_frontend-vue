<template>
  <div class="table">
    <span class="number kl8" v-for="(iNumber, sKey) in numbers" :key="sKey">
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
  name: 'Table',
})
class Table extends Vue {
  @Prop()
  public code!: string;
  @Prop()
  public numbers!: number[];
  @Prop()
  public types!: string;

}
export default Table;

</script>