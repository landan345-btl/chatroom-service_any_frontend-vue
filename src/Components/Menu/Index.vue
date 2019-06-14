<template>
  <div
    class="l-drawer v-transfer-dom"
    style="height: 100vh;top: 51px;right: 652px;overflow: hidden;"
    v-show="showMenu"
  >
    <div class="menu" style="width: 300px;position: absolute;left:300px;">
      <div class="list" style="top: 0;">
        <div
          class="vue-pull-to-wrapper"
          style="height: 100%; transform: translate3d(0px, 0px, 0px);"
        >
          <div class="scroll-container">
            <ul>
              <li style="border:none;padding: 0;">
                <a href="javascript:;" @click="logout()">
                  <i class="iconfont icon-cc-power-switch"></i>
                  <span>退出</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" style="" @click="close"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { AuthenticationHelper } from "@/Helper/";

let oAuthenticationHelper = new AuthenticationHelper();
@Component({
  components: {}
})
export default class Menu extends Vue {
  @Prop()
  showMenu = false;
  logout(): any {
    oAuthenticationHelper.removeJwt();
    let sJwt = oAuthenticationHelper.getJwt();
    if (!sJwt) {
      this.$router.push({
        path: "/login"
      });
    }
    this.$emit("showmenu", false);
  }
  close() {
    this.$emit("showmenu", false);
  }

}
</script>

<style lang="scss" scoped></style>
