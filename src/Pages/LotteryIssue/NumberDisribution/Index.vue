<template>
  <div class="number-distribution">
    <div class="head">
      <span>查看号码分布:</span>
      <span :class="{'active' :oHead.on}" 
        @click="showNumbers(index)" v-for="(oHead,index) in recordHeads" 
        :key="index">{{oHead.title}}
        <i></i>
      </span>
    </div>
    <div class="head">
      <span>查看大小分布:</span>
      <span :class="{'active' :oHead.on}" 
        @click="showNumber1(index)" v-for="(oHead,index) in recordHeads1" 
        :key="index">{{oHead.title}}
        <i></i>
      </span>
      <span class="reset">还原</span>
    </div>
  </div>
</template>
<style lang="scss">
  .number-distribution {
      .head {
        min-width: 100%;
        padding: 2vmin 2vmin;
        box-sizing: border-box;
        span:first-child {
          font-size:2vmin;
          margin-right:3vmin;  
        }
        span:nth-of-type(n+2) {
          padding:0.6vmin 1.1vmin;
          border-radius:0.5vmin;
          border:1px solid #DDDDDD;
          font-size:1.3vmin;
          margin-left:0.8vmin;
        }
        span:nth-of-type(n+2):hover {
          cursor: pointer;
          color:#f4831e;
        } 
        .reset {
          display:inline-block;
          height:32px;
          background:#f9982e;
          width:90px!important;
          text-align: center;
          color:#fff;
        } 
     }
  }     
</style>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
@Component({
  name: 'NumberDisribution',
  })
class NumberDisribution extends Vue {
  public recordHeads = [
    {title: '号码1', on: false}, {title: '号码2', on: false}, {title: '号码3', on: false}, {title: '号码4', on: false}, {title: '号码5', on: false},
    {title: '号码6', on: false}, {title: '号码7', on: false}, {title: '号码8', on: false}, {title: '号码9', on: false}, {title: '号码10', on: false},
    ];
  public recordHeads1 = [
    {title: '单', on: false}, {title: '双', on: false}, {title: '大', on: false}, {title: '小', on: false}, {title: '对子号', on: false},
    ];

  @Emit('bind-send')
  public send(index: any ) {
    return index;
  }
  public showNumbers(index: number) {
   this.recordHeads[index].on = !this.recordHeads[index].on;
   this.send(index + 1);
  }
}

export default NumberDisribution;
</script>