<template>
  <footer>
  	<div>
      <el-row :gutter="0">
        <el-col :xs="{span: 22, offset: 1}" :sm="{span: 5, offset: 2}" :md="{span: 4, offset: 4}" :lg="{span: 4, offset: 4}">
          <img src="@/assets/images/logo-bottom.png"/>
          <div class="content">
            <p>最专业的彩票开奖网站</p>
            <p>数据分析最全面的开奖数据平台</p>
          </div>
        </el-col>
        <el-col :xs="{span: 0, offset: 0}" :sm="{span: 5, offset: 0}" :md="{span: 4, offset: 0}" :lg="{span: 4, offset: 0}">
          <div class="title">
            <font-awesome-icon icon="info-circle" class="d-inline-block"/><span>关于我们</span>
          </div>
          <ul class="content">
            <li><a href="/">关于我们</a></li>
            <li><a href="/">客服中心</a></li>
            <li><a href="/">商务合作</a></li>
            <li><a href="/">免责声明</a></li>
          </ul>
        </el-col>
        <el-col :xs="{span: 0, offset: 0}" :sm="{span: 5, offset: 0}" :md="{span: 4, offset: 0}" :lg="{span: 4, offset: 0}">
          <div class="title">
            <font-awesome-icon icon="trophy" class="d-inline-block"/><span>中奖神器</span>
          </div>
          <ul class="content">
            <li><a href="/">开奖号码</a></li>
            <li><a href="/">走势图表</a></li>
            <li><a href="/">玩法规则</a></li>
          </ul>
        </el-col>
        <el-col :xs="{span: 0, offset: 0}" :sm="{span: 5, offset: 0}" :md="{span: 4, offset: 0}" :lg="{span: 4, offset: 0}">
          <div class="title">
            <font-awesome-icon icon="server" class="d-inline-block"/><span>免费调用</span>
          </div>
          <ul class="content">
            <li><a href="/">自助网址导航</a></li>
            <li><a href="/">开奖调用</a></li>
          </ul>
        </el-col>
      </el-row>
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