const LOTTERY_TYPES: any = {
  'PK10': {
    NUMBERS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ],
    COUNT: 10,
    SMALL_UPPER_BOUND_NUMBER: 4,
    LARGE_LOWER_BOUND_NUMBER: 5,
    DEUCE_SMALL_LARGE_NUMBERS: [],
    DEUCE_ODD_EVEN_NUMBERS: [],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: 22,
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: 23,
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: 10,
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: 12,
  },
  'SSC': {
    NUMBERS: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    COUNT: 5,
    SMALL_UPPER_BOUND_NUMBER: 4,
    LARGE_LOWER_BOUND_NUMBER: 5,
    DEUCE_SMALL_LARGE_NUMBERS: [],
    DEUCE_ODD_EVEN_NUMBERS: [],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: 29,
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: 30,
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
  },
  '11X5': {
    NUMBERS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ],
    COUNT: 5,
    SMALL_UPPER_BOUND_NUMBER: 4,
    LARGE_LOWER_BOUND_NUMBER: 5,
    DEUCE_SMALL_LARGE_NUMBERS: [11, ],
    DEUCE_ODD_EVEN_NUMBERS: [11, ],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: 29,
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: 30,
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
  },
  'K3': {
    NUMBERS: [1, 2, 3, 4, 5, 6, ],
    COUNT: 3,
    SMALL_UPPER_BOUND_NUMBER: 3,
    LARGE_LOWER_BOUND_NUMBER: 4,
    DEUCE_ODD_EVEN_NUMBERS: [],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: 10,
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: 11,
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
  },
  'KLSF': {
    NUMBERS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ],
    COUNT: 8,
    SMALL_UPPER_BOUND_NUMBER: 4,
    LARGE_LOWER_BOUND_NUMBER: 5,
    DEUCE_ODD_EVEN_NUMBERS: [],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: 83,
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: 85,
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
  },
  'KL8': {
    NUMBERS: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
      51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 76, 77, 78, 79, 80, ],
    COUNT: 20,
    SMALL_UPPER_BOUND_NUMBER: 40,
    LARGE_LOWER_BOUND_NUMBER: 41,
    DEUCE_ODD_EVEN_NUMBERS: [],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: 809,
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: 811,
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
  },
  'SIX': {
    NUMBERS: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, ],
    COUNT: 7,
    SMALL_UPPER_BOUND_NUMBER: 24,
    LARGE_LOWER_BOUND_NUMBER: 25,
    DEUCE_ODD_EVEN_NUMBERS: [49, ],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: 174,
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: 175,
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
  },
  '3D': {
    NUMBERS: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    COUNT: 3,
    SMALL_UPPER_BOUND_NUMBER: 4,
    LARGE_LOWER_BOUND_NUMBER: 5,
    DEUCE_ODD_EVEN_NUMBERS: [],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
  },
  'XY28': {
    NUMBERS: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    COUNT: 3,
    SMALL_UPPER_BOUND_NUMBER: 4,
    LARGE_LOWER_BOUND_NUMBER: 5,
    DEUCE_ODD_EVEN_NUMBERS: [],
    SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_SMALL_UPPER_BOUND_NUMBER: '',
    FIRST_AND_SECOND_SUMMATION_LARGE_LOWER_BOUND_NUMBER: '',
  },
};

export default LOTTERY_TYPES;
