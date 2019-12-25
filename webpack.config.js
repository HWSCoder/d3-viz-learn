// webpack main config file
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        // absolute path
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        progress: true,
        contentBase: './dist'
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [ // all plugins here
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
            },
            hash: true,
        }),
    ]
}