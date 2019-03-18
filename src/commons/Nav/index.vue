<template>
 	<nav>
		<div class="top_nav">
			<div class="nav_top2">
				<ul class="nav_ul">
					<li v-on:click="handleHome">首页</li>
					<li v-on:click="handlePapularLottery">彩票大厅</li>
					<li v-on:click="handleInstantLottery">走势图表</li>
					<li v-on:click="handlePKTenLottery">追号计划</li>
				</ul>
			</div>
		</div>
		
	</nav>
</template>
<style scoped lang="scss">
.top_nav{
  height: 50px;
  background-color: #ff7b00;
}
	.nav_top2 ul li{
    text-align: center;
    height: 50px;
    width: 90px;
    float: left;
    font-size: 16px;
    color: white;
    line-height: 50px;
    cursor: pointer;
  }
	.top{background-color: #ebebeb;height: 30px;}
		.nav_top,.nav_top1,.nav_top2{width: 1200px; margin: 0 auto;}
		.top .nav_top{font-size: 14px;line-height: 30px;}
		.top .nav_top img{margin-right: 5px; margin-top: -3px;}
			.FloatRight{float: right;}
	.top_logo{height: 100px;}

	 @media all and (max-width: 820px) {
        .top_nav {height: 100px; width:100% } 
        .nav_top2 ul li{text-align: center; height: 100px; width: 14%; float: left; font-size: 41px; color: white; line-height: 100px;}
       
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