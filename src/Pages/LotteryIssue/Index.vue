<template>
  <div class="lottery-issue">
    <Header/>
    <Nav-top/>
    <Nav-right/>
    <el-row :gutter="0" class="z-1000">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 20, offset: 2}" :md="{span: 18, offset: 3}" :lg="{span: 16, offset: 4}">
        <main class="mt-2 align-top">
          <div class="lottery-box">
         <div class="warm-prompt">
           <div class="flash">
             <i></i>
           </div>
            温馨提示:因网络问题，开奖结果会有延迟，所以您需要去喝杯咖啡等一会儿！
         </div>
         <div class="lottery-title">
          <div class="title-box">
            <div class="lottery-left">
              <div class="lottery-line">
                <div class="lottery-img">
                  <div :class="['icon-' + lotteries[lotteryIssue.lottery_id].code.toLowerCase() + '-circle']">
                  </div>                
                </div>
                <div class="lottery-number">
                  <div class="card-title">
                    <span>{{ lotteryTypes[lotterycode].NAME}}</span>第<span>{{  openNumber.no }}</span>期开奖号码
                  </div>
                    <Lottery-number :olotterys="openNumber" :code="getCode"/>
                </div>
              </div>
              <!-- <div class=""></div> -->
            </div>
            <div class="lottery-right">
              <div class="next-issue">
                <div class="line-title line">距<span>10000000</span>期开奖</div>
                <div class="line-time">
                    <div class="lotterying">开奖中...</div>
                    <div class="count-down">
                      <span>00</span>
                      <span>分</span>
                      <span>00</span>
                      <span>秒</span>
                      <i class="d-none">{{s}}</i>
                    </div>
                </div>
              </div>
              <div class="bell-set">
                <div class="close-bell">
                  <div class="setopen">
                    <i @click="onClick" v-text=" open == true ? '打开声音' : '关闭声音'"></i>
                    <div class="bell-icon" :class=" open == true ? 'stopsound': ''"></div>
                  </div>
                </div>
                <div class="set-bell">
                  <div class="set-btn" :class=" open == true ? 'disabled': ''">
                  <i>铃声设置</i>
                  <div class="sound-icon start-icon" @click="checkSite" :class=" open == true ? 'stop-icon':''" :disabled=" open == true">
                    <!-- <audio src="../../audio/RING_01.wav" controls="controls"></audio> -->
                  </div>
                  <div class="sound-panel" :class="[this.flag?'d-block':'d-none']">
                    <div class="close" @click="closePopup"></div>
                    <div class="sound-list">
                      <ul>
                        <li v-for="(music, index) in selectbell" :key="index" @click="test">
                          <label>
                            <input type="radio" 
                            name="sound"
                            :checked="music.isCheck" 
                            :value="music.value"
                            @change="checkedInput(index)"
                            >&nbsp;{{music.option}}
                          </label>
                        </li>
                        <li> 
                          提示时间:
                          <select>
                            <option value="5">开奖前5秒</option>
                            <option value="20">开奖前20秒</option>
                            <option value="10">开奖前10秒</option>
                            <option value="30">开奖前30秒</option>
                            <option value="40">开奖前40秒</option>
                            <option value="50">开奖前50秒</option>
                            <option value="60">开奖前60秒</option>
                            <option value="begin">开奖后</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="lottery-video">
                <img src="@/assets/images/live-SD11X5.png" alt="">
              </div>
            </div>
          </div>
         </div> 
         <div class="instant-lottery">
            <div class="text-center">
              <div class="m-30">
                <ul>
                  <li v-for="(oMenu , iIndex) in menus" :key="iIndex"><a href="javascript:alert('敬请期待...')">{{oMenu}}</a></li>
                </ul>
              </div>
              <div class="clear"></div>
            </div>
         </div> 
         <div class="lottery-record">
          <div class="record-head">
            <ul>
              <li class="title">开奖记录</li>
              <li :class="{'active' :oHead.on}" 
                  @click="toggleHand(index)" v-for="(oHead,index) in recordHeads" 
                  :key="index">{{oHead.title}}
                  <i></i>
              </li>
            </ul>
            <div><a href="/">开奖历史</a></div>
            <!-- <div class="selectcolor">
              <em>护眼模式</em>
              <span :class="{select: addIndex== numbgColor}" v-for="(span , addIndex) in 3" :key="addIndex">&nbsp;</span>
              <span> <el-color-picker></el-color-picker></span>
            </div> -->
          </div>
          <div class="past-records" style="display:none;">
            <div class="records-l">
              <span>
                开奖记录
              </span>
            </div>
            <div class="records-r">
              <div class="calendar">
                <div class="righttime">
                  <div class="dateframe">
                   <!-- <EPicker /> -->
                  </div>
                </div>
              </div>
              <div class="day">
                <span class="checked">今天</span>
                <span>昨天</span>
                <span>前天</span>
              </div> 
            </div>
          </div>
            <Statistics v-show="showStatistics"/>
            <Changlong v-show="showChanglong"/>
            <NumberDisribution v-show="showNumber"/>         
            <LotteryTable :olotterys="openNumber" :code="getCode"/> <!-- 表格动态切换  -->
         </div> 
       </div>
          <!-- <Lottery :code="getCode"/>
          <Table /> -->
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
// import LOTTERIES from '@/CONFIGS/LOTTERIES/';

import LotteryTable from '@/Pages/LotteryIssue/Table/Index.vue';
import Changlong from '@/Pages/LotteryIssue/Changlong/Index.vue';
import NumberDisribution from '@/Pages/LotteryIssue/NumberDisribution/Index.vue';
import Statistics from '@/Pages/LotteryIssue/Statistics/Index.vue';
import LotteryNumber from '@/Pages/LotteryIssue/LotteryNumber/Index.vue';

import LOTTERIES from '@/CONFIGS/LOTTERIES/index';
import { navTable , navnumber } from '@/const';
import moment from 'moment';
@Component({
  components: {
    Header,
    NavTop,
    NavRight,
    Footer,
    ETabs,
    LotteryTable,
    Changlong,
    Statistics,
    NumberDisribution,
    LotteryNumber,
  },
})
class LotteryIssue extends Vue {
  public lotterytype = [
    { code: 'MLAFT' , lotteryName: '幸运飞艇'},
    { code: 'JSPK10' , lotteryName: '极速赛车'},
    { code: 'JSAFT' , lotteryName: '极速飞艇'},
    { code: 'BJPK10' , lotteryName: '北京PK10'},
    { code: 'KRYSU' , lotteryName: '韩国音速'},
    { code: 'FFPK10' , lotteryName: '分分PK10'},
    { code: 'PAOMA' , lotteryName: '香港跑马'},
    { code: '3FPK10' , lotteryName: '三分PK10'},
    { code: 'CQSSC' , lotteryName: '重庆生肖乐'},
    { code: 'XJSSC' , lotteryName: '新疆时时彩'},
    { code: 'HLJSSC' , lotteryName: '黑龙江时时彩'},
    { code: 'AFGH90' , lotteryName: '加纳1.5分彩'},
    { code: 'TW5FC' , lotteryName: '台湾5分彩'},
    { code: 'FFSSC' , lotteryName: '幸运分分彩'},
    { code: 'BJ5FC' , lotteryName: '北京5分彩'},
    { code: '3FSSC' , lotteryName: '幸运三分彩'},
    { code: 'JSK3' , lotteryName: '江苏快3'},
    { code: 'JLK3' , lotteryName: '吉林快3'},
    { code: 'AHK3' , lotteryName: '安徽快3'},
    { code: 'HUBK3' , lotteryName: '湖北快3'},
    { code: 'HEBK3' , lotteryName: '河北快3'},
    { code: 'GXK3' , lotteryName: '广西快3'},
    { code: 'FFK3' , lotteryName: '幸运快3'},
    { code: 'CQKLSF' , lotteryName: '重庆幸运农场'},
    { code: 'GDKLSF' , lotteryName: '广东快乐十分'},
    { code: 'TJKLSF' , lotteryName: '天津快乐十分'},
    { code: 'HUNKLSF' , lotteryName: '湖南快乐十分'},
    { code: 'GD11X5' , lotteryName: '广东11选5'},
    { code: 'SD11X5' , lotteryName: '山东11选5'},
    { code: 'SH11X5' , lotteryName: '上海11选5'},
    { code: 'AH11X5' , lotteryName: '安徽11选5'},
    { code: 'JX11X5' , lotteryName: '江西11选5'},
    { code: 'BJ11X5' , lotteryName: '北京11选5'},
    { code: 'JS11X5' , lotteryName: '江苏11选5'},
    { code: 'ZJ11X5' , lotteryName: '浙江11选5'},
    { code: 'FF11X5' , lotteryName: '幸运11选5'},
    { code: 'XJ11X5' , lotteryName: '新疆11选5'},
    { code: 'HLJ11X5' , lotteryName: '黑龙江11选5'},
    { code: 'FJ11X5' , lotteryName: '福建11选5'},
    { code: 'TWBG' , lotteryName: '台湾宾果'},
    { code: 'FC3D' , lotteryName: '福彩3D'},
    { code: 'QLT' , lotteryName: '福彩七乐彩'},
    { code: 'DLT' , lotteryName: '上海时时乐'},
    { code: 'PL3' , lotteryName: '体彩排列3'},
    { code: 'BJKL8' , lotteryName: '北京快乐8'},
    { code: 'TW3D' , lotteryName: '台湾3D'},
    { code: 'HK6' , lotteryName: '香港六合彩'},
    { code: '5FSIX' , lotteryName: '幸运六合彩'},
    { code: 'PCDD' , lotteryName: '幸运28'},
    { code: '5F28' , lotteryName: '吉利28'},
 ];

 public lotterytypeFT = [
    'MLAFT',
    'JSPK10',
    'JSAFT',
    'BJPK10',
    'KRYSU',
    'FFPK10',
    'PAOMA',
    '3FPK10',
 ];
 public lotterytypeSSC = [
    '3FSSC',
    'XJSSC',
    'HLJSSC',
    'AFGH90',
    'TW5FC',
    'FFSSC',
    'BJ5FC',
 ];
 public lotterytypeK3 = [
  'JSK3',
  'JLK3',
  'ANK3',
  'HUBK3',
  'HEBK3',
  'GXK3',
  'FFK3',
 ];
 public lotterytypeSSQ = [
    '5FSIX',
 ];
 public lotterytypeKLSF = [
    'CQKLSF',
    'GDKLSF',
    'TJKLSF',
    'HUNKLSF',
 ];
 public lotterytypeKL8 = [
    'BJKL8',
    'TWBG',
    'HK6',
    '5FSIX',
 ];
 public lotterytype11X5 = [
    'GD11X5',
    'SH11X5',
    'AH11X5',
    'JX11X5',
    'FJ11X5',
    'BJ11X5',
    'JS11X5',
    'ZJ11X5',
    'SD11X5',
    'HLJ11X5',
    'XJ11X5',
    'FF11X5',
 ];
 public lotterytypePL3 = [
    'FC3D',
    'PL3',
    'SHSSL',
    'TW3D',
 ];
 public lotterytypePCDD = [
   'PCDD',
   '5F28',
 ];
 public lotterytypeCQSXL = [
    'CQSSC',
 ];

 public recordHeads = [
   {title: '今日双面/号码统计', on: false},
   {title: '长龙提醒', on: false},
   {title: '号码分布', on: false},
    ];
 public showStatistics = false;
 public showChanglong = false;
 public showNumber = false;

 public numbgColor: number = 0;

 public s = 100;
 public open = false;
 public flag: boolean = false;
 public selectbell = [
    {value: 0, isCheck: true, option: '默认(闹钟铃)'},
    {value: 1, isCheck: false, option: '铃声二(上课铃)'},
    {value: 2, isCheck: false, option: '铃声三(打锣铃)'},
    {value: 3, isCheck: false, option: '铃声四(打鼓声)'},
    {value: 4, isCheck: false, option: '铃声五(点滴声)'},
 ];
 public menus = ['即将开奖', '路珠分析', '冷热分析', '冠亚和走势', '单双大小历史',
     '龙虎统计', '每日长龙统计', '龙虎路珠', '号码前后路珠', '冠亚和路珠', '单双大小路珠',
      '号码规律统计', '今日号码统计', '位置走势', '俩面数据统计', '俩面数据统计', '冠亚和两面历史'];
 public timer: any;
 public olotterysScreen = {};
 public lotteryIamges = '' ; // 接受详情彩票背景图
 public lotteryTypes = LOTTERIES;
 public lotterycode: any = '' ; // 接受code
 public lotteryNumberBox = ''; // 号码盒子
 public lotteryTabletype = '';  // 表格赋值

 public olotterys: any = {};

 public created() {
  this.getLotteryName(); // 接受彩种名称
  this.getName();
  this.getLotteryNumber(); // 判断彩票号码组件
  this.get();
  let sDateNow = moment().format('YYYY-MM-DD'); // 本地时间 年 月 日
  let oQueries = {
        date : sDateNow ,
        code : this.lotterycode ,
      };
  this.$store.dispatch('LOTTERY_ACTION_SHOW');
  this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries  ); // 当天的 开奖号码 请求
 }
 public get() {
    let sDateNow = moment().format('YYYY-MM-DD'); // 本地时间 年 月 日
    let oQueries = {
      date : sDateNow ,
      code : this.lotterycode ,
    };
    this.timer = setInterval(() => {
      this.$store.dispatch('LOTTERY_ISSUE_ACTION_SHOW', oQueries  ); // 当天的 开奖号码 请求
      let sTime = moment().format().split('T')[1].split('+')[0]; // 本地时间  时 分 秒
    } , 10000 );
   }

   public beforeDestroy() {  // 组件销毁之前调用 停止定时器
    clearInterval( this.timer );
  }

  public get openNumber() {
    let olotteries: any = this.$store.state.lotteries;
    let olotteryIssues: any = this.$store.state.lottery_issues;
    for (let lotteryIssuesId of Object.keys(olotteryIssues)) {
      for (let lotteriesId  of Object.keys(olotteries) ) {
        if ( olotteryIssues[ lotteryIssuesId ].lottery_id === olotteries[ lotteriesId ].lottery_id ) {
          let maxNumbers = JSON.parse(olotteries[ lotteriesId ].numbers);
          olotteryIssues[ lotteryIssuesId ].numbers =  olotteryIssues[ lotteryIssuesId ].numbers ;
          olotteryIssues[ lotteryIssuesId ].interval_time = olotteries[ lotteriesId ].interval_time;
          olotteryIssues[ lotteryIssuesId ].code = olotteries[ lotteriesId ].code;
          olotteryIssues[ lotteryIssuesId ].types = olotteries[ lotteriesId ].types;
          olotteryIssues[ lotteryIssuesId ].max_number = maxNumbers[ maxNumbers.length - 1 ] ;
        }
      }
    }
    let _olotterys: any = {};
    let lotteryNumber = _olotterys;
    for ( let olottery in olotteryIssues ) {
      if ( olotteryIssues[ olottery ].numbers == null ) {
        continue;
      }
      _olotterys[ olottery ] = olotteryIssues[ olottery ];
    }
    return olotteryIssues;
  }

  public getName() {
    let _lotteryName = this.lotterycode;
    let getName = localStorage.getItem('lotteryName');
    if (  getName !== _lotteryName ) { // 如果数据不一样  删除前一个  保存新的
      localStorage.clear();
      localStorage.setItem('lotteryName', _lotteryName);  // 永久存储数据
    }
  }
 public getLotteryName() {
  let name: any = this.$route.query.code;  // 接受code参数
  if ( name === undefined ) {
     let lotterycode: any = localStorage.getItem('lotteryName');
     this.lotterycode = lotterycode;
     return;
  }
  this.lotterycode = name;
 }


 public getLotteryNumber(): void {  // 判断彩种 动态选择号码盒子
    let slotteryName = this.lotterycode;
    this.lotterytype.forEach((val , index ) => {
    let lotteryTypeName: any = val.code;
    if ( this.lotterytypeFT.indexOf( slotteryName) !== -1) {
       this.lotteryNumberBox =  navnumber[0].component ;
      } else if (this.lotterytypeSSC.indexOf( slotteryName) !== -1) {
        this.lotteryNumberBox =  navnumber[4].component ;
      } else if (this.lotterytypeK3.indexOf( lotteryTypeName) !== -1) {
        this.lotteryNumberBox =  navnumber[2].component ;
      } else if (this.lotterytypeSSQ.indexOf( slotteryName) !== -1) {
        this.lotteryNumberBox =  navnumber[0].component ;
      } else if (this.lotterytypeKLSF.indexOf( slotteryName) !== -1) {
        this.lotteryNumberBox =  navnumber[0].component ;
      } else if (this.lotterytypeKL8.indexOf( slotteryName) !== -1) {
        this.lotteryNumberBox =  navnumber[4].component ;
      } else if (this.lotterytype11X5.indexOf( slotteryName) !== -1) {
        this.lotteryNumberBox =  navnumber[4].component ;
      } else if (this.lotterytypePL3.indexOf( slotteryName) !== -1) {
        this.lotteryNumberBox =  navnumber[4].component ;
      } else if (this.lotterytypePCDD.indexOf( slotteryName) !== -1) {
        this.lotteryNumberBox =  navnumber[3].component ;
      } else if (this.lotterytypeCQSXL.indexOf( slotteryName) !== -1) {
        this.lotteryNumberBox =  navnumber[1].component ;
      }
   });
 }

 public toggleHand(i: number) {
  this.recordHeads[i].on = !this.recordHeads[i].on;
  if ( i === 0) {
    let showRules: boolean = true;
    this.showStatistics = ! this.showStatistics ;
  } else if ( i === 1) {
    this.showChanglong = ! this.showChanglong ;
  } else {
    this.showNumber = ! this.showNumber ;
  }
 }


  public checkSite() {
    if (!this.flag) {
       this.flag = true;
    } else {
     this.flag = false;
    }
  }
  public closePopup() {
    this.flag = false;
  }
  public onClick(open: boolean) {
    this.open = !this.open;
 }
 public checkedInput(index: number) {
  this.selectbell.map((select, i) => {
    if (i === index) {
      select.isCheck = true;
    } else {
      select.isCheck = false;
    }
  });
 }

 public test() {
  this.selectbell.map((select, i) => {
   if (select.isCheck) {
      console.log(select.value);
   }
  });
 }
  public get getCode() {
    let sCode = this.$route.query.code;
    if (!(sCode in LOTTERIES)) {
      this.$router.push( { name: '/home'});
     }
    return sCode;
  }
}

export default LotteryIssue;
</script>
