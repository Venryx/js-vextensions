/* global __dirname */
var webpack = require("webpack");
var HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
	mode: "none",
	entry: [
		"./Source/index.ts"
	],
	output: {
		path: __dirname + "/Dist",
		publicPath: "http://localhost:8080/",
		filename: "index.js",
		libraryTarget: "umd",
		//library: "react-vscrollview",
		globalObject: "typeof self !== \"undefined\" ? self : this",
	},
	resolve: {
		//root: paths.client(),
		//root: "Source",
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
	},
	externals: {
		// use external version of React (ie, don't bundle react, since any app using this library will already have it available)
		//"react": "React",
		"react": "commonjs react",
 		"react-dom": "commonjs react-dom",
    },
    /*module: {
        noParse: ["react"]
    },*/
    module: {
		rules: [
			{
				test: /\.(jsx?|tsx?)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["@babel/env", "@babel/react"]
				}
			},
			{test: /\.tsx?$/, loader: "ts-loader"},
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		//new webpack.IgnorePlugin(/react/),
		//new HardSourceWebpackPlugin(), // disabled for now, because it breaks the "npm run dev" output in vs-code
	]
};