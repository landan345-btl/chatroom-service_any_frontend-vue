<template>
  <div class="lottery">
    <E-tabs>
      <el-tab-pane label="热门彩">
        热门彩
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
@import 'Lottery-scoped.scss';

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';
import ETabs from '@/Components/ETabs/Index.vue';
import ETabPane from '@/Components/ETabPane/Index.vue';

import AxiosHelper from '@/Helpers/Axios';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Lottery',
  components: {
    ETabs,
    ETabPane,
  },
})
class Lottery extends Vue {

}

export default Lottery;
</script>
