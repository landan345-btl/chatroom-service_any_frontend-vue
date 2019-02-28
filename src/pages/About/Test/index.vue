<template>
  <div class="test">
<!--     <h1>This is an /about/test page !! {{ $route.query.lottery_id }}</h1> -->
    <Line-chart v-bind:chartData="oData"/>
    <Table/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import LineChart from '@/components/LineChart/index.vue'; // @ is an alias to /src
import Table from '@/components/Table/index.vue'; 
@Component({
  components: {
    LineChart,
    Table,
  },
})
class Test extends Vue {

  public created(): void {
    let lotterId = this.$route.query.lottery_id || 1;
    this.$store.dispatch('ISSUE_ACTION_SHOW', lotterId);
  }
  public get oData(): object {
    let issues = this.$store.state.issues;
    let data = [];
    for (let key of Object.keys(issues)) {
      let mealName = issues[key];
      data.push({'期数':key,'号码':mealName.wn_number.substring(0, 1)});
    }
    return {
      columns: ['期数', '号码'],
      rows: data,
    };
  }
}
 
export default Test;

</script>
