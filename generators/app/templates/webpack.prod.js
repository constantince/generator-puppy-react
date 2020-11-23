'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const TerserWebpackPlugin = require('terser-webpack-plugin');

const proConfig = {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name]_[contenthash:8].css`
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /react(-dom)?/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        minimize: true,
        minimizer: [new TerserWebpackPlugin()]
    }
}

module.exports = merge(baseConfig, proConfig);