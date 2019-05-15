<template>
 	<nav class="right z-xs-1001 z-sm-0">
    <Row :gutter="12" class="">
      <Col 
        :xs="{span: 24, offset: 0}" 
        :sm="{span: 2, offset: 22}" 
        :md="{span: 1, offset: 22}" 
        :lg="{span: 1, offset: 22}"
        :xl="{span: 1, offset: 20}">
        <ul class="list">
          <li class="icon home-icon"><a href="/"></a></li>
          <li class="icon qq-icon"><a href=""></a></li>
          <li class="icon feedback-icon"></li>
          <li class="icon app-icon"><a></a></li>
        </ul>
      </Col>
    </Row>
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