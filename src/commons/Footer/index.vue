<template>
  <footer>
  	<div>
  		<img src="@/assets/images/icon04.png"/>
  		<p>诺亚是在菲律宾马卡蒂注册的合法博彩公司 ，由菲律宾政府PAGCOR (Philippine Amusement and Gaming Corporation)所颁发的离岸博彩许可证，并受其监管。</p>
  		<ul>
  			<li>新手帮助</li>
   			<li>博彩责任</li>
   			<li>隐私保护</li>
   			<li>规则条款</li>
   			<li>联系我们</li> 	
   			<li>代理加盟</li> 	 			
  		</ul><br>
  		<p>© 2017诺亚娱乐版权所菲律宾政府PAGCOR博彩牌照认证</p>
  	</div>
  </footer>
</template>
<style scoped lang="scss">
	footer{
		background-color: #e9e9e9;text-align: center;color:#7c8797;
		position: fixed;
		bottom: 0;
		div{
			margin: 0 auto;
			background-color: #FFFFFF;
			padding-bottom: 20px;
			img{
				margin:10px 0;
			}
			ul {
				width: 530px;
				margin:20px auto;
				height:1px;
				li{
					float:left;
					margin-left:20px;
				}
			}
		}
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