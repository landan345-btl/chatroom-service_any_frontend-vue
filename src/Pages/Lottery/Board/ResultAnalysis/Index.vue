<template>
  <div class="result-analysis">
    <div class="top font-weight-bold">
      <div class="nav-left p-1">
        <I-tabs type="card background">
          <TabPane label="综合模式">
            <span>筛选名次：</span>
            <CheckboxGroup v-model="fruit1">
              <Checkbox label="第一球"></Checkbox>
              <Checkbox label="第二球"></Checkbox>
              <Checkbox label="第三球"></Checkbox>
              <Checkbox label="第四球"></Checkbox>
              <Checkbox label="第五球"></Checkbox>
              <Checkbox label="总和"></Checkbox>
            </CheckboxGroup>
            <span>筛选路珠：</span>
            <CheckboxGroup v-model="fruit2">
              <Checkbox label="大小路珠"></Checkbox>
              <Checkbox label="单双路珠"></Checkbox>
              <Checkbox label="龙虎"></Checkbox>
            </CheckboxGroup>
          </TabPane>
          <TabPane label="单选模式">
            <span>筛选路珠：</span>
            <CheckboxGroup v-model="fruit3">
              <Checkbox label="大小路珠"></Checkbox>
              <Checkbox label="单双路珠"></Checkbox>
              <Checkbox label="龙虎"></Checkbox>
            </CheckboxGroup>
            <span>全选</span>
            <span>清空</span>
            <span>筛选名次：</span>
            <RadioGroup v-model="button1" type="button">
              <Radio label="第一球"></Radio>
              <Radio label="第二球"></Radio>
              <Radio label="第三球"></Radio>
              <Radio label="第四球"></Radio>
              <Radio label="第五球"></Radio>
            </RadioGroup>
          </TabPane>
          <TabPane label="两面模式">
            <span>筛选名次：</span>
            <CheckboxGroup v-model="fruit4">
              <Checkbox label="第一球"></Checkbox>
              <Checkbox label="第二球"></Checkbox>
              <Checkbox label="第三球"></Checkbox>
              <Checkbox label="第四球"></Checkbox>
              <Checkbox label="第五球"></Checkbox>
              <Checkbox label="总和"></Checkbox>
            </CheckboxGroup>
            <span>全选</span>
            <span>清空</span>
            <span>筛选路珠：</span>
            <CheckboxGroup v-model="fruit5">
              <Checkbox label="大小路珠"></Checkbox>
              <Checkbox label="单双路珠"></Checkbox>
              <Checkbox label="龙虎路珠"></Checkbox>
            </CheckboxGroup>
          </TabPane>
        </I-tabs>
      </div>
      <div class="nav-right">
        <RadioGroup v-model="buttonSize" type="button">
          <Radio label="large">今天</Radio>
          <Radio label="default">昨天</Radio>
          <Radio label="small">前天</Radio>
        </RadioGroup>
      </div>

      <div class="p-1">
        <LuZhuTable v-for="( utem , i ) in 6" :key="i"/>
      </div>
      

      
    


    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
<<<<<<< HEAD
import {
  ITabs,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';
=======
import ITabs from '@/Components/ITabs/Index.vue';
import LuZhuTable from '@/Components/LuZhuTable/index.vue';
>>>>>>> lotterypages

@Component({
  name: 'ResultAnalysis',
  components: {
    ITabs,
    LuZhuTable,
  },
})
class ResultAnalysis extends Vue {
  public fruit1 = ['da'];
  public fruit2 = ['da'];
  public fruit3 = ['da'];
  public fruit5 = ['da'];
  public fruit4 = ['da'];
  public button1 = 'da';
  public buttonSize = '今天';
}

export default ResultAnalysis;
</script>
