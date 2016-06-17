'use strict';

var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    devtool: 'source-maps',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.bundle.js'
    },
    resolveLoader: {
        root: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            title: 'One More Redux Application',
            hash: true
        }),
        devFlagPlugin
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            loader: 'react-hot-loader/webpack',
        }, {
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            include: './assets/',
            loader: 'style!css!autoprefixer?browsers=last 3 version!less',
            exclude: /node_modules/
        }]
    }
};
