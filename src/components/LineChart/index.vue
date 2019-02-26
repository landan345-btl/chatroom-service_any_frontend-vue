<template>
  <ve-line :data="chartData"></ve-line>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'LineChart',
})
class LineChart extends Vue {
  @Prop({ default: null })
  public chartData: any;
  public created() {
    // console.log(this.chartData);
  }
}

export default LineChart;
</script>