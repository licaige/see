// rollup.config.dev.js dev
import PluginPeerDepsExternal from "rollup-plugin-peer-deps-external";
import PluginJson from "@rollup/plugin-json";
import PluginVue from "rollup-plugin-vue";
import PluginNodeResolve from "@rollup/plugin-node-resolve";
import PluginCommonJS from "@rollup/plugin-commonjs";
import PluginReplace from "@rollup/plugin-replace";
import PluginAlias from "@rollup/plugin-alias";
// import PluginUrl from "@rollup/plugin-url";
import PluginImage from "@rollup/plugin-image";
// import PluginSucrase from "@rollup/plugin-sucrase";
import PluginBabel from "@rollup/plugin-babel";
// import PluginInject from "@rollup/plugin-inject";

// css 处理插件
// import PluginCss from "rollup-plugin-css-only";
import PluginPostCss from "rollup-plugin-postcss";

export default {
  input: "./src/index.js",
  output: {
    // file: "dist/bundle.js",
    format: "es",
    dir: "dist",
    assetFileNames: "assets/[name]-[hash][extname]",
  },
  plugins: [
    PluginPeerDepsExternal(),

    // PluginInject({
    //   React: "React",
    // }),
    /**
     * jpg,png,gif,svg,webp
     */
    PluginImage(),
    PluginAlias({
      entries: {
        "@": "src",
        libs: "libs",
      },
    }),
    PluginNodeResolve({
      browser: true,
      extensions: [".js", ".ts", ".jsx"],
    }),

    PluginVue({
      preprocessStyles: true,
    }),

    PluginBabel({ babelHelpers: "bundled" }),
    PluginCommonJS(),
    PluginJson(),
    PluginReplace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),

    // PluginCss(),
    PluginPostCss(),
  ],
};
