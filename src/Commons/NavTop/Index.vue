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
          <div class="lottery-type pt-2 pb-1" v-for="(subLink, sIndex) in link.SUB_MENU_LINKS" :key="sIndex">
            <span class="d-inline-block" :class="'icon-' + subLink.ICON +'-pic'"></span>
            <span class="font-size-2 d-inline-block pl-1 type-title">{{ subLink.NAME }}</span>
            <span class="ss">
            <span v-for="(lottery , sIndex) in subLink.SUB_MENU_LINKS" :key="sIndex">
              <span class="lottery-title ml-1 d-inline-block" > 
                {{ lottery.NAME }}
              </span>
            </span>
            </span>  
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