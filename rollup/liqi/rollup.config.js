import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
export default {
    input:'./src/main.js',//入口文件
    output:{
        file:'dist/bundle.js', // 输出文件
        format: 'cjs',  //五种输出格式：amd   es6  iife umd cjs
        name:'bundleName',  //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
        sourcemap:true  //生成bundle.map.js文件，方便调试
    },
    plugins: [
        commonjs(),
        resolve(),
        typescript(),
        babel({
            exclude: 'node_modules/**'
        }),
        terser(),
        postcss(),
        livereload(),
        serve({
            open: true,
            contentBase: 'dist'
        })
    ],
    external:['lodash'], //告诉rollup不要将此lodash打包，而作为外部依赖
    global:{
        'jquery':'$' //告诉rollup 全局变量$即是jquery
    }
}
