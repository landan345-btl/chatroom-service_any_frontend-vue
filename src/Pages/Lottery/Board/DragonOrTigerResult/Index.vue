<template>
  <div class="dragon-or-tiger-result pb-2 background-white position-relative">
    <div class="pl-2 pr-2 font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">龙虎露珠</span>
      <I-radio-group v-model="date" type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近50期"></Radio>
        <Radio label="最近100期" class="d-xs-none"></Radio>
      </I-radio-group>
    </div>
    <I-divider/>
    <div class="announcement-wrapper mt-2 pr-1 font-size-1p5 position-absolute">
      <div @mouseleave="hideAnnouncement()" @click="toggleAnnouncement()" class="announcement" :class="[ isAnnouncementShowed ? 'announcement-showed' : '']">
        <p>
          <span>说明：1 表格需从左向右浏览，右侧一列为最新结果；</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 当长龙中断时，则另起一列显示结果；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 龙虎说明：</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;冠　军龙/虎：“第一名”车号大于“第十名”车号视为【龙】中奖、反之小于视为【虎】中奖；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亚　军龙/虎：“第二名”车号大于“第九名”车号视为【龙】中奖、反之小于视为【虎】中奖；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第三名龙/虎：“第三名”车号大于“第八名”车号视为【龙】中奖、反之小于视为【虎】中奖；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第四名龙/虎：“第四名”车号大于“第七名”车号视为【龙】中奖、反之小于视为【虎】中奖；</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第五名龙/虎：“第五名”车号大于“第六名”车号视为【龙】中奖、反之小于视为【虎】中奖</p>
      </div> 
    </div>
    <div class="mb-2 pl-2 pr-2 font-size-1p5">
      筛选名次：
      <I-checkbox-group v-model="decorator" class="d-inline-block mr-2">
        <Checkbox label="第一名"></Checkbox>
        <Checkbox label="第二名"></Checkbox>
        <Checkbox label="第三名"></Checkbox>
        <Checkbox label="第四名"></Checkbox>
        <Checkbox label="第五名"></Checkbox>
      </I-checkbox-group>
      <span class="mr-2">全选</span>
      <span>清空</span>
    </div>
    <div>
      <Result-table />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {
  ITabs,
  IDivider,
  IRadioGroup,
  ICheckboxGroup,
  ResultTable,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'DragonOrTigerResult',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
    ResultTable,
  },
})
class DragonOrTigerResult extends Vue {
  public date = '今天';
  public decorator = ['折线', '遗漏'];

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement() {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement() {
     this.isAnnouncementShowed = false;
  }

}

export default DragonOrTigerResult;
</script>
