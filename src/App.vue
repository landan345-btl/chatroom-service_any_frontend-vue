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
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
@Component({ components: { } })
export default class App extends Vue {
  // name: "app";
  back(){
    this.$router.go(-1)
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";

</style>

