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
  <table class="text-center" v-else-if="'K3' === lotteryIssue.types">
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