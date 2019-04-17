<template>
  <div class="">
    <Header />
    <Nav />
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 15, offset: 2}" :md="{span: 12, offset: 3}" :lg="{span: 11, offset: 4}">
        <main class="home">
          MAIN
        </main>
      </el-col>
      <el-col :xs="{span: 0}" :sm="{span: 5}" :md="{span: 6}" :lg="{span: 5}">
        <aside>
          ASIDE
        </aside>
      </el-col>
    </el-row>

    <Footer />
  </div>
</template>
<style scoped lang="scss">

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import Header from '@/Commons/Header/Index.vue';
import Nav from '@/Commons/Nav/Index.vue';
import Footer from '@/Commons/Footer/Index.vue';
import ERadio from '@/Components/ERadio/Index.vue';
import ESelect from '@/Components/ESelect/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Home',
  components: {
    Header,
    Nav,
    Footer,
    ERadio,
    ESelect,
  },
})
class Home extends Vue {
  public sImage = 'CQSSC';
  public created(): void {
    let $root: any = this.$root;
    let oRequest: {} = {
      path: '/lottery/show',
      params: {},
    };
  }

}

export default Home;
</script>
