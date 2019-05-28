<template>
  <ve-histogram :data="data" :settings="getSettings"></ve-histogram>
</template>
<style scoped lang="scss">

</style>

<script lang="ts">

import { Component, Prop, Vue, } from 'vue-property-decorator';
@Component({
  name: 'VHistogram',
})
class VHistogram extends Vue {
  @Prop({ default: null, })
  public data: any;

  @Prop()
  public settings: any;

  public get getSettings() {
    let oSettings = {
      digit: 0,
      itemStyle: {
        color: '#fa8e19',
      },
    };
    oSettings = Object.assign(oSettings, this.settings);
    return oSettings;
  };
}

export default VHistogram;
</script>
