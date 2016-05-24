const path = require('path');
const webpack = require('webpack');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: "common",
	//被共同Chunks N次打包到commonsPlugin
	minChunks: 2
});

module.exports = {
	entry: {
		'v-dialog': './src/js/dialog.js',
		'v-validate': './src/js/validate.js',
		'v-grid': './src/js/grid.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: "[name].js"
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	plugins: [commonsPlugin]
}
