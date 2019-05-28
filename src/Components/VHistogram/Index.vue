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
    itemStyle: {
      color: '#000000',
    },
    max: 30,
    min: 0,
  };
}

export default VHistogram;
</script>
