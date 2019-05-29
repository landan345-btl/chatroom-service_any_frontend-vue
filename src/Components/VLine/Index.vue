<template>
  <ve-line
    :data="data"
    :settings="settings"
    :loading="loading"
    :after-config="afterConfig"
    :extend="extend">
  </ve-line>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">

import { Component, Prop, Vue, } from 'vue-property-decorator';
@Component({
  name: 'Vline',
})
class VLine extends Vue {
  @Prop({ default: null, })
  public data: any;

  @Prop({ default: null, })
  public settings: any;

  @Prop({ default: true, })
  public loading!: boolean;

  public extend = {
    'xAxis.0.axisLabel.rotate': 45,
    'series': {
      label: {
        normal: {
          show: true,
        },
      },
    },
  };


  public afterConfig (options: any): any {
    options.legend.selectedMode = 'single';
    return options;
  }
}

export default VLine;
</script>
