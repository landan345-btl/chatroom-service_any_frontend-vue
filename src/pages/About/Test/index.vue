<template>
  <div class="test">
    <h1>This is an /about/test page</h1>
    <Line-chart />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LineChart from '@/components/LineChart/index.ts'; // @ is an alias to /src

@Component({
  components: {
    LineChart,
  },
})
class Test extends Vue {
}

export default Test;
</script>
