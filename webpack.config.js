// const webpack = require("webpack");
require("webpack");
const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: "./src/static",
                to: "static",
                globOptions: {
                    dot: true,
                    gitignore: true,
                    ignore: [".github/**/*", "**/*.php"],
                }
            }],
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    entry: {
        'app': './src/js/app.js',
        'pdf': './src/js/pdf.js',
        'page-margin-print-css': './src/js/page-margin-print-css.js',
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./js/[name].js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: '../'
                    }
                },{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                // },{
                //     loader: 'postcss-loader', // Run post css actions
                //     options: {
                //         sourceMap: true,
                //         // plugins: function () { // post css plugins, can be exported to postcss.config.js
                //         //     return [
                //         //         require('autoprefixer')
                //         //     ];
                //         // }
                //     }
                },{
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                    }
                }],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[ext]',
                }
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }]
            },
        ]
    }
}

module.exports = config;