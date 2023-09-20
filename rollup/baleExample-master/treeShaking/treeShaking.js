const acorn = require("acorn")

const l = console.log

const JSEmitter = require('./jsEmitter.js')

const fs = require('fs')

// 获取命令行参数

const args = process.argv[2]

const buffer = fs.readFileSync(args).toString()

const body = acorn.parse(buffer).body

const jsEmitter = new JSEmitter()

l('before tree shakinng:\n', jsEmitter.run(body), '\r\n')

// 存储所有的函数或变量声明类型节点
let decls = new Map()

// 则存储了代码中真正使用到的数或变量声明
let calledDecls = []

// 存储了其他所有没有被节点类型匹配的 AST 部分
let code = []

// 遍历处理ast, ast的结构可以通过https://astexplorer.net/查看

body.forEach(function (node) {

    if (node.type == "FunctionDeclaration") {
        const code = jsEmitter.run([node])
        decls.set(jsEmitter.visitNode(node.id), code)
        return
    }

    if (node.type == "VariableDeclaration") {
        const kind = node.kind
        for (const decl of node.declarations) {
            decls.set(jsEmitter.visitNode(decl.id), jsEmitter.visitVariableDeclarator(decl, kind))
        }
        return
    }

    if (node.type == "Identifier") {
        calledDecls.push(node.name)
    }

    if (node.type == "ExpressionStatement") {
        if (node.expression.type == "CallExpression") {
            const callNode = node.expression
            calledDecls.push(jsEmitter.visitIdentifier(callNode.callee))
            const args = callNode.arguments
            for (const arg of args) {
                if (arg.type == "Identifier") {
                    calledDecls.push(jsEmitter.visitNode(arg))
                }
            }
        }
    }

    code.push(jsEmitter.run([node]))
})

l('decls', decls)
l('calledDecls', calledDecls)

// 生成 code
code = calledDecls.map(c => {
    return decls.get(c)
}).concat([code]).join('')

l('code', code)

fs.writeFileSync('test.shaked.js', code)
