<template>
  <RadioGroup :type="type" :value="value" @input="$emit('input', $event)">
    <slot></slot>
  </RadioGroup>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Emit, Vue, } from 'vue-property-decorator';

@Component({
  name: 'IRadioGroup',
})
class IRadioGroup extends Vue {
  @Prop()
  public type!: any;
  @Prop()
  public value!: any;

  public console(a:any) {
    console.log(a);
  }

}
export default IRadioGroup;

</script>
