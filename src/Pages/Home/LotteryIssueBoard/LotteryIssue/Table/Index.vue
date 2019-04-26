<template>
  <table class="text-center" v-if="'PK10' === lotteryIssue.types">
    <tr>
      <th colspan=5>1-5龙虎</th>
      <th colspan=3>冠亚和</th>
    </tr>
    <tr>
      <td>龙</td>
      <td>虎</td>
      <td>龙</td>
      <td>龙</td>
      <td>龙</td>
      <td>12</td>
      <td>大</td>
      <td>双</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'SSC' === lotteryIssue.types">
    <tr>
      <th colspan=3>总和</th>
      <th>龙虎</th>
      <th>前三</th>
      <th>中三</th>
      <th>后三</th>
    </tr>
    <tr>
      <td>27</td>
      <td>单</td>
      <td>大</td>
      <td>龙</td>
      <td>杂六</td>
      <td>半顺</td>
      <td>半顺</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'11X5' === lotteryIssue.types">
    <tr>
      <th colspan=3>总和</th>
      <th>前三</th>
      <th>中三</th>
      <th>后三</th>
    </tr>
    <tr>
      <td>36</td>
      <td>大</td>
      <td>双</td>
      <td>半顺</td>
      <td>杂六</td>
      <td>半顺</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'KLSF' === lotteryIssue.types">
    <tr>
      <th colspan=4>总和</th>
      <th colspan=4>1-4龙虎</th>
    </tr>
    <tr>
      <td>102</td>
      <td>双</td>
      <td>大</td>
      <td>尾小</td>
      <td>虎</td>
      <td>虎</td>
      <td>龙</td>
      <td>虎</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'K3' === lotteryIssue.types">
    <tr>
      <th colspan=3>总和</th>
      <th colspan=3>鱼虾蟹</th>
    </tr>
    <tr>
      <td>10</td>
      <td>双</td>
      <td>小</td>
      <td>鱼</td>
      <td>葫芦</td>
      <td>鸡</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'PL3' === lotteryIssue.types">
    <tr>
      <th colspan=3>佰拾和</th>
      <th colspan=3>佰个和</th>
      <th colspan=3>拾个和</th>
      <th colspan=3>总和</th>
    </tr>
    <tr>
      <td>3</td>
      <td>单</td>
      <td>尾小</td>
      <td>12</td>
      <td>双</td>
      <td>尾小</td>
      <td>9</td>
      <td>单</td>
      <td>尾大</td>
      <td>12</td>
      <td>双</td>
      <td>小</td>
    </tr>
  </table>
  <table class="text-center" v-else-if="'3D' === lotteryIssue.types">
    <tr>
      <th colspan=3>佰拾和</th>
      <th colspan=3>佰个和</th>
      <th colspan=3>拾个和</th>
      <th colspan=3>总和</th>
    </tr>
    <tr>
      <td>3</td>
      <td>单</td>
      <td>尾小</td>
      <td>12</td>
      <td>双</td>
      <td>尾小</td>
      <td>9</td>
      <td>单</td>
      <td>尾大</td>
      <td>12</td>
      <td>双</td>
      <td>小</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Table',
})
class Table extends Vue {
  @Prop()
  public lotteryIssue!: object;
}
export default Table;

</script>