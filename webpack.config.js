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