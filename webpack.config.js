const path = require('path');
const src = path.resolve(__dirname, 'src');
const html = path.resolve(src);
const js = path.resolve(src, 'js');
const scss = path.resolve(src, 'scss');
const publicHtml = path.resolve(__dirname, 'public');
const publicJs = path.resolve(publicHtml, 'js');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: path.resolve(js,'main.js'),
    output: {
        path: publicJs,
        filename: "bundle.js",
        publicPath: publicHtml
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                     presets: ['react','es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    sassLoader: {
        includePaths: [scss]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
};