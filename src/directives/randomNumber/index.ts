import {
  LOTTERY_TYPES,
} from '@/CONFIGS';

let oRandomNumber = { // 开奖时间进度条  时间倒数
  inserted: (oElement: any, oBinding: any) => {
    let sClassName = oElement.className;
    let pProcess = Promise.resolve();
    if (!oBinding.value.hasOwnProperty('isRandom') || oBinding.value.isRandom === false) {
      return;
    }
    if (!oBinding.value.hasOwnProperty('types') || !oBinding.value.types) {
      return;
    }

    let sTypes = oBinding.value.types.toUpperCase();
    let iNumberLength = LOTTERY_TYPES[sTypes].NUMBERS.length;
    pProcess.then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      return new Promise((cResolve, cReject) => {
        let iSecond = Math.floor(Math.random() * 200) + 101;

        setTimeout(() => {
          let iRandomIndex = Math.floor(Math.random() * iNumberLength) + 1 - 1;
          let iNumber = LOTTERY_TYPES[sTypes].NUMBERS[iRandomIndex];
          let _sClassName = sClassName.replace(/\d+$/g, iNumber);
          oElement.className = _sClassName;
          cResolve();
        }, iSecond);
      });
    }).then(() => {
      oElement.className = sClassName;
    });
  },
};

export default oRandomNumber;
