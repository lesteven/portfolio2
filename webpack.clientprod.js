var merge = require('webpack-merge');
var webpack = require('webpack');
var common = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
              'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.AggressiveMergingPlugin(),
            new CompressionPlugin({
              asset: "[path].gz[query]",
              algorithm: "gzip",
              test: /\.js$|\.css$|\.html$|\.svg$/,
              minRatio: 0.8
            }),

  //      new ExtractTextPlugin('styles.css')
    ],
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: [
                        { 
                            loader: 'css-loader',
                            options: {minimize:true}
                        }
                    ]
                })
            }
        ]
    },

});
