const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngularJS & Webpack',
            template: path.resolve(__dirname, 'src/index.html'),
            baseUrl: '/'
        }),
    ],
    output: {
        publicPath: '/',
    },
});
