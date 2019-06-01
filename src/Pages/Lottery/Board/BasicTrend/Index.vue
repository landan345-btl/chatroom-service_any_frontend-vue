<template>
  <div class="basic-trend background-white">
    <div class="pl-2 pr-2 font-weight-bold font-weight-bold d-flex justify-content-between head-top">
      <span class="font-size-2 line-height3">号码走势</span>
      <I-radio-group v-model="date" type="button" class="line-height3">
        <Radio label="今天"></Radio>
        <Radio label="昨天"></Radio>
        <Radio label="前天"></Radio>
        <Radio label="最近30期"></Radio>
        <Radio label="最近60期"></Radio>
        <Radio label="最近90期" class="d-xs-none"></Radio>
      </I-radio-group>
    </div>
    <I-divider/>
    <div class="pt-2 pl-2">
      标注选择：
      <I-checkbox-group v-model="decorator" class="d-inline-block">
        <Checkbox label="遗漏"></Checkbox>
        <Checkbox label="折线"></Checkbox>
        <Checkbox label="遗漏分层"></Checkbox>
        <Checkbox label="分隔线"></Checkbox>
      </I-checkbox-group>
    </div>
    <div class="p-2 fictitious">
      <div>
        <table class="basic-table">
          <tr class="background-thead">
            <th rowspan="2"><span>期号</span></th>
            <th rowspan="2"><span>开奖号码</span></th>
            <template v-if="['PK10'].includes(types.toUpperCase())">
              <th colspan="10" v-for="(rank, sKey) in texts[ types ]" :key="sKey">{{ rank }}</th>
            </template>
            <template v-if="['SSC'].includes(types.toUpperCase())">
              <th colspan="10" v-for="(cueBall, sKey) in texts[ types ]" :key="sKey">{{ cueBall }}</th>
            </template>
          </tr>

          <tr class="background-thead" v-if="['PK10'].includes(types.toUpperCase())">
            <template v-for="(iNumber, iIndex) in LOTTERY_TYPES[types].COUNT" >
              <th v-for="(_iNumber, _iIndex) in LOTTERY_TYPES[types].NUMBERS" :key="iIndex + '-' + _iIndex">{{ _iNumber }}</th>
            </template>
          </tr>
          <tr class="background-thead" v-if="['SSC'].includes(types.toUpperCase())">
            <template v-for="(iNumber, iIndex) in LOTTERY_TYPES[types].COUNT" >
              <th v-for="(_iNumber, _iIndex) in LOTTERY_TYPES[types].NUMBERS" :key="iIndex + '-' + _iIndex">{{ _iNumber }}</th>
            </template>
          </tr>

          <tr v-for="( oLotteryIssue , oIndex ) in oLotteryIssues" :key="oIndex" class="background-tbody">
            <td>{{oLotteryIssue.no}}</td>
            <td class="color-red w-10" >
              <span v-for="( iNumbers , index ) in JSON.parse(oLotteryIssue.numbers)" :key="index">{{ iNumbers }}</span>
            </td>
            <template v-if="['PK10'].includes(types.toUpperCase())" class="rank-number">
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 1 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 2 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 3 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 4 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 5 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 6 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 7 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 8 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 9 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 10 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>

              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 1 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 2 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 3 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 4 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 5 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 6 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 7 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 8 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 9 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 10 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>

              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 1 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 2 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 3 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 4 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 5 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 6 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 7 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 8 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 9 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 10 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>

              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 1 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 2 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 3 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 4 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 5 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 6 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 7 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 8 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 9 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 10 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>

              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 1 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 2 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 3 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 4 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 5 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 6 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 7 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 8 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 9 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 10 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>

              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 1 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 2 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 3 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 4 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 5 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 6 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 7 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 8 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 9 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>
              <td class="background-shallow-pink"><span :class="substr(JSON.parse(oLotteryIssue.numbers),5) === 10 ? 'background-blackish-pink-5':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(5)}}</span></td>

              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 1 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 2 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 3 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 4 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 5 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 6 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 7 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 8 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 9 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>
              <td class="background-shallow-yellow"><span :class="substr(JSON.parse(oLotteryIssue.numbers),6) === 10 ? 'background-blackish-yellow-6':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(6)}}</span></td>

              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 1 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 2 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 3 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 4 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 5 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 6 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 7 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 8 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 9 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>
              <td class="background-shallow-celadon"><span :class="substr(JSON.parse(oLotteryIssue.numbers),7) === 10 ? 'background-blackish-celadon-7':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(7)}}</span></td>

              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 1 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 2 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 3 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 4 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 5 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 6 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 7 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 8 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 9 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>
              <td class="background-shallow-prasinous"><span :class="substr(JSON.parse(oLotteryIssue.numbers),8) === 10 ? 'background-blackish-prasinous-8':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(8)}}</span></td>

              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 1 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 2 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 3 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 4 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 5 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 6 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 7 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 8 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 9 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
              <td class="background-shallow-red"><span :class="substr(JSON.parse(oLotteryIssue.numbers),9) === 10 ? 'background-blackish-red-9':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(9)}}</span></td>
            </template>
            <template v-if="['SSC'].includes(types.toUpperCase())" class="rank-number">
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 0 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 1 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 2 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 3 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 4 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 5 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 6 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 7 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 8 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>
              <td class="background-shallow-beige"><span :class="substr(JSON.parse(oLotteryIssue.numbers),0) === 9 ? 'background-orange-0':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(0)}}</span></td>

              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 0 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 1 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 2 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 3 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 4 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 5 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 6 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 7 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 8 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>
              <td class="background-shallow-blue"><span :class="substr(JSON.parse(oLotteryIssue.numbers),1) === 9 ? 'background-blue-1':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(1)}}</span></td>

              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 0 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 1 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 2 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 3 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 4 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 5 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 6 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 7 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 8 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>
              <td class="background-shallow-green"><span :class="substr(JSON.parse(oLotteryIssue.numbers),2) === 9 ? 'background-cyan-2':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(2)}}</span></td>

              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 0 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 1 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 2 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 3 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 4 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 5 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 6 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 7 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 8 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>
              <td class="background-shallow-gray"><span :class="substr(JSON.parse(oLotteryIssue.numbers),3) === 9 ? 'background-purple-3':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(3)}}</span></td>

              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 0 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 1 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 2 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 3 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 4 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 5 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 6 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 7 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 8 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
              <td class="background-shallow-blueness"><span :class="substr(JSON.parse(oLotteryIssue.numbers),4) === 9 ? 'background-blackish-green-4':'option'">{{JSON.parse(oLotteryIssue.numbers) | substr(4)}}</span></td>
            </template>
          </tr>

          <tr class="background-thead">
            <th rowspan="2" colspan="2"><span>数据统计</span></th>
            <template v-if="['PK10'].includes(types.toUpperCase())">
              <th colspan="10" v-for="(rank, sKey) in texts[ types ]" :key="sKey">{{ rank }}</th>
            </template>
            <template v-if="['SSC'].includes(types.toUpperCase())">
              <th colspan="10" v-for="(rank, sKey) in texts[ types ]" :key="sKey">{{ rank }}</th>
            </template>
          </tr>

          <tr class="background-thead" v-if="['PK10'].includes(types.toUpperCase())">
            <template v-for="(number, index) in LOTTERY_TYPES[types].COUNT" >
              <th v-for="(iNumber, iIndex) in LOTTERY_TYPES[types].NUMBERS" :key="iIndex + '-'+ index">{{ iNumber }}</th>
            </template>
          </tr>
          <tr class="background-thead" v-if="['SSC'].includes(types.toUpperCase())">
             <template v-for="(number, index) in LOTTERY_TYPES[types].COUNT" >
              <td v-for="(iNumber, iIndex) in LOTTERY_TYPES[types].NUMBERS" :key="iIndex + '-'+ index">{{ iNumber }}</td>
            </template>
          </tr>

          <tr class="background-tbody">
            <th colspan="2">出现次数</th>
            <template v-for="(iNumber, iIndex) in LOTTERY_TYPES[types].COUNT" >
              <td v-for="(_iNumber, _iIndex) in LOTTERY_TYPES[types].NUMBERS" :key="iIndex + '-' + _iIndex">{{ _iNumber }}</td>
            </template>
          </tr>
          <tr class="background-tbody">
            <th colspan="2">平均遗漏</th>
            <template v-for="(iNumber, iIndex) in LOTTERY_TYPES[types].COUNT" >
              <td v-for="(_iNumber, _iIndex) in LOTTERY_TYPES[types].NUMBERS" :key="iIndex + '-' + _iIndex">{{ _iNumber }}</td>
            </template>
          </tr>
          <tr class="background-tbody">
            <th colspan="2">最大遗漏</th>
            <template v-for="(iNumber, iIndex) in LOTTERY_TYPES[types].COUNT" >
              <td v-for="(_iNumber, _iIndex) in LOTTERY_TYPES[types].NUMBERS" :key="iIndex + '-' + _iIndex">{{ _iNumber }}</td>
            </template>
          </tr>
          <tr class="background-tbody">
            <th colspan="2">最大连出</th>
            <template v-for="(iNumber, iIndex) in LOTTERY_TYPES[types].COUNT" >
              <td v-for="(_iNumber, _iIndex) in LOTTERY_TYPES[types].NUMBERS" :key="iIndex + '-' + _iIndex">{{ _iNumber }}</td>
            </template>
          </tr>
        </table>
      </div>
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
  Prop,
} from 'vue-property-decorator';

import {
  ITabs,
  IDivider,
  IButton,
  IRadioGroup,
  ICheckboxGroup,
} from '@/Components/';

import {
  LOTTERY_TYPES,
} from '@/CONFIGS/';

@Component({
  name: 'BasicTrend',
  components: {
    ITabs,
    IDivider,
    IButton,
    IRadioGroup,
    ICheckboxGroup,
  },
})
class BasicTrend extends Vue {
  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  public date = '今天';
  public position = '第一球';
  public decorator = ['遗漏', ];
  
  public texts = {
    PK10: ['冠军', '亚军', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名', ],
    SSC: [ '第一球', '第二球', '第三球', '第四球', '第五球', ],
  }; 

  public get oLotteryIssues (): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0, 14);
    return oLotteryIssue;
  }
}
export default BasicTrend;
</script>
