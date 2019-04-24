<template>
  <div class="trend">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2">
          <ETabs :type="'card'">
            <el-tab-pane label="PK拾">
            </el-tab-pane>
            <el-tab-pane label="时时彩">
            </el-tab-pane>
            <el-tab-pane label="11选5">
            </el-tab-pane>
            <el-tab-pane label="快三">
            </el-tab-pane>
            <el-tab-pane label="快三快乐十分">
            </el-tab-pane>
          </ETabs>
        </main>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import ETabs from '@/Components/ETabs/Index.vue';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ETabs,
  },
})
class Trend extends Vue {

}

export default Trend;
</script>
