<template>
  <div class="Item type-hint">
    <div class="lay-block">
      <div class="lay-content">
        <div>
          <div class="innr">
            <span
              style="white-space: pre-wrap; word-break: break-all;"
              v-html="content"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class PoppMsg extends Vue {
  content: "";
  canSpeak: false;
  // chatType: Array<any> = ["setnickname","historyend"];
  getMsgComponent(t: any) {
    let __this = this;
    switch (t.chatType) {
      case "gag":
      case "ungag":
        return (__this.content =
          "您已被" + (t.chatType === gag ? "禁言" : "解除禁言"));
        break;
      case "speakable":
        return (__this.content =
          "当前时段系统" + this.canSpeak ? "开启聊天" : "关闭聊天");
        break;
      case "setnickname":
        return (__this.content =
          '您尚未设置昵称, <a href="#/chat/setting">点击这里</a>设置,昵称设置过后将无法再次更改哦');
        break;
      case "setnickname":
        return (__this.content =
          '您还未设置头像,<a href="#/chat/setting">点击这里</a>设置');
        break;
      case "historyend":
        return (__this.content = "以上为历史消息");
        break;
      default:
        return null;
    }
  }
}
</script>

<style lang="scss" scoped></style>
t._s(t.content)
