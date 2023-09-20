class CopyrightWebpackPlugin {
    constructor(options) {
        this.apply()
    }
    // compiler 存放了打包的所有内容, webpack实例
    apply(compiler) {
        // emit当把打包的资源放到目标文件的时刻，是个异步钩子
        // complication这次打包的内容
        compiler.hooks.emit.tapAsync((compilation, cb) => {
            complication.assets['copyright.txt'] = {
                source: function () {
                    return 'copyright by woyao'
                },
                size: function () {
                    return 19;
                }
            }
            cb()
        })
    }
}

// 然后require这个文件，最后new 这个类，放入到
// plugins: [new CopyrightWebpackPlugin({ name: 'woyao' })]
