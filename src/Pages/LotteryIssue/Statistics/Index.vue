<template>
   <div class="statistics">
    <div class="title">今日双面统计</div>
    <table>
      <tbody>
      <tr>
        <th>名次</th>
        <th colspan="4">冠军</th>
        <th colspan="4">亚军</th>
        <th colspan="4">第三名</th>
        <th colspan="4">第四名</th>
        <th colspan="4">第五名</th>
        <th colspan="4">第六名</th>
        <th colspan="4">第七名</th>
        <th colspan="4">第八名</th>
        <th colspan="4">第九名</th>
        <th colspan="4">第十名</th>
      </tr>
      <tr>
        <td>单双大小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
      </tr>
      <tr>
        <td>出现次数</td>
        <td></td>
        <!-- <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isSmallOrLarge}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isSmallOrLarge}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td>
        <td>{{ JSON.parse(num.numbers) | substr(0,1) | isOddOrEven}}</td> -->
      </tr>
      </tbody>
    </table>  
    <table class="m-t-1vmin">
      <tr>
        <th>冠亚龙虎</th>
        <th colspan="4">冠亚和</th>
        <th colspan="2">第一名龙虎</th>
        <th colspan="2">第二名龙虎</th>
        <th colspan="2">第三名龙虎</th>
        <th colspan="2">第四名龙虎</th>
        <th colspan="2">第五名龙虎</th>
      </tr>
      <tr>
        <td>单双大小龙虎</td>
        <td>单</td>
        <td>双</td>
        <td>大</td>
        <td>小</td>
        <td>龙</td>
        <td>虎</td>
        <td>龙</td>
        <td>虎</td>
        <td>龙</td>
        <td>虎</td>
        <td>龙</td>
        <td>虎</td>
        <td>龙</td>
        <td>虎</td>
      </tr>
      <tr>
        <td>出现次数</td>
        <td>98</td>
        <td>77</td>
        <td>69</td>
        <td>106</td>
        <td>90</td>
        <td>85</td>
        <td>85</td>
        <td>90</td>
        <td>83</td>
        <td>92</td>
        <td>98</td>
        <td>77</td>
        <td>82</td>
        <td></td>
      </tr>
    </table>   
   </div>
</template>
<style lang="scss">
  .statistics {
    width: 100%;
    padding: 0 2vmin 2vmin;
    border-bottom: 2px solid #e7e7e7;
    box-sizing: border-box;
      table {
        background: #e6e6e6;
        width: 100%;
        tr {
          height:4.5vmin;
          line-height:4.5vmin;
          th {
            font-size: 1rem;
            background: #f5f5f5;
            text-align: center;
            border:1px solid #e6e6e6;
          }
          td {
            background:#fff;
            color:#666;
            text-align:center;
            border:1px solid #e6e6e6;
            font-size:0.8rem;
            }
        }
      }
      .title {
        width: 100%;
        font-size: 1rem; 
      } 
      .m-t-1vmin {
        margin-top:1vmin;
    }  
  }
</style>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'Statistics',
  })
class Statistics extends Vue {
  @Prop({ default: null })
  public lotteryIssues !: any;

  @Prop({ default: null })
  public code !: any;

  public get oLotteryIssues(): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues;
    return oLotteryIssue;
  }
}

export default Statistics;
</script>