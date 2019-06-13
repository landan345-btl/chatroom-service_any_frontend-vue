<template>
  <div id="app">
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
        <div class="right-slot">
          <a href="" class="" style="margin-right: 0.1em;" @click="gotoSetting">
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
    <transition name="viewTransition">
      <Menu :showMenu="showMenu" @showmenu="showmenu" />
    </transition>
  </div>
</template>

<script>
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import Menu from "@/components/Menu/Index.vue";
@Component({
  components: { Menu }
})
export default class App extends Vue {
  showMenu = false;
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
  showmenu(data) {
    this.showMenu = data;
  }
  gotoSetting() {
    this.$router.push({ path: "/setting" });
  }
  @Watch("this.$route")
  RouteChange(newVal) {}
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>
