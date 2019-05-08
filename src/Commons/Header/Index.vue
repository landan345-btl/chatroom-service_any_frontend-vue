<template>
  <header>
    <el-row :gutter="0" type="flex" justify="space-between" class="top">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <span class="notification">
          <img src="@/assets/images/icon-notification.png"/>
          <span>最新公告：</span>
        </span>
        <span class="tool">
          <span>设为首页</span>
          <span>收藏本站</span>
          <span>帮助中心</span>
          <span>手机版</span>
        </span>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="images pt-1 pb-1">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <router-link :to="{ path: '/'}">
          <img src="@/assets/images/logo-top.png"/>
        </router-link>
        <img class="qrcode" src="@/assets/images/icon-qrcode.png"/>
      </el-col>
    </el-row>
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