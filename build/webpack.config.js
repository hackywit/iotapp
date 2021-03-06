/**
 * Created by hackywit on 2017/8/31.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, "../src/index.jsx"),
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "./js/[hash].js"
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        port: 5200
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../src/index_template.html"),
            filename: './index.html'
        }),
        new ExtractTextPlugin("style.css")
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};