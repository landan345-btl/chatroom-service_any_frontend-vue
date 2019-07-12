<template>
  <div class="wrap-router">
    <div class="wrap-content router-view no-tab">
      <form>
        <div class="l-wrap">
          <div class="uc-navs">
            <div class="row" style="border: none;">
              <div class="col" style="line-height:3.66rem;padding-right:5px;">
                <i class="iconfont icon-weibiao45128"></i>>&nbsp;&nbsp;
              </div>
              <div class="col" style="margin-left: 9px;">
                <input
                  type="text"
                  autocomplete="off"
                  autocapitalize="none"
                  name="account"
                  placeholder="请输入账号"
                  class=""
                  aria-required="true"
                  aria-invalid="true"
                  v-model="username"
                  style="width:447px;"
                  @keydown.enter= "login()"
                />
              </div>
              <div class="col"></div>
            </div>
            <div class="row" style="border:0;">
              <div class="col" style="line-height:3.66rem;padding-right:5px;">
                <i class="iconfont icon-lock"></i>&nbsp;&nbsp;
              </div>
              <div class="col">
                <input
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  class=""
                  aria-required="true"
                  aria-invalid="true"
                  v-model="password"
                  @keydown.enter= "login()"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="login-btn">
          <button  class="FormBtn" @click="login">登录</button>
        </div> -->
      </form>
      <div class="login-btn">
        <button class="FormBtn" @click="login">登录</button>
      </div>
      <div class="l-bottom-wrap">
        <div class="uc-navs">
          <div
            class="row"
            style="margin-top: 1em;width:586px;margin-left:0;border:0;"
          >
            <span class="text-center">其他</span>
          </div>
          <div class="row options" style="margin-top: 2em;display:flex;">
            <a class="col" style="display:none;"
              ><i class="icon-item icon-fast-regisit"></i>
              <br />
              <span>马上注册</span></a
            >
            <a href="javascript:;" class="col">
              <i class="icon-item icon-free-play"></i>
              <span>免费试玩</span>
            </a>
            <a href="javascript:;" class="col"
              ><i class="icon-item icon-web"></i><span>电脑版</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import oIo from "socket.io-client";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { AuthenticationHelper, AxiosHelper } from "@/Helper/";
import { SOCKET } from '@/CONFIGS'


let oAuthenticationHelper = new AuthenticationHelper();
let oAxiosHelper = new AxiosHelper();

@Component({
  components: {}
})
class Login extends Vue {
  public username: string = "";
  public password: string = "";
  public mounted() {
    this.$emit("flagChange", false);

    let sUid = oAuthenticationHelper.getUserId();

  }

  public login() {
    let oParams = {
      name: this.username,
      password: this.password
    };

    if (!this.username) {
      this.$alert("请输入用户名称！", "提示");
      return;
    }

    if (!this.password) {
      this.$alert("请输入用户密码！", "提示");
      return;
    }
    oAxiosHelper.post({
      path: '/service/authentication/authentication/login',
      params: oParams
    }).then((oResponse: any) => {
      if (-1 !== oResponse.result) {
        let sJwt = oResponse.jwt;
        oAuthenticationHelper.setJwt(sJwt);
        oAuthenticationHelper.removeLoginState();
        this.$router.push({
          path: "/chatroom"
        });
        return;
      }
      this.$alert("用户账号或密码错误！", "提示");
    }).catch((oResponse: any) => {
      this.$alert("用户账号或密码错误！", "提示");
    });
  }

}

export default Login;
</script>

<style lang="scss" scoped>
@import "Login.scss";
</style>
