let oRandomNumber =  {   // 开奖时间进度条  时间倒数
  inserted: (oElement: any) => {
    let sClassName = oElement.className;
    let pProcess = Promise.resolve();
    pProcess.then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          console.log('8....');
          cResolve();
        } , 500 );  // 4秒后执行指令
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          console.log('12....');
          cResolve();
        } , 1000 );  // 4秒后执行指令
      });
    });
    });

  },
};

export default oRandomNumber;
