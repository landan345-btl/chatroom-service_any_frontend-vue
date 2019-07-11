import axios from "axios";

import {
  HTTP
} from "@/CONFIGS/";

let sHost = HTTP.HOST.replace(/\/$/, "");
sHost.replace(/^http(s)?:\/\//, "");
sHost = "http://" + sHost;

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
// axios.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";
// axios.defaults.headers.get["Content-Type"] = "application/x-www-form-urlencoded";
// axios.defaults.headers.delete["Content-Type"] = "application/x-www-form-urlencoded";

// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.put["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.delete["Access-Control-Allow-Origin"] = "*";

// axios.defaults.headers.post["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS,PUT,DELETE,PATCH";
// axios.defaults.headers.put["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS,PUT,DELETE,PATCH";
// axios.defaults.headers.get["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS,PUT,DELETE,PATCH";
// axios.defaults.headers.delete["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS,PUT,DELETE,PATCH";

// axios.defaults.headers.post["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
// axios.defaults.headers.put["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
// axios.defaults.headers.get["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
// axios.defaults.headers.delete["Access-Control-Allow-Headers"] = "Content-Type, Authorization";

// axios.defaults.headers.post["Access-Control-Allow-Credentials"] = "true";
// axios.defaults.headers.put["Access-Control-Allow-Credentials"] = "true";
// axios.defaults.headers.get["Access-Control-Allow-Credentials"] = "true";
// axios.defaults.headers.delete["Access-Control-Allow-Credentials"] = "true";

/**
 * AixosHelper
 * 利用 Axios 改写，
 * 能过批次处理 AJAX 的 类模组
 */
class AxiosHelper {
  /** 可以批次发送 AJAX 请求的 方法
   * @param {object | Array<object>} request The request of HTTP body
   * @param {boolean} isRecursive 使用同步模式 (递归模式), 也就是一个 AJAX 等待回应后才发下一个请求
   */
  public get(oRequest: any | any[], bRecursive: boolean = false): Promise<any> {
    bRecursive = !!bRecursive;

    if (oRequest instanceof Array) {
      let aRequests: any[] = oRequest;
      let aResponses: any[] = [];
      if (bRecursive) {
        let pNextPromise = (i: number): any => {
          if (i >= aRequests.length) {
            return Promise.resolve(aResponses);
          }
          let _sUrl: string = aRequests[i].url || sHost + aRequests[i].path;
          let _oParams: any = aRequests[i].params;
          // _reqInit.cache = 'no-cache';
          // _reqInit.mode = 'cors';
          // _reqInit.credentials = 'include';

          return axios.get(_sUrl, _oParams).then((oAxiosReponse) => {
            // 舍弃 Axios 打包的 response 格式
            let oReponse = oAxiosReponse.data;
            aResponses.push(oReponse);
            return pNextPromise(i + 1);
          });
        };
        return pNextPromise(0);
      }

      return Promise.all(aRequests.map((_oRequest) => {
        let _sUrl: string = _oRequest.url || sHost + _oRequest.path;
        let _oParams: object = _oRequest.params;

        oOptions = {};
        return axios.get(_sUrl, oOptions).then((oAxiosReponse) => {
          // 舍弃 Axios 打包的 response 格式
          let oReponse = oAxiosReponse.data;
          return oReponse;
        });
      }));
    }

    let sUrl: string = oRequest.url || sHost + oRequest.path;
    let oParams: any = oRequest.params;
    // params.headers = oHeaders;
    let oOptions = {};
    return axios.get(sUrl, oOptions).then((oAxiosReponse) => {
      // 舍弃 Axios 打包的 response 格式
      let oReponse = oAxiosReponse.data;
      return oReponse;
    });
  }

  /**
   * @param {string} url The URL of API laction
   * @param {object | Array<object>} params The params of HTTP body
   * @param {boolean} isPolling Use polling (recursive) to send the request
   */
  public post(oRequest: any | any[], bRecursive: boolean = false): Promise<any> {
    bRecursive = !!bRecursive;
    let oParams: any;

    if (oRequest instanceof Array) {
      let aRequests: any[] = oRequest;
      let aResponses: any[] = [];
      if (bRecursive) {
        let pNextPromise = (i: number): any => {
          if (i >= aRequests.length) {
            return Promise.resolve(aResponses);
          }
          let _sUrl: string = aRequests[i].url || sHost + aRequests[i].path;
          oParams = aRequests[i].params;
          // _reqInit.cache = 'no-cache';
          // _reqInit.mode = 'cors';
          // _reqInit.credentials = 'include';

          return axios.post(_sUrl, oParams).then((oAxiosReponse) => {
            // 舍弃 Axios 打包的 response 格式
            let oReponse = oAxiosReponse.data;
            aResponses.push(oReponse);
            return pNextPromise(i + 1);
          });
        };
        return pNextPromise(0);
      }

      return Promise.all(aRequests.map((_oRequest) => {
        let _sUrl: string = _oRequest.url || sHost + _oRequest.path;
        oParams = _oRequest.params;

        return axios.post(_sUrl, oParams).then((oAxiosReponse) => {
          // 舍弃 Axios 打包的 response 格式
          let oReponse = oAxiosReponse.data;
          return oReponse;
        });
      }));
    }

    let sUrl: string = oRequest.url || sHost + oRequest.path;
    oParams = oRequest.params;
    // params.headers = oHeaders;
    return axios.post(sUrl, oParams).then((oAxiosReponse) => {
      // 舍弃 Axios 打包的 response 格式
      let oReponse = oAxiosReponse.data;
      return oReponse;
    });
  }

  /**
   * @param {string} url The URL of API laction
   * @param {object | Array<object>} params The params of HTTP body
   * @param {boolean} isPolling Use polling (recursive) to send the request
   */
  public put(url: string, params: object | object[], isPolling: boolean = false) {

  }

  /**
   * @param {string} url The URL of API laction
   * @param {object | Array<object>} params The params of HTTP body
   * @param {boolean} isPolling Use polling (recursive) to send the request
   */
  public delete(url: string, params: object | object[], isPolling: boolean = false) {

  }
}
export default AxiosHelper;