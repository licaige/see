# 快速上手

## 安装

::: code-group

```bash [pnpm]
pnpm add y-design-ui
```

```bash [yarn]
yarn add y-design-ui
```

```bash [npm]
npm install y-design-ui
```

:::

## 引入

```js{4,5,6,8,9,10}
import { createApp } from 'vue'
import App from './app.vue'

// 全部引入
import ydesign from 'y-design-ui'
createApp(App).use(ydesign).mount('#app')

// 按需导入
import { YButton } from 'y-design-ui'
app.use(YButton)
```

## 使用

```html
<Ybutton>按 钮</Ybutton>
```
