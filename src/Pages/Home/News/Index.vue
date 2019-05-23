<template>
  <div class="news">
    <span class="left d-inline-block">
      <I-carousel :images="images"/>
    </span>
    <span class="right d-inline-block align-top">
      <div class="top position-relative">
        <span class="title font-weight-bold">行业新闻</span>
        <span class="more position-absolute">更多</span>
      </div>
      <div class="line">
      </div>
      <div class="messages align-top" v-for="(sMessage, iIndex) in messages" :key="iIndex">
        <div class="message">
          {{sMessage}}
        </div>
      </div>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import {
  Component,
  Watch,
  Vue,
} from 'vue-property-decorator';

import {
  warn,
} from 'vue-class-component/lib/util';

import {
  ICarousel,
} from '@/Components/';

@Component({
  name: 'News',
  components: {
    ICarousel,
  },
})
class News extends Vue {
  public messages: string[] = [
    '山西11选5号码推荐4月19日上午',
    '辽宁11选5号码推荐4月19日上午',
    '吉林11选5号码推荐4月19日上午',
    '安徽快三出号分析对子11转热 4月18日',
    '吉林快三出号分析对子11转热 4月18日',
    '江西快三出号分析对子22转热 4月18日',
    '湖北11选5号码推荐4月17日上午',
  ];

  public images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
  ];
}

export default News;
</script>
