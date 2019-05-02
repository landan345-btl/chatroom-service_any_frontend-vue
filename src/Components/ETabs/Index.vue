<template>
  <el-tabs :type="type" v-model="model">
    <slot></slot>
  </el-tabs>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ETabs',
})
class ETabs extends Vue {
  @Prop()
  public images!: string[];
  @Prop()
  public height!: string;
  @Prop()
  public type!: string;
  @Prop()
  public model!: any;
}
export default ETabs;

</script>