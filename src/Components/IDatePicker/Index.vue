<template>
  <DatePicker type="date" placeholder="选择日期" @on-change="$emit('on-change', $event)">
  </DatePicker>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Emit, Vue, } from 'vue-property-decorator';

@Component({
  name: 'IDatePicker',
})
class IDatePicker extends Vue {

}
export default IDatePicker;

</script>
