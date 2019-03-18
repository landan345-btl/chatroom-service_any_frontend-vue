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