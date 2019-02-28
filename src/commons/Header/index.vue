<template>
  <header class="">
   		<div class="top">
			<div class="nav_top">
				<img src="@/assets/images/icon01.png"/>最新公告：
			<p class="FloatRight"><span>设为首页</span>&nbsp;&nbsp;|&nbsp;&nbsp; <span>收藏本站</span></p>
			</div>
		</div>
		<div class="top_logo">
			<div class="nav_top1">
				<a href="/"><img src="@/assets/images/logo.png"/></a>
				<img class="img" src="@/assets/images/icon02.png"/>
			</div>
		</div>
		
  </header>
</template>
<style scoped lang="scss">
	.top{background-color: #ebebeb;height: 30px;}
	.top_logo{height: 100px;}
		.nav_top,.nav_top1,.nav_top2{width: 1200px; margin: 0 auto;}
		.top .nav_top{font-size: 14px;line-height: 30px;}
		.top .nav_top img{margin-right: 5px; margin-top: -3px;}
			.FloatRight{float: right;}
	 @media all and (max-width: 820px) {
	 	header{width: 75rem;}
        .top{display: none;}
        .top_logo{height: 250px;text-align: center;
        		img{width: 83%;}
        		.img{display:none;}
   		 }
		.nav_top1{width: 100%; margin: 0 auto;}	
       
        }
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