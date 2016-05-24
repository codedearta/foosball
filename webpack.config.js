const path = require('path');
const publicBuild = path.resolve(__dirname, 'public');
const publicJs = path.resolve(publicBuild, 'js');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/js/routes.jsx',
    output: {
        path: publicJs,
        filename: "bundle.js",
        publicPath: "public/js"
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$/,
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
              test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
              loaders: [
                'transform-loader/cacheable?brfs',
                'transform-loader/cacheable?packageify'
              ]
            }, {
              test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
              loader: 'transform-loader/cacheable?ejsify'
            }, {
              test: /\.json$/,
              loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
};