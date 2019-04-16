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
      <el-row :gutter="0" type="flex" justify="space-between">
        <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
          <p class="content"><span>© 2019 www.168kai.com All rights reserved 彩票开奖网 版权所有 粤ICP备09298233</span> <span>号站长统计</span></p>
        </el-col>
      </el-row>
    </div>

  </footer>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
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