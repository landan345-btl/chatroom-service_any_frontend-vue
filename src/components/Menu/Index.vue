<template>
  <transition name="viewTransition">
  <div
    class="l-drawer v-transfer-dom"
    style="height: 100%;top: 51px;right: 659px;width: 300px;overflow: hidden;"
    v-show="showMenu"
  >
    <div class="menu">
      <div class="list" style="top: 0;">
        <div
          class="vue-pull-to-wrapper"
          style="height: 100%; transform: translate3d(0px, 0px, 0px);"
        >
          <div class="scroll-container">
            <ul>
              <li style="border:none;padding: 0;">
                <a href="#/" class="active">
                  <i
                    class="iconfont icon-yidiandiantubiao22"
                    style="margin-bottom: 0.2em;"
                  ></i>
                  <span>返回首页</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="#/orders" class="">
                  <i class="iconfont icon-cart"></i>
                  <span
                    >未结算(
                    <!---->0)</span
                  ></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="#/game/settled" class="">
                  <i class="iconfont icon--medal"></i>
                  <span>今日已结</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="javascript:;">
                  <i class="iconfont icon-sharecash"></i>
                  <span>今日输赢( 0)</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="#/game/betlog" class="">
                  <i class="iconfont icon-classnotes"></i>
                  <span>下注记录</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="#/game/history" class="">
                  <i class="iconfont icon-cup"></i>
                  <span>开奖结果</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="#/game/rule" class="">
                  <i class="iconfont icon-info"></i>
                  <span>游戏规则</span></a
                >
              </li>

              <li style="border:none;padding: 0;">
                <a href="#/activity" class="">
                  <i class="iconfont icon-tag"></i>
                  <span>优惠活动</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="#/user/coorp" class="">
                  <i class="iconfont icon-global"></i>
                  <span>加盟合作</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a
                  href="https://ic86.ichatshop.com/chat/Hotline/channel.jsp?cid=5010845&amp;cnfid=4281&amp;j=2250298383&amp;s=1"
                  target="_blank"
                >
                  <i class="iconfont icon-icon-1"></i>
                  <span>客服</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="#/user/setting" class="">
                  <i class="iconfont icon-icon-"></i>
                  <span>系统设置</span></a
                >
              </li>
              <li style="border:none;padding: 0;">
                <a href="javascript:;">
                  <i class="iconfont icon-cc-power-switch"></i>
                  <span>退出</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" style=""></div>
  </div>
</transition>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Menu extends Vue {
  @Prop()
  showMenu = false;
  // showMenu = false;
}
</script>

<style lang="scss" scoped></style>
