<template>
  <Spin size=32 fix v-if="isShowed">
    <Icon type="ios-loading" size=18 class="spin-icon-load"></Icon>
    <div>Loading</div>
  </Spin>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'ISpin',
})
class ISpin extends Vue {
  @Prop()
  public isShowed!: boolean;
}
export default ISpin;

</script>