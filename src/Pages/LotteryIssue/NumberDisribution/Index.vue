<template>
  <div class="number-distribution">
    <div class="head">
      <span>查看号码分布:</span>
      <span class="active">号码1<i></i></span>
      <span>号码1<i></i></span>
      <span>号码1<i></i></span>
      <span>号码1<i></i></span>
      <span>号码1<i></i></span>
      <span>号码1<i></i></span>
      <span>号码1<i></i></span>
      <span>号码1<i></i></span>
      <span>号码1<i></i></span>
      <span>号码10<i></i></span>
    </div>
    <div class="head">
      <span>查看号码分布:</span>
      <span class="active">单<i></i></span>
      <span>双<i></i></span>
      <span>大<i></i></span>
      <span>小<i></i></span>
      <span>对子号<i></i></span>
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
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'NumberDisribution',
  })
class NumberDisribution extends Vue {
}

export default NumberDisribution;
</script>