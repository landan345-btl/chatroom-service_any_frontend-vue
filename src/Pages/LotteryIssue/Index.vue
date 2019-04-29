<template>
  <div class="lottery-issue">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 align-top">
          <Lottery :code="getCode"/>
          <Table />
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
import Lottery from './Lottery/Index.vue';
import Table from './Table/Index.vue';
import LOTTERIES from '@/CONFIGS/LOTTERIES/';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ETabs,
    Lottery,
    Table,
  },
})
class LotteryIssue extends Vue {
  public get getCode() {
    let sCode = this.$route.query.code;
    if (!(sCode in LOTTERIES)) {
      this.$router.push( { name: '/home'});
    }
    return sCode;
  }
}

export default LotteryIssue;
</script>
