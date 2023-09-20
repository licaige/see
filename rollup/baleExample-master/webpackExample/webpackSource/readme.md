# 流程
入口entry -> 递归解析AST获取依赖 -> 生成依赖图
-> 为每个模块包裹factory function -> 以入口脚本为起点，递归执行模块 -> 拼接IIFE -> 产出bundle

* iife立即调用函数的样子可以看iife.js文件

# 实现打包器
1. 读取入口文件（比如entry.js）；
2. 基于 AST 分析入口文件，并产出依赖列表；
3. 使用 Babel 将相关模块编译到 ES5；
4. 对每个依赖模块产出一个唯一的 ID，方便后续读取模块相关内容；
5. 将每个依赖以及经过 Babel 编译过后的内容，存储在一个对象中进行维护；
6. 遍历上一步中的对象，构建出一个依赖图（Dependency Graph）；将各模块内容 bundle 产出。

## 需要以下插件
* @babel/parser用于分析源代码，产出 AST；
* @babel/traverse用于遍历 AST，找到 import 声明；
* @babel/core用于编译，将源代码编译为 ES5；
* @babel/preset-env搭配@babel/core使用；
* resolve用于获取依赖的绝对路径。
