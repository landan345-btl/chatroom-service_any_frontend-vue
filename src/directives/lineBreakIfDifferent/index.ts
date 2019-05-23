let oLineBreakIfDifferent = { // 开奖时间进度条  时间倒数
  inserted: (oElement: any, oBinding: any, oVnode: any) => {
    if (!oElement.nextSibling) {
      return;
    }
    let sThisClassName = oElement.className;

    let sNextClassName = oElement.nextSibling.className || null;
    if (sNextClassName && sThisClassName !== sNextClassName) {
      let oNewNode = document.createElement('p');
      oNewNode.className = 'line-break' + ' ' + ((oBinding.value && oBinding.value.className) ? oBinding.value.className : '');
      oElement.parentNode.insertBefore(oNewNode, oElement.nextSibling);
    }
  },
};

export default oLineBreakIfDifferent;
