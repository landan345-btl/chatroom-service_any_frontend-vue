<template>
  <Tabs value="name1">
    <slot></slot>
  </Tabs>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ITabs',
})
class ITabs extends Vue {
  @Prop()
  public type!: string;
}
export default ITabs;

</script>