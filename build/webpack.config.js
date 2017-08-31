/**
 * Created by hackywit on 2017/8/31.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname , "../src/index.js"),
    output: {
        path: path.join(__dirname , "../dist"),
        filename: "./js/[hash].js"
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        port: 5200
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname , "../src/index_template.html"),
            filename: './index.html'
        }),
        new ExtractTextPlugin("style.css")
    ]
};