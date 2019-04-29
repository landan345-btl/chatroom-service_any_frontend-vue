<template>
  <div class="trend">
    <Header/>
    <Nav-top/>
    <!-- <Nav-right/> -->
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2">
          <ETabs :type="'card'">
            <el-tab-pane label="PK拾">
              <el-tabs v-model="activeLottery">
                <el-tab-pane label="北京PK拾" name="bjpk10" class="Rank">
                  <p>
                    <ul class="rank-list">
                      <li v-for="(tab , Tindex) in tabRank" :key ="Tindex" 
                      :class=" { ischecked:ischecked==Tindex } "
                      @click="tabShow(Tindex)">{{tab}}</li>
                    </ul>
                  </p>
                  <Graphs />
                  <div class="lottery-detail">
                    <div>
                      <div class="head">
                        <a href="/">
                          <img src="@/assets/images/BJPK10-sm.png">
                          <i>北京PK拾</i>
                        </a>
                      </div>
                      <div class="title">
                        <ul>
                          <li>路珠分析</li>
                          <li>冷热分析</li>
                          <li>单双大小历史</li>
                          <li>冠亚和走势</li>
                          <li>龙虎统计</li>
                          <li>龙虎路珠</li>
                          <li>冠亚和路珠</li>
                          <li>号码规律统计</li>
                          <li>今日号码统计</li>
                          <li>位置走势</li>
                          <li>两面数据统计</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="辛运飞艇" name="mlaft">
                  <p>
                    <ul class="rank-list">
                      <li v-for="(tab , Tindex) in tabRank" :key ="Tindex">{{tab}}</li>
                    </ul>
                  </p>
                </el-tab-pane>
                <el-tab-pane label="极速飞艇" name="third">
                  <p>
                    <ul class="rank-list">
                      <li v-for="(tab , Tindex) in tabRank" :key ="Tindex">{{tab}}</li>
                    </ul>
                  </p>
                </el-tab-pane>
                <el-tab-pane label="极速赛车" name="four">
                  <p>
                    <ul class="rank-list">
                      <li v-for="(tab , Tindex) in tabRank" :key ="Tindex">{{tab}}</li>
                    </ul>
                  </p>
                </el-tab-pane>
                <el-tab-pane label="澳洲辛运10" name="fou">
                  <p>
                    <ul class="rank-list">
                      <li v-for="(tab , Tindex) in tabRank" :key ="Tindex">{{tab}}</li>
                    </ul>
                  </p>
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="时时彩">
              <el-tabs>
                <el-tab-pane label="重庆欢乐生肖" name="first"></el-tab-pane>
                <el-tab-pane label="重庆时时彩" name="second"></el-tab-pane>
                <el-tab-pane label="辛运时时彩" name="third"></el-tab-pane>
                <el-tab-pane label="新疆时时彩" name="ourth"></el-tab-pane>
                <el-tab-pane label="天津时时彩" name="forth"></el-tab-pane>
                <el-tab-pane label="极速时时彩" name="fouth"></el-tab-pane>
              </el-tabs>  
            </el-tab-pane>
            <el-tab-pane label="11选5">
              <el-tabs>
                <el-tab-pane label="广西11选5" name="first"></el-tab-pane>
                <el-tab-pane label="广西11选5" name="second"></el-tab-pane>
                <el-tab-pane label="广西11选5" name="third"></el-tab-pane>
                <el-tab-pane label="广西11选5" name="foth"></el-tab-pane>
                <el-tab-pane label="广西11选5" name="frth"></el-tab-pane>
                <el-tab-pane label="广西11选5" name="forth"></el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="快三">
              <el-tabs>
                <el-tab-pane label="江苏快3" name="first"></el-tab-pane>
                <el-tab-pane label="江苏快3" name="second"></el-tab-pane>
                <el-tab-pane label="江苏快3" name="third"></el-tab-pane>
                <el-tab-pane label="江苏快3" name="forh"></el-tab-pane>
                <el-tab-pane label="江苏快3" name="forh"></el-tab-pane>
                <el-tab-pane label="江苏快3" name="forth"></el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="快乐十分">
            
            </el-tab-pane>
          </ETabs>
        </main>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>
<style scoped lang="scss">
@import 'Index-scoped.scss';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/Commons/Footer/Index.vue'; // @ is an alias to /src
import Header from '@/Commons/Header/Index.vue'; // @ is an alias to /src
import NavTop from '@/Commons/NavTop/Index.vue';
import NavRight from '@/Commons/NavRight/Index.vue';
import ETabs from '@/Components/ETabs/Index.vue';
import Graphs from './Graphs.vue';

@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ETabs,
    Graphs,
  },
})
class Trend extends Vue {
public activeLottery = 'bjpk10';
public ischecked = 0;
public tabRank = ['冠军' , '亚军' , '第三名' , '第四名' , '第五名' , '第六名' , '第七名' , '第八名' , '第九名' , '第十名'];

public tabShow(Tindex: number) {
    this.ischecked = Tindex;
  }
}

export default Trend;
</script>
