---
sidebarDepth: 1
---

# soul-plus

> 请勿使用版本号小于 `1.0.0` 的版本。该组件库正处于开发阶段，欢迎有志之士加入，更多信息请提 issues。

Mobile UI Components built on Vue3

[![visitors](https://visitor-badge.laobi.icu/badge?page_id=jsdawn.soul-plus)](https://gitee.com/jsdawn/soul-plus.git)
[![npm](https://img.shields.io/npm/dt/soul-plus?label=soul-plus&logo=npm)](https://www.npmjs.com/package/soul-plus)

## 开发

```bash
# 新建分支

# 初始化
yarn install

# 启动
yarn run dev

# 打包
yarn run build

# 本地预览包内容
yarn run serve

# 打包组件库
yarn run lib
```

## 使用 soul-plus

### 安装

```bash
yarn add soul-plus
```

### 完整引入

```js
# main.js

import { createApp } from 'vue'

import SoulPlus from 'soul-plus';
import 'soul-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(SoulPlus)
```

### 按需引入

**Vue CLI**

借助 babel-plugin-import，我们可以只引入需要的组件，以达到减小项目体积的目的，首先安装 `babel-plugin-import`。

```bash
yarn add babel-plugin-import -D
```

然后，在 `babel.config.js` 中配置

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'soul-plus',
        libraryDirectory: 'lib',
        customStyleName: name => {
          return `soul-plus/lib/theme-chalk/${name}.css`;
        }
      },
      'soul-plus'
    ]
  ]
};
```

**Vite**

首先，安装 `vite-plugin-style-import`:

```bash
yarn add vite-plugin-style-import -D
```

然后，在 `vite.config.js` 中配置

```js
import styleImport from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'soul-plus',
          ensureStyleFile: true,
          resolveStyle: name => {
            return `soul-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: name => {
            return `soul-plus/es/${name}`;
          }
        }
      ]
    }),
    ...
  ]
})
```

**单文件组件中使用**

```js
import { SoButton } from 'soul-plus';

export default {
  components: { SoButton }
};
```

这段代码在生产环境将被解析为

- `import SoButton from 'soul-plus/es/so-button'`
- `import 'soul-plus/lib/theme-chalk/so-button.css'`
