<template>
  <nav class="">
   		<div class="top">
			<div class="nav_top">
				<img src="@/assets/images/icon01.png"/>最新公告：
			<p class="FloatRight"><span>设为首页</span>&nbsp;&nbsp;|&nbsp;&nbsp; <span>收藏本站</span></p>
			</div>
		</div>
		<div class="top_logo">
			<div class="nav_top1">
				<img src="@/assets/images/logo.png"/>
				<img class="FloatRight" src="@/assets/images/icon02.png"/>
			</div>
		</div>
		
  </nav>
</template>
<style scoped lang="scss">
	.top{background-color: #ebebeb;height: 30px;}
		.nav_top,.nav_top1,.nav_top2{width: 1200px; margin: 0 auto;}
		.top .nav_top{font-size: 14px;line-height: 30px;}
		.top .nav_top img{margin-right: 5px; margin-top: -3px;}
			.FloatRight{float: right;}
	.top_logo{height: 100px;}
	
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Nav',
})
class Nav extends Vue {
}

export default Nav;
</script>