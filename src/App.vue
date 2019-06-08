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
          <div class="back" @click="this.$router.go(-1)">
            <a href="javascript:void(0)" class="back-btn">首页</a>
          </div>
          <div class="left-slot"></div>
        </div>
      </div>
      <div class="title">聊天室</div>
      <div class="nav-item">
        <div class="right-slot">
          <a href="#/chat/setting" class="" style="margin-right: 0.1em;">
            <i class="iconfont icon-icon-" style="font-size: 1em;"></i>
          </a>
          <div class="drawer">
            <a href="javascript:;">
              <span class="iconfont icon-guidedrawer"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
@Component({ components: { HelloWorld } })
export default class App extends Vue {
  // name: "app",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="css" scoped>
@import "./assets/css/app.css";
@import "./assets/css/chunk-vendors.css";
@import "./assets/css/chat.css";
@import "./assets/css/font.css";
@import "./assets/css/index.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{color: #fff;}
</style>
