<template>
  <div class="Sum-value-trend pb-2 background-white position-relative">
    <div class="pl-2 pr-2 font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">和值走势</span>
      <I-radio-group v-model="date" type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近50期"></Radio>
        <Radio label="最近100期" class="d-xs-none"></Radio>
      </I-radio-group>
    </div>
    <I-divider/>
    <div class="announcement-wrapper mt-2 pr-1 font-size-1p5 position-absolute">
      <div @mouseleave="hideAnnouncement()" @click="toggleAnnouncement()" class="announcement" :class="[ isAnnouncementShowed ? 'announcement-showed' : '']">
        <p>
          <span>说明： 1 和值：开奖号码相加之和，范围为15-45。示例：号码01 02 03 05 10和值为21；</span>
          <span class="d-inline-block float-right "><Icon type="ios-arrow-down" class="arrow-down"/></span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 和尾：开奖号码和值的个位数，范围为0-9。示例：号码01 02 03 05 10和尾为1</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 遗漏：自上期开出到本期间隔的期数。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 分隔线：每五期使用分隔线，使横向导航更加清晰</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 遗漏分层：将当前遗漏按照"1-5，6-11，12-无穷大"分别用黑色、蓝色、红色标识</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6 出现总次数：统计周期内，某个号码的累计出现次数</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 平均遗漏值：统计期数内遗漏的平均值（计算公式：平均遗漏＝统计期内的总遗漏数/(出现次数+1)）</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 最大遗漏值：是指统计周期内所有遗漏值的最大值</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 最大连出值：是指统计周期内所有连出值的最大值</p>
      </div>       
    </div>
    <div class="mb-2 pl-2 pr-2 font-size-1p5 filtrate-ranks">
      标注选择：
      <I-checkbox-group v-model="decorator" class="d-inline-block">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </I-checkbox-group>
    </div>
    <div class="ml-2 mr-2 trend-table">
      <table class="canvasTrend w-100" v-canvasTrend>
        <tr class="background-grey font-size-1p5">
          <td rowspan="2"><span>期号</span></td>
          <td rowspan="2"><span>开奖号码</span></td>
          <td colspan="31">和值走势</td>
          <td rowspan="2"><span>和值</span></td>
          <td rowspan="2"><span>和尾</span></td>
        </tr>
        <tr class="background-grey">
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td>32</td>
          <td>33</td>
          <td>34</td>
          <td>35</td>
          <td>36</td>
          <td>37</td>
          <td>38</td>
          <td>39</td>
          <td>40</td>
          <td>41</td>
          <td>42</td>
          <td>43</td>
          <td>44</td>
          <td>45</td>
        </tr>
        <tr v-for="( item , i ) in 15" :key="i">
          <td>20190508064</td>
          <td class="color-red">
            <span>11</span>
            <span>12</span>
            <span>14</span>
            <span>15</span>
            <span>02</span>
          </td>
          <td><span class="background-green">22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
          <td><span>22</span></td>
        </tr>
        <tr class="background-grey">
          <td rowspan="2" colspan="2"> <span>统计类型</span> </td>
          <td colspan="31">和值走势</td>
          <td rowspan="2"><span>和值</span></td>
          <td rowspan="2"><span>和尾</span></td>
        </tr>
        <tr class="background-grey">
           <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td>32</td>
          <td>33</td>
          <td>34</td>
          <td>35</td>
          <td>36</td>
          <td>37</td>
          <td>38</td>
          <td>39</td>
          <td>40</td>
          <td>41</td>
          <td>42</td>
          <td>43</td>
          <td>44</td>
          <td>45</td>
        </tr>
        <tr>
          <td colspan="2">出现次数</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
        </tr>
        <tr>
          <td colspan="2">平均遗漏</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
        </tr>
        <tr>
          <td colspan="2">最大遗漏</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
        </tr>
        <tr>
          <td colspan="2">最大连出</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
          <td>55</td>
        </tr>
      </table>
    </div>
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
  ITabs,
  IDivider,
  IRadioGroup,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'SumValueTrend',
  components: {
    ITabs,
    IDivider,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class SumValueTrend extends Vue {
  public date = '今天';
  public decorator = ['折线', '遗漏', ];

  public isAnnouncementShowed: boolean = false;
  public toggleAnnouncement () {
    this.isAnnouncementShowed = !this.isAnnouncementShowed;
  }
  public hideAnnouncement () {
    this.isAnnouncementShowed = false;
  }
}

export default SumValueTrend;
</script>
