<template>
  <div class="result-table p-1 mb-2">
    <div>
      <span>连续出现次数</span>
      <input v-model="value" style="width: 300px" />
      <Icon class="jia" type="md-arrow-dropup" @click="toggleNumber(1)"/>
      <Icon class="jian" type="md-arrow-dropdown" @click="toggleNumber(-1)"/>
      <span>次以上</span>
      <select name="" id="" v-model="size">
        <option value="大">大</option>
        <option value="小">小</option>
      </select>
      <Button type="primary">确定</Button>
      <span>
        出现的次数为：
        <span>0</span>
      </span>
      <span class="float-right m-1">
        今天 累计：大(313)  小(292)
        <span class="color-red">第一球</span>
        <span class="color-red">大小</span>
        <span class="color-red">最新</span>
        <span class="el-icon-bottom color-red"></span>
      </span>
    </div>
    <div>
      <div>
        <div v-for="( item , i ) in 50" :key="i" :class="i % 2 === 0 ? 'background-whilt':''">
          <p v-for="( item , i ) in 20" :key="i">{{ i }}</p>
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
  public value = 1;
  public size = '小';

  public toggleNumber( iNymber: number ) {
    if ( this.value === 1 && iNymber === -1 ) {
      this.value = 1;
      return;
    }
    this.value += iNymber ;
  }
}

export default ResultTable;
</script>
