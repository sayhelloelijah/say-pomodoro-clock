const webpack = require('webpack');
const path = require('path');
const presetsEnv = require('babel-preset-env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [{

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

},
{
    mode: 'development',

    entry: './app/assets/sass/app.scss',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'manifest.js',
    },

    module:{
        rules: [
            {
                test: /\.(sa|sc)ss$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },

    stats: {
        colors: true,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/app.css',
        }),
    ],

    devtool: 'source-map',
}];




// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const postcssPresetEnv = require("postcss-preset-env");
// // We are getting 'process.env.NODE_ENV' from the NPM scripts
// // Remember the 'dev' script?
// const devMode = process.env.NODE_ENV !== "production";
// module.exports = {
//   // Tells Webpack which built-in optimizations to use
//   // If you leave this out, Webpack will default to 'production'
//   mode: devMode ? "development" : "production",
// // Webpack needs to know where to start the bundling process,
//   // so we define the Sass file under './Styles' directory
//   entry: ["./Styles/site.scss"],
// // This is where we define the path where Webpack will place
//   // a bundled JS file. Webpack needs to produce this file,
//   // but for our purposes you can ignore it
//   output: {
//     path: path.resolve(__dirname, "wwwroot"),
// // Specify the base path for all the styles within your
//     // application. This is relative to the output path, so in
//     // our case it will be './wwwroot/css'
//     publicPath: "/css",
// // The name of the output bundle. Path is also relative
//     // to the output path, so './wwwroot/js'
//     filename: "js/sass.js"
//   },
//   module: {
//     // Array of rules that tells Webpack how the modules (output)
//     // will be created
//     rules: [
//       {
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader
//           },
//           {
//             // Interprets CSS
//             loader: "css-loader",
//             options: {
//               importLoaders: 2
//             }
//           },
//           {
//             // Adds support for Sass files, if using Less, then
//             // use the less-loader
//             loader: "sass-loader"
//           }
//         ]
//       },
//     ]
//   },
//   plugins: [
//     // Configuration options for MiniCssExtractPlugin. Here I'm only
//     // indicating what the CSS output file name should be and
//     // the location
//     new MiniCssExtractPlugin({
//       filename: devMode ? "css/site.css" : "css/site.min.css"
//     })
//   ]
// };