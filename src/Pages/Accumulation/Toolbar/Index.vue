<template>
  <span class="toolbar d-inline-block">
   <p>
    <span>选择彩种</span>
   </p>
    <ICollapse>
      <Panel>热门彩
        <p slot="content" v-for="(oLottery, iLotteryId) in lotteries" :key="iLotteryId">
          <I-checkbox-group  v-if="['SSC'].includes(oLottery.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[oLottery.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel> PK10
        <p slot="content" v-for="(oLottery, iLotteryId) in lotteries" :key="iLotteryId">
          <I-checkbox-group  v-if="['PK10'].includes(oLottery.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[oLottery.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>时时彩
        <p slot="content" v-for="(oLottery, iLotteryId) in lotteries" :key="iLotteryId">
          <I-checkbox-group  v-if="['SSC'].includes(oLottery.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[oLottery.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>快乐十分
       <p slot="content" v-for="(oLottery, iLotteryId) in lotteries" :key="iLotteryId">
          <I-checkbox-group  v-if="['KLSF'].includes(oLottery.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[oLottery.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>快3
        <p slot="content" v-for="(oLottery, iLotteryId) in lotteries" :key="iLotteryId">
          <I-checkbox-group  v-if="['K3'].includes(oLottery.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[oLottery.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>11选5
        <p slot="content" v-for="(oLottery, iLotteryId) in lotteries" :key="iLotteryId">
          <I-checkbox-group  v-if="['11X5'].includes(oLottery.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[oLottery.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>六合彩
        <p slot="content" v-for="(oLottery, iLotteryId) in lotteries" :key="iLotteryId">
          <I-checkbox-group  v-if="['SIX'].includes(oLottery.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[oLottery.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
      <Panel>其他彩种
        <p slot="content" v-for="(oLottery, iLotteryId) in lotteries" :key="iLotteryId">
          <I-checkbox-group  v-if="!['PK10', 'SSC', '11X5', 'KLSF', 'K3', 'SIX'].includes(oLottery.types)">
            <Checkbox label="true">&nbsp;{{ LOTTERIES[oLottery.code].NAME }}</Checkbox>
          </I-checkbox-group>
        </p>
      </Panel>
    </ICollapse>
  </span>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import {
  ICollapse,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'Toolbar',
  components: {
    ICollapse,
    ICheckboxGroup,
  },
})
class Toolbar extends Vue {
  @Prop()
  public lotteries!: any;
}
export default Toolbar;
</script>
