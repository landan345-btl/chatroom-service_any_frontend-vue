<template>
  <Divider />
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'IDivider',
})
class IDivider extends Vue {
  @Prop()
  public type!: any;
}
export default IDivider;

</script>