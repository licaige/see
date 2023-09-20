// rollup.config.js
const config = {
    input: './src/index.js',  // 入口文件
    output: {
        name: 'index',
        file: 'dist/index.js', // 打包后的index文件
        format: 'umd',       // umd格式 可换成 iife
        globals: {
            vue: 'Vue',
            jquery: '$'
        },
        inlineDynamicImports: true
    },
    external: ['lodash', 'jquery'],  // 排除的依赖包
}
export default config

