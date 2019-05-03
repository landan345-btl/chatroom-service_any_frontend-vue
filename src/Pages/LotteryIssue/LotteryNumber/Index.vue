<template>
  <div class=""> 
    <div v-if="lotteryTypes[ code ].TYPES === 'PK10'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(number,i) in lottery" :key="i" :class="['num-0'+number]">
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'KL8'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(number,i) in lottery" :key="i" class="kl8-mt mt-0"
                :class="{'number-blue-fine' : (number>40), 'number-light-fine' : (number<=40)}">
              <i class="font-size-2p5 font-weight-bold" :class="{'color-black' : (number>40), 'color-deepskyblue' : (number<=40)}">{{ number | padStart(2, "0")}}</i>
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'K3'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(number,i) in lottery" :key="i" class="mr-2" :class="['k3-0'+number]"></li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'KLSF'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers" v-show="code !=='CQKLSF'">
            <li v-for="(number,i) in lottery" :key="i"  class="ml-0p5"
                :class="{'number-red' : (number>18), 'number-blue' : (number<=18)}">
                <i class="font-size-2p5 font-weight-bold">{{ number | padStart(2,'0') }}</i>
              </li>
          </ul>
          <ul class="numbers"  v-show="code ==='CQKLSF'">
            <li v-for="(number,i) in lottery" :key="i"  class="number"
                :class="['number-' +  lotteryTypes[ code ].TYPES.toLowerCase(), 'number-'+ code.toLowerCase(), 'number-'+ lotteryTypes[ code ].TYPES.toLowerCase() + '-' + number]"
                 v-show="code==='CQKLSF'">
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === '11X5'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(num,i) in lottery" :key="i" :class="['num-0'+num]">
              <i class="d-none">{{ num }}</i>
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === '3D'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(num,i) in lottery" :key="i" :class="['num-0'+num]">
              <i class="d-none">{{ num }}</i>
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'SSC'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(num,i) in lottery" :key="i" :class="['num-0'+num]">
              <i class="d-none">{{ num }}</i>
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'XY28'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(num,i) in lottery" :key="i" :class="['num-0'+num]">
              <i class="d-none">{{ num }}</i>
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'SIX'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(num,i) in lottery" :key="i" :class="['num-0'+num]">
              <i class="d-none">{{ num }}</i>
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
  </div>   
</template>
<style scoped lang="scss">
  @import 'Index-scoped.scss';
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LOTTERIES from '@/CONFIGS/LOTTERIES/index';
@Component({
  name: 'LotteryNumber',
  })
class LotteryNumber extends Vue {
 public lotteryTypes = LOTTERIES;
 public lottery: any = {};
 public name: any = '';  // 接受code
 @Prop({ default: null })
 public olotterys !: any ;   //  组件接收到的值
 @Prop({ default: null })
 public code !: any ;

 public created() {
    this.dataScreen();
    let lotteryName = localStorage.getItem('lotteryName');
    this.name = lotteryName;
  }

 public dataScreen() {  // 对数据进行筛选 并取最新的值
  let _olotterys: any = {};
  let lotteryNumber = this.olotterys;
  for ( let olottery in lotteryNumber ) {
     if ( lotteryNumber[ olottery ].numbers == null ) {
       continue ;
     }
     _olotterys[ olottery ] = lotteryNumber[ olottery ].numbers;
   }
  lotteryNumber = _olotterys;
  this.lottery  = JSON.parse(lotteryNumber[ Object.keys( lotteryNumber )
     [ Object.keys( lotteryNumber ).length - 1 ] ]);
  return _olotterys;
 }
}

export default LotteryNumber;
</script>