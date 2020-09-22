const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const COPYWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js', //entrada
    output: { //salida
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: { //extensiones
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new COPYWebpackPlugin({
            patterns: [{ from: './src/styles/style.css',
            to: '' }],
          })
    ]
}