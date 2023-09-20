import livereload from 'rollup-plugin-livereload'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'

const isProd = process.env.BUILD === 'production' // 稍后在命令行说明

const config = {
    external: ['lodash', 'jquery', /@babel\/runtime/],
    plugins: [
        livereload(),
        commonjs({
            sourceMap: false
        }),
        // 该插件默认排除peerDependencies中的依赖
        peerDepsExternal({
            includeDependencies: !isProd  // 开启该选项，排除dependencies
        })

    ]
}

export default config

