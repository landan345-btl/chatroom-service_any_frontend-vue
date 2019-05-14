<template>
  <span class="board d-inline-block ml-2 position-relative">
    <E-tabs class="mt-1">
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
            <th>彩种</th>
            <th>位置</th>
            <th>连续未开出期数</th>
            <th>路珠</th>
            <th>长龙统计</th>
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
    <E-select :options="options" class="position-absolute select"/>
  </span>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
  Model,
} from 'vue-property-decorator';

import {
  warn,
} from 'vue-class-component/lib/util';

import {
  ETabs,
  ESelect,
} from '@/Components/';

@Component({
  name: 'Board',
  components: {
    ETabs,
    ESelect,
  },
})
class Board extends Vue {
 public lotteryName = {};
 public olotterysScreen: any = {};
 public olotteryIssues: any = {};

 @Prop({ default: null })
 public olotterys !: any ;
 public options: any = [{
    value: '2',
    label: '2期',
  }, {
    value: '3',
    label: '3期',
  }, {
    value: '4',
    label: '4期',
  }, {
    value: '5',
    label: '5期',
  }, {
    value: '6',
    label: '6期',
  }, {
    value: '7',
    label: '7期',
  }, {
    value: '8',
    label: '8期',
  }, {
    value: '9',
    label: '9期',
  }, {
    value: '10',
    label: '10期',
  }, {
    value: '11',
    label: '11期',
  }, {
    value: '12',
    label: '12期',
  }, {
    value: '13',
    label: '13期',
  }, {
    value: '14',
    label: '14期',
  }, {
    value: '15',
    label: '15期',
  }];
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
