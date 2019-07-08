<template>
  <div id="app" @click="closeMenu">
    <div class="wrap-router">
      <transition name="viewTransition">
        <keep-alive include="chat">
          <router-view @flagChange="flagChange"></router-view>
        </keep-alive>
      </transition>
    </div>
    <header class="nav v-transfer-dom">
      <div class="nav-item">
      </div>
      <div class="title" @click="goToChatroom()" style="text-align:center;">聊天室</div>
      <div class="nav-item" style="width:224px;">
        <div  class="right-slot" v-if="isShowSetting">
          <a
            href="javascript:;"
            class=""
            style="margin-right: 0.1em;"
            @click="gotoSetting"
          >
            <i class="iconfont icon-icon-" style="font-size: 1em;"></i>
          </a>
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
  isShowSetting = false;
  public get getJwt(): string | null {
    let sJwt = oAuthenticationHelper.getJwt();
    return sJwt;
  }
  mounted() {

  }
  flagChange(data: any) {
    this.isShowSetting = data;
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
    this.showSetting = !this.showSetting
    if (this.showSetting) {
      this.$router.push({ path: "/setting" });
    } else {
      this.$router.push({ path: "/chatroom" });
    }
  }
  closeMenu() {}
  @Watch("getJwt")
  FlagChange(newVal: any) {
    console.log(newVal);
    newVal ? this.isShowSetting = true : this.isShowSetting = false;
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>
