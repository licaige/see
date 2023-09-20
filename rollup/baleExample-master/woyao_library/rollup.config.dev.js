import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import server from 'rollup-plugin-server'
import livereload from 'rollup-plugin-livereload'
import json from '@rollup/plugin-json'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'


const path = require('path')
const resolveDir = dir => path.join(__dirname, dir)

const config = {
    input: 'src/test.js',
    output: {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        nodeResolve(),
        json(),
        image(),
        typescript({
            declaration: false
        }),
        babel({
            exclude: '**/node_modules/**',
        }),
        postcss(),
        alias({
            entries: [
                { find: '@', replacement: resolveDir('src') },
            ]
        }),
        commonjs(),
        livereload(),
        server({
            open: true,
            port: 8000,
            contentBase: 'es'
        })
    ]
}

export default config
