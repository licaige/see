# 按钮 Button

按钮用于触发一个操作

## 普通按钮

`type`设置按钮类型，`shape`属性为圆角按钮

<div class="component">
  <YButton>普通按钮</YButton>
  <YButton type="primary">主要按钮</YButton>
  <YButton type="success">成功按钮</YButton>
  <YButton type="warning">警告按钮</YButton>
  <YButton type="danger">危险按钮</YButton>
</div>
<div class="component">
  <YButton round>普通按钮</YButton>
  <YButton type="primary" round>主要按钮</YButton>
  <YButton type="success" round>成功按钮</YButton>
  <YButton type="warning" round>警告按钮</YButton>
  <YButton type="danger" round>危险按钮</YButton>
</div>

::: details 示例代码

```vue
<template>
  <YButton>普通按钮</YButton>
  <YButton type="primary">主要按钮</YButton>
  <YButton type="success">成功按钮</YButton>
  <YButton type="warning">警告按钮</YButton>
  <YButton type="danger">危险按钮</YButton>
  <YButton round>普通按钮</YButton>
  <YButton type="primary" round>主要按钮</YButton>
  <YButton type="success" round>成功按钮</YButton>
  <YButton type="warning" round>警告按钮</YButton>
  <YButton type="danger" round>危险按钮</YButton>
</template>
```

:::

## 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

<div class="component">
  <YButton type="primary" plain>朴素按钮</YButton>
  <YButton type="success" plain>朴素按钮</YButton>
  <YButton type="warning" plain round>朴素按钮</YButton>
  <YButton type="danger" plain round>朴素按钮</YButton>
</div>

::: details 示例代码

```vue
<template>
  <YButton type="primary" plain>朴素按钮</YButton>
  <YButton type="success" plain>朴素按钮</YButton>
  <YButton type="warning" plain round>朴素按钮</YButton>
  <YButton type="danger" plain round>朴素按钮</YButton>
</template>
```

:::

## 禁用

`disabled`属性可直接禁用按钮

<div class="component">
  <YButton disabled>普通按钮</YButton>
  <YButton type="primary" disabled>主要按钮</YButton>
  <YButton type="success" disabled>成功按钮</YButton>
  <YButton type="warning" disabled>警告按钮</YButton>
  <YButton type="danger" disabled>危险按钮</YButton>
</div>

::: details 示例代码

```vue
<template>
  <YButton disabled>普通按钮</YButton>
  <YButton type="primary" disabled>主要按钮</YButton>
  <YButton type="success" disabled>成功按钮</YButton>
  <YButton type="warning" disabled>警告按钮</YButton>
  <YButton type="danger" disabled>危险按钮</YButton>
</template>
```

:::

## 带图标

`icon`可设置图标，默认放置文字前面。内部也接受`slot`

::: details 示例代码

```vue
<template>
  <YButton icon="add">按钮</YButton>
  <YButton>
    <YIcon name="user" />
    按钮
  </YButton>
  <YButton>
    按钮
    <YIcon name="main" />
  </YButton>
</template>
```

:::

## 不同大小

`size`可设置按钮大小

<div class="component">
  <YButton size="small">普通按钮</YButton>
  <YButton type="primary" size="small">主要按钮</YButton>
  <br />
  <br />
  <YButton>普通按钮</YButton>
  <YButton type="primary">主要按钮</YButton>
  <br />
  <br />
  <YButton size="large">普通按钮</YButton>
  <YButton type="primary" size="large">主要按钮</YButton>
</div>

::: details 示例代码

```vue
<template>
  <YButton size="small">普通按钮</YButton>
  <YButton type="primary" size="small">主要按钮</YButton>
  <br />
  <br />
  <YButton>普通按钮</YButton>
  <YButton type="primary">主要按钮</YButton>
  <br />
  <br />
  <YButton size="large">普通按钮</YButton>
  <YButton type="primary" size="large">主要按钮</YButton>
</template>
```

:::

## 加载中按钮

<YButton loading>加载中</YButton>
<YButton type="primary" loading>请稍后</YButton>

::: details 示例代码

```vue
<template>
  <YButton loading>加载中</YButton>
  <YButton type="primary" loading>请稍后</YButton>
</template>
```

:::

## Props

| 参数    |    说明    |  类型   |                 可选值                 |    默认值 |
| ------- | :--------: | :-----: | :------------------------------------: | --------: |
| type    |  按钮类型  | string  | `primary` `warning` `success` `danger` |         - |
| round   |  圆形按钮  | boolean |               `Boolean`                |   `false` |
| plain   |  朴素按钮  | boolean |               `Boolean`                |   `false` |
| size    |  按钮大小  | string  |       `small` `default` `large`        | `default` |
| loading | 是否加载中 | boolean |               `Boolean`                |   `false` |

## Events

| 参数  |    说明    |     返回参数      | 默认值 |
| ----- | :--------: | :---------------: | -----: |
| click | click 事件 | `(): Event => {}` |      - |

<style>
.component{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
