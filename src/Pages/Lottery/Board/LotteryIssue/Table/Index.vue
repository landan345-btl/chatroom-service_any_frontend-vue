<template>
<div class="history-number text-center p-2">
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase()==='PK10'" class="w-100">
    <tbody>
      <tr>
        <th class="w-10 d-xs-none">时间</th>
        <th class="w-10">期数</th>
        <th class="number-buttons numbers">
          <span class="mr-1" 
            @click="switchStatus(sStatus)" 
            :class="{ checked: sStatus === status}" 
            v-for="(sStatus,iIndex) in statuses" 
            :key="iIndex">
            {{ statusesToTexts[sStatus] }}
          </span>
        </th>
        <th colspan="3" class="w-10 ">冠亚和</th>
        <th colspan="5" class="w-10 d-xs-none ">1-5龙虎</th>
      </tr>
      <tr class="font-size-1p5" v-for="(oLotteryIssue, iIndex) in gerLotteryIssues" :key="iIndex">
        <td class="d-xs-none">{{oLotteryIssue.added_time}}</td>
        <td>{{oLotteryIssue.no}}</td>
        <td class="w-30">
          <S-numbers
            :code="code"
            :numbers="JSON.parse(oLotteryIssue.numbers)"
            :types="gerLotteries[oLotteryIssue.lottery_id].types"
            v-if="gerLotteries && oLotteryIssue"
            :isRandom="false"
            :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
            :status="status"
            :onNumbers="onNumbers"
            :nextNumbers="iIndex > 0 ? JSON.parse(gerLotteryIssues[iIndex - 1].numbers): []"
            :previousNumbers="iIndex < JSON.parse(gerLotteryIssues.length - 1) ? JSON.parse(gerLotteryIssues[iIndex + 1].numbers): []"/>
        </td>
        <td>{{ JSON.parse(oLotteryIssue.numbers) | sum([0, 1])}}</td>
        <td :class="{'text-large' : '大' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers),[0,1]),11,12)}">
          {{ JSON.parse(oLotteryIssue.numbers) | sum([0, 1]) | isSmallOrLarge(11,12) }}
        </td>
        <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers),[0,1]))}">{{ JSON.parse(oLotteryIssue.numbers) | sum([0, 1]) | isOddOrEven }}
        </td>
        <td class="d-xs-none" :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[0,9])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([0, 9]) }}</td>
        <td class="d-xs-none" :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[1,8])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([1, 8]) }}</td>
        <td class="d-xs-none" :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[2,7])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([2, 7]) }}</td>
        <td class="d-xs-none" :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[3,6])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([3, 6]) }}</td>
        <td class="d-xs-none" :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[4,5])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([4, 5]) }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === 'SSC'" class="w-100">
    <tbody>
      <tr>
        <th class="d-xs-none">时间</th>
        <th class="w-15">期数</th>
        <th class="number-buttons w-42">
          <span class="mr-1"
            @click="switchStatus(sStatus)"
            :class="{checked: sStatus==status}"
            v-for="(sStatus, iIndex) in statuses" :key="iIndex">
            {{ statusesToTexts[sStatus] }}
          </span>
        </th>
        <th colspan="3">总和</th>
        <th colspan="5">1-5龙虎</th>
      </tr>
      <tr class="font-size-1p5 h-4" v-for="(oLotteryIssue,iIndex) in gerLotteryIssues" :key="iIndex">
        <td class="w-15 d-xs-none">{{oLotteryIssue.added_time}}</td>
        <td>{{oLotteryIssue.no}}</td>
        <td>
          <S-numbers
            :code="code"
            :onNumbers="onNumbers"
            :nextNumbers="iIndex > 0 ? JSON.parse(gerLotteryIssues[iIndex - 1].numbers): []"
            :previousNumbers="iIndex < JSON.parse(gerLotteryIssues.length - 1) ? JSON.parse(gerLotteryIssues[iIndex + 1].numbers): []"
            :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
            :numbers="JSON.parse(oLotteryIssue.numbers)"
            :types="gerLotteries[oLotteryIssue.lottery_id].types"
            v-if="gerLotteries && oLotteryIssue"
            :isRandom="false"
            :status="status"/>
        </td>
        <td>{{ JSON.parse(oLotteryIssue.numbers) | sum }}</td>
          <td :class="{'text-large' : '大' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)),20,21)}">
            {{ JSON.parse(oLotteryIssue.numbers) | sum | isSmallOrLarge(20,21) }}
          </td>
          <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers)))}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isOddOrEven }}
          </td>
          <td :class="{
            'text-sum' : '和' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[0,4]),
            'text-danger' : '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[0,4])}">
            {{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([0, 4]) }}
          </td>
      </tr>
    </tbody>
  </table>
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === '11X5'" class="w-100">
    <tbody>
      <tr>
        <th class="w-15 d-xs-none">时间</th>
        <th class="w-10">期数</th>
        <th class="number-buttons">
          <span class="mr-1"
            @click="switchStatus(sStatus)"
            :class="{checked:sStatus==status}"
            v-for="(sStatus, iIndex) in statuses"
            :key="iIndex">
            {{ statusesToTexts[sStatus] }}
          </span>
        </th>
        <th colspan="3" class="th-width1">总和</th>
        <th>龙虎</th>
        <th class="d-xs-none">前三</th>
        <th class="d-xs-none">中三</th>
        <th class="d-xs-none">后三</th>
      </tr>
      <tr class="font-size-1p5" v-for=" ( oLotteryIssue , iIndex ) in gerLotteryIssues" :key="iIndex">
        <td class="d-xs-none">{{ oLotteryIssue.added_time }}</td>
        <td>{{ oLotteryIssue.no}}</td>
        <td class="w-42">
          <S-numbers
          :code="code"
          :onNumbers="onNumbers"
          :nextNumbers="iIndex > 0 ? JSON.parse(gerLotteryIssues[iIndex - 1].numbers): []"
          :previousNumbers="iIndex < JSON.parse(gerLotteryIssues.length - 1) ? JSON.parse(gerLotteryIssues[iIndex + 1].numbers): []"
          :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
          :numbers="JSON.parse(oLotteryIssue.numbers)"
          :types="gerLotteries[oLotteryIssue.lottery_id].types"
          v-if="gerLotteries && oLotteryIssue"
          :isRandom="false"
          :status="status"/>
        </td>
        <td>{{ JSON.parse(oLotteryIssue.numbers) | sum }}</td>
        <td :class="{'text-large' : '大' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)),29,31)}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isSmallOrLarge(29, 31) }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers),29,31))}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isOddOrEven }}</td>
        <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[0,4])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([0, 4]) }}</td>
        <td class="d-xs-none" :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(oLotteryIssue.numbers),[0,1,2])}">{{ JSON.parse(oLotteryIssue.numbers) | determineSequence([0, 1, 2]) }}</td>
        <td class="d-xs-none" :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(oLotteryIssue.numbers),[1,2,3])}">{{ JSON.parse(oLotteryIssue.numbers) | determineSequence([1, 2, 3]) }}</td>
        <td class="d-xs-none" :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(oLotteryIssue.numbers),[2,3,4])}">{{ JSON.parse(oLotteryIssue.numbers) | determineSequence([2, 3, 4]) }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === 'K3'" class="w-100">
    <tbody>
      <tr>
        <th class="w-15 d-xs-none">时间</th>
        <th class="w-10">期数</th>
        <th class="w-30">显示号码</th>
        <th colspan="3">总和</th>
        <th colspan="5">鱼虾蟹</th>
      </tr>
      <tr class="font-size-1p5" v-for=" ( oLotteryIssue , iIndex ) in gerLotteryIssues" :key="iIndex">
        <td class="d-xs-none">{{ oLotteryIssue.added_time }}</td>
        <td>{{ oLotteryIssue.no}}</td>
        <td>
          <S-numbers
          :code="code"
          :onNumbers="onNumbers"
          :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
          :numbers="JSON.parse(oLotteryIssue.numbers)"
          :types="gerLotteries[oLotteryIssue.lottery_id].types"
          v-if="gerLotteries && oLotteryIssue"
          :isRandom="false"
          class="status-number"/>
        </td>
        <td>{{ JSON.parse(oLotteryIssue.numbers) | sum }}</td>
        <td :class="{'text-even': '双'===isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers)))}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isOddOrEven}}</td>
        <td :class="{'text-large': '大' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)),10,11)}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isSmallOrLarge(10, 11) }}</td>
        <td :class="{
          'text-fish': '鱼'=== isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),0),
          'text-cock': '鸡' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),0),
          'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),0),
          'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),0)}">
            {{ JSON.parse(oLotteryIssue.numbers) | isFishOrShrimpOrCrab(0) }}
        </td>
        <td :class="{
          'text-cock': '鸡' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),1),
          'text-fish': '鱼' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),1),
          'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),1),
          'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),1)}">
            {{ JSON.parse(oLotteryIssue.numbers) | isFishOrShrimpOrCrab(1) }}
        </td>
        <td :class="{
          'text-fish': '鱼' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),2),
          'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),2),
          'text-cock': '鸡' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),2),
          'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(oLotteryIssue.numbers),2)}">
            {{ JSON.parse(oLotteryIssue.numbers) | isFishOrShrimpOrCrab(2) }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === 'KLSF'" class="w-100">
    <tbody>
      <tr>
        <th class="w-15 d-xs-none">时间</th>
        <th class="w-10">期数</th>
        <th class="number-buttons p-1">
          <span
            class="mr-1"
            @click="switchStatus(sStatus)"
            :class="{checked: sStatus==status}"
            v-for="(sStatus, iIndex) in statuses"
            :key="iIndex">{{ statusesToTexts[sStatus] }}</span>
        </th>
        <th colspan="3" class="th-width1">总和</th>
        <th>尾大小</th>
        <th colspan="4" >龙虎</th>
      </tr>
      <tr class="font-size-1p5" v-for=" ( oLotteryIssue, iIndex ) in gerLotteryIssues" :key="iIndex">
        <td class="d-xs-none">{{ oLotteryIssue.added_time }}</td>
        <td>{{ oLotteryIssue.no }}</td>
        <td>
          <S-numbers
            :code="code"
            :onNumbers="onNumbers"
            :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
            :numbers="JSON.parse(oLotteryIssue.numbers)"
            :types="gerLotteries[oLotteryIssue.lottery_id].types"
            v-if="gerLotteries && oLotteryIssue"
            :isRandom="false"
            :status="status"/>
        </td>
        <td>{{ JSON.parse(oLotteryIssue.numbers) | sum }}</td>
        <td :class="{'text-even': '双'===isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers)))}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isOddOrEven }}</td>
        <td :class="{'text-large': '大'===isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)),83,85),'text-sum': '和'===isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)),83,85)}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isSmallOrLarge(83, 85) }}</td>
        <td :class="{'text-large': '大'===isSmallOrLarge(substr(sum(JSON.parse(oLotteryIssue.numbers)),(-1,1)),4,4)}">尾{{ JSON.parse(oLotteryIssue.numbers) | sum | substr(-1, 1) | isSmallOrLarge(4,4) }}</td>
        <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[0,7])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([0, 7]) }}</td>
        <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[1,6])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([1, 6]) }}</td>
        <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[2,5])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([2, 5]) }}</td>
        <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(oLotteryIssue.numbers),[3,4])}">{{ JSON.parse(oLotteryIssue.numbers) | isDragonOrTiger([3, 4]) }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === 'SIX'" class="w-100">
    <tbody>
      <tr>
        <th class="w-15 d-xs-none">时间</th>
        <th class="w-15">期数</th>
        <th class="number-buttons">号码</th>
        <th colspan="3">总和</th>
        <th colspan="4">特码</th>
      </tr>
      <tr class="font-size-1p5" v-for=" ( oLotteryIssue , iIndex ) in gerLotteryIssues" :key="iIndex">
        <td class="d-xs-none">{{ oLotteryIssue.added_time }}</td>
        <td>{{ oLotteryIssue.no }}</td>
        <td>
          <S-numbers
          :code="code"
          :onNumbers="onNumbers"
          :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
          :numbers="JSON.parse(oLotteryIssue.numbers)"
          :types="gerLotteries[oLotteryIssue.lottery_id].types"
          v-if="gerLotteries && oLotteryIssue"
          :isRandom="false"
          class="status-number"/>
        </td>
        <td class="w-1_3">{{ JSON.parse(oLotteryIssue.numbers) | sum }}</td>
        <td :class="{'text-even': '双' === isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers)))}" class="w-1_3">{{ JSON.parse(oLotteryIssue.numbers) | sum | isOddOrEven }}</td>
        <td :class="{'text-large' : '大' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)),174,175)}" class="w-1_3">{{ JSON.parse(oLotteryIssue.numbers) | sum | isSmallOrLarge(174, 175) }}</td>
        <td class="w-1_3">{{ JSON.parse(oLotteryIssue.numbers) | last }}</td>
        <td :class="{'text-even' : '双' === isSmallOrLarge(last(JSON.parse(oLotteryIssue.numbers)))}" class="w-1_3">{{ JSON.parse(oLotteryIssue.numbers) | last | isOddOrEven }}</td>
        <td :class="{'text-large' : '大' === isSmallOrLarge(last(JSON.parse(oLotteryIssue.numbers)),24,25)}" class="w-1_3">{{ JSON.parse(oLotteryIssue.numbers)| last | isSmallOrLarge(24, 25) }}</td>
        <td :class="{'text-large' : '大' === isSmallOrLarge(substr(last(JSON.parse(oLotteryIssue.numbers)),-1,1),4,5)}" class="w-1_3">尾{{ JSON.parse(oLotteryIssue.numbers) | last | substr(-1, 1) | isSmallOrLarge(4, 5)}}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === 'KL8'" class="w-100">
    <tbody>
      <tr>
        <th class="d-xs-none w-10">时间</th>
        <th class="w-10">期数</th>
        <th>显示号码</th>
        <th colspan="3" class="w-10">总和</th>
        <th class="d-xs-none w-10">单双</th>
        <th class="d-xs-none w-10">前后</th>
        <th class="d-xs-none w-10">总和组合</th>
        <th class="w-10">五行</th>
      </tr>
      <tr v-for=" ( oLotteryIssue, iIndex ) in gerLotteryIssues" :key="iIndex" class="h-4 font-size-1p5">
        <td class="font-size-1 d-xs-none">{{ oLotteryIssue.added_time }}</td>
        <td class="font-size-1">{{ oLotteryIssue.no}}</td>
        <td class="w-36">
         <S-numbers
         :code="code"
         :onNumbers="onNumbers"
         :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
         :numbers="JSON.parse(oLotteryIssue.numbers)"
          :types="gerLotteries[oLotteryIssue.lottery_id].types"
          v-if="gerLotteries && oLotteryIssue"
         :isRandom="false"
         class="status-number"/>
        </td>
        <td>{{ JSON.parse(oLotteryIssue.numbers) | sum }}</td>
        <td :class="{'text-large': '大'===isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)),849,851)}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isSmallOrLarge(849, 851) }}</td>
        <td :class="{'text-even': '双'===isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers)))}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isOddOrEven }}</td>
        <td class="d-xs-none" :class="{
          'deuce-multiple':'单双和' === isOddOrEven( JSON.parse(oLotteryIssue.numbers)),
          'text-danger':'双多' === isOddOrEven( JSON.parse(oLotteryIssue.numbers))}">
            {{ JSON.parse(oLotteryIssue.numbers) | isOddOrEven }}
        </td>
        <td class="d-xs-none" :class="{'text-even': '后多' === isFrontOrBack( JSON.parse(oLotteryIssue.numbers))}">{{ JSON.parse(oLotteryIssue.numbers) | isFrontOrBack }}</td>
        <td class="d-xs-none">总{{ JSON.parse(oLotteryIssue.numbers) | sum |isSmallOrLarge(809,811)}}{{ JSON.parse(oLotteryIssue.numbers) | sum |isOddOrEven }}</td>
        <td>{{ JSON.parse(oLotteryIssue.numbers) | sum | isFiveRow }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === '3D'" class="w-100">
    <tbody>
      <tr>
        <th class="w-15 d-xs-none">时间</th>
        <th>期数</th>
        <th class="w-25">号码</th>
        <th colspan="3">佰拾和</th>
        <th colspan="3">佰个和</th>
        <th colspan="3">拾个和</th>
        <th colspan="3">总和</th>
      </tr>
      <tr class="font-size-1p5" v-for=" ( oLotteryIssue , iIndex ) in gerLotteryIssues" :key="iIndex">
        <td class="d-xs-none">{{ oLotteryIssue.added_time }}</td>
        <td>{{ oLotteryIssue.no}}</td>
        <td class="w-10">
          <S-numbers
          :code="code"
          :onNumbers="onNumbers"
          :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
          :numbers="JSON.parse(oLotteryIssue.numbers)"
          :types="gerLotteries[oLotteryIssue.lottery_id].types"
          v-if="gerLotteries && oLotteryIssue"
          :isRandom="false"
          class="status-number"/>
        </td>
        <td>{{ JSON.parse(oLotteryIssue.numbers) | sum([0, 1]) }}</td>
        <td :class="{'text-even': '双' === isOddOrEven(sum((JSON.parse(oLotteryIssue.numbers)), [0, 1]))}">{{ JSON.parse(oLotteryIssue.numbers) | sum([0, 1]) | isOddOrEven }}</td>
        <td :class="{'text-large': '大' === isSmallOrLarge(substr(sum(JSON.parse(oLotteryIssue.numbers),[0,1]),-1,1),4,5)}">尾{{ JSON.parse(oLotteryIssue.numbers) | sum([0, 1]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
        <td class="color-black">{{ JSON.parse(oLotteryIssue.numbers) | sum([0, 2])}}</td>
        <td :class="{'text-even': '双' === isOddOrEven(sum((JSON.parse(oLotteryIssue.numbers)), [0, 2]))}">{{ JSON.parse(oLotteryIssue.numbers) | sum([0, 2]) | isOddOrEven }}</td>
        <td :class="{'text-large':'大' === isSmallOrLarge(substr(sum(JSON.parse(oLotteryIssue.numbers),[0,2]),-1,1),4,5)}">尾{{ JSON.parse(oLotteryIssue.numbers) | sum([0, 2]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
        <td class="color-black">{{ JSON.parse(oLotteryIssue.numbers) | sum([1, 2])}}</td>
        <td :class="{'text-even': '双' === isOddOrEven(sum((JSON.parse(oLotteryIssue.numbers)), [1, 2])) }">{{ JSON.parse(oLotteryIssue.numbers) | sum([1, 2])| isOddOrEven}}</td>
        <td :class="{'text-large': '大' === isSmallOrLarge(substr(sum(JSON.parse(oLotteryIssue.numbers),[1,2]),-1,1),4,5)}">尾{{ JSON.parse(oLotteryIssue.numbers) | sum([1, 2]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
        <td class="color-black">{{ JSON.parse(oLotteryIssue.numbers) | sum }}</td>
        <td :class="{'text-even': '双' === isOddOrEven(sum((JSON.parse(oLotteryIssue.numbers))))}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isOddOrEven }}</td>
        <td :class="{'text-large': '大' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)), 13, 14 )}">{{ JSON.parse(oLotteryIssue.numbers) | sum | isSmallOrLarge(13, 14)}}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="code && LOTTERIES[code].TYPES.toUpperCase() === 'XY28'" class="w-100">
    <tbody>
      <tr>
        <th class="w-15 d-xs-none">时间</th>
        <th class="w-15">期数</th>
        <th class="number-buttons w-30">号码</th>
        <th colspan="3">总和</th>
      </tr>
      <tr class="font-size-1p5" v-for=" ( oLotteryIssue , iIndex ) in gerLotteryIssues" :key="iIndex">
        <td class="d-xs-none d-xs-none">{{ oLotteryIssue.added_time }}</td>
        <td>{{ oLotteryIssue.no }}</td>
        <td>
          <S-numbers
          :code="code"
          :onNumbers="onNumbers"
          :onOddOrEvenOrSmallOrLargeOrPairRedcords="onOddOrEvenOrSmallOrLargeOrPairRedcords"
          :numbers="JSON.parse(oLotteryIssue.numbers)"
          :types="gerLotteries[oLotteryIssue.lottery_id].types"
          v-if="gerLotteries && oLotteryIssue"
          :isRandom="false"
          class="status-number"/>
        </td>
        <td class="w-10">{{ JSON.parse(oLotteryIssue.numbers) | sum }}</td>
        <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(oLotteryIssue.numbers),12,14))}" class="w-10">{{ JSON.parse(oLotteryIssue.numbers) | sum | isOddOrEven }}</td>
        <td :class="{'text-large' : '大' === isSmallOrLarge(sum(JSON.parse(oLotteryIssue.numbers)),12,14)}" class="w-10">{{ JSON.parse(oLotteryIssue.numbers) | sum |isSmallOrLarge(12,14) }}</td>
      </tr>
    </tbody>
  </table>
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
  SNumbers,
} from '@/Components/';

import {
  LOTTERIES,
} from '@/CONFIGS/';

@Component({
  name: 'Table',
  components: {
    SNumbers,
  },
})
class Table extends Vue {
  @Prop()
  public lotteryIssues!: any;

  @Prop()
  public lottery!: any;

  @Prop()
  public code!: any;

  @Prop()
  public types!: any;

  @Prop()
  public onNumbers!: any;

  @Prop()
  public onOddOrEvenOrSmallOrLargeOrPairRedcords!: boolean;

  public statuses = ['NUMBER', 'SMALL_LARGE', 'ODD_EVEN', ];

  public statusesToTexts = {
    'NUMBER': '显示号码',
    'SMALL_LARGE': '显示大小',
    'ODD_EVEN': '显示单双',
  };

  public status: string = 'NUMBER';

  public get gerLotteryIssues (): object {
    let oLotteryIssues: any = this.$store.state.lottery_issues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse().slice(0, 99);
    return oLotteryIssue;
  }
  
  public get gerLotteries (): object {
    let oLotteries: any = this.$store.state.lotteries;
    return oLotteries;
  }

  public switchStatus (sStatus: string) {
    this.status = sStatus;
  }
}

export default Table;
</script>
