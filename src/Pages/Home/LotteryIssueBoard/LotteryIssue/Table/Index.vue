<template>
  <table class="text-center">
    <tr>
      <th></th>
      <th></th>
      <th>1-5龙虎</th>
      <th></th>
      <th></th>
      <th></th>
      <th>冠亚和</th>
      <th></th>
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