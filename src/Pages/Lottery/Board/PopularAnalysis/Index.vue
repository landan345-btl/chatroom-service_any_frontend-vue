<template>
  <div class="popular-analysis">
    <div class="top p-1 font-weight-bold">
      <span class="title">冷热分析</span>
    </div>
    <div>
       <CheckboxGroup v-model="fruit">
        <Checkbox label=""></Checkbox>
      </CheckboxGroup>
      显示热号码出现次数
    </div>
    <div class="introduce">
      近20期内 热码：出现频繁、活跃的号码；冷码：出现频率低甚至没有出现的号码；温码：介于冷热之间的号码。
    </div>
    <table>
      <tr>
        <td>名次</td>
        <td>热</td>
        <td>温</td>
        <td>冷</td>
      </tr>
      <tr>
        <td>第一球</td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
      </tr>
      <tr>
        <td>第二球</td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
      </tr>
      <tr>
        <td>第三球</td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
      </tr>
      <tr>
        <td>第四球</td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
      </tr>
      <tr>
        <td>第五球</td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
        <td>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
          <span>7 <span>5</span> </span>
        </td>
      </tr>
    </table>

  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';

import {
  LOTTERIES
} from '@/CONFIGS/';

@Component({
  name: 'PopularAnalysis',
  components: {
    ITabs,
  },
})
class PopularAnalysis extends Vue {
  @Prop()
  public lotteryIssues!: any;

}

export default PopularAnalysis;
</script>
