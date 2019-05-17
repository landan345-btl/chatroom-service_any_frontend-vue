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
          <span @mouseenter="showSubMenu(sIndex)" @mouseleave="hideSubMenu()" v-for="(link, sIndex) in MENU_LINKS" :key="sIndex" class="pl-1 pr-1 mr-3" v-if="link.STATUS && 1===link.STATUS">
            <!-- <font-awesome-icon :icon="link.ICON" v-if="link.ICON" class="color-white"/>  nav 最后一个菜单 预留图标-->
            <router-link :to="{ path: `${link.LINK}` }" class="color-white">{{link.NAME}}</router-link>
            <i v-if="link.SUB_MENU_LINKS && 0 < link.SUB_MENU_LINKS.length">▾</i>
          </span>
        </div>
      </Col>
    </Row>
    <div class="sub-menu-board z-1003 color-black position-absolute">
      <Row :gutter="0">
        <Col 
          :xs="{span: 22, offset: 1}" 
          :sm="{span: 20, offset: 2}" 
          :md="{span: 20, offset: 2}" 
          :lg="{span: 20, offset: 2}"
          :xl="{span: 16, offset: 4}">
          <div class="sub-menu" @mouseenter="showSubMenu(sIndex)"  @mouseleave="hideSubMenu()" v-for="(link, sIndex) in MENU_LINKS" :key="sIndex" v-show="sIndex === status">
            <div class="lnik-type pb-1 d-flex" v-for="(subLink, sIndex) in link.SUB_MENU_LINKS" :key="sIndex">
              <span class="d-inline-block pl-1">
                <span class="d-inline-block" :class="'icon-' + subLink.ICON"></span>
                <span class="font-size-2 align-top pl-1">{{ subLink.NAME }}</span>
              </span>
              <span class="lnik-right">
                <p v-for="(subLink , sIndex) in subLink.SUB_MENU_LINKS" :key="sIndex" class="d-inline-block ml-2 position-relative">
                  <!-- <i class="lottery-icon align-middle d-inline-block" :class="'icon-'+lottery.ICON"></i>  ICON 预留图标-->
                  <span class="lnik-title align-middle font-size-1p5 d-inline-block text-center" >
                    <router-link :to="{ path:`${linkToPath(subLink.LINK)}` , query: linkToQuery(subLink.LINK)}" >{{ subLink.NAME }} </router-link> 
                  </span>
                  <i :class=" subLink.IS_HOT ===true ? 'is-hot':''" class="d-inline-block hot-pisotion position-absolute"></i>
                </p> 
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
	</nav>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<style lang="scss">
@import 'Index.scss';
</style>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'NavTop',
})
class NavTop extends Vue {
  public status: any = null;

  public showSubMenu(sIndex: any): void {
    this.status = sIndex;
  }
  public hideSubMenu() {
    this.status = null;
  }
}

export default NavTop;
</script>