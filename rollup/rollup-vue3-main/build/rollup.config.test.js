import PluginNodeResolve from "@rollup/plugin-node-resolve";
import PluginCommonJS from "@rollup/plugin-commonjs";

/**
 * 测试config
 */
export default {
  input: "main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    name: "bundle",
  },
  plugins: [
    PluginCommonJS({
      strictRequires: "debug",
      transformMixedEsModules: true,
    }),
    PluginNodeResolve(),
  ],
};
