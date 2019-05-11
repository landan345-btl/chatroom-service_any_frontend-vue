<template>
  <CheckboxGroup>
    <slot></slot>
  </CheckboxGroup>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({
  name: 'ICheckboxGroup',
})
class ICheckboxGroup extends Vue {

}
export default ICheckboxGroup;

</script>