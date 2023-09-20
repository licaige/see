const fs = require("fs");
const path = require("path");
// 用于分析源代码，产出 AST
const parser = require("@babel/parser");
// 用于遍历 AST，找到 import 声明
const traverse = require("@babel/traverse").default;
// 用于编译，将源代码编译为 ES5
const babel = require("@babel/core");
// 用于获取依赖的绝对路径
const resolve = require("resolve").sync;

/**
 * 维护一个全局 ID，并通过遍历 AST
 * 访问ImportDeclaration节点,收集依赖到deps数组中，
 * 同时完成 Babel 降级编译
 */

let ID = 0
const log = console.log.bind(console)

/**
 * 实现了查找一个文件的所有依赖
 * 返回文件的路径，文件的所有引用依赖，文件的esm代码， 模块对应 ID
 */
function createModuleInfo(filePath) {
    const content = fs.readFileSync(filePath, 'utf8')
    const ast = parser.parse(content, { sourceType: "module" })
    const deps = []

    traverse(ast, {
        ImportDeclaration: ({ node }) => {
            deps.push(node.source.value)
        }
    })

    const id = ID++

    // 编译成esm5
    const { code } = babel.transformFromAstSync(ast, null, {
        presets: ["@babel/preset-env"]
    })

    return {
        id,
        filePath,
        deps,
        code
    }
}

// log(createModuleInfo(path.resolve(__dirname, './test/app.js')))
/**
 * 对entry入口依赖进行遍历，对每个deps进行依赖信息生成
 * 注意: 这里不支持循环引用,否则死递归
 * 最后生成依赖图
 */
function createDependencyGraph(entry) {
    const entryInfo = createModuleInfo(entry)
    const graphArr = []
    graphArr.push(entryInfo)

    // 以入口模块为起点，遍历整个项目依赖的模块，并将每个模块信息维护到 graphArr 中
    for (const module of graphArr) {
        module.map = {}
        module.deps.forEach(depPath => {
            const baseDir = path.dirname(module.filePath)
            const moduleDepPath = path.resolve(baseDir, depPath)
            const moduleInfo = createModuleInfo(moduleDepPath)
            graphArr.push(moduleInfo)
            module.map[depPath] = moduleInfo.id
        })
    }

    return graphArr
}

// log(createDependencyGraph(path.resolve(__dirname, './test/app.js')))
/**
 * 使用 IIFE 的方式，来保证模块变量不会影响到全局作用域
 * 构造好的项目依赖树（Dependency Graph）数组，将会作为名为modules的行参，传递给 IIFE
 * 通过require(map[requireDeclarationName])方式，按顺序递归调用各个依赖模块
 * 通过调用factory(module.exports, localRequire)执行模块相关代码
 * 该方法最终返回module.exports对象，module.exports 最初值为空对象（{exports: {}}）
 * 但在一次次调用factory()函数后，module.exports对象内容已经包含了模块对外暴露的内容了
 */
function pack(graph) {
    const moduleArgArr = graph.map(module => {
        return `${module.id}: {
            factory: (exports, require) => {
                ${module.code}
            },
            map: ${JSON.stringify(module.map)}
        }`
    })

    const iifeBundler = `(function(modules){
        const require = id => {
            const {factory, map} = modules[id];
            const localRequire = requireDeclarationName => require(map[requireDeclarationName]);
            const module = {exports: {}};
            factory(module.exports, localRequire);
            return module.exports;
        }
        require(0)

        })({${moduleArgArr.join()}})
    `
    return iifeBundler;
}


eval(pack(createDependencyGraph(path.resolve(__dirname, './test/app.js'))))
