<template>
 	<header>
		<div class="top_nav">
			<div class="nav_top2">
				<ul class="nav_ul">
					<li v-on:click="handleHome">首页</li>
					<li v-on:click="handlePapularLottery">热门彩种</li>
					<li v-on:click="handleInstantLottery">时时彩</li>
					<li v-on:click="handlePKTenLottery">PK10</li>
					<li v-on:click="handleFiveOfElevenLottery">11选5</li>
					<li v-on:click="handleFastThreeLottery">快三</li>
					<li v-on:click="handleOtherLottery">其他</li>
				</ul>
			</div>
		</div>
		
	</header>
</template>
<style scoped lang="scss">
.top_nav{height: 50px;background-color: #37b0e9;}
		.nav_top2 ul li{text-align: center;height: 50px;width: 170px;float: left;font-size: 16px;color: white;line-height: 50px; cursor: pointer;}
	.top{background-color: #ebebeb;height: 30px;}
		.nav_top,.nav_top1,.nav_top2{width: 1200px; margin: 0 auto;}
		.top .nav_top{font-size: 14px;line-height: 30px;}
		.top .nav_top img{margin-right: 5px; margin-top: -3px;}
			.FloatRight{float: right;}
	.top_logo{height: 100px;}
	.top_nav{height: 50px;background-color: #37b0e9;}
		.nav_top2 ul li{text-align: center;height: 50px;width: 170px;float: left;font-size: 16px;color: white;line-height: 50px;}
		.displayN{display: none !important;}
		.displayB{display: block !important;}
	
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Nav',
})
class Nav extends Vue {
  public handleHome() {
    console.log('你按了首页！');
    let root: any = this.$root;
    root.showedAllLottery = !root.showedAllLottery;
  }
  public handlePapularLottery() {
    console.log('你按了热门彩种！');
    let root: any = this.$root;
    root.showedPapularLottery = !root.showedPapularLottery;
  }
  public handleInstantLottery() {
    console.log('你按了时时彩种！');
    let root: any = this.$root;
    root.showedInstantLottery = !root.showedInstantLottery;
  }

  public handlePKTenLottery() {
    console.log('你按了PK10彩种！');
    let root: any = this.$root;
    root.showedPKTenLottery = !root.showedPKTenLottery;
  }

  public handleFiveOfElevenLottery() {
    console.log('你按了11选5彩种！');
    let root: any = this.$root;
    root.showedFiveOfElevenLottery = !root.showedFiveOfElevenLottery;
  }

  public handleFastThreeLottery() {
    console.log('你按了快三彩种！');
    let root: any = this.$root;
    root.showedFastThreeLottery = !root.showedFastThreeLottery;
  }

  public handleOtherLottery() {
    console.log('你按了其他彩种！');
    let root: any = this.$root;
    root.showedOtherLottery = !root.showedOtherLottery;
  }
}

export default Nav;
</script>