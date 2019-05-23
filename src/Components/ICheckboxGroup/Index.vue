<template>
  <CheckboxGroup :value="value">
    <slot></slot>
  </CheckboxGroup>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Emit, Vue, } from 'vue-property-decorator';

@Component({
  name: 'ICheckboxGroup',
})
class ICheckboxGroup extends Vue {
  @Prop()
  public value!: any;
}
export default ICheckboxGroup;

</script>
