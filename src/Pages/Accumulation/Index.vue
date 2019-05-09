<template>
  <div class="accumulation">
    <Header class="z-1001"/>
    <Nav-top class="z-1001"/>
    <Nav-right/>
    <el-row :gutter="0" class="z-1001">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}" class="background-white pb-2 pl-2 pr-2 mt-2 mb-2">
        <main>
          <div class="top pl-2">
            长龙提醒
          </div>
          <div class="line mt-1 mb-2">
          </div>
          <Toolbar/>
          <Board />
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

import {
  Footer,
  Header,
  NavTop,
  NavRight,
} from '@/Commons/';

import ETabs from '@/Components/ETabs/Index.vue';
import Toolbar from './Toolbar/Index.vue';
import Board from './Board/Index.vue';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ETabs,
    Toolbar,
    Board,
  },
})
class Accumulation extends Vue {

}

export default Accumulation;
</script>
