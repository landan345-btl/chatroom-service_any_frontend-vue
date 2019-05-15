import { Trend } from '@/Pages';

const MENU_LINKS = [
  {
    NAME: '首页',
    LINK: '/',
    ICON: null,
   // SUB_MENU_LINKS: [],
  },
  {
    NAME: '彩票大厅',
    LINK: null,
    ICON: null,
    TYPE: 'column',
    SUB_MENU_LINKS: [
      {
        NAME: '热门彩',
        LINK: '',
        IMG: '~@/assets/images/rmc.png',
      },
      {
        NAME: '极速彩',
        LINK: '',
        IMG: '~@/assets/images/jsc.png',
      },
      {
        NAME: '高频彩',
        LINK: '',
        IMG: '~@/assets/images/gpc.png',
      },
      {
        NAME: '境外彩',
        LINK: '',
        IMG: '~@/assets/images/jwc.png',
      },
      {
        NAME: '全国彩',
        LINK: '',
        IMG: '~@/assets/images/qgc.png',
      },
    ],
  },
  {
    NAME: '站长推荐',
    LINK: null,
    ICON: null,
  //  SUB_MENU_LINKS: [],
  },
  {
    NAME: '两面推荐',
    LINK: null,
    ICON: null,
   // SUB_MENU_LINKS: [],
  },
  {
    NAME: '长龙提醒',
    LINK: '/accumulation',
    ICON: null,
   // SUB_MENU_LINKS: [],
  },
  {
    NAME: '开奖调用',
    LINK: null,
    ICON: null,
   // SUB_MENU_LINKS: [],
  },
  {
    NAME: '走势图表',
    LINK: '/trend',
    ICON: null,
  //  SUB_MENU_LINKS: [],
  },
  {
    NAME: '试玩投注',
    LINK: null,
    ICON: null,
   // SUB_MENU_LINKS: [],
  },
  {
    NAME: '香港彩',
    LINK: null,
    ICON: null,
   // SUB_MENU_LINKS: [],
  },
  {
    NAME: '资讯',
    LINK: null,
    ICON: null,
   // SUB_MENU_LINKS: [],
  },
  {
    NAME: '彩票软件',
    LINK: null,
    ICON: null,
   // SUB_MENU_LINKS: [],
  },
  {
    NAME: '简约版',
    LINK: null,
    ICON: 'server',
   // SUB_MENU_LINKS: [],
  },
];

export default MENU_LINKS;
