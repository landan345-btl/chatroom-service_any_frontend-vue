<template>
  <ve-histogram :data="data" :settings="settings"></ve-histogram>
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
  
  public settings = {
    yAxis: {
      minInterval: 1,
    },
    itemStyle: {
      color: '#fa8e19',
    },
  };
}

export default VHistogram;
</script>
