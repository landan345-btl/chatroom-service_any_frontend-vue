<template>
  <div>
    <div class="analysis-table p-1 mb-2">
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
  </div>
</template>

<style lang="scss">
.analysis-table {
    border: 1px solid #f0f0f0;
    background: #f5f5f5;
    & > div {
      position: relative;
    }
    & > div:nth-child(2) {
      overflow: auto;
      width: 100%;
      border: 1px solid #e6e6e6;
      & > div {
        min-width: 190vmin;
        white-space: nowrap;
        div {
          text-align: center;
          display: inline-block;
          width: 4vmin;
          min-height: 12vmin;
          padding-bottom: 5vmin;
        }
      }
    }
    font-size: 1.5vmin;
    input {
      width: 5vmin !important;
      margin: 0 .5vmin;
    }
    .jia {
      position: absolute;
      left: 12vmin;
      z-index: 100;
      font-size: 2vmin;
    }
    .jian {
      position: absolute;
      left: 12vmin;
      z-index: 100;
      font-size: 2vmin;
      top: 1.2vmin;
    }
    select {
      margin: 0 .5vmin;
      height: 2.7vmin;
    }
    Button {
      margin: 0 .5vmin;
      background: #888aa0;
      border: 0px;
    }
  }
  .background-whilt {
    background: #fff;
  }
  .background {
    background: #f5f5f5;
  }

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'luzu',
})

class LuZhuTable extends Vue {
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

export default LuZhuTable;
</script>
