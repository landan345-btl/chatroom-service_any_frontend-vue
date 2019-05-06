<template>
  <Button :type="type" @click="handleClick">
    <slot></slot>
  </Button>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({
  name: 'IButton',
})
class IButton extends Vue {
  @Prop({ default: null })
  public type!: any;

  @Emit('handle-click')
  public handleClick(mValue: any) {
    return mValue;
  }
}
export default IButton;

</script>