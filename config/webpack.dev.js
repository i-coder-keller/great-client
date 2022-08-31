const baseConfig = require('webpack.base')
const { merge } = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    performance: {
        hints: 'waring'
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        watchContentBase: true,
        publicPath: '/',
        compress: true,
        historyApiFallback: true,
        hot: true,
        clientLogLevel: 'error',
        watchOptions: {
            ignored: /node_modules/,
        },
    }
})
