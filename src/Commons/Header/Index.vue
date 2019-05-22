<template>
  <header class="background-white">
    <Row :gutter="0" type="flex" justify="space-between" class="top">
      <Col
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 20, offset: 2}" 
        :md="{span: 20, offset: 2}" 
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}" >
        <span class="notification">
          <img src="@/assets/images/icon-notification.png"/>
          <span>最新公告：</span>
        </span>
        <span class="tool">
          <span>设为首页</span>
          <span>收藏本站</span>
          <span><router-link  :to="{ path: '/rule'}">帮助中心</router-link></span>
          <span>手机版</span>
        </span>
      </Col>
    </Row>
    <Row class="images pt-1 pb-1">
      <Col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 20, offset: 2}" 
        :md="{span: 20, offset: 2}" 
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}">
        <router-link :to="{ path: '/'}">
          <img src="@/assets/images/logo-top.png"/>
        </router-link>
        <img class="qrcode float-right" src="@/assets/images/icon-qrcode.png"/>
      </Col>
    </Row>
  </header>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Header',
})
class Header extends Vue {
}

export default Header;
</script>