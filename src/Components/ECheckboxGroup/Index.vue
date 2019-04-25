<template>
  <el-checkbox-group v-model="checked1" :disabled="disabled">
    <el-checkbox :label="oLabel.label" v-for="(oLabel, sKey) in labels" :key="sKey">
      {{ oLabel.text }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ECheckboxGroup',
})
class ECheckboxGroup extends Vue {
  @Prop({ default: false })
  public labels: any;

}
export default ECheckboxGroup;

</script>