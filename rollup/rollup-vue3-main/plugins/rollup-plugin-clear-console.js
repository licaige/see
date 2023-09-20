// rollup-plugin-clear-console
import { createFilter } from "@rollup/pluginutils";

export default function clearConsole(options = {}) {
  // filter file
  var filter = createFilter(options.include, options.exclude);
  return {
    name: "clear-console",
    resolveId(source) {
      // 编译的入口文件相对地址
    },
    load(id) {
      // 编译的入口文件绝对地址
      // console.log(this.parse);
    },
    transform(code, id) {
      /**
       * code 为加载的文件内容
       * id 为当前内容文件的路径地址，通过filter判断是否符合处理的要求
       */
      if (!filter(id)) return;
      try {
        return {
          code: code.replace(/console\.log(\w*)/gi, ""),
          map: { mappings: "" },
        };
      } catch (err) {
        var message = "An error occurred during processing";
        this.error({ message: message, id: id, cause: err });
        return null;
      }
    },
  };
}
