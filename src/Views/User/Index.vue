<template>
  <div>
    <div class="lay-sticky-container router-view">
      <div class="sticky-part sticky-fixed">
        <div
          dir="ltr"
          class="resize-sensor"
          style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"
        >
          <div
            class="resize-sensor-expand"
            style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"
          >
            <div
              style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 610px; height: 10px;"
            ></div>
          </div>
          <div
            class="resize-sensor-shrink"
            style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"
          >
            <div
              style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"
            ></div>
          </div>
        </div>
      </div>
      <div class="scroll-part" style="">
        <div class="sticky-placeholder" style="height: 0px;"></div>
        <div class="l-wrap">
          <div class="l-cell hightlight-row">
            <div class="l-cell-item">头像</div>
            <div class="l-cell-item" style="position: relative;">
              <a for="avatarInput" style="display: block;">
                <div class="Avatar">
                  <img v-show="userUrl" :src="userUrl" alt="" />
                </div>
              </a>
            </div>
            <div class="l-cell-item">
              <span class="NavArrow"></span>
            </div>
          </div>
          <input
            id="avatarInput"
            type="file"
            accept=".jpg, .png, .gif, .jpeg, image/jpeg, image/png, image/gif"
            style="width: 0.1px; height: 0.1px; opacity: 0; position: absolute; left: -2000px;"
          />
          <div class="l-cell hightlight-row">
            <div class="l-cell-item">昵称</div>
            <div class="l-cell-item">
              <a href="javascript:;">{{ userNickname || "-"}}</a>
            </div>
            <div class="l-cell-item">
              <span class="NavArrow"></span>
            </div>
          </div>
          <div class="l-cell">
            <div class="l-cell-item">我的等级</div>
            <div class="l-cell-item">
              <img
                v-show="
                  userRole === 'SYSTEM' || userRole === 'ADMIN'
                "
                src="../../assets/images/icon-admin.gif"
              />
              <img
                v-show="userLevel == '1'"
                src="../../assets/images/icon-member-01.gif"
              />
              <img
                v-show="userLevel == '2'"
                src="../../assets/images/icon-member-02.gif"
              />
              <img
                v-show="userLevel == '3'"
                src="../../assets/images/icon-member-03.gif"
              />
              <img
                v-show="userLevel == '4'"
                src="../../assets/images/icon-member-04.gif"
              />
              <img
                v-show="userLevel == '5'"
                src="../../assets/images/icon-member-05.gif"
              />
              <img
                v-show="userLevel >= '6' && userRole !== 'SYSTEM' && userRole !== 'ADMIN' "
                src="../../assets/images/icon-member-06.gif"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-bottom sticky-fixed">
        <div
          dir="ltr"
          class="resize-sensor"
          style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"
        >
          <div
            class="resize-sensor-expand"
            style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"
          >
            <div
              style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 610px; height: 10px;"
            ></div>
          </div>
          <div
            class="resize-sensor-shrink"
            style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"
          >
            <div
              style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { AuthenticationHelper } from "@/Helper/";

import oIo from "socket.io-client";

let oAuthenticationHelper = new AuthenticationHelper();
@Component({
  components: {}
})
export default class Setting extends Vue {
  userUrl: any = "";
  userNickname: any = "";
  userLevel: any = "";
  userRole: any = "";
  mounted() {
    this.userUrl =
      "http://fea.socket.com/storage/" + oAuthenticationHelper.getUserUrl();
    this.userNickname = oAuthenticationHelper.getUserNickname();
    this.userLevel = oAuthenticationHelper.getUserLevel();
    this.userRole = oAuthenticationHelper.getUserRole();
  }
}
</script>

<style lang="scss" scoped>
@import "Index.scss";
</style>
