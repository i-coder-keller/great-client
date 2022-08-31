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
        hints: false
    },
    devServer: {
        port: 3000,
        compress: true,
        open: true,
        historyApiFallback: true,
        client: {
            logging: 'error',
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        watchFiles: ['src/**/*.vue', 'public/**/*', 'src/**/*.ts'],
        hot: true,
    }
})
