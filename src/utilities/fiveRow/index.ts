const GOLD: string = '金';
const TIMBER: string = '木';
const WATER: string = '水';
const FIRE: string = '火';
const SOIL: string = '土';
const UNKNOWN: string = '未知';

let cIsFiveRow = (aNumbers: number ) => {

    if ( 210 <= aNumbers && aNumbers <= 695 ) {
     return GOLD;
    }
    if ( 696 <= aNumbers && aNumbers <= 763 ) {
      return TIMBER;
    }
    if ( 764 <= aNumbers && aNumbers <= 855 ) {
      return WATER;
    }
    if ( 856 <= aNumbers && aNumbers <= 923 ) {
      return FIRE;
    }
    if ( 924 <= aNumbers && aNumbers <= 1410 ) {
      return SOIL;
    }
    if ( 0 <= aNumbers && aNumbers <= 210 ) {
      return UNKNOWN;
    }
};

export default cIsFiveRow;
