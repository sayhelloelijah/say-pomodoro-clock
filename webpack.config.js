var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './app/assets/js/app.js',
     output: {
         path: path.resolve(__dirname, 'dist/js/'),
         filename: 'app.min.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     mode: 'development'
 };