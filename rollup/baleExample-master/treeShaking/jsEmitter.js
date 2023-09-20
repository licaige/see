// 对ast进行处理，ast的结构见parse.json
// ast 准成 js

class JSEmitter {
    // 变量声明 var
    visitVariableDeclaration(node) {
        let str = ''
        str += node.kind + ' '
        // 递归处理子节点
        str += this.visitNodes(node.declarations)
        return str + '\n'
    }
    // 变量声明语句 firstOp = 9
    visitVariableDeclarator(node, kind) {
        let str = ''
        str += kind ? kind + ' ' : str
        str += this.visitNode(node.id)
        str += '='
        str += this.visitNode(node.init)
        return str + ';' + '\n'
    }

    // 定义 firstOp
    visitIdentifier(node) {
        return node.name
    }

    // 数值 9
    visitLiteral(node) {
        return node.raw
    }

    // 表达式 a + b
    visitBinaryExpression(node) {
        let str = ''
        str += this.visitNode(node.left)
        str += node.operator
        str += this.visitNode(node.right)
        return str + '\n'
    }

    // function add(a, b)
    visitFunctionDeclaration(node) {
        let str = 'function '
        str += this.visitNode(node.id)
        str += '('
        for (let param = 0; param < node.params.length; param++) {
            str += this.visitNode(node.params[param])
            str += ((node.params[param] == undefined) ? '' : ',')
        }
        str = str.slice(0, str.length - 1)
        str += '){'
        str += this.visitNode(node.body)
        str += '}'
        return str + '\n'
    }

    // 处理花括号 { return a + b }
    visitBlockStatement(node) {
        let str = ''
        str += this.visitNodes(node.body)
        return str
    }

    // 处理函数调用 add(a, b)
    visitCallExpression(node) {
        let str = ''
        const callee = this.visitIdentifier(node.callee)
        str += callee + '('
        for (const arg of node.arguments) {
            str += this.visitNode(arg) + ','
        }
        str = str.slice(0, str.length - 1)
        str += ');'
        return str + '\n'
    }

    // 处理返回语句 return a + b
    visitReturnStatement(node) {
        let str = 'return ';
        str += this.visitNode(node.argument)
        return str + '\n'
    }

    // 处理嵌套token
    visitNodes(nodes) {
        let str = ''
        for (const node of nodes) {
            str += this.visitNode(node)
        }
        return str
    }

    // 表达式
    visitExpressionStatement(node) {
        return this.visitNode(node.expression)
    }

    // 处理单个token
    visitNode(node) {
        let str = ''
        switch (node.type) {
            case 'VariableDeclaration':
                str += this.visitVariableDeclaration(node)
                break;
            case 'VariableDeclarator':
                str += this.visitVariableDeclarator(node)
                break;
            case 'Literal':
                str += this.visitLiteral(node)
                break;
            case 'Identifier':
                str += this.visitIdentifier(node)
                break;
            case 'BinaryExpression':
                str += this.visitBinaryExpression(node)
                break;
            case 'FunctionDeclaration':
                str += this.visitFunctionDeclaration(node)
                break;
            case 'BlockStatement':
                str += this.visitBlockStatement(node)
                break;
            case "CallExpression":
                str += this.visitCallExpression(node)
                break;
            case "ReturnStatement":
                str += this.visitReturnStatement(node)
                break;
            case "ExpressionStatement":
                str += this.visitExpressionStatement(node)
                break;
        }
        return str
    }

    run(body) {
        let str = ''
        str += this.visitNodes(body)
        return str
    }
}

module.exports = JSEmitter
