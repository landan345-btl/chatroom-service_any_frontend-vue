<template>
  <RadioGroup v-model="button" type="button">
    <Radio :label="radio"></Radio>
  </RadioGroup>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  name: 'IRadio',
})
class IRadio extends Vue {
  @Prop()
  public radio!: any;
  @Prop()
  public button!: any;
}
export default IRadio;

</script>