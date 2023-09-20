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
        vue({}),
        babel({
            exclude: 'node_modules/**',
            presets: ['@vue/babel-preset-jsx'],
            // bundled-需要显示指明babelHelpers 配置， 没配置，控制台有一些warning
            babelHelpers: 'bundled',
            // 5.2.1 是可以不用配置  extensions
            // 5.2.2 以后 需要将 vue配置进去
            // extensions:['.js', '.jsx', '.es6', '.es', '.mjs','.vue'],
        }),
        // 需要处理vue中的css
        postcss()
    ],
    external: [
        "Vue"
    ]
})
