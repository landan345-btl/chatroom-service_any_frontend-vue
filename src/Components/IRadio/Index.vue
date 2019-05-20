<template>
  <IRadioGroup type="button">
    <slot></slot>
  </IRadioGroup>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  name: 'IRadioGroup',
})
class IRadioGroup extends Vue {

}
export default IRadioGroup;

</script>