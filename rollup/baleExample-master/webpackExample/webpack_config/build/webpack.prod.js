const path = require('path')
const webpackConfig = require('./webpack.config.js')
const { merge } = require('webpack-merge')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: 'eval',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../dist')
            }]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
    }
})




