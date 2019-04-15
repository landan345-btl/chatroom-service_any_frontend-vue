<template>
 	<nav class="nav-background namespace">
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <el-menu :default-active="activeIndex2" class="el-menu-demo nav-background" mode="horizontal" @select="handleSelect" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1"></el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
	</nav>
</template>
<style scoped lang="scss">
  .nav-background {
    background-color: #ff7b00;
  }
  .namespace .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background: #eb7100;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Nav',
})
class Nav extends Vue {

  public created(): void {
    let $root: any = this.$root;
    $root.showedAllLottery = true;
  }
  public handleHome() {
    console.log('你按了首页！');
    let $root: any = this.$root;
    this.__show();
  }
  public handlePapularLottery() {
    console.log('你按了热门彩种！');
    this.__hide();
    let $root: any = this.$root;
    $root.showedPapularLottery = true;
  }
  public handleInstantLottery() {
    console.log('你按了时时彩种！');
    this.__hide();
    let $root: any = this.$root;
    $root.showedInstantLottery = true;
  }
  public handlePKTenLottery() {
    console.log('你按了PK10彩种！');
    this.__hide();
    let $root: any = this.$root;
    $root.showedPKTenLottery = true;
  }
  public handleFiveOfElevenLottery() {
    console.log('你按了11选5彩种！');
    this.__hide();
    let $root: any = this.$root;
    $root.showedFiveOfElevenLottery = true;
  }
  public handleFastThreeLottery() {
    console.log('你按了快三彩种！');
    this.__hide();
    let $root: any = this.$root;
    $root.showedFastThreeLottery = true;
  }
  public handleOtherLottery() {
    console.log('你按了其他彩种！');
    this.__hide();
    let $root: any = this.$root;
    $root.showedOtherLottery = true;
  }

  private __hide() {
    let $root: any = this.$root;
    $root.showedAllLottery = false;
    $root.showedPapularLottery = false;
    $root.showedInstantLottery = false;
    $root.showedPKTenLottery = false;
    $root.showedFiveOfElevenLottery = false;
    $root.showedFastThreeLottery = false;
    $root.showedOtherLottery = false;
  }

  private __show() {
    let $root: any = this.$root;
    $root.showedAllLottery = true;
    $root.showedPapularLottery = true;
    $root.showedInstantLottery = true;
    $root.showedPKTenLottery = true;
    $root.showedFiveOfElevenLottery = true;
    $root.showedFastThreeLottery = true;
    $root.showedOtherLottery = true;
  }
}

export default Nav;
</script>