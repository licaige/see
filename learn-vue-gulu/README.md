# learn-vue-gulu

[![Build Status](https://travis-ci.org/ximuli/learn-vue-gulu.svg?branch=master)](https://travis-ci.org/ximuli/learn-vue-gulu)

## 介绍

这是一个学习使用 vue 造轮子的 UI 组件库。

## 注意事项

本项目仅供学习交流，请不要在生产环境中使用。

## 开始使用

1. 添加 CSS 样式

  使用本框架前，请在 CSS 中添加如下代码：

  ```css
  *,*::before,*::after { box-sizing: border-box; }
  ```
  你还需要设置默认的样式变量（后续会修改为 SCSS 变量），目前 CSS 变量的兼容性并不理想。
  ```css
  :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: #fff;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```

2. 安装 learn-vue-gulu
  ```js
  npm i --save learn-vue-gulu
  ```
3. 引入 learn-vue-gulu
```js
  import { Button, Icon, ButtonGroup } from 'learn-vue-gulu'
  import 'learn-vue-gulu/dist/index.css'
  export default {
    name: 'app',
    components: {
      'l-button': Button,
      'l-icon': Icon,
      'l-button-group': ButtonGroup
    }
  }
```





## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

