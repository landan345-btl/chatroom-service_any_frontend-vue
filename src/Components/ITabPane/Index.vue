<template>
  <TabPane :label="tab.label" :name="tab.name">{{tab.text}}</TabPane>
</template>

<style scoped lang="scss">
@import 'Index-scoped.scss';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Analysis from '../../Pages/Home/Analysis/Index.vue';

@Component({
  name: 'ITabPane',
})
class ITabPane extends Vue {
  @Prop()
  public tab!: any;
}
export default ITabPane;

</script>