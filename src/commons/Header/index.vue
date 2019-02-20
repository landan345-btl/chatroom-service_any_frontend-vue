<template>
 	<header>
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
		<div class="top_content">
			<div class="content">
				<div class="displayB">
					<table border="0">
						<tr><th>当期奖号</th><th>下期倒计时</th><th>走势图</th></tr>
						<tr><td>Data</td><td>Data</td><td><img src="@/assets/images/icon03.png"/></td></tr>
						<tr><td>Data</td><td>Data</td><td><img src="@/assets/images/icon03.png"/></td></tr>
					</table>
				</div>
				<div>
					2
				</div>
				<div>
					3
				</div>
				<div>
					4
				</div>
				<div>
					5
				</div>
				<div>
					6
				</div>
				<div>
					7
				</div>
			</div>
		</div>
	</header>
</template>
<style scoped lang="scss">
	*,*:before,*:after {-webkit-box-sizing:border-box;box-sizing:border-box;}
	*{margin:0;padding:0;font-weight:normal;}
	* html,* html body{background-image:url(about:blank);}
	html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
	html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;-webkit-tap-highlight-color:rgba(255,255,255,0);}
	body,input,textarea,select{font-size:12px;font-family: Microsoft Yahei, "Helvetica Neue", Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;color:#414141;line-height:1.42857143;-webkit-font-smoothing:antialiased;}
	header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
	table{border-collapse:collapse;border-spacing:0;}
	caption{text-align:left;font-weight:normal;}
	html,body,fieldset,img,iframe,abbr,button,input{border:0;}
	i,cite,em,var,address,dfn{font-style:normal;}
	[hidefocus],summary{outline:0;}
	ul,ol,li{list-style:none;}
	sup,sub{font-size:83%;}
	pre,code,kbd,samp{font-family:inherit;}
	blockquote:before,blockquote:after,q:before,q:after{content:none;content:"";}
	blockquote,q{quotes:"" "";}
	textarea{overflow:auto;resize:none;}
	label,summary{cursor:default;}
	a,button{cursor:pointer;}
	a,input,img{vertical-align:middle;border:0;outline:none;}
	h1,h2,h3,h4,h5,h6,em,strong,b,th{font-weight:bold;}
	del,ins,u,s,a,a:hover,a:active{text-decoration:none;}
	body,textarea,input,button,select,keygen,legend{outline:0;}
	a{color:#033d8e;color:rgba(3,61,142,1);transition:color .2s ease;}
	a:hover{}
	a{blr:expression(this.onFocus=this.blur());}
	input,button,select,textarea,input:focus,button:focus,select:focus,textarea:focus{outline:none;}
	input,button,select,textarea{outline:none;border-radius:0;}
	input[type="search"]{-webkit-appearance:none;}
	input[type="button"]{cursor:pointer;}
	input::-webkit-search-decoration,input::-webkit-search-cancel-button{display:none;}
	hr{margin:0;padding:0;border:0;color:#000;background-color:#000;height:1px}
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
	.top_content{background-color: #ebebeb;padding-bottom: 30px;}
		.content{width: 1200px; margin: 0 auto;padding-top: 20px;}
			.content>div{display: none;background: #FFFFFF;border-top: 2px solid #37b0e9;padding: 20px;margin-bottom: 20px;}
				.content>div table th{height: 50px;background-color: #ebebeb;width: 400px;text-align: center;}
				.content>div>table th:first-child{width: 600px;}
				.content>div>table th:last-child{width: 200px;}
				.content>div table td{height: 100px;text-align: center;}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

class Header extends Vue {
}

export default Header;
</script>

