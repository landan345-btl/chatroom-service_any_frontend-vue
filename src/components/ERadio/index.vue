<template>
  <div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'ERadio',
})
class ERadio extends Vue {
  @Prop({ default: '1' })
  public radio: any;
}

export default ERadio;

</script>