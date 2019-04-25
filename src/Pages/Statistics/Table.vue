<template>
  <span class="table d-inline-block">
    TABLE
  </span>
</template>
<style scoped lang="scss">
@import 'Table-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import ETabs from '@/Components/ETabs/Index.vue';

@Component({
  name: 'List',
  components: {
  },
})
class List extends Vue {

}

export default List;
</script>
