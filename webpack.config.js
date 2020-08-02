const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, 'src', 'App.js')],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/,
            query: {
                presets: ['env', 'react']
            }
        }, {
            test: /\.styl$/,
            exclude: /node_modules/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 2
                }
            }, 'stylus-loader'],
            include: /src/
        }, {
            loader: 'json-loader',
            test: /\.json$/,
            exclude: /node_modules/,
        }
    ]
    },
    plugins: [new htmlPlugin({
        title: "Decentralized Blog",
        template: './src/index.ejs',
        hash: true
    })]
}
