<template>
  <div class="result-table ml-2 mr-2 font-size-1p5 background-white">
    <div class="pl-1 pt-1 pb-1 table-top">
      <span class="mr-1">连续出现次数</span>
      <input class="mr-1" type="number" min="0" placeholder="1"/>
      <span  class="mr-1">次以上</span>
      <select class="mr-1">
        <option value="大">大</option>
        <option value="小">小</option>
      </select>
      <Button type="primary" size="small">确定</Button>
      <span>
        出现的次数为：
        <span>0</span>
      </span>
      <span class="float-right m-1 grand">
        <span>今天</span>
        <span> 累计：单(</span>
        <span>123</span>
        <span>)&nbsp;&nbsp;双(</span>
        <span>456</span>)
        <span class="color-red">&nbsp;&nbsp;冠军</span>&nbsp;&nbsp;
        <span class="color-red">龙虎</span>&nbsp;&nbsp;
        <span class="color-red">最新</span>&nbsp;&nbsp;
        <span class="el-icon-bottom color-red"></span>
      </span>
    </div>
    <div>
      <div>
        <div v-for="( item , i ) in 50" :key="i" :class="i % 2 === 0 ? 'background-even':''">
          <p :class="{'text-even':'双' === isOddOrEven(item) }" v-for="( item , i ) in 7" :key="i">{{ item | isOddOrEven}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ResultTable',
})

class ResultTable extends Vue {

}

export default ResultTable;
</script>
