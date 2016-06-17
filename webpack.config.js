var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, "dist/js"),
        publicPath: "/assets/",
        filename: "app.bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            title: 'One More Redux Application',
            hash: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot-loader/webpack'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        inline: true,
        port: 3000
    }
};
