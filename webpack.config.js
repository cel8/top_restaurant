const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    skeletonController: './src/controller/skeletonController.js',
    navController: './src/controller/navController.js',
    home: './src/modules/home.js',
    menu: './src/modules/menu.js',
    contact: './src/modules/contact.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Restaurant Page - La bella Napoli',
      template: './src/index.html',
      favicon: './src/assets/icon/site.ico',
      inject: 'body',
      cache: false,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            // Creates `style` nodes from JS strings
            loader: 'style-loader',
          },
          {
            // Translates CSS into CommonJS
            loader: 'css-loader',
          }
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
        // Use 'generator' to output unique name (based on webpack pattern e.g. [name], [ext], etc.)
        generator: {
          filename: "[name][ext][query]",
          outputPath: "images/",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          outputPath: "fonts/",
        },
      }
    ],
  },
};