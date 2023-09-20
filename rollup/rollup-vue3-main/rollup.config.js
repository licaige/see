// rollup.config.js
import devConfig from "./build/rollup.config.dev";
import prdConfig from "./build/rollup.config.prd";
import testConfig from "./build/rollup.config.test";

export default (commandLineArgs) => {
  // 根据开发环境、生产坏境 加载不通的配置文件
  if (commandLineArgs.environment === "dev") {
    return devConfig;
  }
  if (commandLineArgs.environment === "test") {
    return testConfig;
  }
  return prdConfig;
};
