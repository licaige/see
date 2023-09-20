import nodeResolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import image from '@rollup/plugin-image'
import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'


const path = require('path')
const resolveDir = dir => path.join(__dirname, dir)

const config = {
    input: 'src/index.jsx',
    output: {
        file: 'es/index.js',
        format: 'es',
        sourcemap: true
    },
    globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    external: ['react', 'react-dom'],
    plugins: [
        nodeResolve(),
        alias({
            entries: [
                { find: '@', replacement: resolveDir('src') },
            ]
        }),
        json(),
        image(),
        typescript({
            declaration: false
        }),
        commonjs(),
        postcss(),
        babel({
            exclude: '**/node_modules/**',
            babelHelpers: 'bundled'
        }),
        copy({
            targets: [
                { src: 'src/public/**/*', dest: 'es' },
            ]
        }),
        terser(),
        filesize()
    ]
}

export default config
