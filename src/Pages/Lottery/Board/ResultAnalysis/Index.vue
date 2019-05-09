<template>
  <div class="result-analysis">
    <!-- <div class="top font-weight-bold">
      <div class="nav-left">
        <I-tabs type="card">
          <TabPane label="综合模式">
            <span>筛选名次：</span>
            <CheckboxGroup v-model="fruit">
              <Checkbox label="第一球"></Checkbox>
              <Checkbox label="第二球"></Checkbox>
              <Checkbox label="第三球"></Checkbox>
              <Checkbox label="第四球"></Checkbox>
              <Checkbox label="第五球"></Checkbox>
              <Checkbox label="总和"></Checkbox>
            </CheckboxGroup>
            <span>筛选路珠：</span>
            <CheckboxGroup v-model="fruit">
              <Checkbox label="大小路珠"></Checkbox>
              <Checkbox label="单双路珠"></Checkbox>
              <Checkbox label="龙虎"></Checkbox>
            </CheckboxGroup>
          </TabPane>
          <TabPane label="单选模式">
            <span>筛选路珠：</span>
            <CheckboxGroup v-model="fruit">
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
            <CheckboxGroup v-model="fruit">
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
            <CheckboxGroup v-model="fruit">
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

      <div>
        <div>
          <span>连续出现次数</span>
          <Input v-model="value" style="width: 300px" />
          <span>次以上</span>
          <select name="" id="">
            <option value="大"></option>
            <option value="小"></option>
          </select>
          <Button type="primary">确定</Button>
          <span>
            出现的次数为：
            <span>0</span>
          </span>
        </div>
        <div>
          <span></span>
        </div>

      </div>

      
    


    </div> -->
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ITabs from '@/Components/ITabs/Index.vue';

import {
  LOTTERIES
} from '@/CONFIGS/';

@Component({
  name: 'ResultAnalysis',
  components: {
    ITabs,
  },
})
class ResultAnalysis extends Vue {

}

export default ResultAnalysis;
</script>
