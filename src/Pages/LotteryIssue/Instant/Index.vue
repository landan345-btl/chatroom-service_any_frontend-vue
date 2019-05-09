<template>
  <div class="">
    <div class="instant-lottery" v-if="lotteryTypes[code].TYPES==='PK10'">
      <div class="text-center">
        <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">路珠分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">综合分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">基本走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">龙虎走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">今日号码统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">单双大小历史</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">号码路珠</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">形态走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">单双走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">单双大小路珠</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">历史号码统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">两面统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">每日长龙统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">定位走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">总和路珠</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">玩法规则</el-button></a>
          </span>
        </div>
      </div>
    </div>
    <div class="instant-lottery" v-if="lotteryTypes[code].TYPES==='KL8'">
      <div class="text-center">
        <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">路珠分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">综合分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">基本走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">龙虎走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">今日号码统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">单双大小历史</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">号码路珠</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">形态走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">单双走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">玩法规则</el-button></a>
          </span>
        </div>
      </div>
    </div> 
    <div class="instant-lottery" v-if="lotteryTypes[code].TYPES==='K3'">
      <div class="text-center">
        <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">路珠分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">综合分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">基本走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">玩法规则</el-button></a>
          </span>
        </div>
      </div>
    </div> 
    <div class="instant-lottery" v-if="lotteryTypes[ code ].TYPES === 'KLSF'">
      <div class="text-center">
         <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">路珠分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">综合分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">基本走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">玩法规则</el-button></a>
          </span>
        </div>
      </div>
    </div> 
    <div class="instant-lottery" v-if="lotteryTypes[ code ].TYPES === '11X5'">
      <div class="text-center">
         <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">路珠分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">玩法规则</el-button></a>
          </span>
        </div>
      </div>
    </div> 
    <div class="instant-lottery" v-if="lotteryTypes[ code ].TYPES === '3D'">
      <div class="text-center">
         <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">路珠分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">综合分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">基本走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">玩法规则</el-button></a>
          </span>
        </div>
      </div>
    </div> 
    <div class="instant-lottery" v-if="lotteryTypes[ code ].TYPES === 'SSC'">
      <div class="text-center">
          <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">路珠分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">综合分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">基本走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">龙虎走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">今日号码统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">单双大小历史</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">号码路珠</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">形态走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">单双走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">单双大小路珠</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">历史号码统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">两面统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">每日长龙统计</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">定位走势</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">总和路珠</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">玩法规则</el-button></a>
          </span>
        </div>
      </div>
    </div>  
    <div class="instant-lottery" v-if="lotteryTypes[ code ].TYPES === 'XY28'">
      <div class="text-center">
         <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">路珠分析</el-button></a>
          </span>
          <span>
            <a><el-button type="text" @click="open">综合分析</el-button></a>
          </span>
        </div>
      </div>
    </div> 
    <div class="instant-lottery" v-if="lotteryTypes[ code ].TYPES === 'SIX'">
      <div class="text-center">
         <div class="m-30">
          <span>
            <a><el-button type="text" @click="open">玩法规则</el-button></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style> 
<script lang="ts">
import { Component, Vue , Prop} from 'vue-property-decorator';
import {
  LOTTERIES,
} from '@/CONFIGS/';


@Component({
  name: 'Instant',
  components: {

  },
})
class Instant extends Vue {
  @Prop()
  public code!: any;

  public lotteryTypes = LOTTERIES;
  public open() {
      this.$alert('<strong>正在努力更新当中...</strong>', '温馨提示:', {
        dangerouslyUseHTMLString: true,
      });
    }
  }
export default Instant;
</script> 