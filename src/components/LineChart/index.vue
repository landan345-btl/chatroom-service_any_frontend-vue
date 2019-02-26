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
  @Prop({ default: '' })
  public chartData: any = {
    columns: ['日期', '双数', '单数'],
    rows: [
      { 日期: '2019 1/1', 双数: 2, 单数: 8 },
      { 日期: '2019 1/2', 双数: 5, 单数: 5 },
      { 日期: '2019 1/3', 双数: 6, 单数: 4 },
      { 日期: '2019 1/4', 双数: 7, 单数: 3 },
      { 日期: '2019 1/5', 双数: 1, 单数: 9 },
      { 日期: '2019 1/6', 双数: 4, 单数: 6 },
    ],
  };
}

export default LineChart;
</script>