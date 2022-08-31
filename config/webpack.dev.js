const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: `js/[name].[contenthash:8].js`,
        path: path.resolve(__dirname,  '../dist'),
        publicPath: '/'
    },
    performance: {
        hints: 'warning'
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: {
            rewrites: [{ from: /./, to: '/index.html' }]
        },
        watchFiles: {
            paths: ['src/*', 'index.html']
        },
    }
})
