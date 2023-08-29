# Layout 布局

-   `Layout`：布局容器，其下可嵌套 `Header`、`Aside`、`Main`、`Footer` 或 `Layout` 本身，可以放在任何父容器中。**`Layout`默认是水平布局，当包含`Header`或者`Footer`时变为垂直布局**。
-   `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
-   `Aside`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
-   `Main`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
-   `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

## 组件注册

```js
import { FLayout } from '@fesjs/fes-design';

app.use(FLayout);
```

## 代码演示

### 基础用法

--COMMON

### 嵌入效果

--EMBEDDED

### 使用边框

aside、footer、header 可以设定 `bordered`。

--BORDERED

### 绝对定位

除了`Main`组件之外其他布局组件可以使用绝对定位。如果你期望内容在固定的区域内滚动，可以使用 `fixed` 模式。

--FIXED

### 侧边栏布局

--ASIDERIGHT

### 头部布局

--TOP

### 混合布局

--MIXIN

--CODE

## Layout Props

| 属性           | 说明                                                                                                                                                                                                                            | 类型               | 默认值  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| embedded       | 使用更深的背景色展现嵌入效果                                                                                                                                                                                                    | boolean            | `false` |
| fixed          | `fixed` 模式将会把 CSS position 设为 absolute，还将 left、right、top、bottom 设为 0。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示 | boolean            | `false` |
| containerClass | 可滚动内容节点的类                                                                                                                                                                                                              | array/object/style | `-`     |
| containerStyle | 可滚动内容节点的样式                                                                                                                                                                                                            | object             | `-`     |

## Header Props

| 属性     | 说明                                                                                                                                                                                                                    | 类型    | 默认值  |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| fixed    | `fixed` 模式将会把 CSS position 设为 absolute，还将 left、right、top 设为 0。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示 | boolean | `false` |
| bordered | 是否添加边框                                                                                                                                                                                                            | boolean | `false` |
| inverted | 是否使用深色                                                                                                                                                                                                            | boolean | `false` |

## Aside Props

| 属性               | 说明                                                                                                                                                                                                                     | 类型    | 默认值  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------- |
| collapsible        | 侧边栏是否能够折叠                                                                                                                                                                                                       | boolean | `false` |
| collapsed(v-model) | 侧边栏是否折叠                                                                                                                                                                                                           | boolean | -       |
| collapsedWidth     | 侧边栏折叠后的宽度                                                                                                                                                                                                       | string  | 64px    |
| fixed              | 是否固定住侧边栏，当固定时 `position` 为 `fixed`，当`Container`区域滚动时，不会跟随滚动                                                                                                                                  | boolean | `false` |
| width              | 侧边栏宽度                                                                                                                                                                                                               | string  | 200px   |
| showTrigger        | 是否显示默认的折叠按钮                                                                                                                                                                                                   | boolean | `true`  |
| bordered           | 是否添加边框                                                                                                                                                                                                             | boolean | `false` |
| inverted           | 是否使用深色                                                                                                                                                                                                             | boolean | `false` |
| fixed              | `fixed` 模式将会把 CSS position 设为 absolute，还将 left、bottom、top 设为 0。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示 | boolean | `false` |

## Main Props

| 属性     | 说明                         | 类型    | 默认值  |
| -------- | ---------------------------- | ------- | ------- |
| embedded | 使用更深的背景色展现嵌入效果 | boolean | `false` |

## Footer Props

| 属性     | 说明                                                                                                                                                                                                                       | 类型    | 默认值  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| embedded | 使用更深的背景色展现嵌入效果                                                                                                                                                                                               | boolean | `false` |
| fixed    | `fixed` 模式将会把 CSS position 设为 absolute，还将 left、bottom、right 设为 0。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示 | boolean | `false` |
| bordered | 是否添加边框                                                                                                                                                                                                               | boolean | `false` |