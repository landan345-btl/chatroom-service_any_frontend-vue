import {
  LOTTERY_TYPES,
} from '@/CONFIGS';

let oRandomNumber =  {   // 开奖时间进度条  时间倒数
  inserted: (oElement: any, oBinding: any) => {
    let sClassName = oElement.className;
    let pProcess = Promise.resolve();
    if (oBinding.value.isRandom === false ) {
      return;
    }
    pProcess.then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumber = Math.floor((Math.random() * 10) + 1);
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      oElement.className = sClassName;
    });

  },
};

export default oRandomNumber;
