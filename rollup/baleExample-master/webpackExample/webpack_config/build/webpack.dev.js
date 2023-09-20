const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const { merge } = require('webpack-merge')

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
        hot: true,
        // hotOnly: true,
        contentBase: './dist',
        open: true,
        // proxy: {
        //     '/react/api': {
        //         target: 'https://www.dell.com',
        //         pathRewrite: {
        //             'header.json': 'demo.json'
        //         },
        //         secure: false // https的支持
        //     }
        // }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})


