const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/app.ts',

	plugins: [new CleanPlugin.CleanWebpackPlugin()],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};
