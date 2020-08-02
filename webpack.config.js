const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['babel-polyfill', path.join(__dirname, 'src', 'App.js')],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react'],
				},
			},
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					'stylus-loader',
				],
				include: /src/,
			},
			{
                test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new htmlPlugin({
			title: 'Decentralized Blog',
			template: './src/index.ejs',
			hash: true,
		}),
	],
}
