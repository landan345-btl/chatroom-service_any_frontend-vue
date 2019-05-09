import {
  LOTTERY_TYPES,
} from '@/CONFIGS';

let oRandomNumber =  {   // 开奖时间进度条  时间倒数
  inserted: (oElement: any, oBinding: any) => {
    let sClassName = oElement.className;
    let pProcess = Promise.resolve();
    // oBinding.value.numbers;
    if (oBinding.value.isRandom === false ) {
      return;
    }

    pProcess.then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, 100 );
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        setTimeout(() => {
          let iNumberLength = LOTTERY_TYPES['PK10'].NUMBERS.length;
          let iRandomIndex = Math.floor(Math.random() * iNumberLength ) + 1 - 1;
          let iNumber = LOTTERY_TYPES['PK10'].NUMBERS[iRandomIndex];
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
