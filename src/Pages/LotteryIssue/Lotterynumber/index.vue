<template>
  <div class=""> 
    <div class="card-body">
      <div class="nums-box">
        <ul class="numbers">
          <li v-for="(num,i) in lottery" :key="i" :class="images(num)">
            <i class="d-none">{{ num }}</i>
            </li>
        </ul>
      </div>
    </div>
    <p class="card-count">已开144期，还有144期</p>
  </div>   
</template>
<style scoped lang="scss">
  .card-body {
    .nums-box {
      margin-top: 1vmin;
      display: block;
      .numbers {
        width: 45.5vmin;
        height: auto;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
        li {
          float: left;
          margin: 0.2vmin 0.1vmin ;
          width: 34px;
          height: 31px;
          margin-right: 1.2%;
          line-height: 3vmin;               
          color: #fff;
          text-align: center;
          border-radius: 3px;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'LotteryNumber',
  })
class LotteryNumber extends Vue {
  public lottery: any = {};

  @Prop({ default: null })
  public olotteryNumber !: any ;   //  组件接收到的值
  public name: any = '';  // 接受code

  public created() {
    this.dataScreen();
    let lotteryName = localStorage.getItem('lotteryName');
    this.name = lotteryName;
  }

  public dataScreen() {  // 对数据进行筛选 并取最新的值
    let _olotterys: any = {};
    let lotteryNumber = this.olotteryNumber;
    for ( let olottery in lotteryNumber ) {
      if ( lotteryNumber[ olottery ].numbers == null ) {
        continue ;
      }
      _olotterys[ olottery ] = lotteryNumber[ olottery ].numbers;
    }
    lotteryNumber = _olotterys;
    this.lottery  = JSON.parse(lotteryNumber[ Object.keys( lotteryNumber )
      [ Object.keys( lotteryNumber ).length - 1 ] ]);
    // console.log(this.lottery);
    return _olotterys;
  }


   public images(index: number) {
     return 'num-0' + index;
 }
}

export default LotteryNumber;
</script>