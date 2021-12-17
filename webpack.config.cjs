const path = require('path');

const CircularDependencyPlugin = require('circular-dependency-plugin');

//==---=---=---=--=-=--===---====--===---=---=---=--=-=--===---====--=-===---=---=---=--=-=--===---====--=//



module.exports = {
	entry: path.resolve(__dirname, 'index.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: 'PrimaryServices',
		filename: 'index.js',
		libraryTarget: 'umd',
		globalObject: 'this'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				include: path.resolve(__dirname, 'src'),
				// exclude: /(node_modules|build|dist|spec\.ts?$)/,
				exclude: [
					/(node_modules|build|dist)/,
					/\.spec\.tsx/
				],
				use: 'ts-loader'
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build|dist)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.ts', '.js']
	},
	plugins: [
		new CircularDependencyPlugin({
			include: /dir/,
			failOnError: true,
			allowAsyncCycles: false,
			cwd: process.cwd()
		})
	],
	externals: {
		// 'node-fetch': 'node-fetch',
		// 'unfetch': 'unfetch',
	}
};