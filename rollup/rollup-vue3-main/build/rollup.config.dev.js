// rollup.config.dev.js dev

// import PluginRun from "@rollup/plugin-run";
import PluginServe from "rollup-plugin-serve";
// 自定义插件
import PluginClearConsole from "../plugins/rollup-plugin-clear-console";

// base config merge
import RollupConfigBase from "./rollup.config.base";
import { mergeDeep } from "../libs/merge";

export default mergeDeep({}, RollupConfigBase, {
  plugins: [
    PluginClearConsole({
      include: ["**/main.js"],
    }),
    PluginServe({
      // 运行在浏览器中
      open: true,
      // 运行成功后，打开的地址
      openPage: "/",
      // 打印服务地址
      verbose: true,
      // 地址，端口号
      host: "127.0.0.1",
      port: 8090,
      // https 协议配置
      // https: {},
      // 运行成功，事件
      onListening: function (server) {
        const address = server.address();
        const host = address.address === "::" ? "localhost" : address.address;
        // by using a bound function, we can access options as `this`
        const protocol = this.https ? "https" : "http";
        console.log(
          `Server listening at ${protocol}://${host}:${address.port}/`
        );
      },
    }),
    // PluginRun(),
  ],
});
