const LOTTERIES: I_LOTTERIES = {
  'MLAFT': {
    NAME: '幸运飞艇',
    SRC: '@/assets/images/MLAFT-md.png',
    TYPES: 'PK10',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 2 * 60 * 60 * 1000,
    },
  },
  'JSAFT': {
    NAME: '极速飞艇',
    SRC: '@/assets/images/JSAFT-md.png',
    TYPES: 'PK10',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 0.5 * 60 * 60 * 1000,
    },
  },
  'BJPK10': {
    NAME: '北京PK10',
    SRC: '@/assets/images/BJPK10-md.png',
    TYPES: 'PK10',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'JSPK10': {
    NAME: '极速赛车',
    SRC: '@/assets/images/JSPK10-md.png',
    TYPES: 'PK10',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 0.5 * 60 * 60 * 1000,
    },
  },
  'FFPK10': {
    NAME: '分分PK10',
    SRC: '@/assets/images/FFPK10-md.png',
    TYPES: 'PK10',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 0.5 * 60 * 60 * 1000,
    },
  },
  'PCDD': {
    NAME: 'PC蛋蛋28',
    SRC: '@/assets/images/PCDD-md.png',
    TYPES: 'XY28',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'CQKLSF': {
    NAME: '重庆幸运农场',
    SRC: '@/assets/images/CQKLSF-md.png',
    TYPES: 'KLSF',
    SMALL_UPPER_BOUND: 10,
    LARGE_LOWER_BOUND: 11,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'GDKLSF': {
    NAME: '广东快乐十分',
    SRC: '@/assets/images/GDKLSF-md.png',
    TYPES: 'KLSF',
    SMALL_UPPER_BOUND: 10,
    LARGE_LOWER_BOUND: 11,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  'PAOMA': {
    NAME: '香港跑马',
    SRC: '@/assets/images/PAOMA-md.png',
    TYPES: 'PK10',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  '3FPK10': {
    NAME: '三分PK10',
    SRC: '@/assets/images/3FPK10-md.png',
    TYPES: 'PK10',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  'CQSSC': {
    NAME: '重庆时时彩',
    SRC: '@/assets/images/CQSSC-md.png',
    TYPES: 'SSC',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'XJSSC': {
    NAME: '新疆时时彩',
    SRC: '@/assets/images/XJSSC-md.png',
    TYPES: 'SSC',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'AFGH90': {
    NAME: '加纳1.5分彩',
    SRC: '@/assets/images/AFGH90-md.png',
    TYPES: 'SSC',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  'TW5FC': {
    NAME: '台湾5分彩',
    SRC: '@/assets/images/TW5FC-md.png',
    TYPES: 'SSC',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  'FFSSC': {
    NAME: '幸运分分彩',
    SRC: '@/assets/images/FFSSC-md.png',
    TYPES: 'SSC',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  'BJ5FC': {
    NAME: '北京5分彩',
    SRC: '@/assets/images/BJ5FC-md.png',
    TYPES: 'SSC',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  '3FSSC': {
    NAME: '幸运三分彩',
    SRC: '@/assets/images/3FSSC-md.png',
    TYPES: 'SSC',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 2 * 60 * 60 * 1000,
    },
  },
  'JSK3': {
    NAME: '江苏快3',
    SRC: '@/assets/images/JSK3-md.png',
    TYPES: 'K3',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'JLK3': {
    NAME: '吉林快3',
    SRC: '@/assets/images/JLK3-md.png',
    TYPES: 'K3',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'AHK3': {
    NAME: '安徽快3',
    SRC: '@/assets/images/AHK3-md.png',
    TYPES: 'K3',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'HUBK3': {
    NAME: '湖北快3',
    SRC: '@/assets/images/HUBK3-md.png',
    TYPES: 'K3',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'HEBK3': {
    NAME: '河北快3',
    SRC: '@/assets/images/HEBK3-md.png',
    TYPES: 'K3',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'GXK3': {
    NAME: '广西快3',
    SRC: '@/assets/images/GXK3-md.png',
    TYPES: 'K3',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'FFK3': {
    NAME: '幸运快3',
    SRC: '@/assets/images/FFK3-md.png',
    TYPES: 'K3',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  'TJKLSF': {
    NAME: '天津快乐十分',
    SRC: '@/assets/images/TJKLSF-md.png',
    TYPES: 'KLSF',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'HUNKLSF': {
    NAME: '湖南快乐十分',
    SRC: '@/assets/images/HUNKLSF-md.png',
    TYPES: 'KLSF',
    SMALL_UPPER_BOUND: 10,
    LARGE_LOWER_BOUND: 11,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'GD11X5': {
    NAME: '广东11选5',
    SRC: '@/assets/images/GD11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'SD11X5': {
    NAME: '山东11选5',
    SRC: '@/assets/images/SD11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'JX11X5': {
    NAME: '江西11选5',
    SRC: '@/assets/images/JX11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'SH11X5': {
    NAME: '上海11选5',
    SRC: '@/assets/images/SH11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'ZJ11X5': {
    NAME: '浙江11选5',
    SRC: '@/assets/images/ZJ11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'AH11X5': {
    NAME: '安徽11选5',
    SRC: '@/assets/images/AH11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'BJ11X5': {
    NAME: '北京11选5',
    SRC: '@/assets/images/BJ11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'FJ11X5': {
    NAME: '福建11选5',
    SRC: '@/assets/images/FJ11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'JS11X5': {
    NAME: '江苏11选5',
    SRC: '@/assets/images/JS11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  // JX11X5: {
  //   NAME: '江西11选5',
  //   SRC: '@/assets/images/JX11X5-md.png',
  // },
  'HLJ11X5': {
    NAME: '黑龙江11选5',
    SRC: '@/assets/images/HLJ11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'XJ11X5': {
    NAME: '新疆11选5',
    SRC: '@/assets/images/XJ11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'FF11X5': {
    NAME: '幸运11选5',
    SRC: '@/assets/images/FF11X5-md.png',
    TYPES: '11X5',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  'KRYSU': {
    NAME: '韩国音速',
    SRC: '@/assets/images/KRYSU-md.png',
    TYPES: 'PK10',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 0.3 * 60 * 60 * 1000,
    },
  },
  'FC3D': {
    NAME: '福彩3D',
    SRC: '@/assets/images/FC3D-md.png',
    TYPES: '3D',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'PL3': {
    NAME: '排列三',
    SRC: '@/assets/images/PL3-md.png',
    TYPES: '3D',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'SHSSL': {
    NAME: '上海时时乐',
    SRC: '@/assets/images/SHSSL-md.png',
    TYPES: '3D',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'TW3D': {
    NAME: '台湾3D',
    SRC: '@/assets/images/TW3D-md.png',
    TYPES: '3D',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'BJKL8': {
    NAME: '北京快乐8',
    SRC: '@/assets/images/BJKL8-md.png',
    TYPES: 'KL8',
    SMALL_UPPER_BOUND: 39,
    LARGE_LOWER_BOUND: 40,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'TWBG': {
    NAME: '台湾宾果',
    SRC: '@/assets/images/TWBG-md.png',
    TYPES: 'KL8',
    SMALL_UPPER_BOUND: 39,
    LARGE_LOWER_BOUND: 40,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  'HK6': {
    NAME: '香港六合彩',
    SRC: '@/assets/images/HK6-md.png',
    TYPES: 'SIX',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 24 * 60 * 60 * 1000,
    },
  },
  '5FSIX': {
    NAME: '幸运六合彩',
    SRC: '@/assets/images/5FSIX-md.png',
    TYPES: 'SIX',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
  '5F28': {
    NAME: '吉利28',
    SRC: '@/assets/images/5F28-md.png',
    TYPES: 'XY28',
    SMALL_UPPER_BOUND: 4,
    LARGE_LOWER_BOUND: 5,
    LOTTERY_ISSUE: {
      BEFORE_UNTIL_NOW_TIME: 1 * 60 * 60 * 1000,
    },
  },
};

export default LOTTERIES;
