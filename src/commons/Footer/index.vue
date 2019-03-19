<template>
  <footer>
  	<div>
  		<img src="@/assets/images/logo-bottom.png"/>
  		<p>最专业的彩票开奖网站</p>
			<p>数据分析最全面的开奖数据平台</p>
  		<ul>
  			<li>新手帮助</li>
   			<li>博彩责任</li>
   			<li>隐私保护</li>
   			<li>规则条款</li>
   			<li>联系我们</li> 	
   			<li>代理加盟</li> 	 			
  		</ul><br>
  	</div>
		<div class="bottom">
  		<p>© 2019 www.168kai.com All rights reserved 彩票开奖网 版权所有 粤ICP备09298233号站长统计</p>
		</div>
  </footer>
</template>
<style scoped lang="scss">
	footer {
		position: absolute;
		width: 100%;
		bottom: 0;
		background-color: #3f404f;
		text-align: center;
		color:#999999;
	}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Footer',
  })
class Footer extends Vue {
}

export default Footer;
</script>