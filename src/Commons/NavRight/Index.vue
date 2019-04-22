<template>
 	<nav class="">
    <el-row :gutter="12" class="">
      <el-col :xs="{span: 24, offset: 24}" :sm="{span: 2, offset: 22}" :md="{span: 3, offset: 21}" :lg="{span: 4, offset: 20}">
        <ul class="list">
          <li class="icon home-icon"><a href="/"></a></li>
          <li class="icon qq-icon"><a href=""></a></li>
          <li class="icon feedback-icon"></li>
          <li class="icon app-icon"><a></a></li>
        </ul>
      </el-col>
    </el-row>
	</nav>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<style lang="scss">
@import 'Index.scss';
</style>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'NavRight',
})
class NavRight extends Vue {

}

export default NavRight;
</script>