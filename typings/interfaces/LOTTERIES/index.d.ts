interface I_LOTTERY {
  NAME: string,
  SRC: string,
  TYPES: string,
  LOTTERY_ISSUE: any,
}

interface I_LOTTERIES {
  [key: string]: I_LOTTERY;
}