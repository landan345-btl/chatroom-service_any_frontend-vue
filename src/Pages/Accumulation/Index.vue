<template>
  <div class="page accumulation">
    <Header /> 
    <Nav-top />
    <Nav-right style="z-index:1001"/>
    <Row :gutter="0" class=" backgroung-gray">
      <Col 
        :xs="{span: 22, offset: 1}" 
        :sm="{span: 20, offset: 2}" 
        :md="{span: 20, offset: 2}" 
        :lg="{span: 20, offset: 2}"
        :xl="{span: 16, offset: 4}"
        class="background-white pb-2 pr-1 mt-2 mb-2" style="z-index:1002">
        <main>
          <div class="top mt-2 ml-2 font-size-2p5">
            长龙提醒
          </div>
          <div class="line mt-1 mb-2">
          </div>
          <Toolbar class="ml-2" :lotteries="lotteries"/>
          <Board />
        </main>
      </Col>
    </Row>
    <Footer class="z-1001"/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {
  Header,
  NavTop,
  NavRight,
  Footer,
} from '@/Commons/';

import Toolbar from './Toolbar/Index.vue';
import Board from './Board/Index.vue';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    Toolbar,
    Board,
  },
})
class Accumulation extends Vue {
  public get lotteries(): object {
    let oLotteries: any = this.$store.state.lotteries;
    return oLotteries;
  }
}

export default Accumulation;
</script>
