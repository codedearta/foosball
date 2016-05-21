const path = require('path');
const src = path.resolve(__dirname, 'src');
const js = path.resolve(src, 'js');
const scss = path.resolve(src, 'scss');
const publicBuild = path.resolve(__dirname, 'public');
const publicJs = path.resolve(publicBuild, 'js');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/js/main.jsx',
    output: {
        path: publicJs,
        filename: "bundle.js",
        publicPath: "public/js"
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