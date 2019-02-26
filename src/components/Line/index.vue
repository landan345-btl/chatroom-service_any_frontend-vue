<template>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';
import { Line as VueLine } from 'vue-chartjs';

@Component
class Line extends VueLine {

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

export default Line;
</script>
