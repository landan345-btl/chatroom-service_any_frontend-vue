<template>
  <div class="test">
    <h1>This is an /about/test page</h1>
    <!-- <Line /> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Line from '@/components/Line/index.vue'; // @ is an alias to /src

@Component({
  components: {
    Line,
  },
})
class Test extends Vue {
}

export default Test;
</script>
