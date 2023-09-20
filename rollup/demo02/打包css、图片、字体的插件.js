// rollup.config.js

import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import url from 'rollup-plugin-url'
import sass from 'node-sass'
const isProd = process.env.BUILD === 'production' // 稍后在命令行说明
const config = {
    plugins: [
        postcss({
            extract: true,
            minimize: isProd, // 生产环境开启压缩
            extensions: ['.css', '.scss'], // 识别css和scss文件
            // 在打包过程中需要配合 node-sass 使用
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
            include: ['**/*.woff', '**/*.ttf'], // 打包字体为base64
            limit: Infinity
        }),
        image(),
        svg(),
        requireContext()
    ]
}


export default config

