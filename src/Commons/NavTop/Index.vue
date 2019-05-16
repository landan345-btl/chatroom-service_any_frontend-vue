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
          <span @mouseenter="showDownMenu(sIndex)" @mouseleave="hideDownMenu()" v-for="(link, sIndex) in MENU_LINKS" :key="sIndex" class="pl-2 pr-1" v-if="link.STATUS && 1===link.STATUS">
            <!-- <font-awesome-icon :icon="link.ICON" v-if="link.ICON" class="color-white"/>   ICON 预留图标-->
            <router-link :to="{ path: `${link.LINK}` }" class="color-white">{{link.NAME}}</router-link>
            <i v-if="link.SUB_MENU_LINKS && 0 < link.SUB_MENU_LINKS.length">▾</i>
          </span>
        </div>
      </Col>
    </Row>
    <transition name="fade" v-if="status">
      <div class="sub-menu-board z-1003 color-black position-absolute">
        <Row :gutter="0">
          <Col 
            :xs="{span: 22, offset: 1}" 
            :sm="{span: 20, offset: 2}" 
            :md="{span: 20, offset: 2}" 
            :lg="{span: 20, offset: 2}"
            :xl="{span: 16, offset: 4}">
            <div class="sub-menu" @mouseenter="showDownMenu(sIndex)"  @mouseleave="hideDownMenu()" v-for="(link, sIndex) in MENU_LINKS" :key="sIndex" v-show="sIndex === status">
              <div class="lottery-type pt-2 pb-0p5 d-flex" v-for="(subLink, sIndex) in link.SUB_MENU_LINKS" :key="sIndex">
                <span class="d-inline-block">
                  <span class="d-inline-block" :class="'icon-' + subLink.ICON +'-pic'"></span>
                  <span class="font-size-2 type-title pl-1">{{ subLink.NAME }}</span>
                </span>
                <span class="lottery-right">
                  <p v-for="(lottery , sIndex) in subLink.SUB_MENU_LINKS" :key="sIndex" class="d-inline-block ml-3 position-relative">
                    <!-- <i class="lottery-icon d-inline-block" :class="'icon-'+lottery.ICON"></i>  ICON 预留图标-->
                    <span class="lottery-title font-size-1p5 d-inline-block text-center" >
                      <router-link :to="{ path: `${lottery.LINK}` }" >{{ lottery.NAME }} </router-link> 
                    </span>
                    <i :class=" lottery.IS_HOT ===true ? 'is-hot':''" class="d-inline-block hot-pisotion position-absolute"></i>
                  </p> 
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
     </transition>
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
  public status: any = null;

  public showDownMenu(sIndex: any): void {
    this.status = sIndex;
  }
  public hideDownMenu() {
    this.status = null;
  }
}

export default NavTop;
</script>