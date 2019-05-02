<template>
  <ve-line :data="data"></ve-line>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'Vline',
})
class VLine extends Vue {
  @Prop({ default: null })
  public data: any;
  public created() {
    // console.log(this.chartData);
  }
}

export default VLine;
</script>