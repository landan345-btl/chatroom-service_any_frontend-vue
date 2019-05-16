<template>
 	<nav class="nav-background color-white">
    <Row :gutter="0">
      <Col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 20, offset: 2}" 
        :md="{span: 20, offset: 2}" 
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}">
        <div class="menu font-size-2 d-flex align-self-start">
          <span v-for="(link, sIndex) in MENU_LINKS" :key="sIndex" class="pl-2 pr-1" v-if="link.STATUS && 1===link.STATUS">
            <font-awesome-icon :icon="link.ICON" v-if="link.ICON" class="color-white"/>
            <router-link :to="{ path: `${link.LINK}` }" class="color-white">{{link.NAME}}</router-link>
            <i v-if="link.SUB_MENU_LINKS && 0 < link.SUB_MENU_LINKS.length">▾</i>
          </span>
        </div>
      </Col>
    </Row>
    <Row :gutter="0" class="sub-menu z-1003 color-black position-absolute">
      <Col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 20, offset: 2}" 
        :md="{span: 20, offset: 2}" 
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}">
        <div class="down-menu"  v-for="(link, sIndex) in MENU_LINKS" :key="sIndex">
          <div class="lottery-type pt-1 pb-0p5" v-for="(subLink, sIndex) in link.SUB_MENU_LINKS" :key="sIndex">
            <p>
              <span class="d-inline-block" :class="'icon-' + subLink.ICON +'-pic'"></span>
              <span class="font-size-2  pl-1">{{ subLink.NAME }}</span>
            </p>
            <p v-for="(lottery , sIndex) in subLink.SUB_MENU_LINKS" :key="sIndex" class="d-inline-block ml-3">
              <i class="lottery-icon d-inline-block" :class="'icon-'+lottery.ICON"></i>
              <span class="lottery-title d-inline-block" > 
                {{ lottery.NAME }}
              </span>
              <i class="hot"></i>
            </p> 
          </div>
        </div>
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
  name: 'NavTop',
})
class NavTop extends Vue {
}

export default NavTop;
</script>