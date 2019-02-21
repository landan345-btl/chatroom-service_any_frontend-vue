<template>
 	<header>
		<div class="top_nav">
			<div class="nav_top2">
				<ul class="nav_ul">
					<li>首页</li>
					<li>热门彩种</li>
					<li>时时彩</li>
					<li>PK10</li>
					<li>11选5</li>
					<li>快三</li>
					<li>其他</li>
				</ul>
			</div>
		</div>
		
	</header>
</template>
<style scoped lang="scss">
.top_nav{height: 50px;background-color: #37b0e9;}
		.nav_top2 ul li{text-align: center;height: 50px;width: 170px;float: left;font-size: 16px;color: white;line-height: 50px;}
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
  name: 'Header',
})
class Header extends Vue {
}

export default Header;
</script>

