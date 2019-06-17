<template>
  <div id="app" @click="closeMenu">
    <!-- <x-nav v-show=""></x-nav> -->
    <div class="wrap-router">
      <transition name="viewTransition">
        <keep-alive include="chat">
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <header class="nav v-transfer-dom">
      <div class="nav-item">
        <div class="nav-left-wrap">
          <div class="back" @click="back">
            <a href="javascript:void(0)" class="back-btn">首页</a>
          </div>
          <div class="left-slot"></div>
        </div>
      </div>
      <div class="title" @click="goToChatroom()">聊天室</div>
      <div class="nav-item">
        <div  class="right-slot">
          <a
            href="javascript:;"
            class=""
            style="margin-right: 0.1em;"
            @click="gotoSetting"
          >
            <i class="iconfont icon-icon-" style="font-size: 1em;"></i>
          </a>
          <div class="drawer">
            <a href="javascript:;" @click="taggle">
              <span class="iconfont icon-guidedrawer"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <Menu :showMenu="showMenu" @showmenu="showmenu" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import Menu from "@/Components/Menu/Index.vue";
import { AuthenticationHelper } from "@/Helper/";

let oAuthenticationHelper = new AuthenticationHelper();

@Component({
  components: { Menu }
})
export default class App extends Vue {
  showMenu = false;
  showSetting = false;

  public get getJwt(): string | null {
    let sJwt = oAuthenticationHelper.getJwt();
    return sJwt;
  }
  back() {
    this.$router.go(-1);
  }
  goToChatroom() {
    this.$router.push({
      path: "/chatroom"
    });
  }
  taggle() {
    this.showMenu = !this.showMenu;
  }
  showmenu(data: any) {
    this.showMenu = data;
  }
  gotoSetting() {
    this.showSetting = !this.showSetting;
    if (this.showSetting) {
      this.$router.push({ path: "/setting" });
    } else {
      this.$router.push({ path: "/chatroom" });
    }
  }
  closeMenu() {}
  @Watch("$route")
  RouteChange(newVal: any) {
    let sJwt = oAuthenticationHelper.getJwt();
    sJwt ? (this.showSetting = true) : (this.showSetting = false);
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>
