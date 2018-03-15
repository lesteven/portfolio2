var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        contentBase: './src/client',
        inline: true,
        port: 8080, 
        proxy: {
            '**': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure:false
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: [
                        { 
                            loader: 'css-loader',
                        }
                    ]
                })
            }
        ]
    },
});
