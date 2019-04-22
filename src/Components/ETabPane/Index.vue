<template>
  <el-tab-pane label="label">
    !!!!
  </el-tab-pane>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ETabPane',
})
class ETabPane extends Vue {
  @Prop()
  public label: string = 'default';
}
export default ETabPane;

</script>