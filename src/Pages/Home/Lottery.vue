<template>
  <div class="lottery">
    <E-tabs/>
  </div>
</template>
<style scoped lang="scss">
@import 'Lottery-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import ETabs from '@/Components/ETabs/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Lottery',
  components: {
    ETabs,
  },
})
class Lottery extends Vue {

}

export default Lottery;
</script>
