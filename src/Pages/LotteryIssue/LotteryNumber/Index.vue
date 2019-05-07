<template>
  <div class=""> 
    <div v-if="lotteryTypes[ code ].TYPES === 'PK10'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i" :class="['num-0'+number]">
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
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i" class="kl8-mt mt-0"
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
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i" class="mr-2" :class="['k3-0'+number]"></li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'KLSF'">
      <div class="card-body">
        <div class="nums-box"> 
          <ul class="numbers" v-show="code !=='CQKLSF'">
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i"  class="ml-0p5"
                :class="{'numred' : (number>18), 'numblue' : (number<=18)}">
                <i class="font-size-2p5 color-white">{{ number | padStart(2,'0') }}</i>
              </li>
          </ul>
          <ul class="numbers"  v-show="code ==='CQKLSF'">
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i"  class="number"
                :class="['number-' +  lotteryTypes[ code ].TYPES.toLowerCase(), 'number-'+ code.toLowerCase(), 'number-'+ lotteryTypes[ code ].TYPES.toLowerCase() + '-' + number]"
                 v-show="code==='CQKLSF'">
              </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开{{'dddd' }}期，还有{{ 'ddd'}}期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === '11X5'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i" class="numblue">
              <i class="font-size-2p5 color-white">{{ number }}</i>
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
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i" class="numred">
              <i class="font-size-2p5 color-white">{{ number }}</i>
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
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i" 
               :class="['number-' + lotteryTypes[ code ].TYPES.toLowerCase(), 'number-'+ code.toLowerCase(), 'number-'+ lotteryTypes[ code ].TYPES.toLowerCase() + '-' + number]" class="numblue">
              <i class="font-size-2p5 color-white"  v-if=" code !=='CQSSC'">{{ number }}</i>
            </li>
          </ul>
        </div>
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'XY28'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers position-relative pcdd">
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i" class="numblue mr-3">
              <i class="font-size-2p5 color-white">{{ number }}</i>
            </li>
            <em></em>
            <em></em>
            <em></em>
            <span :key="i" class="numred">
            <i class="font-size-2p5 color-white">{{ JSON.parse(getLastLotteryIssues.numbers) | sum  }}</i>
            </span>
          </ul>
        </div>   
      </div>
      <p class="card-count">已开144期，还有144期</p>
    </div>
    <div v-if="lotteryTypes[ code ].TYPES === 'SIX'">
      <div class="card-body">
        <div class="nums-box">
          <ul class="numbers">
            <li v-for="(number,i) in JSON.parse(getLastLotteryIssues.numbers)" :key="i" class="numblue six">
              <i class="font-size-2p5 color-white">{{ number }}</i>
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

  @Prop({ default: null })
  public oLotterys!: any;

  @Prop({ default: null })
  public code!: any;

  public get getLastLotteryIssues(): object {
    let oLotteryIssues = this.oLotterys;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.pop() || {};
    return oLotteryIssue;
  }

}

export default LotteryNumber;
</script>