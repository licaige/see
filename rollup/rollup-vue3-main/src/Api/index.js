import Axios from "axios";

/**
 * 1. 浏览器创建XMLHttpRequest；node 创建http
 * 2. 拦截请求、响应
 * 3. 转换响应数据和请求数据
 * 4. 取消请求
 * 5. 自动转换JSON数据
 * 6. 防御XSRF攻击
 *
 */

class Api {
  constructor(config) {
    const options = {
      timeout: 6000,
      ...config,
    };

    this.ajax = Axios.create(options);

    // 拦截请求、响应
    this.interceptorsRequest();
    this.interceptorsResponse();
  }
  /**
   * 拦截请求
   */
  interceptorsRequest() {
    this.ajax.interceptors.request.use(
      function (config) {
        console.log("req:", config);
        config.method = config.type;
        if (config.method === "get") {
          config.params = config.data;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }
  /**
   * 拦截响应
   */
  interceptorsResponse() {
    this.ajax.interceptors.response.use(
      function (res) {
        if (res.status === 200) {
          return res.data;
        }
        return Promise.reject(res);
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  request(params) {
    return Promise.resolve(this.ajax(params));
  }
}

// 默认的服务地址
export const ajax = new Api({
  baseURL: "http://127.0.0.1",
});
export default Api;
