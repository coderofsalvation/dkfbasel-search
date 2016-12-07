var path = require('path');
var webpack = require('webpack');

// define the app directory to include in compilation
var app_directory = path.resolve(__dirname, 'app');

module.exports = {
	entry: {
		public: [path.resolve(__dirname, 'app/main.js')]
	},
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				// parse vue components
				test: /\.vue$/,
				loader: 'vue',
				include: [app_directory]
			}, {
				// edit this for additional asset file types
				test: /\.(png|jpg|gif)$/,
				loader: 'file?name=[name].[ext]?[hash]',
				include: [app_directory]
			}, {
				// parse css styles
				test: /\.css$/,
				loader: 'style!css!postcss',
				include: [app_directory]
			}, {
				// parse javascript files
				test: /\.js$/,
				loader: 'babel',
				include: [app_directory]
			}, {
				// parse stylus styles
				test: /\.styl$/,
				loader: 'style!css!stylus',
				include: [app_directory]
			}
		]
	},
	vue: {
		loaders: {
			stylus: 'style!css!stylus',
			include: [app_directory]
		}
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	babel: {
		presets: ['es2015', 'stage-0'],
		plugins: ['transform-runtime']
	}
};
