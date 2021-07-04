const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: '../src/index.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
    performance: {
        maxAssetSize: 100000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    }
                }
            }, {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    }
                }
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8564,
        hot:true
    },
}