<template>
  <el-tabs type="border-card">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    <!-- <el-tab-pane label="热门彩">
      111
    </el-tab-pane>
    <el-tab-pane label="PK10">
      222
    </el-tab-pane> -->
    <!-- <el-tab-pane label="时时彩">
      <slot name="ccs"></slot>
    </el-tab-pane>
    <el-tab-pane label="11选5">
      <slot name="11x5"></slot>
    </el-tab-pane>
    <el-tab-pane label="快乐十分">
      <slot name="klsf"></slot>
    </el-tab-pane>
    <el-tab-pane label="其它">
      <slot name="other"></slot>
    </el-tab-pane> -->
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
  public type: string = '';
}
export default ETabs;

</script>