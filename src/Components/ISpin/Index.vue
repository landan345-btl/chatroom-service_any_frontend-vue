<template>
  <Spin fix v-if="isShowed">
    <Icon type="ios-loading" size=64 class="spin-icon-load"></Icon>
    <div class="loading-color">努力加载中...</div>
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
