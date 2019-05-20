<template>
  <ve-line :data="data" :settings="settings" :loading="loading" mark-line></ve-line>
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
  @Prop({ default: null })
  public settings: any;
  public created() {
    setTimeout(() => {
      this.loading = false;
      // TODO 之后改成 event 写法
      // 不好的写法
    }, 3000);
  }
  public loading = true;
}

export default VLine;
</script>