// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import { terser } from 'rollup-plugin-terser'
import path from 'path'

const config = {
    plugins: [
        resolve({
            extensions: ['.vue'], // 无后缀名引用时，需要识别 .vue 文件
            exclude: '**/node_modules/**'  // 排除node_modules
        }),
        alias({
            entries: [
                {
                    find: 'demo-lib', // 别名名称，作为依赖项目需要使用项目名
                    replacement: path.resolve(__dirname, 'src'),
                    customResolver: resolve({
                        extensions: ['.js', '.jsx', '.vue', '.sass', '.scss']
                    })
                }
            ]
        }),
        // 将不需要编译的静态文件直接复制到dist
        copy({
            targets: [
                { src: 'public/tinymce/*', dest: 'dist/tinymce' }
            ]
        }),
        vue({
            css: true,
            compileTemplate: true
        }),
        babel({  // 排除node_modules
            exclude: 'node_modules/**'
        }),
        commonjs(),
        terser()
    ]
}


export default config

