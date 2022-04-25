const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_module/,
        use: [
          "babel-loader",
          "stylelint-custom-processor-loader",
        ],
      },
      {											
		test: /\.s[ac]ss$/,  									
		use: [													
		   MiniCssExtractPlugin.loader,													
		   {													
			loader: "css-loader",												
			options: {url: false}										
		   },   											
		   "sass-loader",   													
		],												
	  },	
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'inline-cheap-source-map',
  context: __dirname,
  target: 'web',
  devServer: {
    historyApiFallback:{
        index:'/'
    },
    static: path.join(__dirname, 'dist'),
    port: 3000,
    compress: true,
    hot: true
  }
};