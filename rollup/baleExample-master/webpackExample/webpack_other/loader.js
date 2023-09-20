const loaderUtils = require('loader-utils')

// 写在 ./loaders/replaceLoader.js
module.exports = function (source) {
    const options = loaderUtils.getOptions(this)
    return source.replace('dell', this.name)
}


// webpack.config.js
/*
module: {
    rules: [{
        test: /\.js$/,
        use: [{
            loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            options: {
                name: 'lee',
            }
        }]
    }]
}
*/
