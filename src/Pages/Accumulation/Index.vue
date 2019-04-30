<template>
  <div class="accumulation">
    <Header class="z-1001"/>
    <Nav-top  class="z-1001"/>
    <Nav-right/>
    <el-row :gutter="0" class="z-1001">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 align-top">
          <Toolbar/>
          <Table />
        </main>
      </el-col>
    </el-row>
    <Footer class="z-1001"/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue';
import Header from '@/Commons/Header/Index.vue';
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import ETabs from '@/Components/ETabs/Index.vue';
import Toolbar from './Toolbar/Index.vue';
import Table from './Table/Index.vue';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ETabs,
    Toolbar,
    Table,
  },
})
class Accumulation extends Vue {

}

export default Accumulation;
</script>
