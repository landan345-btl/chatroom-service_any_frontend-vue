import { Component, Prop, Vue } from 'vue-property-decorator';
import { Line as VueLine } from 'vue-chartjs';

import VeLine from 'v-charts/lib/line.common';
@Component({
})
class LineChart extends VueLine {

  @Prop({ default: null })
  public data!: object;

  @Prop({ default: null })
  public options!: object;

  public created(): void {
    this.renderChart(this.data, this.options);
  }

  public renderChart(aData: any, oOptions: object): void {
    super.renderChart(aData, oOptions);
  }

}

export default LineChart;
