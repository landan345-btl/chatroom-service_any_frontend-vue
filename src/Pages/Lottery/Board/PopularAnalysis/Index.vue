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
        <th class="align-middle">名次</th>
        <th class="align-middle">热</th>
        <th class="align-middle">温</th>
        <th class="align-middle">冷</th>
      </tr>
      <tr>
        <td class="align-middle">第一球</td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[4,3]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[1,9]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[3]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
      </tr>
      <tr>
        <td class="align-middle">第二球</td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[1,7,9]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[7]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[2,6]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
      </tr>
      <tr>
        <td class="align-middle">第三球</td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[1,6,7]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[1,2,3]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[7]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
      </tr>
      <tr>
        <td class="align-middle">第四球</td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[4]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[1]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[9]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
      </tr>
      <tr>
        <td class="align-middle">第五球</td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[8]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[7,9]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
        </td>
        <td class="align-middle">
          <Numbers 
            :code="code" 
            :numbers="[1,2,3]" 
            :types="LOTTERIES[code].TYPES || types" 
            :isRandom="false" 
            :status="'NUMBER'" />
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
import {
  Numbers,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'PopularAnalysis',
  components: {
    Numbers,
  },
})
class PopularAnalysis extends Vue {
  public fruit = ['1'];

  @Prop()
  public lotteryIssues!: any;
  @Prop()
  public code!: any;
  @Prop()
  public types!: any;
}

export default PopularAnalysis;
</script>
