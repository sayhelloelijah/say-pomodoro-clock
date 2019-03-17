const webpack = require('webpack');
const path = require('path');
const presetsEnv = require('babel-preset-env');

module.exports = {

    mode: 'development',

    entry: './app/assets/js/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js',
    },

    module: {
        rules: [{
            test: /\.js$/,
            // loader: 'babel-loader',
            // query: {
            //     presets: ['babel-preset-env'],
            // },
        }],
    },

    stats: {
        colors: true,
    },

    devtool: 'source-map',

};
