<template>
    <Select v-model="model1" style="width:200px" :placeholder="placeholder">
      <Option v-for="option in options"
        :value="option.value"
        :key="option.value">{{ option.label }}
      </Option>
    </Select>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';

@Component({
  name: 'ISelect',
})
class ISelect extends Vue {
  @Prop({ default: null, })
  public options!: any;
  @Prop({ default: null, })
  public placeholder!: any;
}
export default ISelect;

</script>
