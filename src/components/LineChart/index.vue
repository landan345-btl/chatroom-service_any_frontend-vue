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
    columns: ['Date', 'User', 'Order'],
    rows: [
      { Date: '1/1', User: 1, Order: 1 },
      { Date: '1/2', User: 100, Order: 20 },
      { Date: '1/3', User: 2, Order: 30 },
      { Date: '1/4', User: 55, Order: 50 },
      { Date: '1/5', User: 12, Order: 70 },
      { Date: '1/6', User: 73, Order: 90 },
    ],
  };
}

export default LineChart;
</script>