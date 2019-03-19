<template>
  <header>
    <el-row :gutter="0" type="flex" justify="space-between" class ="top">
      <el-col :xs="{span: 11, offset: 1}" :sm="{span: 10, offset: 2}" :md="{span: 9, offset: 3}" :lg="{span: 8, offset: 4}" class="notification">
        <img src="@/assets/images/icon-notification.png"/>
        <span>最新公告：</span>
      </el-col>
      <el-col :xs="{span: 11}" :sm="{span: 10}" :md="{span: 9}" :lg="{span: 8}" class="tool">
        <span>设为首页</span>
        <span>收藏本站</span>
        <span>帮助中心</span>
        <span>手机版</span>
      </el-col>
    </el-row>
    <div class="images">
      <el-row :gutter="0">
        <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
          <a href="/"><img src="@/assets/images/logo.png"/></a>
				  <img class="img" src="@/assets/images/icon-qrcode.png"/>
        </el-col>
      </el-row>
    </div>
  </header>
</template>
<style scoped lang="scss">
	header {
		.top {
			background: #ebebeb;
      height: 30px;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      color: #666666;
      font-size: 1vmin;
      line-height: 2.5;
      .tool {
        span {
          margin-left: 1vmin;
        }
        span::after {
          content: "|";
          margin-left: 1vmin;
        }
        span:last-child:after { 
          content: ""; 
        }
      }
		}
    img {
      vertical-align: middle;
      margin-right: 3px;
    }
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