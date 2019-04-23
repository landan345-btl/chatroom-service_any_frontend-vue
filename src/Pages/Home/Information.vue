<template>
  <div class="information">
    <E-tabs>
      <el-tab-pane label="全部">
        <div class="lotteries">
          <div class="lottery">
            <div class="top">
              <span class="icon align-middle d-inline-block">
                <img :src="require(`@/assets/images/` + `CQKLSF-sm.png`)" />
              </span>
              <span class="name-issue_no-numbers align-middle d-inline-block">
                <div class="top">
                  <span class="name font-weight-bold ">
                    重庆幸运农场
                  </span>
                  <span class="no font-weight-bold">
                    20190423025
                  </span>
                  <span class="name font-weight-bold">
                    期
                  </span>
                  <span class="this-and-next">
                    当前25期，剩34期
                  </span>
                </div>
                <div class="bottom">
                  <Numbers :code="'CQKLSF'" :numbers="[1,4,5,7,0, 2]"/>
                </div>
              </span>
              <span class="countdown d-inline-block align-bottom">
                <ChenCountdown />
              </span>
            </div>
            <div class="middle">
              
            </div>
            <div class="bottom">
              <span>开奖视频</span>
              <span>路珠分析</span>
              <span>定位走势</span>
              <span>长龙提醒</span>
              <span>冷热分析</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="热门彩">
        <div class="lotteries">
          <div class="lottery">
            <div class="top">

            </div>
            <div class="middle">
              
            </div>
            <div class="bottom">
              
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="PK10">
        PK10
      </el-tab-pane>
      <el-tab-pane label="时时彩">
        CCS
      </el-tab-pane>
      <el-tab-pane label="11选5">
        11X5
      </el-tab-pane>
      <el-tab-pane label="快乐十分">
        KLSF
      </el-tab-pane>
      <el-tab-pane label="快3">
        K3
      </el-tab-pane>
      <el-tab-pane label="其它">
        Other
      </el-tab-pane>
    </E-tabs>
  </div>
</template>
<style scoped lang="scss">
@import 'Information-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import ETabs from '@/Components/ETabs/Index.vue';
import ETabPane from '@/Components/ETabPane/Index.vue';
import Numbers from '@/Components/Numbers/Index.vue';
import ChenCountdown from '@/Components/ChenCountdown/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Lottery',
  components: {
    ETabs,
    ETabPane,
    Numbers,
    ChenCountdown,
  },
})
class Information extends Vue {

}

export default Information;
</script>
