export const lotteryClass = {  // 主页根据code显示图片和数字
  numberLottery : [
    'SGFT' , 'XYFT' , 'BJPK10' , 'JSUSC'  , 'JSAFT' , 'MLAFT' , 'JSPK10'] ,  // 用号码图片的彩票
  K3 : [
   'JSK3' , 'JLK3' , 'HUBK3' , 'AHK3' , 'NMGK3' , 'FJK3' ,
   'HEBK3' , 'BJK3' , 'GXK3' , 'FFK3' ] , // 用赛子的彩票
  XYNC : [ 'CQKLSF' ] ,
  CQSXL : [ 'CQHLSX' ],
  SYX5 : [
   'XYSSC' , 'CQSSC' , 'GD11X5' , 'SH11X5' , 'AH11X5' ,
   'JX11X5' , 'JL11X5' , 'GX11X5' , 'HB11X5' , 'LN11X5' , 'SD11X5' , 'FJ11X5' , 'XJ11X5' , 'HLJ11X5' ,
   'JS11X5' , 'ZJ11X5' , 'NMG11X5' , 'GXKLSF' , 'BJ11X5' ,
   'TWBG' , 'TW3D' , 'AFGH90' , 'SHSSL' , '5F28' , 'PL3' ,
   'TW3D' , 'GDKLSF' , 'PAOMA' , 'BJ5FC' , 'PCDD', 'BJKL8' ,
   'FFPK10' , 'TW5FC' , 'XJSSC' ,
   '3FPK10' , 'HUNKLSF' , '3FSSC' , 'KRYSU' ,
   'FFK3' , 'FFSSC' , '5FSIX' , 'FF11X5' , '3FPK10' , 'FC3D' ,
   ], // 用圆球的
};

export const lotteryNumber = {   //  详情页用来切换数字组件
  num : [
    'SG飞艇' , '幸运飞艇' , '北京PK10' , '极速赛车'  , '极速飞艇'] ,  // 用号码图片的彩票
  K3 : [
   '江苏快3' , '吉林快3' , '河北快3' , '安徽快3' , '内蒙古快3' , '福建快三' ,
   '湖北快3' , '北京快3' , '广西快3' , '幸运快3'] , // 用赛子的彩票
  XYNC : [ '重庆快乐十分' ] ,
  CQSXL : [ '重庆欢乐生肖' ],
  SYX5 : [
   '幸运时时彩' , '重庆时时彩' , '广东11选5' , '上海11选5' , '安徽11选5' ,
   '江西11选5' , '吉林11选5' , '广西11选5' , '湖北11选5' , '辽宁11选5' ,
   '江苏11选5' , '浙江11选5' , '内蒙古11选5' , '广西快乐十分' , '北京11选5' ,
   '台湾宾果' , '台湾3D' , '加纳1.5分彩' , '上海时时乐' , '吉利28' , '排列3' ,
   '福彩3D' , '广东快乐十分' , '香港跑马' , '北京5分彩' , '北京快乐8' ,
   '分分PK10' , '台湾5分彩' , '重庆快乐十分' , '新疆时时彩' , '山东11选5' , '福建11选5' ,
   '新疆11选5' , '黑龙江11选5' , '三分PK10' , '湖南快乐十分' , '幸运快三' , '幸运三分彩' ,
   '幸运快3' , '幸运分分彩' , '幸运六合彩' , '幸运11选5' ,
   ], // 用圆球的
   PCDD : [ 'PC蛋蛋' ], // 特殊 有加号
};

export const navnumber = [  // 号码盒子类型
  {name: 'number' , component: 'Lotterynumber'},
  {name: 'numberCQSXL' , component: 'LotterynumberCQSXL'},
  {name: 'numberK3' , component: 'LotterynumberK3'},
  {name: 'numberPCDD' , component: 'LotterynumberPCDD'},
  {name: 'numberSSC' , component: 'LotterynumberSSC'},
];

export const navTable = [ // 表格类型
   {name: 'SG' , component: 'LotteryTable'},
   {name: 'BJKL8' , component: 'LotteryTableBJKL8'},
   {name: 'K3' , component: 'LotteryTableK3'},
   {name: 'PCDD' , component: 'LotteryTablePCDD'},
   {name: 'SYX5' , component: 'LotteryTableSYX5'},
   {name: 'TC' , component: 'LotteryTableTC'},
   {name: 'XY' , component: 'LotteryTableXY'},
   {name: 'SSC' , component: 'LotteryTableSSC'},
   {name: 'KLSF' , component: 'LotteryTableKLSF'},
];







