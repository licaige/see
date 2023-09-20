// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import alias from '@rollup/plugin-alias'
import requireContext from 'rollup-plugin-require-context'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import url from 'rollup-plugin-url'
import path from 'path'
import sass from 'node-sass'
import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'
import copy from 'rollup-plugin-copy'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const isProd = process.env.BUILD === 'production'

const config = {
    input: './src/index.js',
    external: ['lodash', 'jquery', /@babel\/runtime/],
    output: {
        name: 'index',
        file: 'dist/index.js',
        format: 'umd',
        globals: {
            vue: 'Vue',
            jquery: '$'
        },
        inlineDynamicImports: true
    },
    plugins: [
        resolve({
            extensions: ['.vue'],
            exclude: '**/node_modules/**'
        }),
        alias({
            entries: [
                {
                    find: 'demo-lib',
                    replacement: path.resolve(__dirname, 'src'),
                    customResolver: resolve({
                        extensions: ['.js', '.jsx', '.vue', '.sass', '.scss']
                    })
                }
            ]
        }),
        copy({
            targets: [
                { src: 'public/tinymce/*', dest: 'dist/tinymce' }
            ]
        }),
        vue({
            css: true,
            compileTemplate: true
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        postcss({
            extract: true,
            minimize: isProd,
            extensions: ['.css', '.scss'],
            process: function(context, payload) {
                return new Promise((resolve, reject) => {
                    sass.render({
                        file: context
                    }, function(err, result) {
                        if (!err) {
                            resolve(result)
                        } else {
                            reject(err)
                        }
                    })
                })
            }

        }),
        url({
            include: ['**/*.woff', '**/*.ttf'],
            limit: Infinity
        }),
        commonjs({
            sourceMap: false
        }),
        image(),
        svg(),
        requireContext(),
        terser(),
        peerDepsExternal({
            includeDependencies: !isProductionEnv
        })
    ]
}

if (!isProd) {
    config.plugins.push(livereload())
}

export default config

