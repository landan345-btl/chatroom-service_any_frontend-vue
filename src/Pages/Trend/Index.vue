<template>
  <div class="trend">
    <Header/>
    <Nav-top/>
    <!-- <Nav-right/> -->
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2">
          <E-tabs>
            <el-tab-pane label="PK10" name="PK10">
              <E-tabs :type="'card'">
                <el-tab-pane :label="oLottery.code" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'PK10' === oLottery.types">
                  {{ oLottery.name }}
                </el-tab-pane>
              </E-tabs>
            </el-tab-pane>
            <el-tab-pane label="11选5" name="11X5">
              <E-tabs :type="'card'">
                <el-tab-pane :label="oLottery.code" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'11X5' === oLottery.types">
                  {{ oLottery.name }}
                </el-tab-pane>
              </E-tabs>
            </el-tab-pane>
            <el-tab-pane label="快三" name="K3">
              <E-tabs :type="'card'">
                <el-tab-pane :label="oLottery.code" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'K3' === oLottery.types">
                  {{ oLottery.name }}
                </el-tab-pane>
              </E-tabs>
            </el-tab-pane>
            <el-tab-pane label="快乐十分" name="KLSF">
              <E-tabs :type="'card'">
                <el-tab-pane :label="oLottery.code" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KLSF' === oLottery.types">
                  {{ oLottery.name }}
                </el-tab-pane>
              </E-tabs>
            </el-tab-pane>
            <el-tab-pane label="快乐8" name="KL8">
              <E-tabs :type="'card'">
                <el-tab-pane :label="oLottery.code" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'KL8' === oLottery.types">
                  {{ oLottery.name }}
                </el-tab-pane>
              </E-tabs>
            </el-tab-pane>
            <el-tab-pane label="六合彩" name="SIX">
              <E-tabs :type="'card'">
                <el-tab-pane :label="oLottery.code" :name="oLottery.code" v-for="(oLottery, sLotteryId) in getLotteries" :key="sLotteryId" v-if="'SIX' === oLottery.types">
                  {{ oLottery.name }}
                </el-tab-pane>
              </E-tabs>
            </el-tab-pane>
          </E-tabs>
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
  public activeLottery = 'bjpk10';
  public ischecked = 0;
  public ranks = ['冠军' , '亚军' , '第三名' , '第四名' , '第五名' , '第六名' , '第七名' , '第八名' , '第九名' , '第十名'];
  public created(): void {
    let $root: any = this.$root;
    this.$store.dispatch('LOTTERY_ACTION_SHOW', {});
    this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', {} );
  }
  public tabShow(Tindex: number) {
    this.ischecked = Tindex;
  }
  public get getLotteries(): any {
    let oLotteries: any = this.$store.state.lotteries;
    return oLotteries;
  }
}

export default Trend;
</script>
