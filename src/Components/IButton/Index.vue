<template>
  <Button :type="type">
    <slot></slot>
  </Button>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'IButton',
})
class IButton extends Vue {
  @Prop({ default: null })
  public type!: any;
}
export default IButton;

</script>