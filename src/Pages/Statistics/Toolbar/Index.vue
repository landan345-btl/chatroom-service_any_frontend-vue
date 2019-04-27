<template>
  <span class="toolbar d-inline-block">
   <E-collapse>
      <el-collapse-item title="热门彩" name="1">

      </el-collapse-item>
      <el-collapse-item title="极速彩" name="2">

      </el-collapse-item>
      <el-collapse-item title="高频彩" name="3">

      </el-collapse-item>
      <el-collapse-item title="境外彩" name="4">

      </el-collapse-item>
      <el-collapse-item title="全国彩" name="5">

      </el-collapse-item>
   </e-collapse>
  </span>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import ETabs from '@/Components/ETabs/Index.vue';
import ECollapse from '@/Components/ECollapse/Index.vue';

@Component({
  name: 'Toolbar',
  components: {
    ECollapse,
  },
})
class Toolbar extends Vue {

}

export default Toolbar;
</script>
