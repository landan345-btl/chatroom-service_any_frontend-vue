<template>
  <div class="information">
    <div class="top">
    </div>
    <I-tabs>
      <TabPane label="即时开奖" name="即时开奖">
      </TabPane>
    </I-tabs>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';
@Component({
  name: 'Information',
  components: {
   ITabs,
  },
})
class Information extends Vue {
  public created(): void {
    let $root: any = this.$root;
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {});
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
  }
}

export default Information;
</script>
