const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const WebpackBar = require('webpackbar')
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[hash:8].js',
        publicPath: '/',
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                type: 'asset',
                generator: {
                    filename: 'img/[name].[contenthash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            { test: /\.(jpe?g|svg|png)$/, type: 'asset', generator: { filename: 'static/img/[name].[hash:6][ext]' }, parser: { dataUrlCondition: { maxSize: 10 * 1024 } } },
            { test: /\.(tff|woff|ttf)$/, type: "asset", generator: { filename: "static/fonts/[name].[hash:6][ext]", }, parser: { dataUrlCondition: { maxSize: 8 * 1024, }, }, },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{loader: 'ts-loader', options: { transpileOnly: true, logInfoToStdOut: true, logLevel: 'error'}}]
            },
            {
                test: /\.(js|jsx)&/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=babel']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '',
            template: resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
        }),
        new EslintWebpackPlugin({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            fix: true,
            failOnError: true,
            emitError: true,
            quiet: true,
        }),
        new HappyPack({
            id: 'babel',
            use: ['babel-loader']
        }),
        new ForkTsCheckerWebpackPlugin(),
        new WebpackBar()
    ]
}
