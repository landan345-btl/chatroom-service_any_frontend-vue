<template>
  <div class="trend">
    <Header/>
    <Nav-top/>
    <!-- <Nav-right/> -->
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2">
          <I-tabs>
            <TabPane label="PK10" name="PK10">
            </TabPane>
            <TabPane label="时时彩" name="SSC">
            </TabPane>
            <TabPane label="11选5" name="11X5">
            </TabPane>
            <TabPane label="快三" name="K3">
            </TabPane>
            <TabPane label="快乐十分" name="KLSF">
            </TabPane>
            <TabPane label="快乐8" name="KL8">
            </TabPane>
            <TabPane label="六合彩" name="SIX">
            </TabPane>
          </I-tabs>
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
import ITabs from '@/Components/ITabs/Index.vue';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ITabs,
  },
})
class Trend extends Vue {
public activeLottery = 'bjpk10';
public ischecked = 0;
public ranks = ['冠军' , '亚军' , '第三名' , '第四名' , '第五名' , '第六名' , '第七名' , '第八名' , '第九名' , '第十名'];

public tabShow(Tindex: number) {
    this.ischecked = Tindex;
  }
}

export default Trend;
</script>
