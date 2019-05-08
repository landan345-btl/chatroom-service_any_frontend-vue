<template>
  <div class="mg-l-2">
    <div class="title">长龙连开提醒</div>
    <div class="remind">
      <ul>
        <li v-for=" item in 13" :key="item">
          <span>亚军</span>:
            &nbsp;&nbsp;
          <span>双</span>
            &nbsp;&nbsp;
          <span style="color:#f11821">6&nbsp;&nbsp;</span>期
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Changlong',
  })
class Changlong extends Vue {
}

export default Changlong;
</script>