<template>
  <Collapse>
    <slot></slot>
  </Collapse>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ECollapse',
})
class ECollapse extends Vue {

}
export default ECollapse;

</script>