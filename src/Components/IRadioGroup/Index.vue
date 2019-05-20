<template>
  <RadioGroup :type="type">
    <slot></slot>
  </RadioGroup>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({
  name: 'IRadioGroup',
})
class IRadioGroup extends Vue {
  @Prop()
  public type!: any;
}
export default IRadioGroup;

</script>