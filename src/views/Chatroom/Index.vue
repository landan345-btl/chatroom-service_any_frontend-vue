<template>
  <div id="chat" @click="checkIsLogined()">
    <div class="lay-sticky-container chat router-view">
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
        <div class="chat-container" style="height: 825.406px;">
          <div style="height: 100%;">
            <div style="height: 100%;">
              <div
                v-show="!atScrollBottom"
                class="set-bottom"
                @click="setScrollBottom"
              >
                <i class="iconfont icon-triangle-arrow-d"></i>
              </div>
              <div class="chat-announce">
                <div class="ttl">
                  <i class="iconfont icon-gonggao"></i>&nbsp;公告:
                </div>
                <div class="scroll">
                  <marquee scrollamount="3">
                    <ol>
                      <li>
                        看计划，抢红包，交流玩彩心得，尽在多彩聊天室！最新抢红包活动详情：2018年07月01日起，
                        1.【开门红09:00红包金额 288元，抢包标准：最近两天充值
                        100以上流水 100以上】 2.【财临门14:00红包金额
                        388元，抢包标准：最近两天充值 500以上流水 1000以上】
                        3【红到底20:00红包金额588元，抢包标准：最近两天充值1000以上流水
                        3000以上】 4.
                        好运红包98福利（最近两天充值100以上流水100以上）不定时派送~
                        5.聊天室会员抢红包需要达到的条件是：存款金额需要达到100元以上，打码量需要达到100元；
                        多彩官方导航网址：d558888.com，多彩彩票，业内最佳彩票投注平台，值得信赖！
                      </li>
                      <li>
                        好消息，看计划，抢红包，交流玩彩心得，尽在多彩聊天室！最新抢红包活动详情：2018年07月01日起，
                        1.【开门红09:00红包金额 288元，抢包标准：最近两天充值
                        100以上流水 100以上】 2.【财临门14:00红包金额
                        388元，抢包标准：最近两天充值 500以上流水 1000以上】
                        3【红到底20:00红包金额588元，抢包标准：最近两天充值1000以上流水
                        3000以上】 4.
                        好运红包98福利（最近两天充值100以上流水100以上）不定时派送~
                        5.聊天室会员抢红包需要达到的条件是：存款金额需要达到100元以上，打码量需要达到100元；
                        多彩官方导航网址：d558888.com，多彩彩票，业内最佳彩票投注平台，值得信赖！
                      </li>
                    </ol>
                  </marquee>
                </div>
              </div>

              <div
                ref="view"
                class="chat-view message-list s-announce"
                style="text-align:left;"
                @scroll="onScroll"
              >
                <div class="Item type-hint">
                  <div class="lay-block">
                    <div class="lay-content">
                      <div>
                        <div class="innr">
                          <!-- <i class="iconfont icon-warning"></i> -->
                          <span
                            style="white-space: pre-wrap; word-break: break-all;"
                            v-html="content"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 系统红包 -->
                <div class="Item type-left" style="display:none;">
                  <div class="lay-block">
                    <div class="avatar">
                      <img
                        src="../../assets/images/packavatar.jpg"
                        alt="红包消息"
                      />
                    </div>

                    <div class="lay-content">
                      <div class="msg-header">
                        <h4 style="color: rgb(245, 0, 0);">系统红包</h4>
                        <span class="MsgTime">20:00:04</span>
                      </div>
                      <div
                        class="Bubble type-system"
                        style="background: rgb(253, 85, 85); border-right-color: rgb(253, 85, 85);"
                      >
                        <div class="RedPack desc" style="text-align: center;">
                          <p>机会难得，别错过哦！</p>
                          <a href="javascript:void(0)" class="RBtn txt-t5"
                            >拆开看看</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Item type-packopen" style="display:none;">
                  <div class="lay-block">
                    <div class="lay-content">
                      <div>
                        <div class="innr">
                          <i class="iconfont icon-hongbao-copy"></i>
                          <span class="t-red">zh***ao</span>抢到了金额为
                          <span class="t-red">3.03</span>元的红包
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="redpack-active" style="display:none;">
                <div class="active-icon">
                  <a href="javascript:;">
                    <img src="../../assets/images/hbao.gif" alt=""
                  /></a>
                </div>
                <div class="popup-pack-list">
                  <div class="message-view">
                    <div class="vux-x-dialog">
                      <div class="weui-mask" style="display: none;"></div>
                      <div class="weui-dialog" style="display: none;">
                        <div class="gg-pop">
                          <a href="javascript:;" class="close-btn">
                            <i class="iconfont icon-close"></i>
                          </a>
                          <div class="ttl">
                            <h3>红包列表</h3>
                          </div>
                          <div class="content">
                            <div class="view">
                              <div class="list">
                                <ul>
                                  <li>
                                    <div>
                                      <span class="digit">1</span>
                                    </div>
                                    <span>新春红包</span>
                                    <span>
                                      <a
                                        href="javascript:void(0)"
                                        class="FollowBtn"
                                        >立即抢</a
                                      ></span
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="btm">&nbsp;</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="redFlag" class="Item">
                <div class="active-redpack">
                  <div class="lay-reditem">
                    <div class="Mask"></div>
                    <div class="lay-red">
                      <div class="RedPack">
                        <div class="sparkbg">
                          <div class="bg" style="animation-delay: 0.3s;"></div>
                          <div class="inner">
                            <div class="lay-pack">
                              <div class="pack">
                                <div class="cover">
                                  <h3 class="sender">&nbsp;</h3>
                                  <p class="desc">恭喜發財 大吉大利</p>
                                </div>
                                <div
                                  class=""
                                  style="width: 100px; height: 100px; border: 1px solid rgb(255, 167, 58); background-color: rgb(255, 167, 58); border-radius: 50%; color: rgb(255, 255, 255); font-size: 26px; display: inline-block; position: relative; top: -50px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 0px 0px;"
                                >
                                  <span
                                    style="display: inline-block; padding-top: 32px;"
                                    >拆红包</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="followBetModel"
          style="position: absolute; bottom: 0px; width: 100%; z-index: 502;"
        ></div>
        <div class="bottom-placeholder no-tab" style="height: 61px;"></div>
      </div>
      <div class="sticky-bottom sticky-fixed no-tab">
        <div class="chat-inputs-wrap">
          <div class="chat-inputs">
            <div class="input-row">
              <a href="#/game" class="">
                <i
                  class="iconfont icon-iosgamecontrollerb"
                  style="font-size: 1.8rem; margin-bottom: -0.8rem;"
                ></i
                >游戏</a
              >
              <div style="flex: 1">
                <el-input
                  ref="typeInput"
                  class="txtinput"
                  type="textarea"
                  :placeholder="inputText || '试玩用户无法发言'"
                  :autosize="{
                    maxRows: 5,
                    minRows: 1
                  }"
                  @change="onHeightChange"
                  @focus="inputFocus"
                  @blur="inputBlur"
                  v-model="inputText"
                ></el-input>
              </div>
              <a href="javascript:;" @click="sendMessage()">
                <i class="iconfont icon-send1"></i>发送</a
              >
              <div
                class="sep"
                style="height: 2em; width: 1px; background: rgb(204, 204, 204);"
              ></div>
              <a href="javascript:;" @click="showMore()">
                <i class="iconfont icon-plus"></i>更多</a
              >
            </div>

            <div v-show="moreFlag" class="more-row" @click="isShowMore = false">
              <a for="imgUploadInput">
                <i class="iconfont icon-image"></i>
              </a>
              <input
                id="imgUploadInput"
                type="file"
                accept=".jpg, .png, .gif, .jpeg, image/jpeg, image/png, image/gif"
                style="width: 42.1px; height: 42.1px; opacity: 0; position: absolute; left: 28px;"
                @change="handleImgUpload"
              />
              <a href="#/chat/setting" class="">
                <i class="iconfont icon-icon-"></i>
              </a>
            </div>

            <div class="vux-x-dialog userpack-dialog">
              <div class="weui-mask" style="display: none;"></div>
              <div class="weui-dialog" style="display: none;">
                <div class="userpack lay-relative">
                  <div class="userpack-wrapper">
                    <div class="userpack-main">
                      <div class="userpack-open">
                        <div class="decorate"></div>
                      </div>
                      <div class="userpack-list">
                        <div class="border"></div>
                        <div class="inputs">
                          <form class="userpack-list-content">
                            <label for="price" class="userpack-label-title"
                              >红包金额 :</label
                            >
                            <input
                              type="number"
                              name="price"
                              value=""
                              class="userpack-txt-box"
                            />
                            <br />
                            <label for="number" class="userpack-label-title"
                              >红包个数 :</label
                            >
                            <input
                              type="number"
                              name="number"
                              value=""
                              class="userpack-txt-box"
                            />
                            <br />
                          </form>
                        </div>
                      </div>
                      <div class="userpack-content">
                        <div class="userpack-content-warn"></div>
                        <p>
                          <button>
                            <a href="javascript:;"> <span>塞进红包</span></a>
                          </button>
                        </p>
                        <p class="userpack-cancel">
                          <a href="javascript:void(0)" class="RBtn txt-t5"
                            >不发了</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <x-dialog class="userpack-dialog" hide-on-blur="true" v-model="isShowUserPack">
              <user-pack @close="isShowUserPack = false"></user-pack>
            </x-dialog> -->
            <!-- <x-dialog
              v-show="isShowImgPreview"
              class="imgpreview-dialog"
              hide-on-blur="true"
              v-model="isShowImgPreview"
              >
              <div>
                <div ref="previewEl" class="img-wrap"></div>
                <p>
                  <input
                    type="text"
                    v-model="sendImgDesc"
                    ref="imgDescInput"
                    autocomplete="off"
                    placeholder="输入文字描述"
                  />
                </p>
                <p style="text-align: center;">
                  <a
                    href="javascript:;"
                    class="FormBtn"
                    style="width: 83%; padding: 0.6em 0px;"
                    @click="sendImage"
                    >发送</a
                  >
                </p>
                <p>
                  <a
                    href="javascript:;"
                    class="action-cancel"
                    @click="isShowImgPreview = false"
                  >
                    <i class="iconfont icon-close"></i>取消</a
                  >
                </p>
              </div>
            </x-dialog> -->

            <div
              class="vux-x-dialog imgpreview-dialog"
              v-show="isShowImgPreview"
            >
              <div class="weui-mask"></div>
              <div class="weui-dialog">
                <div>
                  <div ref="previewEl" class="img-wrap"></div>
                  <p>
                    <input
                      ref="imgDescInput"
                      autocomplete="off"
                      placeholder="输入文字描dssd述"
                      v-model="sendImgDesc"
                    />
                  </p>

                  <p style="text-align: center;">
                    <a
                      href="javascript:;"
                      class="FormBtn"
                      style="width: 83%; padding: 0.6em 0px;"
                      @click="sendImage"
                      >发送</a
                    >
                  </p>
                  <p>
                    <a
                      href="javascript:;"
                      class="action-cancel"
                      @click="isShowImgPreview = false"
                    >
                      <i class="iconfont icon-close"></i>取消</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 610px; height: 70px;"
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

<script>
import $ from "jquery";
import jwtDecode from "jwt-decode";

import manage from "@/assets/images/manage.jpg";
import avatar from "@/assets/images/avatar.png";
import sys from "@/assets/images/sys.png";
import iconAdmin from "@/assets/images/icon_admin.gif";
import iconMember from "@/assets/images/icon_member01.gif";

import { AuthenticationHelper } from "@/Helper/";
import { STORAGE } from "@/CONFIGS";

let oAuthenticationHelper = new AuthenticationHelper();

export default {
  data() {
    return {
      inputText: "",
      atScrollBottom: true,
      user: "visitor",
      redFlag: false,
      moreFlag: false,
      isShowImgPreview: false,
      sendImgDesc: "",
      isShowUserPack: false,
      isShowMore: false,
      uploadingImg: null,
      client: null,
      receptData: null,
      sendFlag: false,
      sendMessageFlag: true,
      content: "以上为历史消息",
      loginInfo: ""
    };
  },
  mounted() {
    this.$socket["/chatroom"].on("connect", () => {});
    this.$socket["/chatroom"].on("MESSAGE", this.webSocketonmessage);
    this.$socket["/chatroom"].on("disconnet", this.disconnetWebSocket);
    this.checkIsLogined();
  },
  methods: {
    showMore() {
      let t = "试玩用户无法使用";
      this.moreFlag = !this.moreFlag;
      return (this.isShowMore = false);
    },
    checkIsLogined() {
      let sUid = oAuthenticationHelper.getUserId();
      let oQuery = {
        path: "/login"
      };
      if (!sUid) {
        this.$router.push(oQuery);
      }
    },
    sendMessage(t) {
      var e = t || this.inputText;
      e = e.replace(/(\s)\s+/g);
      var a = this.$refs.view;
      this.sendText(e);
    },
    onHeightChange() {
      let __this = this;
      // return __this.$emit("updateHeight");
    },
    inputFocus(t) {},
    inputBlur(t) {
      // this.onHeightChange(), setTimeout(this.onHeightChange, 100);
    },
    checkScroll() {
      this.atScrollBottom && this.setScrollBottom();
    },
    setScrollBottom() {
      var t = this.$refs.view;
      t.scrollTop = t.scrollHeight;
      this.atScrollBottom = true;
    },
    onScroll() {
      let __this = this;
      let e = this.$refs.view;
      let i = e.scrollHeight - e.offsetHeight - e.scrollTop < 10;
      this.atScrollBottom !== i && (this.atScrollBottom = i);
    },
    handleImgUpload(t) {
      let __this = this;
      let i = t.target.files[0];
      let reg = /\.(jpe?g|png|gif)$/i;
      if (reg.test(i.name)) {
        var a = new FileReader();
        a.addEventListener(
          "load",
          function(t) {
            var a = new Image();
            a.title = i.name;
            a.src = t.target.result;
            __this.previewImg(a);
          },
          false
        );
        a.readAsDataURL(i);
      }
    },
    previewImg(t) {
      let __this = this;
      __this.isShowImgPreview = true;
      __this.$refs.previewEl.innerHTML = "";
      __this.uploadingImg = t;
      __this.$refs.previewEl.appendChild(t);
    },
    showUserPack() {
      this.isShowUserPack = true;
    },
    sendImage() {
      let __this = this;
      let wi = 120;
      let e = this.uploadingImg.naturalWidth;
      let i = this.uploadingImg.naturalHeight;
      // e > wi && ((i *= wi / e), (e = wi)), i > wi && ((e *= wi / i), (i = wi));
      // var a = document.createElement('canvas');
      // (a.width = e), (a.height = i);
      // var n = a.getContext('2d');
      // n.drawImage(
      //   this.uploadingImg,
      //   0,
      //   0,
      //   this.uploadingImg.naturalWidth,
      //   this.uploadingImg.naturalHeight,
      //   0,
      //   0,
      //   e,
      //   i
      // );
      $(".chat-view").append(
        $(
          "<div class='Item type-left'><div class='lay-block'><div class='avatar'><img src='" +
            avatar +
            "' alt='qi***00'></div><div class='lay-content'><div class='msg-header'><h4>qi***00</h4><span ><img src='/img/icon_member01.cc2364ce.gif' alt='会员'></span><span class='MsgTime'>12:05:54</span></div><div class='Bubble type-system'><p><span style='white-space: pre-wrap; word-break: break-all;'><img src=''" +
            this.uploadingImg +
            "'/>" +
            this.sendImgDesc +
            "</span></p></div></div></div></div>"
        )
      );
      __this.isShowImgPreview = false;
    },
    connectWebSocket(data) {

    },

    messageWebSocket(data) {},
    webSocketonmessage(data) {
      this.receptData = "";
      this.sendFlag = false;
      this.sendMessageFlag = true;
      this.receptData = data;
      if (
        !(
          this.receptData != undefined &&
          this.receptData != "" &&
          this.receptData != null
        )
      ) {
        return;
      } else {
        this.sendFlag = true;
        let name = data.nickName;
        let time = (data.curTime + "").split(" ")[1];
        let sUrl = data.iconUrl;
        // data = data.replace(/(\s)\s+/g);
        let sLefOrRigtClass = "";
        let sUid = oAuthenticationHelper.getUserId();
        if (data.id === sUid) {
          sLefOrRigtClass = "type-right";
        } else {
          sLefOrRigtClass = "type-left";
        }
        switch (data && name) {
          case "计划消息":
            $(".chat-view").append(
              $(
                "<div class='Item " +
                  sLefOrRigtClass +
                  "'><div class='lay-block'><div class='avatar'><img src='" +
                  STORAGE.URL +
                  STORAGE.PRE_PATH +
                  sUrl +
                  "' alt='计划消息' /></div><div class='lay-content'><div class='msg-header'><h4>"+name+"</h4><span class='MsgTime'>"+time+"</span></div><div class='Bubble type-system'><p><span style='white-space: pre-wrap; word-break: break-all;'>" +
                  data.content +
                  "</span></p></div></div></div></div>"
              )
            );
            break;
          case "管理员":
            $(".chat-view").append(
              $(
                "<div class='Item " +
                  sLefOrRigtClass +
                  "'><div class='lay-block'><div class='avatar'> <img src='" +
                  STORAGE.URL +
                  STORAGE.PRE_PATH +
                  sUrl +
                  "' alt='多彩群主'></div><div class='lay-content'><div class='msg-header'><h4>"+name+"</h4><span class='VipMark type-admin'><img src='" +
                  iconAdmin +
                  "' alt='管理员'></span><span class='MsgTime'>"+time+"</span></div><div class='Bubble type-system' style='background: linear-gradient(to right, rgb(255, 115, 0), rgb(231, 193, 26)); border-left-color: rgb(231, 193, 26); border-right-color: rgb(255, 115, 0);'><p><span style='white-space: pre-wrap; word-break: break-all;'>" +
                  data.content +
                  "</span></p></div></div></div></div></div>"
              )
            );
            break;
          case "用户一":
            $(".chat-view").append(
              $(
                "<div class='Item " +
                  sLefOrRigtClass +
                  "'><div class='lay-block'><div class='avatar'> <img src='" +
                  STORAGE.URL +
                  STORAGE.PRE_PATH +
                  sUrl +
                  "' alt='qi***00'></div><div class='lay-content'><div class='msg-header'><h4"+name+"</h4><span ><img src='" +
                  iconMember +
                  "' alt='会员'></span><span class='MsgTime'>"+time+"</span></div><div class='Bubble type-system' style='background: linear-gradient(to right, rgb(25, 158, 216), rgb(2, 231, 231)); border-left-color: rgb(2, 231, 231); border-right-color: rgb(25, 158, 216); color: rgb(255, 255, 255);'><p><span style='white-space: pre-wrap; word-break: break-all;'>" +
                  data.content +
                  "</span></p></div></div></div></div></div>"
              )
            );
            break;
          case "visitor":
            $(".chat-view").append(
              $(
                "<div class='Item " +
                  sLefOrRigtClass +
                  "'><div class='lay-block'><div class='avatar'> <img src='" +
                  STORAGE.URL +
                  STORAGE.PRE_PATH +
                  sUrl +
                  "' alt='游客'></div><div class='lay-content'><div class='msg-header'><h4>" +
                  name +
                  "</h4><span class='MsgTime'>" +
                  time +
                  "</span></div><div class='Bubble type-system' style='background: linear-gradient(to right, rgb(25, 158, 216), rgb(2, 231, 231)); border-left-color: rgb(2, 231, 231); border-right-color: rgb(25, 158, 216); color: rgb(255, 255, 255);'><p><span style='white-space: pre-wrap; word-break: break-all;'>" +
                  data.content +
                  "</span></p></div></div></div></div></div>"
              )
            );
            break;
          default:
            break;
        }
        this.inputText = "";
      }
    },
    sendText(data) {
      let date = new Date();
      // let oMessage = data;
      let sUid = oAuthenticationHelper.getUserId();
      let sUrl = oAuthenticationHelper.getUserUrl();
      let sUserNickname = oAuthenticationHelper.getUserNickname();
      let oMessage = {
        id: sUid,
        fk: "hCBOEx1e8cxeSWX2PUSC5w==",
        chatType: 2,
        nickName: sUserNickname,
        content: data || null,
        curTime: date,
        roleId: 8,
        iconUrl: sUrl, // 原始
        remark: null
      };
      // let sMessage = JSON.stringify(oMessage);
      let sMessage = oMessage;
      // this.$sockJs.send(sMessage);
      this.$socket["/chatroom"].emit("MESSAGE", sMessage);
    },
    disconnetWebSocket(e) {}
  },

  watch: {
    inputText() {}
  }
};
</script>

<style lang="scss" scoped></style>
