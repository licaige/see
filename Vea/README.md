# Vea

[![Build Status](https://www.travis-ci.org/gmYuan/Vea.svg?branch=master)](https://www.travis-ci.org/gmYuan/Vea)


## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架。


## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS中设置盒模型为 border-box

```css
  *, *::before, *::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式

还需设置默认颜色等变量（后续会改为 SCSS 变量）

```css
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;

  --border-color: #999;
  --border-radius: 4px;
  --color: #333;

  --border-color-hover: #666;
  --button-active-bg: #eee;
}
 ```

IE 15 及以上浏览器都支持此样式

2. 安装 veagmyuan

```js
  npm i --save veagmyuan
```

3. 引入 veagmyuan

```js
import {Button, ButtonGroup, Icon} from 'veagmyuan'
import 'veagmyuan/dist/index.css'
export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```

## 组件文档

1 Button组件

1. 支持一般状态、hover状态、active状态、focus状态 样式设置:  使用 CSS/SCSS变量来 统一管理

2. (1) button支持图标显示: svg的引入和使用;

    (2) slot: 父->子组件传递HTML内容; props: 父->子组件传递值

3. 图标支持左右位置设置: props的icon-position变量 + :class + flex:order属性

4. button组件的icon支持 点击显示loading状态

5. button支持按钮组组件: (1) 边框重合问题解决: 负值margin-left + :not(:first-child)

    (2) 限制按钮组slot类型: this.$el.children获取DOM元素


2 Input组件

1. 支持一般状态、hover状态、focus状态、disabled状态、、error状态  显示不同样式

2. 支持Input文本内容传入: props

3. 支持错误信息和图标 传入显示: props + v-if + :class设置样式

4. 支持 监听Input的事件: change、input、 focus、 blur: $emit()


3 网格组件

1. span跨度实现: props + :class + scss的for循环

2. offset间距实现: 同上

3. gutter实现: row设置 padding + col设置负margin + 父组件设置子组件变量值- this.$children遍历

4. 支持 简单的响应式: col组件的Props(检测) + :class设置CSS类 + @media()媒体查询


4 layout组件

1. 上中下布局: flex + flex-direction

2. 上- 左右- 下布局: this.$children + vm.$options.name + :class类名 => 有sider时更高flex-direction

3. 左- 上中下布局: 同上 + layout组件设置: flex-grow: 1


5 Toast组件

1. 基本使用方法 this.$toast('xxxx'):

  (1) Vue插件MyPlugin.install +  Vue.use;

  (2) Vue.extend全局API + vm.$solots.default实例属性 + vm.$mount()实例方法

2. 支持toast默认 5s后自动关闭: setTimeout + vm.$el.remove() + vm.$destory()

3.1 支持 toast关闭按钮的 内容文本 自定义: props- closeButton对象 + propsData + vm.closeButton

3.2 支持 toast关闭按钮点击后 执行传入的回调函数: 同上


4. 支持 toast的传入文本内容可以是富文本: props- enableHtml + v-if & slot + v-html & vm.slots.default[0]

5. 支持toast显示在页面的位置为 top/bottom/middle:  fixed定位 + :class + valiadtor()传入值检测

6. 支持toast个数覆盖显示: vm.close() + currentToast标识符

7. 支持 toast显示动画: 父子div + transform + animate


6 Tabs组件

1. 为了便于给tabs的nav和pane添加背景色等样式, 所以tabs组件使用结构为

tabs
  -- tabs-head
    -- tabs-item

  -- tabs-body
    -- tabs-pane

2. 支持给自定义tabs组件新增类名以 增加背景色等: 直接在e-tabs-head标签上 新增类名即可;

3. 支持头部右侧设置 按钮等内容: e-tabs-head组件内部 `<slot name="actions"></slot> + slot`


4. 支持头部 禁用样式: tabs-item组件内部props: disabled

5. 支持tab内容切换: 子->父->爷->兄弟->孙的 多方向的通信: `eventBus + provide/inject`

6. 支持tab切换时的 下划线切换: 发布时传出当前e-tabs-item组件实例 + 获取div的CSS相关信息;


7 popover组件

1. 支持点击按钮，popover内容的切换和隐藏: v-if + 点击事件

2. 支持点击文档空白部分隐藏内容:

  阻止整个popover部分冒泡 + document.addEventListener + document.removeEventListener

3. 支持点击popover内容部分不隐藏: 阻止popover内容部分的 点击冒泡事件

4. 避免popover内容部分 受外层容器overflow:hidden的影响:

  content的refs + document.body.appendChild + tragger的refs ==> 获取元素位置 + scrollTop值


5. 避免在组件内部使用阻止冒泡，否则会让使用者最外层点击事件失效

S1 通过事件对象 e.target + Node1.contains(node2)来判断 点击内容是 tragger/content/document部分

S2 只有是tragger部分被点击时，才切换 content部分的显示/隐藏

S3 显示content部分时: JS设置位置 + document监听点击事件以 实现点击空白部分隐藏内容

S4 隐藏content部分时: 去除 document的事件监听

6. 支持popover显示方向为 上下左右: props + :class + CSS样式调整 => 对if..else用 表结构进行优化

7. 支持click和hover两种触发事件: props + refs用addEventListener监听不同类型事件 + 手动销毁

8. 支持插槽内容 调用组件内的close方法: 插槽prop



8 collapse组件

1. 支持手风琴折叠模式: eventBus

S1 点击title时，根据当前内容的 显示/隐藏状态, collapse-item发布 show/close 事件;

S2 collapse根据 show/close事件， 对应push/splice传出的 当前ID值 + 发布update事件

S3 collapse-item根据 传入的显示值Id， 显示对应的 组件内容



## 测试

## 提问

## 变更记录

## 联系方式

## 贡献代码