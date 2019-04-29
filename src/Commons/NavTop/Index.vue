<template>
 	<nav class="nav-background">
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <el-menu :default-active="'1'" class="el-menu-demo nav-background" mode="horizontal" active-text-color="#ffd04b">
          <el-menu-item index="1" class="font-2-vmin"><a href="/">首页</a></el-menu-item>
          <el-submenu index="2">
            <template slot="title">彩票大厅</template>
            <el-submenu index="2-1">
              <template slot="title">热门彩</template>
              <el-menu-item index="2-1-1" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">重庆欢乐生肖</a></el-menu-item>
              <el-menu-item index="2-1-2" class="font-2-vmin"><a href="/lottery-issue?code=FFSSC">幸运分分彩</a></el-menu-item>
              <el-menu-item index="2-1-3" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">SG飞艇</a></el-menu-item>
              <el-menu-item index="2-1-4" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">幸运飞艇</a></el-menu-item>
              <el-menu-item index="2-1-5" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">香港彩</a></el-menu-item>
              <el-menu-item index="2-1-6" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">北京PK10</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">重庆时时彩</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">极速赛车</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">极速时时彩</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">江苏快3</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">极速飞艇</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">新疆时时彩</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">广西快乐十分</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">天津时时彩</a></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><a href="/lottery-issue?code=PCDD">PC蛋蛋幸运28</a></el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">PK10</template>
              <el-menu-item index="2-2-1" class="font-2-vmin"><a href="/lottery-issue?code=MLAFT">幸运飞艇</a></el-menu-item>
              <el-menu-item index="2-2-2" class="font-2-vmin"><a href="/lottery-issue?code=PAOMA">香港跑马</a></el-menu-item>
              <el-menu-item index="2-2-3" class="font-2-vmin"><a href="/lottery-issue?code=KRYSU">韩国音速</a></el-menu-item>
              <el-menu-item index="2-2-4" class="font-2-vmin"><a href="/lottery-issue?code=BJPK10">北京PK10</a></el-menu-item>
              <el-menu-item index="2-2-5" class="font-2-vmin"><a href="/lottery-issue?code=FFPK10">分分PK10</a></el-menu-item>
              <el-menu-item index="2-2-6" class="font-2-vmin"><a href="/lottery-issue?code=3FPK10">三分PK10</a></el-menu-item>
              <el-menu-item index="2-2-7" class="font-2-vmin"><a href="/lottery-issue?code=JSPK10">极速赛车</a></el-menu-item>
            </el-submenu>
            <el-submenu index="2-3">
              <template slot="title">时时彩</template>
              <el-menu-item index="2-3-1" class="font-2-vmin"><a href="/lottery-issue?code=FFSSC">幸运分分彩</a></el-menu-item>
              <el-menu-item index="2-3-2" class="font-2-vmin"><a href="/lottery-issue?code=3FSSC">幸运三分彩</a></el-menu-item>
              <el-menu-item index="2-3-3" class="font-2-vmin"><a href="/lottery-issue?code=BJ5FC">北京5分彩</a></el-menu-item>
              <el-menu-item index="2-3-4" class="font-2-vmin"><a href="/lottery-issue?code=AFGH90">加纳1.5分彩</a></el-menu-item>
              <el-menu-item index="2-3-5" class="font-2-vmin"><a href="/lottery-issue?code=TW5FC">台湾5分彩</a></el-menu-item>
              <el-menu-item index="2-3-7" class="font-2-vmin"><a href="/lottery-issue?code=XJSSC">新疆时时彩</a></el-menu-item>
              <el-menu-item index="2-3-8" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">重庆时时彩</a></el-menu-item>
            </el-submenu>
            <el-submenu index="2-4">
              <template slot="title">快3</template>
              <el-menu-item index="2-3-9" class="font-2-vmin"><a href="/lottery-issue?code=HEBK3">河北快3</a></el-menu-item>
              <el-menu-item index="2-3-10" class="font-2-vmin"><a href="/lottery-issue?code=AHK3">安徽快3</a></el-menu-item>
              <el-menu-item index="2-3-12" class="font-2-vmin"><a href="/lottery-issue?code=FJK3">福建快3</a></el-menu-item>
              <el-menu-item index="2-3-13" class="font-2-vmin"><a href="/lottery-issue?code=HUBK3">湖北快3</a></el-menu-item>
              <el-menu-item index="2-3-14" class="font-2-vmin"><a href="/lottery-issue?code=BJK3">北京快3</a></el-menu-item>
              <el-menu-item index="2-3-15" class="font-2-vmin"><a href="/lottery-issue?code=GXK3">广西快3</a></el-menu-item>
              <el-menu-item index="2-3-15" class="font-2-vmin"><a href="/lottery-issue?code=JLK3">吉林快3</a></el-menu-item>
              <el-menu-item index="2-3-15" class="font-2-vmin"><a href="/lottery-issue?code=JSK3">江苏快3</a></el-menu-item>
              <el-menu-item index="2-3-15" class="font-2-vmin"><a href="/lottery-issue?code=FFK3">幸运快3</a></el-menu-item>

            </el-submenu>
            <el-submenu index="2-5">
              <template slot="title">11选5</template>
              <el-menu-item index="2-5-1" class="font-2-vmin"><a href="/lottery-issue?code=GD11X5">广东11选5</a></el-menu-item>
              <el-menu-item index="2-5-2" class="font-2-vmin"><a href="/lottery-issue?code=JS11X5">江苏11选5</a></el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin"><a href="/lottery-issue?code=FJ11X5">福建11选5</a></el-menu-item>
              <el-menu-item index="2-5-4" class="font-2-vmin"><a href="/lottery-issue?code=XJ11X5">新疆11选5</a></el-menu-item>
              <el-menu-item index="2-5-5" class="font-2-vmin"><a href="/lottery-issue?code=HLJ11X5">黑龙江11选5</a></el-menu-item>
              <el-menu-item index="2-5-6" class="font-2-vmin"><a href="/lottery-issue?code=SD11X5">十一运夺金</a></el-menu-item>
              <el-menu-item index="2-5-7" class="font-2-vmin"><a href="/lottery-issue?code=ZJ11X5">浙江11选5</a></el-menu-item>
              <el-menu-item index="2-5-8" class="font-2-vmin"><a href="/lottery-issue?code=SH11X5">上海11选5</a></el-menu-item>
              <el-menu-item index="2-5-9" class="font-2-vmin"><a href="/lottery-issue?code=BJ11X5">北京11选5</a></el-menu-item>
              <el-menu-item index="2-5-10" class="font-2-vmin"><a href="/lottery-issue?code=JX11X5">江西11选5</a></el-menu-item>
              <el-menu-item index="2-5-11" class="font-2-vmin"><a href="/lottery-issue?code=AH11X5">安徽11选5</a></el-menu-item>
              <el-menu-item index="2-5-12" class="font-2-vmin"><a href="/lottery-issue?code=JL11X5">吉林11选5</a></el-menu-item>
              <el-menu-item index="2-5-13" class="font-2-vmin"><a href="/lottery-issue?code=FF11X5">幸运11选5</a></el-menu-item>
              <el-menu-item index="2-5-14" class="font-2-vmin"><a href="/lottery-issue?code=GX11X5">广西11选5</a></el-menu-item>
            </el-submenu>
            <el-submenu index="2-6">
              <template slot="title"></template>
              <el-menu-item index="2-5-1" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">福彩双色球</a></el-menu-item>
              <el-menu-item index="2-5-2" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">福彩3D</a></el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">福彩七乐彩</a></el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">超级大乐透</a></el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">排列3</a></el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">排列5</a></el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin"><a href="/lottery-issue?code=CQSSC">七星彩</a></el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" class="font-2-vmin"><a href="/statistics" target="_blank">长龙提醒</a></el-menu-item>
          <el-menu-item index="4" class="font-2-vmin"><a href="/trend-board" target="_blank">走势图表</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
	</nav>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<style lang="scss">
@import 'Index.scss';
</style>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'NavTop',
})
class NavTop extends Vue {

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

export default NavTop;
</script>