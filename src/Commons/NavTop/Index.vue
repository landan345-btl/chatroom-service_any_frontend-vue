<template>
 	<nav class="nav-background color-white">
    <Row :gutter="0">
      <Col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 20, offset: 2}" 
        :md="{span: 20, offset: 2}" 
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}">
        <div class="menu font-size-2 d-flex justify-content-between">
          <span v-for="(link, sIndex) in MENU_LINKS" :key="sIndex" class="pl-2 pr-1">
            <font-awesome-icon :icon="link.ICON" v-if="link.ICON" class="color-white"/>
            <router-link :to="{ path: `${link.LINK}` }" class="color-white">{{link.NAME}}</router-link>
            <i v-if="link.SUB_MENU_LINKS && 0 < link.SUB_MENU_LINKS.length">▾</i>
          </span>
        </div>
         <!-- <el-menu-item index="1" class="font-2-vmin" v-for="(menu, sIndex) in MENU_LINKS" :key="sIndex">
            <router-link :to="{ path: `${menu.LINK}` }">{{menu.NAME}}</router-link>
          </el-menu-item> -->
        <!-- <el-menu :default-active="'1'" class="el-menu-demo nav-background" mode="horizontal" active-text-color="#ffd04b">
          <el-menu-item index="1" class="font-2-vmin" v-for="(menu, sIndex) in MENU_LINKS" :key="sIndex">
            <router-link :to="{ path: `${menu.LINK}` }">{{menu.NAME}}</router-link>
          </el-menu-item>
           <el-menu-item index="1" class="font-2-vmin"><a href="/">首页</a></el-menu-item>
          <el-submenu index="2">
            <template slot="title">彩票大厅</template>
            <el-submenu index="2-1">
              <template slot="title">热门彩</template>
              <el-menu-item index="2-1-1" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'CQSSC' }}">重庆欢乐生肖</router-link></el-menu-item>
              <el-menu-item index="2-1-2" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'FFSSC' }}">幸运分分彩</router-link></el-menu-item>
              <el-menu-item index="2-1-3" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: '3FSSC' }}">幸运三分彩</router-link></el-menu-item>
              <el-menu-item index="2-1-4" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'AFGH90' }}">加纳1.5分彩</router-link></el-menu-item>
              <el-menu-item index="2-1-5" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'XJSSC' }}">新疆时时彩</router-link></el-menu-item>
              <el-menu-item index="2-1-6" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'BJ5FC' }}">北京5分彩</router-link></el-menu-item>
              <el-menu-item index="2-1-7" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'TW5FC' }}">台湾5分彩</router-link></el-menu-item>
              <el-menu-item index="2-1-8" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'JSPK10' }}">极速赛车</router-link></el-menu-item>
              <el-menu-item index="2-1-9" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'JSK3' }}">江苏快3</router-link></el-menu-item>
              <el-menu-item index="2-1-10" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'JSAFT' }}">极速飞艇</router-link></el-menu-item>
              <el-menu-item index="2-1-11" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'TJSSC' }}">天津时时彩</router-link></el-menu-item>
              <el-menu-item index="2-1-12" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'PCDD' }}">PC蛋蛋幸运28</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">PK10</template>
              <el-menu-item index="2-2-1" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'MLAFT' }}">幸运飞艇</router-link></el-menu-item>
              <el-menu-item index="2-2-2" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'PAOMA' }}">香港跑马</router-link></el-menu-item>
              <el-menu-item index="2-2-3" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'KRYSU' }}">韩国音速</router-link></el-menu-item>
              <el-menu-item index="2-2-4" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'BJPK10' }}">北京PK10</router-link></el-menu-item>
              <el-menu-item index="2-2-5" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'FFPK10' }}">分分PK10</router-link></el-menu-item>
              <el-menu-item index="2-2-6" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: '3FPK10' }}">三分PK10</router-link></el-menu-item>
              <el-menu-item index="2-2-7" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'JSPK10' }}">极速赛车</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2-3">
              <template slot="title">时时彩</template>
              <el-menu-item index="2-3-1" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'FFSSC' }}">幸运分分彩</router-link></el-menu-item>
              <el-menu-item index="2-3-2" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: '3FSSC' }}">幸运三分彩</router-link></el-menu-item>
              <el-menu-item index="2-3-3" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'BJ5FC' }}">北京5分彩</router-link></el-menu-item>
              <el-menu-item index="2-3-4" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'AFGH90' }}">加纳1.5分彩</router-link></el-menu-item>
              <el-menu-item index="2-3-5" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'TW5FC' }}">台湾5分彩</router-link></el-menu-item>
              <el-menu-item index="2-3-7" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'XJSSC' }}">新疆时时彩</router-link></el-menu-item>
              <el-menu-item index="2-3-8" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'CQSSC' }}">重庆时时彩</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2-4">
              <template slot="title">快3</template>
              <el-menu-item index="2-3-9" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'HEBK3' }}">河北快3</router-link></el-menu-item>
              <el-menu-item index="2-3-10" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'AHK3' }}">安徽快3</router-link></el-menu-item>
              <el-menu-item index="2-3-11" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'HUBK3' }}">湖北快3</router-link></el-menu-item>
              <el-menu-item index="2-3-12" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'GXK3' }}">广西快3</router-link></el-menu-item>
              <el-menu-item index="2-3-13" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'JLK3' }}">吉林快3</router-link></el-menu-item>
              <el-menu-item index="2-3-14" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'JSK3' }}">江苏快3</router-link></el-menu-item>
              <el-menu-item index="2-3-15" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'FFK3' }}">幸运快3</router-link></el-menu-item>

            </el-submenu>
            <el-submenu index="2-5">
              <template slot="title">11选5</template>
              <el-menu-item index="2-5-1" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'GD11X5' }}">广东11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-2" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'JS11X5' }}">江苏11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'FJ11X5' }}">福建11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-4" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'XJ11X5' }}">新疆11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-5" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'HLJ11X5' }}">黑龙江11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-6" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'SD11X5' }}">十一运夺金</router-link></el-menu-item>
              <el-menu-item index="2-5-7" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'ZJ11X5' }}">浙江11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-8" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'SH11X5' }}">上海11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-9" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'BJ11X5' }}">北京11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-10" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'AH11X5' }}">安徽11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-11" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'JX11X5' }}">江西11选5</router-link></el-menu-item>
              <el-menu-item index="2-5-12" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'FF11X5' }}">幸运11选5</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2-6">
              <template slot="title">3D</template>
              <el-menu-item index="2-5-1" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'FC3D' }}">福彩3D</router-link></el-menu-item>
              <el-menu-item index="2-5-2" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'SHSSL' }}">上海时时彩</router-link></el-menu-item>
              <el-menu-item index="2-5-3" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'PL3' }}">排列3</router-link></el-menu-item>
              <el-menu-item index="2-5-4" class="font-2-vmin"><router-link :to="{ path: '/lottery', query: { code: 'TW3D' }}">台湾3D</router-link></el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" class="font-2-vmin"><router-link :to="{ path: '/accumulation' }">长龙提醒</router-link></el-menu-item>
          <el-menu-item index="4" class="font-2-vmin"><router-link :to="{ path: '/trend' }">走势图表</router-link></el-menu-item> 
        </el-menu>-->
      </Col>
    </Row>
    <Row :gutter="0" class="pull-menu z-1000 color-black">
      <Col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 20, offset: 2}" 
        :md="{span: 20, offset: 2}" 
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}">
        <div class="down-menu"  v-for="(link, sIndex) in MENU_LINKS" :key="sIndex">
          <div class="lottery-type pt-2" v-for="(subLink, sIndex) in link.SUB_MENU_LINKS" :key="sIndex">
            {{ subLink.NAME }}
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