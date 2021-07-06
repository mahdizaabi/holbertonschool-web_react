const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		clean: true,
		publicPath: '/',
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve('public'),
		compress: true,
		port: 8564,
		hot: true,
		writeToDisk: true,
		historyApiFallback: true,

		publicPath: '/',
		
	},
	devtool: 'inline-source-map',
	performance: {
		maxAssetSize: 100000,
	},
	module: {
		rules: [
			{
				test: /\.css$/, use: ['style-loader', 'css-loader']
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
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/react']
					}
				}
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/react']
					}
				}
			},
		],
	},
}