<template>
  <ve-histogram :data="data"></ve-histogram>
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

  public loading = true;

  public created () {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}

export default VHistogram;
</script>
