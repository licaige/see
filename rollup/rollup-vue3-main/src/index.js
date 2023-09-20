import { createApp } from "vue";

import App from "./App.vue";
import "./assets/css/index.less";
import Components from "@/components/index.js";
import Store from "@/store/index.js";
import Router from "@/router/index.js";
import Api from "@/Api/index.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

// 1. 实例出啊过年就爱你
const app = createApp(App);
// 2. 全局属性设置
app.config.globalProperties.$http = Api;
// 3. 编译配置项
app.config.compilerOptions.whitespace = "preserve";

// 注册插件
app.use(Components);
app.use(Store);
app.use(Router);
app.use(ElementPlus, { size: "small", zIndex: 3000, locale: zhCn });

app.mount("#app");
