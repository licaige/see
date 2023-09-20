// 自定义下拉选择
import LazySelect from "./lazySelect";
// 公共组件
export default {
  install: (app, options) => {
    // 注册全局组件
    app.component("IFunLazySelect", LazySelect);
  },
};
