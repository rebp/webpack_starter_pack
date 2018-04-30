const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/app.js"
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader" 
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{ loader: "css-loader" },
						{ loader: "sass-loader" },
					],
					fallback: "style-loader"
				}),
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: 
				[
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
							publicPath: '../images',
						}  
					},
					{
						loader: 'image-webpack-loader'
					}
				]
			},
		],
	},
	plugins: [
	    new ExtractTextPlugin({
	      filename: "css/style.css",
	      disable: false,
	      allChunks: true
			})
	  ]
};