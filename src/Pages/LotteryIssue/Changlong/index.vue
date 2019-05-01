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
    .title{
      padding:2vmin 0 1vmin 0vmin;
      font-size:1.8vmin;  
    }
      .remind {
          ul {width:100%;
            li {
              width:13.8% !important;
              height: 3.5vmin!important;
              padding: 0 !important;
              line-height: 3.5vmin!important;
              margin-right:2% !important;
              margin-top: 1vmin;
              text-align: center;
              border-radius: 0 !important;
              font-size:0.8rem;
              display: inline-block;
              border:1px solid #E7E7E7;
            }
      }
    }
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