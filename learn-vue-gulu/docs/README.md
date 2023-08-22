# Vue UI 组件库

作者： 乐亦栗

## 简介

这是乐亦栗在学习 Vue 的过程中开发的一个 UI 框架，后续会不断的更新迭代原有的代码及组件，逐渐完善这个项目。

- 该框架参考了 Element、AntDesign 的 UI 界面及 API 设计
- 使用VuePress 搭建 UI 框架官网
- 目前共计 8 个 UI 组件：Button、Input、Grid、Layout、Collapse、Popover、Toast、Tabs、Nav。
- 使用 vue-test-utils 写单元测试，由于时间有限后期会慢慢完成所有组件的单元测试代码
- 使用了 Travis CI 持续集成


## 使用的技术

- Vue.js技术栈，包括但不限于：指令及自定义指令、计算属性、class动态绑定、条件渲染、列表渲染、事件监听处理、组件注册、props及校验、插槽、动画过渡、过滤器、多种组件通信方式等
- 设计模式：单向数据流、测试驱动开发、发布订阅模式、API正交（props）、可测试代码（在标签加入特殊的属性，方便测试的时候可以找到）
- 单元测试、覆盖率、持续集成
- 测试库：Chai、Karma、Sinon、Vue-test-utils、Travis CI 

## License

- MIT