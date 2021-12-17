const path = require('path');

const CircularDependencyPlugin = require('circular-dependency-plugin');

//==---=---=---=--=-=--===---====--===---=---=---=--=-=--===---====--=-===---=---=---=--=-=--===---====--=//


let defaultConfig = {
	entry: path.resolve(__dirname, 'index.ts'),
	devtool: 'source-map',
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
		extensions: ['.ts', '.js']
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
}



const serverConfig = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: {
			type: 'umd'
		},
		filename: 'index.js',
		globalObject: 'this'
	},
	...defaultConfig
};


const clientConfig = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: {
			name: 'PrimaryServices',
			type: 'umd'
		},
		filename: 'PrimaryServices.js',
		globalObject: 'this'
	},
	...defaultConfig
};


module.exports = [
	serverConfig,
	clientConfig
];



// module.exports = {
// 	entry: path.resolve(__dirname, 'index.ts'),
// 	devtool: 'source-map',
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		library: {
// 			name: 'PrimaryServices',
// 			type: 'umd'
// 		},
// 		filename: 'index.js',
// 		globalObject: 'this',
// 		clean: true
// 	},
// 	mode: 'production',
// 	module: {
// 		rules: [
// 			{
// 				test: /\.ts?$/,
// 				include: path.resolve(__dirname, 'src'),
// 				// exclude: /(node_modules|build|dist|spec\.ts?$)/,
// 				exclude: [
// 					/(node_modules|build|dist)/,
// 					/\.spec\.tsx/
// 				],
// 				use: 'ts-loader'
// 			},
// 			{
// 				test: /\.js$/,
// 				include: path.resolve(__dirname, 'src'),
// 				exclude: /(node_modules|bower_components|build|dist)/,
// 				use: {
// 					loader: 'babel-loader'
// 				}
// 			}
// 		]
// 	},
// 	resolve: {
// 		extensions: ['.ts', '.js']
// 	},
// 	plugins: [
// 		new CircularDependencyPlugin({
// 			include: /dir/,
// 			failOnError: true,
// 			allowAsyncCycles: false,
// 			cwd: process.cwd()
// 		})
// 	],
// 	externals: {
// 		'node-fetch': 'node-fetch',
// 		'unfetch': 'unfetch',
// 	}
// };