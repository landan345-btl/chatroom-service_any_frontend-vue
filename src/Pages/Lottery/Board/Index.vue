<template>
  <div class="board">
    <I-tabs :type="'card'">
      <TabPane :label="'路珠分析'" :name="'result'">
        <Result />
      </TabPane>
      <TabPane :label="'综合分析'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'基本走势'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'冷热分析'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'龙虎走势'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'今日号码统计'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'单双大小历史'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'形态走势'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'单双大小路珠'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'历史号码统计'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'两面统计'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'每日长龙统计'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'定位走势'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'总和路珠'" :name="'anaylysis'">
      </TabPane>
      <TabPane :label="'玩法规则'" :name="'anaylysis'">
      </TabPane>
    </I-tabs>
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
import Result from './Result/Index.vue';

import LOTTERTIES from '@/CONFIGS/LOTTERIES/index';
// TODO
// 2. Chart 要有 loading 动画
// 3. 号码 为 0 折线会断
@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ITabs,
    Result,
  },
})
class Board extends Vue {

}

export default Board;
</script>
