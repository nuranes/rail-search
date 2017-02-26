var webpack = require('webpack');

module.exports = {
	entry: './components/App.js',
    
    devServer: {
		inline: true,
		contentBase: './build'
	},
	
    module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
	   ]
	},     
    
    output: {
		path: __dirname + "/build",
		filename: 'bundle.js'
	},
};