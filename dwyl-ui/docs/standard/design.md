# 设计规范

## 封装Vue组件的原则及技巧

### 单向数据流

单向数据流是Vue组件一个非常明显的特征，不应该在子组件中直接修改props的值

* 如果传递的prop仅仅用作展示，不涉及修改，则在模板中直接使用即可
* 如果需要对prop的值进行转化然后展示，则应该使用computed计算属性
* 如果prop的值用作初始化，应该定义一个子组件的data属性并将prop作为其初始值

### 组件之间的通信

* 父子组件的关系可以总结为prop 向下传递，事件event向上传递
* 祖先组件和后代组件（跨多代）的数据传递，可以使用provide和inject来实现

::: warning

此外，如果需要跨组件或者兄弟组件之间的通信，可以通过eventBus或者vuex等方式来实现。(慎重使用)
:::

### Vuex巧用但不要滥用

Vue 没有直接子对子传参的方法，建议将需要传递数据的子组件，都合并为一个组件。如果一定需要子对子传参，可以先从传到父组件，再传到子组件。
父子组件之间是通过 props 和 自定义事件来传参，非父子组件通常会采用 Vuex 传参
Vuex设计初衷是用来管理组件状态，也可以用于复杂组件的参数传递
但是 Vuex 的虽然可以用来传参，但并不推荐;因为 Vuex 类似于一个全局变量，会一直占用内存
在写入数据庞大的 state 的时候，就会产生内存泄露(人是活的，不能因为事物有弊端就不使用，合理利用即可)。

::: info
Tips:
当页面刷新的时候，Vuex 会初始化，同时也会丢失编辑过的数据
如果刷新页面时需要保留数据，可以通过 url 或者 sessionstorage 保存 id，然后 ajax 请求数据
:::

### 动态组件

Vue 还可以将多个子组件，都挂载在同一个位置，通过变量来切换组件，实现 tab 菜单这样的效果

<<<@/standard/examples/dynamicComponent.vue

### 组件具有单一职责

封装业务组件或者基础组件，如果不能给这个组件起一个有意义的名字，证明这个组件承担的职责可能不够单一，需要继续抽组件，直到它可以是一个独立的组件即可。

## 封装公共行为

公共方法统一封装到utils/index.js

* 入参简单，命名通俗易懂
* 有返回值，且执行后不影响入参的值
* 复杂参数、逻辑需注释说明

例:

<<<@/standard/examples/function.js

## 常用封装

弹窗表单封装，通常会遇到列表新增、编辑弹窗表单可使用如下方式并配合useForm方法

<<<@/standard/examples/dialogForm.vue

## 谨慎使用watch

* 在对数据进行监听的时候，当数据data进行变换，watch将进行一系列的操作，如果这些操作可能会对监听的数据data进行修改的时候，数据data将会改变，那么又将会被watch所监听到，一直重复，陷入一个死循环。
* 使用watch会导致出现bug时，不便于溯源寻找问题


