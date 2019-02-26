<template>
  <ve-line :data="oData"></ve-line>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'LineChart',
})
class LineChart extends Vue {
  @Prop({ default: '' })
  public oData: any = null;
}

export default LineChart;
</script>