<template lang="html">
  <div>
    <sticky-container class="chat" no-tab="true">
      <x-nav v-show="isActive" show-drawer="true">
        <template slot="right">
          <router-link style="margin-right:0.1rem;" to="/chat/setting">
            <i class="iconfont icon-icon-" style="font-size:1em;"></i>
          </router-link>
        </template>
      </x-nav>
      <div class="chat-container" ref="chatContainer" style="height:100%;">
        <div style="height:100%;">
          <chat-view ref="chatView"></chat-view>
        </div>
      </div>
      <div class="chat-loading">
        <div v-show="isFail" class="fail" style="margin-top:-5em;">
          <div class="FailImg">
            <p>聊天室连接失败了</p>
            <p style="margin-top:2em;">
              <a
                href="javascript:;"
                class="FormBtn"
                style="width:70%;"
                @click="confirmConnected()"
                >重试</a
              >
            </p>
          </div>
        </div>
        <div v-show="!isFail" class="loading">
          <div class="spinner">
            <spinner type="ripple" size="50px"> </spinner>
          </div>
          <p>正在加载聊天室</p>
          <p class="progress">{{ loadingText }}</p>
        </div>
      </div>
      <template slot="bottom">
        <div class="chat-inputs-wrap" ref="bottomInput">
          <chat-input @updateHeight="updateHeight"> </chat-input>
        </div>
      </template>
      <div
        id="followBetModel"
        style="position:absolute;bottom:0;width:100%;z-index:502;"
      ></div>
    </sticky-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isFail: false,
      loadingText: "初始化"
    };
  },
  mounted() {
    let __this = this;
    setTimeout(function() {
      __this.$router.push({
        path: "/chatroom"
      });
    }, 3000);
  },
  methods: {
    updateHeight() {}
  }
};
</script>

<style lang="scss" scoped>
</style>
