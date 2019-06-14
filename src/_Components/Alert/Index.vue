<template>
  <div @click="">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">弹窗标题</strong>
      </div>
      <div class="weui-dialog__bd">弹窗内容，告知当前页面信息等</div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary"
          >确定</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Alert extends Vue {

}
</script>

<style lang="scss" scoped></style>
