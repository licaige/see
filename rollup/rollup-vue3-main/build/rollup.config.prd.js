// rollup.config.prd.js prd
import PluginTerser from "@rollup/plugin-terser";

// plugin
import PluginHtml from "@rollup/plugin-html";

// config
import RollupConfigBase from "./rollup.config.base";
import { mergeDeep } from "../libs/merge";

export default mergeDeep({}, RollupConfigBase, {
  plugins: [
    PluginTerser(),
    PluginHtml({
      title: "rollup-vue3",
      fileName: "index.html",
      // template: ({ attributes, bundle, files, publicPath, title }) => {
      //   console.log(bundle);
      //   return "";
      // },
    }),
  ],
});
