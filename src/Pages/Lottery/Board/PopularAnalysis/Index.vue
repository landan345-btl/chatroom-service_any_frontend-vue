<template>
  <div class="popular-analysis background-white">
    <div class="top p-2 font-weight-bold">
      <span class="title">冷热分析</span>
    </div>
    <div class="bottom p-2">
      <CheckboxGroup v-model="fruit">
        <Checkbox label="1">显示热号码出现次数</Checkbox>
      </CheckboxGroup>
      <div class="announcement">
        近20期内 热码：出现频繁、活跃的号码；冷码：出现频率低甚至没有出现的号码；温码：介于冷热之间的号码。
      </div>
      <table class="background-white text-center w-100">
      <tr>
        <th>名次</th>
        <th>热</th>
        <th>温</th>
        <th>冷</th>
      </tr>
      <tr>
        <td>第一球</td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
      </tr>
      <tr>
        <td>第二球</td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
      </tr>
      <tr>
        <td>第三球</td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
      </tr>
      <tr>
        <td>第四球</td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
      </tr>
      <tr>
        <td>第五球</td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
        <td>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
          <span>7 <span class="badge">5</span> </span>
        </td>
      </tr>
    </table>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// import ITabs from '@/Components/ITabs/Index.vue';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'PopularAnalysis',
  components: {
    // ITabs,
  },
})
class PopularAnalysis extends Vue {
  public fruit = ['1'];

  @Prop()
  public lotteryIssues!: any;

}

export default PopularAnalysis;
</script>
