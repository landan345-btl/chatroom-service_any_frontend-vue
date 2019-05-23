<template>
  <Collapse simple>
    <slot></slot>
  </Collapse>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'ICollapse',
})
class ICollapse extends Vue {
  @Prop()
  public name!: string;
}
export default ICollapse;

</script>
