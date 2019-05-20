<template>
  <Tabs :type="type" :animated="animated" @on-click="handleClick" :name="name">
    <slot></slot>
  </Tabs>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({
  name: 'ITabs',
})
class ITabs extends Vue {
  @Prop()
  public type!: string;

  @Prop()
  public name!: string;

  @Prop()
  public animated!: boolean;

  @Emit('handle-click')
  public handleClick(sName: string) {
    return sName;
  }
}
export default ITabs;

</script>