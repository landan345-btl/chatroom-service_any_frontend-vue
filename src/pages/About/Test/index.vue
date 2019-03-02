<template>
  <div class="test" style="overflow: hidden;">
<!--     <h1>This is an /about/test page !! {{ $route.query.lottery_id }}</h1> -->
    <V-line v-bind:chartData="oData"/>
    <E-table class="Table"/>
    <E-radio/>
  </div>
</template>
<style scoped lang="scss">
.Table{
  padding: 50px;
  text-align: center;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import VLine from '@/components/VLine/index.vue'; // @ is an alias to /src
import ETable from '@/components/ETable/index.vue';
import ERadio from '@/components/ERadio/index.vue';

@Component({
  components: {
    VLine,
    ETable,
    ERadio,
  },
})
class Test extends Vue {

  public created(): void {
    let lotterId = this.$route.query.lottery_id || 1;
    this.$store.dispatch('ISSUE_ACTION_SHOW', lotterId);
  }
  public get oData(): object {
    let oIssues = this.$store.state.issues;
    let aRows = [];
    for (let key of Object.keys(oIssues)) {
      let mealName = oIssues[key];
      let oRow = { 期数: key, 号码: mealName.wn_number.substring(0, 1)};
      aRows.push(oRow);
    }
    return {
      columns: ['期数', '号码'],
      rows: aRows,
    };
  }
}
export default Test;

</script>
