<template>
  <div id="chat">
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
        <div class="chat-container" style="height: 51.5rem;margin-top: 82px;">
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
              <a  for="imgUploadInput" style="cursor:pointer;">
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
                <input type="file" id="file" multiple  @change="handleImgUpload" style="cursor:pointer;width: 42.1px; height: 42.1px; opacity: 0; position: absolute; left: 28px;"/>
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
import moment from "moment";
import oIo from "socket.io-client";
// @ts-ignore
import SocketIOFileClient from "socket.io-file-client";

import Connection from "@/Views/Connection/Index.vue";
// @ts-ignore
import iconAdmin from "@/assets/images/icon-admin.gif";
// @ts-ignore
import iconMember1 from "@/assets/images/icon-member-01.gif";
// @ts-ignore
import iconMember2 from "@/assets/images/icon-member-02.gif";
// @ts-ignore
import iconMember3 from "@/assets/images/icon-member-03.gif";
// @ts-ignore
import iconMember4 from "@/assets/images/icon-member-04.gif";
// @ts-ignore
import iconMember5 from "@/assets/images/icon-member-05.gif";
// @ts-ignore
import iconMember6 from "@/assets/images/icon-member-06.gif";

import {
  AuthenticationHelper,
  WordHelper,
} from "@/Helper/";

import {
  STORAGE,
  SOCKET,
  MOMENT
} from "@/CONFIGS";

STORAGE.HOST = STORAGE.HOST.replace(/^http:\/\//, '');

let oAuthenticationHelper = new AuthenticationHelper();
@Component({
  components: { Connection }
})
class Chatroom extends Vue {

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
  public socketIOFileClient: any;
  public scrollFlag: boolean = false;
  public words: any = [];
  public mounted() {
    this.$emit('flagChange', true);
    if (this.$socket["/chatroom"]) {
      this.$socket["/chatroom"].disconnect();
    }
    let sChatroomUrl =
      SOCKET.HOST +
      (SOCKET.PORT && (80 !== SOCKET.PORT || "80" !== SOCKET.PORT)
        ? ":" + SOCKET.PORT
        : "") +
      "/chatroom";
    let sJwt = oAuthenticationHelper.getJwt();
    
    let sAccessToken = oAuthenticationHelper.getAccessToken();

    let oOption = {
      query: {
        jwt: sJwt,
        accessToken: sAccessToken
      }
    };
    let oChatroomSocket = oIo(sChatroomUrl, oOption);
    this.$socket["/chatroom"] = oChatroomSocket;

    setInterval(() => {
      this.$socket["/chatroom"].emit("SHOW WORD POLLING", void 0);
    }, 15000);

    if (sAccessToken) {
      this.$socket["/chatroom"].emit("LOGIN VIA ACCESS TOKEN", void 0);
    }
    this.$socket["/chatroom"].emit("SHOW WORD", void 0);

    this.$socket["/chatroom"].on("LOGIN VIA ACCESS TOKEN",this.onLoginViaAccessToken);
    this.$socket["/chatroom"].on("ENTER ROOM", this.onEnterRoom);
    
    this.$socket["/chatroom"].on("SHOW WORD", this.onShowWord);
    this.$socket["/chatroom"].on("SHOW WORD POLLING", this.onShowWordPolling);

    this.$socket["/chatroom"].on("SHOW MESSAGE", this.onShowMessage);
    this.$socket["/chatroom"].on("connect", () => {});
    this.$socket["/chatroom"].on("MESSAGE", this.onMessage);
    this.$socket["/chatroom"].on("disconnet", () => {});
    this.socketIOFileClient = new SocketIOFileClient(oChatroomSocket);

    this.socketIOFileClient.on("start", (oFileInfo: any) => {
      console.log("Start uploading", oFileInfo);
      let uploadIds = oFileInfo.uploadId;
      let wi = 240;
      let e = this.uploadingImg.naturalWidth;
      let i = this.uploadingImg.naturalHeight;
      let self = this;
      this.isShowImgPreview = false;
      var oCanvas = document.createElement("canvas");
      (oCanvas.width = e), (oCanvas.height = i);
      var oContext: any = oCanvas.getContext("2d");
      oContext.drawImage(
        this.uploadingImg,
        0,
        0,
        this.uploadingImg.naturalWidth,
        this.uploadingImg.naturalHeight
      );
      this.imgUrl = oCanvas.toDataURL();
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


  let sMessage =   "<div id=" + uploadIds  +" class='Item type-right'>" +
            "<div class='lay-block'>" +
              "<div class='avatar'>" +
                "<img src='" + (sUrl && 0 === sUrl.indexOf("http") ? sUrl : 'http://' + STORAGE.HOST + STORAGE.PRE_PATH + sUrl) + "' alt='游客'>" +
              "</div>" +
              "<div class='lay-content'>" +
                "<div class='msg-header'>" +
                  "<h4>" + name + "</h4>" +
                  "<span class='MsgTime'>"+ time + "</span>" +
                "</div>" +
                "<div class='Bubble " + className + "'>"+
                  "<span class='lds-dual-ring'></span>" +
                  "<p>" +
                    "<span id='uploadImg' style='white-space: pre-wrap; word-break: break-all;'>" +
                      "<img  src=" + this.imgUrl + " />" +
                      this.sendImgDesc +
                    "</span>" +
                  "</p>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>";
      $(".chat-view").append($(sMessage));
      $("#" + uploadIds + " img").on("load", function( event) {
        self.setScrollBottom();
      });
      this.imgUrl = "";
      this.isShowImgPreview = false;
    });
    this.socketIOFileClient.on("stream", (oFileInfo: any) => {
      console.log("Streaming... sent " + oFileInfo.sent + " bytes.");
    });
    this.socketIOFileClient.on("complete", (oFileInfo: any) => {
      console.log("Upload Complete", oFileInfo);
      let uploadIds = oFileInfo.uploadId;
      // BUG, 使用者 一次传五张 ,
      //      当第一张 complete 的时候, 只需要 把 第一张的 .lds-dual-ring 移除
      uploadIds ? $('.lds-dual-ring').css('display', 'none') : "";

      let sUid = oAuthenticationHelper.getUserId();
      let sUrl = oAuthenticationHelper.getUserUrl();
      let iUserlLevel = oAuthenticationHelper.getUserLevel();

      let sUserNickname = oAuthenticationHelper.getUserNickname();
      let sRole = oAuthenticationHelper.getUserRole();
      let name = oAuthenticationHelper.getUserNickname();
      let sSrc = oFileInfo.uploadDir.replace(/^public\/storage/, '');
      let iTimeStamp = Date.now();

      let oBody = {
        roomId: this.roomId,
        user: {
          '_id': sUid,
          'nickname': sUserNickname,
          'role': sRole,
          'level': iUserlLevel,
          'url': sUrl, // 原始
        },
        src: sSrc,
        text: this.sendImgDesc,
        addedTime: iTimeStamp,
      };
      if (!("" === sSrc || null === sSrc || undefined === sSrc)) {
        this.$socket["/chatroom"].emit("MESSAGE", oBody);
      }
    });
    this.socketIOFileClient.on("error", (oError: any) => {
      console.log("Error!", oError);
    });
    this.socketIOFileClient.on("abort", (oFileInfo: any) => {
      console.log("Aborted: ", oFileInfo);
    });
  }
  public showMore() {
    let t = "访客无法使用";
    this.moreFlag = !this.moreFlag;
    return (this.isShowMore = false);
  }

  public onLoginViaAccessToken(oBody: any) {
    if (1 === oBody.result && oBody.jwt) {
      oAuthenticationHelper.setJwt(oBody.jwt);
      let sJwt = oAuthenticationHelper.getJwt();
    
      let sAccessToken = oAuthenticationHelper.getAccessToken();
      let sChatroomUrl =
        SOCKET.HOST +
        (SOCKET.PORT && (80 !== SOCKET.PORT || "80" !== SOCKET.PORT)
          ? ":" + SOCKET.PORT
          : "") +
        "/chatroom";

      let oOption = {
        query: {
          jwt: sJwt,
          accessToken: sAccessToken,
          forceNew: true,
        }
      };
      
      let oChatroomSocket = oIo(sChatroomUrl, oOption);
      this.$socket["/chatroom"] = oChatroomSocket;
      this.$socket["/chatroom"].emit("ENTER ROOM", void 0);
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

  public loadImage(path: any, width: any, height: any, target: any) {
      // @ts-ignore: Unreachable code error
    $('<img src="'+ path +'" />').load(function(): any {
      $(this).width(width).height(height).appendTo(target)
    })
  }
  public onShowWord(oBody: any) {
    let aWords = oBody.data.words;
    this.words = aWords;
    this.$socket["/chatroom"].emit("ENTER ROOM", void 0);
  }

  public onShowWordPolling(oBody: any) {
    let aWords = oBody.data.words;
    this.words = aWords;
  }

  public onShowMessage(oBody: any) {
    // TODO
    if (-1 === oBody.result) {
      return;
    }

    let aWords = this.words;

    let aMessages = oBody.data.messages;
    aMessages.forEach((oMessage: any) => {
      oMessage = WordHelper.filter(oMessage, aWords);
      let sRole = oMessage.user.role || "MEMBER";
      let sUrl = oMessage.user.url || "user/member.png";
      let sNickname = oMessage.user.nickname;
      let sSrc = oMessage.src || '';
      let sText = oMessage.text || '';
      let sLocale = MOMENT.LOCALE;

      let sFormat = 'YYYY-MM-DD HH:mm:ss';
      moment.locale(MOMENT.LOCALE);
      let sDateTime = moment(oMessage.addedTime).format(sFormat);

      let sTime = moment(oMessage.addedTime).format(sFormat);
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

      let sMessage = "<div " + "id='" + oMessage._id + "' class='Item " + sLefOrRigtClass + "'>" +
                      "<div class='lay-block'>" +
                        "<div class='avatar'>" +
                          "<img src='" + (0 === sUrl.indexOf("http") ? sUrl : 'http://' + STORAGE.HOST + STORAGE.PRE_PATH + sUrl) + "' alt='游客'>" +
                        "</div>" +
                        "<div class='lay-content' style='position:relative;'>" +
                          "<div class='msg-header'>" +
                            "<h4>" + sNickname + "</h4> " +
                            "<span class='MsgTime'>" + sTime + "</span>" +
                          "</div>" +
                          "<div class='Bubble " + className + "'>" +
                            "<p>" +
                              (sSrc ? "<img src='" + 'http://' + STORAGE.HOST + STORAGE.PRE_PATH + sSrc + "' />" : '' ) +
                              "<span style='white-space: pre-wrap; word-break: break-all;'>" + sText +
                              "</span>" +
                            "</p>" +
                          "</div>" +
                        "</div>" +
                      "</div>" +
                    "</div>" +
                  "</div>";
      let self = this;
      if (sSrc) {
        $(".chat-view").append($(sMessage));
        $("#" + oMessage._id + " img").on("load", function( event) {
          self.setScrollBottom();
        });
      } else {
        $(".chat-view").append($(sMessage));
        self.setScrollBottom();
      }
    });

  }
  public sendMessage(oEvent: any) {
    if (oEvent.shiftKey) {
      return;
    }

    var sText = this.inputText;
    this.sendText(sText);
  }

  public setScrollBottom() {
    var t: any = this.$refs.view;
    t.scrollTop = t.scrollHeight - t.clientHeight;
    this.atScrollBottom = true;
  }
  public onScroll() {
    let oView: any = this.$refs.view;
    let i = 10 > oView.scrollHeight - oView.offsetHeight - oView.scrollTop;
    this.scrollFlag = true;
    this.atScrollBottom !== i && (this.atScrollBottom = i);
  }
  public handleImgUpload(oEvent: any) {
    let sJwt = oAuthenticationHelper.getJwt();

    if (!sJwt) {
      this.inputText = "";
      this.$alert("访客无法发言", "提示");
      return;
    }
    let __this = this;
    let oFile = oEvent.target.files[0];
    let reg = /\.(jpe?g|png|gif)$/i;
    if (reg.test(oFile.name)) {
      let oFileReader = new FileReader();
      oFileReader.addEventListener("load",
        function(_oEvent: any) {
          let oImage = new Image();
          oImage.title = oFile.name;
          oImage.src = _oEvent.target.result;
          __this.previewImg(oImage);
        },
        false
      );
      oFileReader.readAsDataURL(oFile);
    }
  }
  public previewImg(oImage: any) {
    let self:any = this;
    self.isShowImgPreview = true;
    self.$refs.previewEl.innerHTML = "";
    self.uploadingImg = oImage;
    self.$refs.previewEl.appendChild(oImage);
  }
  public showUserPack() {
    this.isShowUserPack = true;
  }
  public sendImage(uploadIds?:any) {
    this.onSubmit();
  }

  public onSubmit(event?:any ) {
    let fileEl = document.getElementById("file");
    let uploadIds = this.socketIOFileClient.upload(fileEl);
    this.moreFlag = false;
    let oFile: any =  $("#files")[0];
    oFile.reset();
  }
  public onMessage(oBody: any) {
    if (-1 === oBody.result && -1.05 === oBody.code) {
      this.$alert("访客无法发言", "提示");
      return;
    }

    if (-1 === oBody.result && -1.06 === oBody.code) {
      this.$alert("你已被禁言，请联系管理员", "提示");
      return;
    }

    if (-1 === oBody.result) {
      this.$alert("发送失败", "提示");
      return;
    }
    let oMessage = oBody.data.messages.pop();
    let aWords = this.words;
    oMessage = WordHelper.filter(oMessage, aWords);
    this.receptData = "";
    this.sendFlag = false;
    this.sendMessageFlag = true;
    this.receptData = oMessage;
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
      debugger;
      let a = $("#" + this.receptData.virtualId);
      if (this.receptData.virtualId && 1 <= $("#" + this.receptData.virtualId).length) {
        $("#" + this.receptData.virtualId + " " + '.lds-dual-ring').css("display", "none");
        var oView: any = this.$refs.view;
        oView.scrollTop = oView.scrollHeight;
        this.inputText = "";
        return;
      }
      let name = oMessage.user.nickname;
      let role = oMessage.user.role;
      let time = (oMessage.addedTime + "").split(" ")[1];
      let sUrl = oMessage.user.url;
      // data = data.content.replace(/(\s)\s+/g, "");
      let sLefOrRigtClass = "";
      let sUid = oAuthenticationHelper.getUserId();
      if (oMessage.user['_id'] === sUid) {
        sLefOrRigtClass = "type-right";
      } else {
        sLefOrRigtClass = "type-left";
      }
      this.showFlag = false;

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
                "<img src='" + (0 === sUrl.indexOf("http") ? sUrl : 'http://' + STORAGE.HOST + STORAGE.PRE_PATH + sUrl) + "' alt='游客'>" +
              "</div>" +
              "<div class='lay-content' style='position:relative;'>" +
                "<div class='msg-header'>" +
                  "<h4>" + name + "</h4> " +
                  "<span class='MsgTime'>" + time + "</span>" +
                "</div>" +
                "<div class='Bubble " + className + "'>" +
                  "<p>" +
                    (oMessage.src ? "<img src='" + 'http://' + STORAGE.HOST + STORAGE.PRE_PATH + oMessage.src + "' />" : '' ) +
                    "<span style='white-space: pre-wrap; word-break: break-all;'>" + oMessage.text +
                    "</span>" +
                  "</p>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>"
        )
      );

      var oView: any = this.$refs.view;
      oView.scrollTop = oView.scrollHeight;
      this.inputText = "";
    }
  }
  public sendText(data: any) {

    let sJwt = oAuthenticationHelper.getJwt();
    if (!sJwt) {
      this.inputText = "";
      this.$alert("访客无法发言", "提示");
      return;
    }
    let date = new Date();

    let sUid = oAuthenticationHelper.getUserId();
    let sUrl = oAuthenticationHelper.getUserUrl();
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
                "<img src='" + (sUrl && 0 === sUrl.indexOf("http") ? sUrl : 'http://' + STORAGE.HOST + STORAGE.PRE_PATH + sUrl) + "' alt='游客'>" +
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
    this.setScrollBottom();
    let oMessage = {
      roomId: this.roomId,
      user: {
        '_id': sUid,
        'nickname': sUserNickname,
        'role': sRole,
        'level': iUserlLevel,
        'url': sUrl, // 原始
      },
      text: data,
      addedTime: date,
      virtualId: sVirtualId
    };

    let sText = oMessage.text;
    if (!("" === sText || null === sText || "undefined" === sText)) {
      this.$socket["/chatroom"].emit("MESSAGE", oMessage);
    }
  }
  public inputFocus() {}
  public inputBlur() {}
};

export default Chatroom;
</script>

<style lang="scss">
@import "Index.scss";

</style>
