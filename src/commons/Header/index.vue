<template>
  <header>
    <div class="top">
      <el-row :gutter="0">
        <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
          <span class="notification">
            <img src="@/assets/images/icon-notification.png"/>
            <span>最新公告：
            </span>
          </span>
          <span class="tool">
            <span>设为首页</span>
            <span>收藏本站</span>
            <span>帮助中心</span>
            <span>手机版</span>
          </span>
        </el-col>
      </el-row>
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