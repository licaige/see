# tree shaking 流程
1. 命令号: treeShake test.js
2. 解析命令行参数 -> 读取源文件内容 -> 使用acorn解析生成AST
-> 根据ast的node type进行处理
3. 缓存使用到的声明 -> 产生出新的AST -> 产生出新的代码

# 文件解释

## jsEmitter.js:

进行ast的节点处理，把ast变成javascript.
实现了函数，变量声明，函数调用的反转义

### ast statement处理:
`visitNode`: 处理单一节点
`visitNodes`: 处理多节点[Node1, Node2, ...]
`visitLiteral` 比如: 9 => '9'
`visitIdentifier` 比如: firstOp => 'firstOp'
`visitExpressionStatement`
`visitBinaryExpression` 比如: a + b
`visitVariableDeclarator` 比如: firstOp = 9
`visitVariableDeclaration` 比如: var xxxxx = xxxxx
`visitFunctionDeclaration` 比如: function add(a, b){}
`visitBlockStatement` 比如: { return a + b }
`visitCallExpression` 比如: add(a, b)
`visitReturnStatement` 比如: return a + b

## treeShaking.js
`decls`: 存储所有的函数或变量声明类型节点
`calledDecls`: 存储了代码中真正使用到的数或变量声明
`code`: 存储了其他所有没有被节点类型匹配的 AST 部分

思路：
遍历ast语法树的body以后，对有被调用的节点存储到
`calledDecls`然后遍历`calledDecls`,通过
`decls`映射得到node对应的js代码

# 使用流程
对test.js文件进行treeShaking后生成test.shaked.js
执行`node treeSHaking.js test.js`
然后就可以在test.shaked.js文件下看到结果了
