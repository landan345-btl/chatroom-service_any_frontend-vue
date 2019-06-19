<template>
  <div style="position:relative;">
    <div class="chat" no-tab="true" >
      <div v-show="isActive" show-drawer="true">
        <template slot="right">
          <router-link style="margin-right:0.1rem;" to="/chat/setting">
            <i class="iconfont icon-icon-" style="font-size:1em;"></i>
          </router-link>
        </template>
      </div>

      <div class="chat-container" ref="chatContainer" style="height:100%;">
        <div style="height:100%;">
          <div class="lds-ripple"><div></div><div></div></div>
          <!-- <chat-view ref="chatView"></chat-view> -->
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
            <!-- <spinner type="ripple" size="50px"> </spinner> -->
          </div>
          <p>正在加载聊天室</p>
          <p class="progress">{{ loadingText }}</p>
        </div>
      </div>
      <template slot="bottom">
        <div class="chat-inputs-wrap" ref="bottomInput">
          <!-- <chat-input @updateHeight="updateHeight"> </chat-input> -->
          <input type="text" name="" value="" />
        </div>
      </template>
      <div
        id="followBetModel"
        style="position:absolute;bottom:0;width:100%;z-index:502;"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Connection extends Vue {
  isActive = true;
  isFail = false;
  loadingText = "初始化";
  mounted() {
    let __this = this;
    __this.loadingText = "创建聊天室";
    // this.$socket.on("connect", this.connectWebSocket);
  }
  updateHeight() {}
  connectWebSocket(data: any) {
    let __this = this;
    __this.$router.push({
      path: "/chatroom"
    });
  }
}
</script>

<style lang="scss">
.chat{
  background: #fff;
  margin-top: 0px;
  position: absolute;
  top: -30px;
  z-index: 99;
  height: 100vh;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  background: #fff;
  top: 22vh;
  left: 50%;
  margin-left: -32px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #000;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

</style>
