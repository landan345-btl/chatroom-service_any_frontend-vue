<template>
  <span class="board d-inline-block">
    <E-tabs>
      <el-tab-pane label="连续开出">
       <table class="tables">
         <thead>
           <tr>
            <td>彩种</td>
            <td>位置</td>
            <td>连续开出期数</td>
            <td>路珠</td>
            <td>长龙统计</td>
           </tr>
         </thead>
         <tbody>
           <tr v-for="(sLotteryName , sIndex) in 11" :key="sIndex">
            <td>{{ sLotteryName.name }}</td>
            <td>第4名：龙</td>
            <td>4期</td>
            <td>查看</td>
            <td>查看</td>
           </tr> 
         </tbody>
       </table>
      </el-tab-pane>
      <el-tab-pane label="连续未开">
        <table class="tables">
         <thead>
           <tr>
            <td>彩种</td>
            <td>位置</td>
            <td>连续未开出期数</td>
            <td>路珠</td>
            <td>长龙统计</td>
           </tr>
         </thead>
         <tbody>
           <tr v-for="(sLotteryName , sIndex) in 10" :key="sIndex">
            <td>{{sLotteryName}}</td>
            <td>第4名：龙</td>
            <td>4期</td>
            <td>查看</td>
            <td>查看</td>
           </tr> 
         </tbody>
       </table>
      </el-tab-pane>
    </E-tabs>
    <span>
       只显示
      <select>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
        期及以上的长龙
    </span>
  </span>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component , Prop , Vue , Watch, Model} from 'vue-property-decorator';
import { warn } from 'vue-class-component/lib/util';

import ETabs from '@/Components/ETabs/Index.vue';

@Component({
  name: 'Board',
  components: {
    ETabs,
  },
})
class Board extends Vue {
 public lotteryName = {};
 public olotterysScreen: any = {};
 public olotteryIssues: any = {};

 @Prop({ default: null })
 public olotterys !: any ;

 public dataScreen() {
    let _olotterys: any = {};
    for ( let olottery in this.olotterys ) {
      if ( this.olotterys[ olottery ].numbers == null ) {
        continue;
      }
      _olotterys[ olottery ] = this.olotterys[ olottery ];
    }
    this.olotterysScreen = _olotterys;
 }

 public created() {
   this.dataScreen();
  // this.getName();  // 接受兄弟传来的值
 }

public getName() {
  this.$on('lotteryName' , ( data: any) => {
   this.lotteryName = data;
  });
 }
}

export default Board;
</script>
