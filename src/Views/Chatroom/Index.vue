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
        <div class="chat-container" style="height: 825.406px;margin-top: 82px;">
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
                style="text-align:left;padding-bottom:2.5rem;"
                @scroll="onScroll"
              >
                <div class="Item type-hint" style="display:none;">
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
                  placeholder=""
                  :autosize="{
                    maxRows: 5,
                    minRows: 1
                  }"
                  @change="onHeightChange"
                  @focus="inputFocus"
                  @blur="inputBlur"
                  v-model="inputText"
                  @keydown.shift.enter="() => {}"
                  @keydown.enter.native="sendMessage($event)"
                ></el-input>
              </div>
              <a href="javascript:;" @click="sendText(inputText)">
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

              <!-- <input
                id="imgUploadInput"
                type="file"
                accept=".jpg, .png, .gif, .jpeg, image/jpeg, image/png, image/gif"
                style="width: 42.1px; height: 42.1px; opacity: 0; position: absolute; left: 28px;"
                @change="handleImgUpload"
              /> -->
              <!-- onSubmit, -->
              <form id="files">
                <input type="file" id="file" multiple  @change="handleImgUpload" style="width: 42.1px; height: 42.1px; opacity: 0; position: absolute; left: 28px;"/>
              </form>

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
            </x-dialog>
            <x-dialog
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
      <transition name="fade">
        <Connection v-if="!roomId"></Connection>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import $ from "jquery";
import oIo from "socket.io-client";
import SocketIOFileClient from "socket.io-file-client";

import Connection from "@/Views/Connection/Index";

import iconAdmin from "@/assets/images/icon-admin.gif";
import iconMember1 from "@/assets/images/icon-member-01.gif";
import iconMember2 from "@/assets/images/icon-member-02.gif";
import iconMember3 from "@/assets/images/icon-member-03.gif";
import iconMember4 from "@/assets/images/icon-member-04.gif";
import iconMember5 from "@/assets/images/icon-member-05.gif";
import iconMember6 from "@/assets/images/icon-member-06.gif";

import { AuthenticationHelper } from "@/Helper/";
import { STORAGE, SOCKET } from "@/CONFIGS";

let oAuthenticationHelper = new AuthenticationHelper();
@Component({
  components: { Connection }
})
export default class Chatroom extends Vue {
  public inputText: string = "";
  public atScrollBottom: boolean = true;
  public user: string = "visitor";
  public redFlag: boolean = false;
  public moreFlag: boolean = false;
  public isShowImgPreview: boolean = false;
  public sendImgDesc: string = "";
  public isShowUserPack: boolean = false;
  public isShowMore: boolean = false;
  public uploadingImg: any = null;
  public client: any = null;
  public receptData: any = null;
  public sendFlag: boolean = false;
  public sendMessageFlag: boolean = true;
  public content: string = "以上为历史消息";
  public loginInfo: string = "";
  public iconMember: string = "";
  public roomId: any = null;
  public showFlag: boolean = true;
  public imgUrl: any = '';
  public userLevel: any = '';

  public mounted() {
    if (this.$socket["/chatroom"]) {
      this.$socket["/chatroom"].disconnect();
    }
    let sChatroomUrl =
      SOCKET.URL +
      (SOCKET.PORT && (80 !== SOCKET.PORT || "80" !== SOCKET.PORT)
        ? ":" + SOCKET.PORT
        : "") +
      "/chatroom";
    let sJwt = oAuthenticationHelper.getJwt();
    let oOption = {
      query: {
        jwt: sJwt
      }
    };
    let oChatroomSocket = oIo(sChatroomUrl, oOption);
    this.$socket["/chatroom"] = oChatroomSocket;
    this.$socket["/chatroom"].emit("ENTER ROOM", void 0);
    this.$socket["/chatroom"].on("ENTER ROOM", this.onEnterRoom);
    this.$socket["/chatroom"].on("SHOW MESSAGE", this.onShowMessage);

    this.$socket["/chatroom"].on("connect", () => {});
    this.$socket["/chatroom"].on("MESSAGE", this.onMessage);
    this.$socket["/chatroom"].on("disconnet", () => {});
    this.$socket["/chatroom"].on("IMAGE", this.onImage);
    this.socketIOFileClient = new SocketIOFileClient(oChatroomSocket);

    this.socketIOFileClient.on("start", fileInfo => {
      console.log("Start uploading", fileInfo);
      // 根据 fileInfo.uid
      // 打印到 html并且有loading
      let uploadIds = fileInfo.uploadId;
      let wi = 120;
      let e = this.uploadingImg.naturalWidth;
      let i = this.uploadingImg.naturalHeight;
      this.isShowImgPreview = false;
      e > wi && ((i *= wi / e), (e = wi)), i > wi && ((e *= wi / i), (i = wi));
      var a = document.createElement("canvas");
      (a.width = e), (a.height = i);
      var n = a.getContext("2d");
      n.drawImage( this.uploadingImg,0,0,this.uploadingImg.naturalWidth,this.uploadingImg.naturalHeight);
      this.imgUrl = a.toDataURL();

      let date = new Date();
      let time = (date + "").split(" ")[4];
      let sUrl = oAuthenticationHelper.getUserUrl();
      let name = oAuthenticationHelper.getUserNickname();
      let sRole = oAuthenticationHelper.getUserRole();
      let className = "";
      switch (sRole) {
        case "SYSTEM":
          className = "SYSTEM";
          break;
        case "ADMIN":
          className = "ADMIN";
          break;
        case "MEMBER":
          className = "MEMBER";
          break;
        default:
          className = "MEMBER";
          break;
      }

      $(".chat-view").append(
        $(
          "<div id=" + uploadIds  +" class='Item type-right'><div class='lay-block'><div class='avatar'><img src='" + (0 === sUrl.indexOf("http") ? sUrl : STORAGE.URL + STORAGE.PRE_PATH + sUrl) + "' alt='游客'></div><div class='lay-content'><div class='msg-header'><h4>" + name + "</h4><span class='MsgTime'>"+ time +"</span></div><div class='Bubble " + className + "'>"+
          "<span class='lds-dual-ring'></span>" +
          "<p><span style='white-space: pre-wrap; word-break: break-all;'><img class='sendImage' width='100%' height='100%' src='" +
            this.imgUrl +
            "' />" +
            this.sendImgDesc +
            "</span></p></div></div></div></div>"
        )
      );
      this.imgUrl = "";
      this.isShowImgPreview = false;
    });
    this.socketIOFileClient.on("stream", fileInfo => {
      console.log("Streaming... sent " + fileInfo.sent + " bytes.");
    });
    this.socketIOFileClient.on("complete", fileInfo => {
      console.log("Upload Complete", fileInfo);
      let uploadIds = fileInfo.uploadId;
      // BUG, 使用者 一次传五张 , 
      //      当第一张 complete 的时候, 只需要 把 第一张的 .lds-dual-ring 移除
      uploadIds ? $('.lds-dual-ring').css('display', 'none') : "";

      let sUid = oAuthenticationHelper.getUserId();
      let sUrl = oAuthenticationHelper.getUserUrl();
      let iUserlLevel = oAuthenticationHelper.getUserLevel();

      let sUserNickname = oAuthenticationHelper.getUserNickname();
      let sRole = oAuthenticationHelper.getUserRole();
      let name = oAuthenticationHelper.getUserNickname();
      let sSrc = fileInfo.uploadDir.replace(/^public\/storage/, '');
      let iTimeStamp = Date.now();

      let oBody = {
        roomId: this.roomId,
        id: sUid,
        nickName: sUserNickname,
        content: this.sendImgDesc,
        curTime: iTimeStamp,
        role: sRole,
        src: sSrc,
        level: iUserlLevel,
        iconUrl: sUrl, // 原始
        remark: null,
      };
      // let sMessage = JSON.stringify(oMessage);
      if (!("" === sSrc || null === sSrc || undefined === sSrc)) {
        this.$socket["/chatroom"].emit("MESSAGE", oBody);
      }



    });
    this.socketIOFileClient.on("error", err => {
      console.log("Error!", err);
    });
    this.socketIOFileClient.on("abort", fileInfo => {
      console.log("Aborted: ", fileInfo);
    });
    this.checkIsLogined();
  }
  public showMore() {
    let t = "试玩用户无法使用";
    this.moreFlag = !this.moreFlag;
    return (this.isShowMore = false);
  }
  public checkIsLogined() {
    let sUid = oAuthenticationHelper.getUserId();
    let oQuery = {
      path: "/login"
    };
    if (!sUid) {
      this.$router.push(oQuery);
    }
  }

  public onEnterRoom(oBody: any) {
    let oData = oBody["data"];
    let aRooms = oData["rooms"];
    let oRoom = aRooms.pop();
    let sRoomId = oRoom._id;
    this.roomId = sRoomId;
    let _oBody = {
      roomId: sRoomId,
    }
    this.$socket["/chatroom"].emit("SHOW MESSAGE", _oBody);

  }
  public onShowMessage(oBody: any) {
    // TODO
    if (-1 === oBody.result) {
      return;
    }

    let aMessages = oBody.data.messages;

    aMessages.forEach((oMessage: any) => {
      let sRole = oMessage.user.role || "MEMBER";
      let sUrl = oMessage.user.url || "user/member.png";
      let sNickname = oMessage.user.nickname;
      let sSrc = oMessage.src || '';
      let sText = oMessage.text || '';
      let sTime = new Date(oMessage.addedTime);
      let className = '';
      switch (sRole) {
        case "SYSTEM":
          className = "SYSTEM";
          break;
        case "ADMIN":
          className = "ADMIN";
          break;
        case "MEMBER":
          className = "MEMBER";
          break;
        default:
          className = "MEMBER";
          break;
      }

      let sLefOrRigtClass = "";
      let sUid = oAuthenticationHelper.getUserId();
      if (oMessage.user._id === sUid) {
        sLefOrRigtClass = "type-right";
      } else {
        sLefOrRigtClass = "type-left";
      }

      $(".chat-view").append(
        $(
          "<div class='Item " + sLefOrRigtClass + "'>" +
            "<div class='lay-block'>" +
              "<div class='avatar'>" +
                "<img src='" + (0 === sUrl.indexOf("http") ? sUrl : STORAGE.URL + STORAGE.PRE_PATH + sUrl) + "' alt='游客'>" +
              "</div>" +
              "<div class='lay-content' style='position:relative;'>" +
                "<div class='msg-header'>" +
                  "<h4>" + sNickname + "</h4> " +
                  "<span class='MsgTime'>" + sTime + "</span>" +
                "</div>" +
                "<div class='Bubble " + className + "'>" +
                  "<p>" +
                    (sSrc ? "<img src='" + STORAGE.URL + STORAGE.PRE_PATH + sSrc + "' />" : '' ) +
                    "<span style='white-space: pre-wrap; word-break: break-all;'>" + sText +
                    "</span>" +
                  "</p>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>"
        )
      );
    });

  }
  public sendMessage(oEvent: any) {
    if (oEvent.shiftKey) {
      return;
    }
    var sText = this.inputText;
    this.sendText(sText);
  }

  public onHeightChange() {
    let __this = this;
    // return __this.$emit("updateHeight");
  }
  public inputFocus(t) {}
  public inputBlur(t) {
    // this.onHeightChange(), setTimeout(this.onHeightChange, 100);
  }
  public checkScroll() {
    this.atScrollBottom && this.setScrollBottom();
  }
  public setScrollBottom() {
    var t = this.$refs.view;
    t.scrollTop = t.scrollHeight;
    this.atScrollBottom = true;
  }
  public onScroll() {
    let __this = this;
    let e = this.$refs.view;
    let i = 10 > e.scrollHeight - e.offsetHeight - e.scrollTop;
    this.atScrollBottom !== i && (this.atScrollBottom = i);
  }
  public handleImgUpload(t) {
    let __this = this,
    i;
    i = t.target.files[0];
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
  }
  public previewImg(t) {
    let __this = this;
    __this.isShowImgPreview = true;
    __this.$refs.previewEl.innerHTML = "";
    __this.uploadingImg = t;
    __this.$refs.previewEl.appendChild(t);
  }
  public showUserPack() {
    this.isShowUserPack = true;
  }
  public sendImage(uploadIds?:any) {
    this.onSubmit();
  }
  public connectWebSocket(data) {}

  public messageWebSocket(data) {}
  public onSubmit(event?:any ) {
    // event.preventDefault();
    let fileEl = document.getElementById("file");

    let uploadIds = this.socketIOFileClient.upload(fileEl);
    this.moreFlag = false;
    $("#files")[0].reset();
  }
  public onImage(data) {

    // let date = new Date();
    // let time = (date + "").split(" ")[4];
    // let sUrl = oAuthenticationHelper.getUserUrl();
    // let name = oAuthenticationHelper.getUserNickname();
    // let sRole = oAuthenticationHelper.getUserRole();
    // let imgName = data.name;
    // let className = "";
    // switch (sRole) {
    //   case "SYSTEM":
    //     className = "SYSTEM";
    //     break;
    //   case "ADMIN":
    //     className = "ADMIN";
    //     break;
    //   case "MEMBER":
    //     className = "MEMBER";
    //     break;
    //   default:
    //     className = "MEMBER";
    //     break;
    // }
    // if ($("#sendImg")) {
    //   $("#sendImg").css("display", "none");
    // }
    // $(".chat-view").append(
    //   $(
    //     "<div class='Item type-right'><div class='lay-block'><div class='avatar'><img src='" + (0 === sUrl.indexOf("http") ? sUrl : STORAGE.URL + STORAGE.PRE_PATH + sUrl) + "' alt='游客'></div><div class='lay-content'><div class='msg-header'><h4>" + name + "</h4><span class='MsgTime'>"+ time +"</span></div><div class='Bubble " + className + "'>"+
    //     "<p><span style='white-space: pre-wrap; word-break: break-all;'><img src='" +
    //       STORAGE.URL + STORAGE.PRE_PATH + '/room/message/' + imgName +
    //       "' />" +
    //       this.sendImgDesc +
    //       "</span></p></div></div></div></div>"
    //   )
    // );
  }
  public onMessage(data: any) {
    this.receptData = "";
    this.sendFlag = false;
    this.sendMessageFlag = true;
    this.receptData = data;
    let level = this.receptData.level;
    level
      ? (this.userLevel = level)
      : (this.userLevel = oAuthenticationHelper.getUserLevel());
    switch (this.userLevel) {
      case 1:
        this.iconMember = iconMember1;
        break;
      case 2:
        this.iconMember = iconMember2;
        break;
      case 3:
        this.iconMember = iconMember3;
        break;
      case 4:
        this.iconMember = iconMember4;
        break;
      case 5:
        this.iconMember = iconMember5;
        break;
      case 6:
        this.iconMember = iconMember6;
        break;
      default:
        this.iconMember = iconMember6;
        break;
    }
    if (
      this.receptData !== undefined &&
      "" !== this.receptData &&
      null !== this.receptData
    ) {
      this.sendFlag = true;
      if ($("#" + this.receptData.virtualId)) {
        $("#" + this.receptData.virtualId).css("display", "none");
      }
      let name = data.nickName;
      let role = data.role;
      let time = (data.curTime + "").split(" ")[1];
      let sUrl = data.iconUrl;
      // data = data.content.replace(/(\s)\s+/g, "");
      let sLefOrRigtClass = "";
      let sUid = oAuthenticationHelper.getUserId();
      if (data.id === sUid) {
        sLefOrRigtClass = "type-right";
      } else {
        sLefOrRigtClass = "type-left";
      }
      this.showFlag = false;
      // switch (data && role) {
      //   case "SYSTEM":
      //     $(".chat-view").append(
      //       $(
      //         "<div class='Item " +
      //           sLefOrRigtClass +
      //           "'><div class='lay-block'><div class='avatar'><img src='" +
      //           (sUrl.indexOf("http") === 0
      //             ? sUrl
      //             : STORAGE.URL + STORAGE.PRE_PATH + sUrl) +
      //           "' alt='计划消息' /></div><div class='lay-content'><div class='msg-header'><h4>" +
      //           name +
      //           "</h4><span class='MsgTime'>" +
      //           time +
      //           "</span></div><div class='Bubble type-system'><p><span style='white-space: pre-wrap; word-break: break-all;'>" +
      //           data.content +
      //           "</span></p></div></div></div></div>"
      //       )
      //     );
      //     break;
      //   case "ADMIN":
      //     $(".chat-view").append(
      //       $(
      //         "<div class='Item " +
      //           sLefOrRigtClass +
      //           "'><div class='lay-block'><div class='avatar'> <img src='" +
      //           (sUrl.indexOf("http") === 0
      //             ? sUrl
      //             : STORAGE.URL + STORAGE.PRE_PATH + sUrl) +
      //           "' alt='多彩群主'></div><div class='lay-content' style='position:relative;'><div class='msg-header'><h4>" +
      //           name +
      //           "</h4><span class='VipMark type-admin'><img src='" +
      //           iconAdmin +
      //           "' alt='管理员'></span><span class='MsgTime'>" +
      //           time +
      //           "</span></div><div class='Bubble type-system' style='position:relative;background: linear-gradient(to right, rgb(255, 115, 0), rgb(231, 193, 26)); border-left-color: rgb(231, 193, 26); border-right-color: rgb(255, 115, 0);'><p><span style='white-space: pre-wrap; word-break: break-all;'>" +
      //           data.content +
      //           "</span></p></div></div></div></div></div>"
      //       )
      //     );
      //     break;
      //   case "MEMBER":
      //     $(".chat-view").append(
      //       $(
      //         "<div class='Item " +
      //           sLefOrRigtClass +
      //           "'><div class='lay-block'><div class='avatar'> <img src='" +
      //           (sUrl.indexOf("http") === 0
      //             ? sUrl
      //             : STORAGE.URL + STORAGE.PRE_PATH + sUrl) +
      //           "' alt='qi***00'></div><div class='lay-content'><div class='msg-header'><h4" +
      //           name +
      //           "</h4><span ><img src='" +
      //           this.iconMember +
      //           "' alt='会员'></span><span class='MsgTime'>" +
      //           time +
      //           "</span></div><div class='Bubble type-system' style='background: linear-gradient(to right, rgb(25, 158, 216), rgb(2, 231, 231)); border-left-color: rgb(2, 231, 231); border-right-color: rgb(25, 158, 216); color: rgb(255, 255, 255);'><p><span style='white-space: pre-wrap; word-break: break-all;'>" +
      //           data.content +
      //           "</span></p></div></div></div></div></div>"
      //       )
      //     );
      //     break;
      //   case "游客":
      //     $(".chat-view").append(
      //       $(
      //         "<div class='Item " +
      //           sLefOrRigtClass +
      //           "'><div class='lay-block'><div class='avatar'> <img src='" +
      //           (sUrl.indexOf("http") === 0
      //             ? sUrl
      //             : STORAGE.URL + STORAGE.PRE_PATH + sUrl) +
      //           "' alt='游客'></div><div class='lay-content'><div class='msg-header'><h4>" +
      //           name +
      //           "</h4><span class='MsgTime'>" +
      //           time +
      //           "</span></div><div class='Bubble type-system' style='background: linear-gradient(to right, rgb(25, 158, 216), rgb(2, 231, 231)); border-left-color: rgb(2, 231, 231); border-right-color: rgb(25, 158, 216); color: rgb(255, 255, 255);'><p><span style='white-space: pre-wrap; word-break: break-all;'>" +
      //           data.content +
      //           "</span></p></div></div></div></div></div>"
      //       )
      //     );
      //     break;
      //   default:
      //     break;
      // }

      let className = "";
      switch (role) {
        case "SYSTEM":
          className = "SYSTEM";
          break;
        case "ADMIN":
          className = "ADMIN";
          break;
        case "MEMBER":
          className = "MEMBER";
          break;
        default:
          className = "MEMBER";
          break;
      }

      $(".chat-view").append(
        $(
          "<div class='Item " + sLefOrRigtClass + "'>" +
            "<div class='lay-block'>" +
              "<div class='avatar'>" +
                "<img src='" + (0 === sUrl.indexOf("http") ? sUrl : STORAGE.URL + STORAGE.PRE_PATH + sUrl) + "' alt='游客'>" +
              "</div>" +
              "<div class='lay-content' style='position:relative;'>" +
                "<div class='msg-header'>" +
                  "<h4>" + name + "</h4> " +
                  "<span class='MsgTime'>" + time + "</span>" +
                "</div>" +
                "<div class='Bubble " + className + "'>" +
                  "<p>" +
                    (data.src ? "<img src='" + STORAGE.URL + STORAGE.PRE_PATH + data.src + "' />" : '' ) +
                    "<span style='white-space: pre-wrap; word-break: break-all;'>" + data.content +
                    "</span>" +
                  "</p>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>"
        )
      );

      var t = this.$refs.view;
      // t.scrollTop = t.scrollHeight;
      this.inputText = "";
    }
  }
  public sendText(data: any) {
    let date = new Date();
    let sUid = oAuthenticationHelper.getUserId();
    let sUrl = oAuthenticationHelper.getUserUrl();
    type sUrl = string;
    let iUserlLevel = oAuthenticationHelper.getUserLevel();

    let sUserNickname = oAuthenticationHelper.getUserNickname();
    let sRole = oAuthenticationHelper.getUserRole();
    let name = oAuthenticationHelper.getUserNickname();
    this.showFlag = true;
    let iTimeStamp = Date.now();
    let time = (date + "").split(" ")[4] || '';
    let sVirtualId = sUid + "-" + iTimeStamp;
    let className = "";
    switch (sRole) {
      case "SYSTEM":
        className = "SYSTEM";
        break;
      case "ADMIN":
        className = "ADMIN";
        break;
      case "MEMBER":
        className = "MEMBER";
        break;
      default:
        className = "MEMBER";
        break;
    }
    if (data) {
      $(".chat-view").append(
        $(
          "<div id='" + sVirtualId + "' class='Item type-right'>" +
            "<div class='lay-block'>" +
              "<div class='avatar'>" +
                "<img src='" + (sUrl && 0 === sUrl.indexOf("http") ? sUrl : STORAGE.URL + STORAGE.PRE_PATH + sUrl) + "' alt='游客'>" +
              "</div>" +
              "<div class='lay-content'>" +
                "<div class='msg-header'>" +
                  "<h4>" + name + "</h4> " +
                  "<span class='MsgTime'>" + time + "</span>" +
                "</div>" +
                "<div class='Bubble " + className + "'>" +
                  "<span class='lds-dual-ring'></span>" +
                  "<p>" +
                    "<span style='white-space: pre-wrap; word-break: break-all;' ref='previewEl'>" + data +
                    "</span>" +
                  "</p>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>"
        )
      );
    } else {
      return;
    }

    let oMessage = {
      roomId: this.roomId,
      id: sUid,
      fk: "hCBOEx1e8cxeSWX2PUSC5w==",
      chatType: 2,
      nickName: sUserNickname,
      content: data || null,
      curTime: date,
      role: sRole,
      level: iUserlLevel,
      iconUrl: sUrl, // 原始
      remark: null,
      virtualId: sVirtualId
    };
    // let sMessage = JSON.stringify(oMessage);
    let sMessage = oMessage;
    let sContent = sMessage.content;
    if (!("" === sContent || null === sContent || "undefined" === sContent)) {
      this.$socket["/chatroom"].emit("MESSAGE", sMessage);
    }
  }
};
</script>

<style lang="scss">
@import "Index.scss";
.fade-enter-active, .fade-leave-active{
   transition: all 0.5s ease;
 }

 .fade-enter, .fade-leave-active {
   opacity: 0;
 }
</style>
