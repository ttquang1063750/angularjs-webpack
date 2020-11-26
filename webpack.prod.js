const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngularJS & Webpack',
            template: path.resolve(__dirname, 'src/index.html'),
            baseUrl: 'https://ttquang1063750.github.io/angularjs-webpack/'
        }),
    ]
});
