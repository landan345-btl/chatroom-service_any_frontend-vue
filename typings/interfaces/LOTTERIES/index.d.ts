interface I_LOTTERY {
  NAME: string,
  SRC: string,
  TYPES: string,
  LOTTERY_ISSUE: any,
  SMALL_UPPER_BOUND: number,
  LARGE_LOWER_BOUND: number,
}

interface I_LOTTERIES {
  [key: string]: I_LOTTERY;
}