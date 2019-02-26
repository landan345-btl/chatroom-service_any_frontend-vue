<template>
  <div class="test">
    <h1>This is an /about/test page</h1>
    <Line-chart v-bind:chartData="oData"/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import LineChart from '@/components/LineChart/index.vue'; // @ is an alias to /src

@Component({
  components: {
    LineChart,
  },
})
class Test extends Vue {

  public created() {
    //
  }
  public get oData(): object {
    return {
      columns: ['日期', '双数', '单数'],
      rows: [
        { 日期: '2019 1/1', 双数: 2, 单数: 8 },
        { 日期: '2019 1/2', 双数: 5, 单数: 5 },
        { 日期: '2019 1/3', 双数: 6, 单数: 4 },
        { 日期: '2019 1/4', 双数: 7, 单数: 3 },
        { 日期: '2019 1/5', 双数: 1, 单数: 9 },
        { 日期: '2019 1/6', 双数: 4, 单数: 6 },
      ],
    };
  }
}

export default Test;
</script>
