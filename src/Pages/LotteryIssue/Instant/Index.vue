<template>
  <div class="">
    <div class="instant-lottery">
      <div class="text-center">
        <div class="m-30">
          <span  v-for="(oMenu , iIndex) in menus" :key="iIndex"><a href="javascript:alert('敬请期待...')">{{oMenu}}</a></span>
          <!-- <ul>
            <li v-for="(oMenu , iIndex) in menus" :key="iIndex"><a href="javascript:alert('敬请期待...')">{{oMenu}}</a></li>
          </ul> -->
        </div>
        <div class="clear"></div>
      </div>
    </div> 
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style> 
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Instant',
  components: {

  },
})
class Instant extends Vue {
public menus = ['即将开奖', '路珠分析', '冷热分析', '冠亚和走势', '单双大小历史',
     '龙虎统计', '每日长龙统计', '路珠分析', '冷热分析', '冠亚和走势', '单双大小历史', '路珠分析', '冠亚和走势', '单双大小历史', '路珠分析'];
}
export default Instant;
</script> 