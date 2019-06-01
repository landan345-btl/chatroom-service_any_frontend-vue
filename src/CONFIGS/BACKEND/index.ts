const BACKEND = {
  HOST: process.env.BACKEND_BASE_URL || 'http://dev.api.lottery.ques98.cn',
  PREVIOUS_PATH: '/service/resource',
  INTERVAL_TIME: 10 * 1000,
  RETRIED_TIMES: 5,
};

export default BACKEND;
