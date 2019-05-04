<template>
  <div class="history-number">
    <table v-if="lotteryTypes[ code ].TYPES === 'PK10'">
      <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns">
            <span @click="showTitle(index)" 
              :class="{spanselect:index==titleStatus}" 
              v-for="(item,index) in titles" 
              :key="index">{{item}}
            </span>
          </th>
          <th colspan="3">冠亚和</th>
          <th colspan="5">1-5龙虎</th>
        </tr>
        <tr  v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers" v-if="switcher==='0'">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                :class="['num-0'+number]" class="pk10-mb"></li>
            </ul>
            <ul class="numbers" v-else-if="switcher==='1'">
              <li :class="{'background-sm' : (number % 2==1), 'background-lg' : (number % 2==0)}" 
                v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" class="pk10-mb"></li>
            </ul>
            <ul class="numbers" v-else-if="switcher==='2'">
              <li :class="{'odd' : (number<=5), 'even' : (number>5)}" 
                v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" class="pk10-mb">
              </li> 
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1])}}</td>
          <td :class="{
            'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(olottery.numbers),[0,1]),11,12)}">
            {{ JSON.parse(olottery.numbers) | sum([0, 1]) | isSmallOrLarge(11,12) }}
          </td>
          <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(olottery.numbers),[0,1]))}">{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isOddOrEven }}
          </td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[0,9])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 9]) }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[1,8])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([1, 8]) }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[2,7])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([2, 7]) }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[3,6])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([3, 6]) }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[4,5])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([4, 5]) }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="lotteryTypes[ code ].TYPES === 'KL8'">
      <tbody>
        <tr>
          <th width="140">时间</th>
          <th>期数</th>
          <th class="number-btns w-42">显示号码</th>
          <th colspan="3">总和</th>
          <th class="w-0p5">单双</th>
          <th class="w-0p5">前后</th>
          <th>总和组合</th>
          <th>五行</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers">
             <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" class="ml-1"
                :class="{'number-blue-fine' : (number>40), 'number-light-fine' : (number<=40)}">
                <i class="font-size-2p5 font-weight-bold" :class="{'color-black' : (number>40), 'color-deepskyblue' : (number<=40)}">{{ number | padStart(2, "0")}}</i>
              </li>
            </ul> 
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td :class="{'text-big': '大' === isSmallOrLarge(sum(JSON.parse(olottery.numbers)),849,851)}">{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(849, 851) }}</td>
          <td :class="{'text-even': '双'===isOddOrEven(sum(JSON.parse(olottery.numbers)))}">{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td :class="{
            'deuce-multiple':'单双和' === isOddOrEven( JSON.parse(olottery.numbers)),
            'text-danger':'双多' === isOddOrEven( JSON.parse(olottery.numbers))}">
            {{ JSON.parse(olottery.numbers) | isOddOrEven }}
          </td>
          <td :class="{'text-even':'后多' === isFrontOrBack( JSON.parse(olottery.numbers))}">{{ JSON.parse(olottery.numbers) | isFrontOrBack }}</td>
          <td>总{{ JSON.parse(olottery.numbers) | sum |isSmallOrLarge(809,811)}}{{ JSON.parse(olottery.numbers) | sum |isOddOrEven }}</td>
          <td>{{ JSON.parse(olottery.numbers) | sum | FiveRow }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="lotteryTypes[ code ].TYPES === 'K3'">
      <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns th-width4">显示号码</th>
          <th colspan="3">总和</th>
          <th colspan="5">鱼虾蟹</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                class="ml-2"
                :class="['k3-0'+ number]">
              </li>
            </ul> 
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td :class="{'text-even': '双'===isOddOrEven(sum(JSON.parse(olottery.numbers)))}">{{ JSON.parse(olottery.numbers) | sum | isOddOrEven}}</td>
          <td :class="{'text-big': '大' === isSmallOrLarge(sum(JSON.parse(olottery.numbers)),10,11)}">{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(10, 11) }}</td>
          <td :class="{
            'text-fish': '鱼'=== isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),0),
            'text-chicken': '鸡' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),0),
            'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),0),
            'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),0)}">
            {{ JSON.parse(olottery.numbers) | isFishOrShrimpOrCrab(0) }}
          </td>
          <td :class="{
            'text-chicken': '鸡' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),1),
            'text-fish': '鱼' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),1),
            'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),1),
            'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),1)}">
            {{ JSON.parse(olottery.numbers) | isFishOrShrimpOrCrab(1) }}
          </td>
          <td :class="{
            'text-fish': '鱼' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),2),
            'text-shrimp': '虾' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),2),
            'text-chicken': '鸡' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),2),
            'text-crad': '蟹' === isFishOrShrimpOrCrab(JSON.parse(olottery.numbers),2)}">
            {{ JSON.parse(olottery.numbers) | isFishOrShrimpOrCrab(2) }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="lotteryTypes[ code ].TYPES === 'KLSF'"> 
      <tbody>
        <tr>
          <th class="th-width1">时间</th>
          <th class="th-width2">期数</th>
          <th class="number-btns th-width3">
            <span @click="showTitle(index)" 
            :class="{spanselect: index==titleStatus}" 
            v-for="(number,index) in titles" 
            :key="index">{{number}}
            </span>
          </th>
          <th colspan="3" class="th-width1">总和</th>
          <th>尾大小</th>
          <th colspan="4" >龙虎</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul v-if="switcher==='0'"  class="numbers background-color h-4" v-show="code !=='CQKLSF'">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                class="ml-0p5"
                :class="{'number-red' : (number>18), 'number-blue' : (number<=18)}">
                <i class="font-size-2p5 font-weight-bold">{{ number | padStart(2,'0') }}</i>
              </li>
            </ul>
            <ul v-if="switcher==='0'"  class="numbers background-color h-4"  v-show="code ==='CQKLSF'">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                class="ml-0p5 number" :class="['number-' +  lotteryTypes[ code ].TYPES.toLowerCase(), 'number-'+ code.toLowerCase(), 'number-'+ lotteryTypes[ code ].TYPES.toLowerCase() + '-' + number]"
                 v-show="code==='CQKLSF'">
                <i class="font-size-2p5 font-weight-bold" v-if=" code !=='CQKLSF'">{{ number | padStart(2,'0') }}</i>
              </li>
            </ul>
            <ul v-else-if="switcher==='1'" class="numbers background-color h-4">
              <li :class="{'background-round-sm' : (number<=10), 'background-round-lg' : (number>10)}" 
                v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i">
              </li> 
            </ul>
            <ul v-else-if="switcher==='2'" class="numbers background-color h-4">
              <li :class="{'round-odd' : (number % 2==1), 'round-even' : (number % 2==0)}" 
                v-for="(number,i) in JSON.parse(olottery.numbers)" :key="i">
              </li>
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td :class="{'text-even': '双'===isOddOrEven(sum(JSON.parse(olottery.numbers)))}">{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td :class="{'text-big': '大'===isSmallOrLarge(sum(JSON.parse(olottery.numbers)),83,85),'text-sum': '和'===isSmallOrLarge(sum(JSON.parse(olottery.numbers)),83,85)}">{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(83, 85) }}</td>
          <td :class="{'text-big': '大'===isSmallOrLarge(substr(sum(JSON.parse(olottery.numbers)),(-1,1)),4,4)}">尾{{ JSON.parse(olottery.numbers) | sum | substr(-1, 1) | isSmallOrLarge(4,4) }}</td>
          <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[0,7])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 7]) }}</td>
          <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[1,6])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([1, 6]) }}</td>
          <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[2,5])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([2, 5]) }}</td>
          <td :class="{'text-danger': '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[3,4])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([3, 4]) }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="lotteryTypes[ code ].TYPES === '11X5'">  
      <tbody>
        <tr>
          <th class="th-width1">时间</th>
          <th class="th-width2">期数</th>
          <th class="number-btns th-width4">
            <span @click="showTitle(index)" 
            :class="{spanselect: index==titleStatus}" 
            v-for="(number,index) in titles" 
            :key="index">{{number}}
            </span>
          </th>
          <th colspan="3" class="th-width1">总和</th>
          <th>龙虎</th>
          <th>前三</th>
          <th>中三</th>
          <th>后三</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul v-if="switcher==='0'" class="numbers background-color h-4">
             <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
              class="number-blue-fine"><i class="font-size-2p5">{{ number }}</i></li>
            </ul>
            <ul v-else-if="switcher==='1'" class="numbers background-color h-4">
             <li :class="{'background-round-sm' : (number % 2==1), 'background-round-lg' : (number % 2==0)}" 
             v-for="(number,i) in JSON.parse(olottery.numbers)" :key="i"></li>
            </ul>
            <ul v-else-if="switcher==='2'" class="numbers background-color h-4">
             <li :class="{'round-odd' : (number<=5), 'round-even' : (number>5),'background-round-sum' : (number==11)}" 
              v-for="(number,i) in JSON.parse(olottery.numbers)" :key="i"></li>
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(olottery.numbers)),29,31)}">{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(29, 31) }}</td>
          <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(olottery.numbers),29,31))}">{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td :class="{'text-danger' : '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[0,4])}">{{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 4]) }}</td>
          <td :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(olottery.numbers),[0,1,2])}">{{ JSON.parse(olottery.numbers) | determineSequence([0, 1, 2]) }}</td>
          <td :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(olottery.numbers),[1,2,3])}">{{ JSON.parse(olottery.numbers) | determineSequence([1, 2, 3]) }}</td>
          <td :class="{'text-danger' : '顺子' === determineSequence(JSON.parse(olottery.numbers),[2,3,4])}">{{ JSON.parse(olottery.numbers) | determineSequence([2, 3, 4]) }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="lotteryTypes[ code ].TYPES === '3D'">  
      <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns w-30">号码</th>
          <th colspan="3">佰拾和</th>
          <th colspan="3">佰个和</th>
          <th colspan="3">拾个和</th>
          <th colspan="3">总和</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
              class="number-red ml-1"><i class="font-size-2p5 font-weight-bold">{{ number }}</i></li>
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum([0, 1])}}</td>
          <td :class="{'text-even':'双' === isOddOrEven(sum((JSON.parse(olottery.numbers)),[0,1]))}">{{ JSON.parse(olottery.numbers) | sum([0, 1]) | isOddOrEven }}</td>
          <td :class="{'text-big':'大' === isSmallOrLarge(substr(sum(JSON.parse(olottery.numbers),[0,1]),-1,1),4,5)}">尾{{ JSON.parse(olottery.numbers) | sum([0, 1]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
          <td class="color-black">{{ JSON.parse(olottery.numbers) | sum([0, 2])}}</td>
          <td :class="{'text-even':'双' === isOddOrEven(sum((JSON.parse(olottery.numbers)),[0,2]))}">{{ JSON.parse(olottery.numbers) | sum([0, 2]) | isOddOrEven }}</td>
          <td :class="{'text-big':'大' === isSmallOrLarge(substr(sum(JSON.parse(olottery.numbers),[0,2]),-1,1),4,5)}">尾{{ JSON.parse(olottery.numbers) | sum([0, 2]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
          <td class="color-black">{{ JSON.parse(olottery.numbers) | sum([1, 2])}}</td>
          <td :class="{'text-even':'双' === isOddOrEven(sum((JSON.parse(olottery.numbers)),[1,2]))}">{{ JSON.parse(olottery.numbers) | sum([1, 2])| isOddOrEven}}</td>
          <td :class="{'text-big':'大' === isSmallOrLarge(substr(sum(JSON.parse(olottery.numbers),[1,2]),-1,1),4,5)}">尾{{ JSON.parse(olottery.numbers) | sum([1, 2]) | substr(-1, 1) | isSmallOrLarge(4, 5) }}</td>
          <td class="color-black">{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td :class="{'text-even':'双' === isOddOrEven(sum((JSON.parse(olottery.numbers))))}">{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td :class="{'text-big':'大' === isSmallOrLarge(sum(JSON.parse(olottery.numbers)),13,14)}">{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(13, 14)}}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="lotteryTypes[ code ].TYPES === 'SSC'">   
     <tbody>
        <tr>
          <th>时间</th>
          <th>期数</th>
          <th class="number-btns">
            <span @click="showTitle(index)" 
            :class="{spanselect:index==titleStatus}" 
            v-for="(item,index) in titles" 
            :key="index">{{item}}
            </span>
          </th>
          <th colspan="3">冠亚和</th>
          <th colspan="5">1-5龙虎</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4" v-if="switcher==='0'">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" 
                class="number-blue ssc-lottery" :class="['number-' + lotteryTypes[ code ].TYPES.toLowerCase(), 'number-'+ code.toLowerCase(), 'number-'+ lotteryTypes[ code ].TYPES.toLowerCase() + '-' + number]">
                  <i class="font-size-2p5 " v-if=" code !=='CQSSC'">{{ number }}</i>
              </li>
            </ul>
            <ul class="numbers h-4" v-else-if="switcher==='1'">
              <li :class="{'background-round-sm' : (number % 2==1), 'background-round-lg' : (number % 2==0)}" 
              v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i"></li>
            </ul>
            <ul class="numbers h-4" v-else-if="switcher==='2'">
              <li :class="{'round-odd' : (number<=5), 'round-even' : (number>5)}" 
               v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i"></li> 
            </ul>
          </td>
          <td>{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(olottery.numbers)),21,22)}">
            {{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(21, 22) }}
          </td>
          <td :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(olottery.numbers),21,22))}">
            {{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}
          </td>
          <td :class="{
            'text-danger' : '龙' === isDragonOrTiger(JSON.parse(olottery.numbers),[0,4]),
            'text-sum' : '和' === isDragonOrTiger(JSON.parse(olottery.numbers),[0,4])}">
            {{ JSON.parse(olottery.numbers) | isDragonOrTiger([0, 4]) }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="lotteryTypes[ code ].TYPES === 'XY28'"> 
      <tbody>
        <tr>
          <th class="w-15">时间</th>
          <th class="w-15">期数</th>
          <th class="number-btns w-30">号码</th>
          <th colspan="3">总和</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4 position-relative pcdd">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" class="number-blue ml-3">
                <i class="font-size-2p5 font-weight-bold">{{ number }}</i>
              </li>
              <em></em>
              <em></em>
            </ul>
          </td>
          <td class="w-10">{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td  :class="{'text-even' : '双' === isOddOrEven(sum(JSON.parse(olottery.numbers),12,14))}" class="w-10">{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td  :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(olottery.numbers)),12,14)}" class="w-10">{{ JSON.parse(olottery.numbers) | sum |isSmallOrLarge(12,14) }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="lotteryTypes[ code ].TYPES === 'SIX'">
      <tbody>
        <tr>
          <th class="w-15">时间</th>
          <th class="w-15">期数</th>
          <th class="number-btns w-30">号码</th>
          <th colspan="3">总和</th>
          <th colspan="4">特码</th>
        </tr>
        <tr v-for=" ( olottery , lotteryid ) in oLotteryIssues" :key="lotteryid">
          <td>{{ olottery.added_time }}</td>
          <td>{{ olottery.no}}</td>
          <td>
            <ul class="numbers h-4">
              <li v-for="( number , i ) in JSON.parse(olottery.numbers)" :key="i" class="number-blue ml-2p5 six-lottery">
                <i class="font-size-2p5 font-weight-bold">{{ number }}</i>
              </li>
            </ul>
          </td>
          <td class="w-1_3">{{ JSON.parse(olottery.numbers) | sum }}</td>
          <td :class="{'text-even': '双' === isOddOrEven(sum(JSON.parse(olottery.numbers)))}" class="w-1_3">{{ JSON.parse(olottery.numbers) | sum | isOddOrEven }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(sum(JSON.parse(olottery.numbers)),174,175)}" class="w-1_3">{{ JSON.parse(olottery.numbers) | sum | isSmallOrLarge(174, 175) }}</td>
          <td class="w-1_3">{{ JSON.parse(olottery.numbers) | last }}</td>
          <td :class="{'text-even' : '双' === isSmallOrLarge(last(JSON.parse(olottery.numbers)))}" class="w-1_3">{{ JSON.parse(olottery.numbers) | last | isOddOrEven }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(last(JSON.parse(olottery.numbers)),24,25)}" class="w-1_3">{{ JSON.parse(olottery.numbers)| last | isSmallOrLarge(24, 25) }}</td>
          <td :class="{'text-big' : '大' === isSmallOrLarge(substr(last(JSON.parse(olottery.numbers)),-1,1),4,5)}" class="w-1_3">尾{{ JSON.parse(olottery.numbers) | last | substr(-1, 1) | isSmallOrLarge(4, 5)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
 </template>
<style lang="scss">
@import 'Index-scoped.scss';
</style>
<script lang="ts">
 // import _ from 'lodash';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import LOTTERIES from '@/CONFIGS/LOTTERIES/index';

@Component({
  name: 'Table',
  })
class Table extends Vue {
  public lotteryTypes = LOTTERIES;

  public titles = ['显示号码', '显示大小', '显示单双'];

  public titleStatus: any = 0;

  public switcher: any = '0';

  @Prop({ default: null })
  public lotteryIssues !: any;

  @Prop({ default: null })
  public code !: any;

  public sortLottery( aNumber: any , bNumber: any) {
    return aNumber - bNumber;
  }
  public get oLotteryIssues(): object {
    let oLotteryIssues = this.lotteryIssues;
    let aLotteryIssues = Object.values(oLotteryIssues);
    let oLotteryIssue = aLotteryIssues.reverse();
    return oLotteryIssue;
  }
  public showTitle(index: number) {
    this.titleStatus = index;
    if ( this.titleStatus === 0 ) {
      this.switcher = '0';
    } else if ( this.titleStatus === 1 ) {
      this.switcher = '1';
    } else {
      this.switcher = '2';
    }
  }
}

export default Table;
</script>