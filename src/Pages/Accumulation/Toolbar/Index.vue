<template>
  <span class="toolbar d-inline-block">
   <p>
    <span>选择彩种</span>
   </p> 
   <E-collapse class="accordion-nav" v-model="activeOpen">
      <el-collapse-item title="热门彩" name="1">
        <div class="lotteries" v-for=" (oLottery , oIndex) in olotterysType" :key="oIndex">
          <el-checkbox v-bind:olotterysType="oLottery" @change="checkbox" v-show="['热门彩'].includes(oLottery.lotteryRange)">{{ oLottery.name }}</el-checkbox>      
        </div>
      </el-collapse-item>
      <el-collapse-item title="极速彩" name="2">
        <div class="lotteries" v-for=" (oLottery , oIndex) in olotterysType" :key="oIndex">
          <el-checkbox v-bind:olotterysType="oLottery" @change="checkbox" v-show="['极速彩'].includes(oLottery.lotteryRange)">{{ oLottery.name }}{{oLottery.oIndex}}</el-checkbox>
        </div>
      </el-collapse-item>
      <el-collapse-item title="高频彩" name="3">
        <div class="lotteries" v-for=" (oLottery , oIndex) in olotterysType" :key="oIndex">
          <el-checkbox v-bind:olotterysType="oLottery" @change="checkbox" v-show="['高频彩'].includes(oLottery.lotteryRange)">{{ oLottery.name }}</el-checkbox>
        </div>
      </el-collapse-item>
      <el-collapse-item title="境外彩" name="4">
        <div class="lotteries" v-for=" (oLottery , oIndex) in olotterysType" :key="oIndex">
          <el-checkbox v-bind:olotterysType="oLottery" @change="checkbox" v-show="['境外彩'].includes(oLottery.lotteryRange)">{{ oLottery.name }}</el-checkbox>
        </div>
      </el-collapse-item>
      <el-collapse-item title="全国彩" name="5">
       <div class="lotteries" v-for=" (oLottery , oIndex) in olotterysType" :key="oIndex">
          <el-checkbox v-bind:olotterysType="oLottery" @change="checkbox" v-show="['全国彩'].includes(oLottery.lotteryRange)">{{ oLottery.name }}</el-checkbox>
        </div>  
      </el-collapse-item>
   </E-collapse >
  </span>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component , Prop , Vue} from 'vue-property-decorator';
import ECollapse from '@/Components/ECollapse/Index.vue';
import LOTTERIES from '@/CONFIGS/LOTTERS/index';

@Component({
  name: 'Toolbar',
  components: {
    ECollapse,
  },
})
class Toolbar extends Vue {
  public oLotteryRanges = LOTTERIES.OLOTTERYRENGES;  //   彩种类型
  public olotterysType = LOTTERIES.OLOTTERYTYPE;  //  彩种页面数据

  public activeOpen = ['1', '2'];

  public checkbox(active: any , e: any) {
    let solottery = e.target.parentNode.nextSibling.innerHTML.split('<')[0] ;
    this.$emit('lotteryName' , solottery );
   }
 }
export default Toolbar;
</script>
