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
            <div class="l-cell-item">头像(点击更换)</div>
            <div class="l-cell-item" style="position: relative;">
              <a for="avatarInput" style="display: block;">
                <div class="Avatar">
                  <img src="/img/avatar.png" alt="" />
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
              <a href="javascript:;">qi***21</a>
            </div>
            <div class="l-cell-item">
              <span class="NavArrow"></span>
            </div>
          </div>
          <div class="l-cell hightlight-row">
            <div class="l-cell-item">我的关注</div>
            <div class="l-cell-item">
              <a href="#/chat/setting/myfollow" class="">0</a>
            </div>
            <div class="l-cell-item">
              <span class="NavArrow"></span>
            </div>
          </div>
          <div class="l-cell">
            <div class="l-cell-item">我的赞</div>
            <div class="l-cell-item">
              <a href="javascript:;">0</a>
            </div>
          </div>
          <div class="l-cell">
            <div class="l-cell-item">我的等级</div>
            <div class="l-cell-item">
              <img src="img/chat/icon_member01.gif" />
            </div>
          </div>
          <div class="l-cell">
            <div class="l-cell-item">显示我的投注</div>
            <div class="l-cell-item">
              <input type="checkbox" class="inline-x-switch weui-switch" />
            </div>
          </div>
          <div class="l-cell">
            <div class="l-cell-item">屏蔽所有投注</div>
            <div class="l-cell-item">
              <input type="checkbox" class="inline-x-switch weui-switch" />
            </div>
          </div>
        </div>
        <div class="vux-x-dialog setnickname-dialog">
          <div class="weui-mask" style="display: none;"></div>
          <div class="weui-dialog" style="display: none;">
            <div>
              <p>请输入昵称, 昵称设置后将无法更改</p>
              <p>
                <input placeholder="请输入中文，最多6个字" />
              </p>

              <p style="text-align: center;">
                <a
                  href="javascript:;"
                  class="FormBtn"
                  style="width: 83%; padding: 0.6em 0px;"
                  >设置</a
                >
              </p>
              <p>
                <a href="javascript:;" class="action-cancel">
                  <i class="iconfont icon-close"></i>取消</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="bottom-placeholder" style="height: 0px;"></div>
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

let oAuthenticationHelper = new AuthenticationHelper();
@Component({
  components: {}
})
export default class Setting extends Vue {}
</script>

<style lang="scss" scoped>
@import "Index.scss";
</style>
