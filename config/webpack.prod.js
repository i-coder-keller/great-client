const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'production',
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      minSize: 500000,
      cacheGroups: {
        vendors: false,
      }
    }
  },
  plugins: [
    new CompressionPlugin()
  ]
})
