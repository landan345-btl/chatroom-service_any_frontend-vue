interface I_LOTTERY {
  NAME: string,
  SRC: string,
}

interface I_LOTTERIES {
  [key: string]: I_LOTTERY;
}