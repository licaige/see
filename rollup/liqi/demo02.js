
import { defineConfig } from 'rollup'
import vue from 'rollup-plugin-vue'
import { cleandir } from 'rollup-plugin-cleandir'
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'

export default defineConfig({
    input: './src/index.js',
    output: [
        {
            file: 'lib/index.esm.js',
            format: 'esm',
            exports: 'named'
        },
        {
            file: 'lib/index.umd.js',
            format: 'umd',
            name: 'w'
        }
    ],
    plugins: [
        cleandir('lib'),
        vue({
        }),
        babel({
            // @rollup/plugin-babel 6.0.3 如果使用 filter 就注释掉 exclude - 互斥的
            // exclude: 'node_modules/**',
            presets: ['@vue/babel-preset-jsx'],
            // 需要显示指明babelHelpers 配置， 没配置，控制台有一些warning
            babelHelpers: 'bundled',
            // 5.2.1 是不需要配置 extensions 的
            // 5.2.2 以后 需要将 vue配置进去
            extensions:['.js', '.jsx', '.es6', '.es', '.mjs','.vue'],
            // filter @rollup/plugin-babel 在 5.3.0 版本才有
            // filter配置和 exclude 配置是互斥的，需要自己去实现去掉 node_modules的过滤
            filter: id=>{
                return /(\.js|\.jsx|\.es6|\.es|\.mjs)$/.test(id) && !/node_modules/.test(id)
            }
        }),

        // 处理 vue中的 css
        postcss()
    ],
    external: [
        "Vue"
    ]
})
