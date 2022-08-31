const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = merge(baseConfig, {
    mode: 'production',
    performance: {
        hints: false
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        }
    },
    plugins: [
        new CompressionPlugin()
    ]
})
