const OLOTTERYTYPE: any = {  // 彩种分类
  OLOTTERYTYPE: {
  'MLAFT' : { name: '幸运飞艇',  type: 'PK10' , lotteryRange: '热门彩' , hotimg: 'hot-head'},
  'JSPK10' : { name: '极速赛车', type: 'PK10' , lotteryRange: '极速彩'},
  'JSAFT' : { name: '极速飞艇', type: 'PK10' , lotteryRange: '极速彩'},
  'BJPK10' : { name: '北京PK10', type: 'PK10' , lotteryRange: '热门彩'},
  'KRYSU' : { name: '韩国音速', type: 'PK10'  , lotteryRange: '极速彩'},
  'FFPK10' : { name: '分分PK10', type: 'PK10' , lotteryRange: '极速彩'},
  'PAOMA' : { name: '香港跑马', type: 'PK10' , lotteryRange: '极速彩'},
  '3FPK10' : { name: '三分PK10', type: 'PK10' , lotteryRange: '极速彩'},
  'CQSSC' : { name: '重庆时时彩' , type: 'SSC' , lotteryRange: '热门彩'},
  'XJSSC' : { name: '新疆时时彩' , type: 'SSC' , lotteryRange: '热门彩'},
  'HLJSSC' : { name: '黑龙江时时彩' , type: 'SSC' , lotteryRange: '境外彩'},
  'AFGH90' : { name: '加纳1.5分彩' , type: 'SSC' , lotteryRange: '境外彩'},
  'TW5FC' : { name: '台湾5分彩' , type: 'SSC' , lotteryRange: '全国彩'},
  'FFSSC' : { name: '幸运分分彩' , type: 'SSC' , lotteryRange: '全国彩'},
  'BJ5FC' : { name: '北京5分彩' , type: 'SSC' , lotteryRange: '全国彩'},
  '3FSSC' : { name: '幸运三分彩' , type: 'SSC' , lotteryRange: '全国彩'},
  'JSK3' : { name: '江苏快3' , type: 'K3' , lotteryRange: '高频彩'},
  'JLK3' : { name: '吉林快3' , type: 'K3' , lotteryRange: '高频彩'},
  'AHK3' : { name: '安徽快3' , type: 'K3' , lotteryRange: '高频彩'},
  'HUBK3' : { name: '湖北快3' , type: 'K3' , lotteryRange: '高频彩'},
  'HEBK3' : { name: '河北快3' , type: 'K3' , lotteryRange: '高频彩'},
  'GXK3' : { name: '广西快3' , type: 'K3' , lotteryRange: '高频彩'},
  'FFK3' : { name: '幸运快3' , type: 'K3' , lotteryRange: '高频彩'},
  'CQKLSF' : { name: '重庆快乐十分' , type: 'KL10F' , lotteryRange: '高频彩'},
  'GDKLSF' : { name: '广东快乐十分' , type: 'KL10F' , lotteryRange: '高频彩'},
  'TJKLSF' : { name: '天津快乐十分' , type: 'KL10F' , lotteryRange: '高频彩'},
  'HUNKLSF' : { name: '湖南快乐十分' , type: 'KL10F' , lotteryRange: '高频彩'},
  'GD11X5' : { name: '广东11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'SD11X5' : { name: '山东11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'JX11X5' : { name: '江西11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'SH11X5' : { name: '上海11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'ZJ11X5' : { name: '浙江11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'AH11X5' : { name: '安徽11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'BJ11X5' : { name: '北京11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'FJ11X5' : { name: '福建11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'JS11X5' : { name: '江苏11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'HLJ11X5' : { name: '黑龙江11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'XJ11X5' : { name: '新疆11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'FF11X5' : { name: '幸运11选5' , type: '11X5' , lotteryRange: '高频彩'},
  'FC3D' : { name: '福彩3D' , type: '3D' , lotteryRange: '全国彩'},
  'PL3' : { name: '排列3' , type: '3D' , lotteryRange: '全国彩'},
  'SHSSL' : { name: '上海时时乐' , type: '3D' , lotteryRange: '全国彩'},
  'TW3D' : { name: '台湾3D' , type: '3D' , lotteryRange: '境外彩'},
  'BJKL8' : { name: '北京快乐8' , type: 'KL8' , lotteryRange: '高频彩'},
  'TWBG' : { name: '台湾宾果' , type: 'KL8' , lotteryRange: '境外彩'},
  'HK6' : { name: '香港六合彩' , type: 'KL8' , lotteryRange: '境外彩'},
  '5FSIX' : { name: '幸运六合彩' , type: 'KL8' , lotteryRange: '全国彩'},
  'PCDD' : { name: 'PC蛋蛋' , type: 'KL8' , lotteryRange: '全国彩'},
  '5F28' : { name: '吉利28' , type: 'KL8' , lotteryRange: '全国彩'},
 },

 OLOTTERYRENGES : [ // 彩种总页面数据
  { name: '热门彩' , alotteryRanges: [] } ,
  { name: '极速彩' , alotteryRanges: [] } ,
  { name: '高频彩' , alotteryRanges: [] } ,
  { name: '境外彩' , alotteryRanges: [] } ,
  { name: '全国彩' , alotteryRanges: [] } ,
],



 ADDNUMBER: [  // 特殊彩种 小于2位数 前面添加0
  '十一运夺金' ,
  '天津快乐十分' ,
  '广东快乐十分' ,
  '广东11选5' ,
  '广西快乐十分' ,
  '极速快乐十分' ,
  '湖南快乐十分' ,
  '极速快乐8' ,
  '极速11选5' ,
  '北京11选5' ,
  '黑龙江11选5' ,
  '新疆11选5' ,
  '福建11选5' ,
  '幸运11选5' ,
  '山东11选5' ,
  '北京快乐8' ,
  '上海11选5' ,
  '安徽11选5' ,
  '江西11选5' ,
  '吉林11选5' ,
  '广西11选5' ,
  '湖北11选5' ,
  '辽林11选5' ,
  '江苏11选5' ,
  '浙江11选5' ,
  '内蒙古11选5' ,
  '澳洲幸运8' ,
  '澳洲幸运20' ,
  '台湾宾果' ,
  '福彩双色球' ,
  '福彩七乐彩' ,
  '超级大乐透' ,
],
};

export default OLOTTERYTYPE;