const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
	entry: {
		header: './modules/header/header.js',
		body: './modules/body/body.js',
		footer: './modules/footer/footer.js'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
		clean:true,
	},
	mode: 'development',
	performance: {
		maxAssetSize: 100000,
	},
	module: {
		rules: [{
			test: /\.js$/,
			enforce: "pre",
			use: ["source-map-loader"],
		},
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
		}
		],
	}, devtool: 'inline-source-map',
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
	},
}
