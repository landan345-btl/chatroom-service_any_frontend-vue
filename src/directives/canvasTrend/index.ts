
let canvasTrend = {   // canvas号码走势图 自定义指令
  inserted: (el: any) => {
    let color = [ '#FB8E19' , '#0092E0' , '#08bf02' ];
    let oTable: any = el ;
    oTable.style.position = 'relative' ;
    let sTableClass = oTable.className;
    let aSpans = document.querySelectorAll(`.${sTableClass} tr td span`);
    let aSpanClasses: any = [];
    let ss = 0;
    aSpans.forEach( ( oSpan ) => {
      oSpan.className !== '' &&
      oSpan.tagName === 'SPAN' &&
      aSpanClasses.indexOf(oSpan.className) === -1 ? aSpanClasses.push( oSpan.className ) : ss = 0 ;
    });
    for (let spanclass of aSpanClasses) {
      let cvs: any = document.createElement('canvas'); // 获取画布
      cvs.style.position = 'absolute';
      cvs.style.left = 0 + 'px';
      cvs.style.top = 0 + 'px';
      cvs.style.zIndex = 0 ;
      cvs.width = oTable.clientWidth;  // 获取表格的宽并用来确定画布的宽度
      cvs.height = oTable.clientHeight;
      let aClass = spanclass.split('-'); 
      let spancolor = color[ aClass[ aClass.length - 1 ] ];  // class前后不要加空格  日常踩坑
      let oSpans: any =  document.querySelectorAll(`.${sTableClass} tr td span.${spanclass}`); // 获取包含一类class的所以span元素
      let canList = [ ];    // 接收元素的位
      for ( let oSpan of oSpans ) {
        let s = { left: 0 , top: 0 };
        let width = oSpan.clientWidth / 2;
        let height = oSpan.clientHeight / 2;
        let offsetLeft = oSpan.offsetLeft;
        let offsetTop = oSpan.offsetTop ;
        oSpan.style.position = 'relative';
        oSpan.style.zIndex = '50';
        s.top = offsetTop + oSpan.parentNode.parentNode.offsetTop + height + 1;  // 距离父元素的高度 +元素高度一半
        s.left = offsetLeft + oSpan.parentNode.offsetLeft + width + 1;  // 距离父元素的宽度 +元素高度一半
        canList.push( s );
      }
      let cxt: any = cvs.getContext('2d') ;   // 创建画笔
      cxt.strokeStyle =  spancolor;          // 画笔颜色
      cxt.lineWidth = 2 ;   // 线条的宽度
      cxt.moveTo( canList[ 0 ].left , canList[ 0 ].top ) ;       // 起点位置 canList为上面步骤3中生成的数组
      for ( let i = 1; i < canList.length; i++ ) {         // 循环上面的数组，绘制绘画的点位
        cxt.lineTo( canList[ i ].left , canList[ i ].top );
      }
      cxt.stroke();
      oTable.appendChild( cvs );
    }
  },
};

export default canvasTrend;
