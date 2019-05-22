<template>
  <div class="rule">
     规则
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {

} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'Rule',
  components: {

  },
})
class Rule extends Vue {


}

export default Rule;
</script>
