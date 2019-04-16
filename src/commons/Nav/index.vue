<template>
 	<nav class="nav-background">
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <el-menu :default-active="activeIndex2" class="el-menu-demo nav-background" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
          <el-menu-item index="1" class="font-2-vmin">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">彩票大厅</template>
            <el-submenu index="2-1">
              <template slot="title">热门彩</template>
              <el-menu-item index="2-1-1" class="font-2-vmin">重庆欢乐生肖</el-menu-item>
              <el-menu-item index="2-1-2" class="font-2-vmin">幸运时时彩</el-menu-item>
              <el-menu-item index="2-1-3" class="font-2-vmin">SG飞艇</el-menu-item>
              <el-menu-item index="2-1-4" class="font-2-vmin">幸运飞艇</el-menu-item>
              <el-menu-item index="2-1-5" class="font-2-vmin">香港彩</el-menu-item>
              <el-menu-item index="2-1-6" class="font-2-vmin">北京PK10</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">重庆时时彩</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">极速赛车</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">极速时时彩</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">江苏快3</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">极速飞艇</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">新疆时时彩</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">广西快乐十分</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">天津时时彩</el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin">PC蛋蛋幸运28</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">极速彩</template>
              <el-menu-item index="2-2-1" class="font-2-vmin">极速赛车</el-menu-item>
              <el-menu-item index="2-2-2" class="font-2-vmin">极速飞艇</el-menu-item>
              <el-menu-item index="2-2-3" class="font-2-vmin">极速时时彩</el-menu-item>
              <el-menu-item index="2-2-4" class="font-2-vmin">极速快3</el-menu-item>
              <el-menu-item index="2-2-5" class="font-2-vmin">极速快乐十分</el-menu-item>
              <el-menu-item index="2-2-6" class="font-2-vmin">极速快乐8</el-menu-item>
              <el-menu-item index="2-2-7" class="font-2-vmin">极速11选5</el-menu-item>
            </el-submenu>
            <el-submenu index="2-3">
              <template slot="title">高频彩</template>
              <el-menu-item index="2-3-1" class="font-2-vmin">十一运夺金</el-menu-item>
              <el-menu-item index="2-3-2" class="font-2-vmin">重庆幸运农场</el-menu-item>
              <el-menu-item index="2-3-3" class="font-2-vmin">广东快乐十分</el-menu-item>
              <el-menu-item index="2-3-4" class="font-2-vmin">天津快乐十分</el-menu-item>
              <el-menu-item index="2-3-5" class="font-2-vmin">北京快乐8</el-menu-item>
              <el-menu-item index="2-3-6" class="font-2-vmin">重庆七星彩</el-menu-item>
              <el-menu-item index="2-3-7" class="font-2-vmin">江苏快3</el-menu-item>
              <el-menu-item index="2-3-8" class="font-2-vmin">吉林快3</el-menu-item>
              <el-menu-item index="2-3-9" class="font-2-vmin">河北快3</el-menu-item>
              <el-menu-item index="2-3-10" class="font-2-vmin">安徽快3</el-menu-item>
              <el-menu-item index="2-3-11" class="font-2-vmin">内蒙古快3</el-menu-item>
              <el-menu-item index="2-3-12" class="font-2-vmin">福建快3</el-menu-item>
              <el-menu-item index="2-3-13" class="font-2-vmin">湖北快3</el-menu-item>
              <el-menu-item index="2-3-14" class="font-2-vmin">北京快3</el-menu-item>
              <el-menu-item index="2-3-15" class="font-2-vmin">广西快3</el-menu-item>
              <el-menu-item index="2-3-16" class="font-2-vmin">北京快3</el-menu-item>
              <el-menu-item index="2-3-17" class="font-2-vmin">广东11选5</el-menu-item>
              <el-menu-item index="2-3-18" class="font-2-vmin">上海11选5</el-menu-item>
              <el-menu-item index="2-3-19" class="font-2-vmin">安徽11选5</el-menu-item>
              <el-menu-item index="2-3-20" class="font-2-vmin">江西11选5</el-menu-item>
              <el-menu-item index="2-3-21" class="font-2-vmin">吉林11选5</el-menu-item>
              <el-menu-item index="2-3-22" class="font-2-vmin">广西11选5</el-menu-item>
              <el-menu-item index="2-3-23" class="font-2-vmin">湖北11选5</el-menu-item>
              <el-menu-item index="2-3-24" class="font-2-vmin">辽宁11选5</el-menu-item>
              <el-menu-item index="2-3-25" class="font-2-vmin">江苏11选5</el-menu-item>
              <el-menu-item index="2-3-26" class="font-2-vmin">浙江11选5</el-menu-item>
              <el-menu-item index="2-3-27" class="font-2-vmin">内蒙古11选5</el-menu-item>
            </el-submenu>
            <el-submenu index="2-4">
              <template slot="title">境外彩</template>
              <el-menu-item index="2-4-1" class="font-2-vmin">澳洲幸运5</el-menu-item>
              <el-menu-item index="2-4-2" class="font-2-vmin">澳洲幸运8</el-menu-item>
              <el-menu-item index="2-4-3" class="font-2-vmin">澳洲幸运10</el-menu-item>
              <el-menu-item index="2-4-4" class="font-2-vmin">超级大乐透</el-menu-item>
              <el-menu-item index="2-4-5" class="font-2-vmin">台湾宾果</el-menu-item>
            </el-submenu>
            <el-submenu index="2-5">
              <template slot="title">全国彩</template>
              <el-menu-item index="2-5-1" class="font-2-vmin">福彩双色球</el-menu-item>
              <el-menu-item index="2-5-2" class="font-2-vmin">福彩3D</el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin">福彩七乐彩</el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin">超级大乐透</el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin">排列3</el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin">排列5</el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin">七星彩</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" class="font-2-vmin">长龙提醒</el-menu-item>
          <el-menu-item index="4" class="font-2-vmin"><a href="/trend" target="_blank">走势图表</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
	</nav>
</template>
<style scoped lang="scss">

  .nav-background {
    background-color: #ff7b00;
  }
  /deep/ .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, 
  /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title:hover,
  /deep/ .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, 
  /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title:focus {
    background: #eb7100;
    color: #ffffff;
  }

  /deep/ .el-menu-item:not(.is-disabled):hover, 
  /deep/ .el-submenu .el-submenu__title:hover,
  /deep/ .el-menu-item:not(.is-disabled):focus, 
  /deep/ .el-submenu .el-submenu__title:focus {
    background: #eb7100;
    color: #ffffff;
  }

  /deep/ .el-menu.el-menu--horizontal{
    border: solid 0px #e6e6e6;
  }
  /deep/ .el-submenu__title i {
    border-bottom: solid 0px #e6e6e6;
    color: #ffffff;
  }
  /deep/ .el-menu--horizontal > .el-menu-item {
    color: #ffffff;
    height: 51px;
    line-height: 51px;
  }
  /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title  {
    height: 51px;
    line-height: 51px;
    background-color: #ff7b00;
    color: #ffffff;
  }
  /deep/ .el-menu-item, 
  /deep/ .el-submenu__title {
    font-size: 2vmin;
  }
  /deep/ .el-menu-item * {
   vertical-align: top;
  }

  /deep/ .el-submenu__title:hover {
    background: #eb7100;
    color: #ffffff;
  }
</style>
<style lang="scss">

  .el-menu--horizontal .el-menu .el-menu-item, 
  .el-menu--horizontal .el-menu .el-submenu__title {
    color: #909399;
  }

  .el-menu--horizontal .el-menu .el-menu-item:hover, 
  .el-menu--horizontal .el-menu .el-submenu__title:hover {
    background: #eb7100;
    color: #ffffff;
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