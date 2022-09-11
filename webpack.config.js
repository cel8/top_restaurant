const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index:              './src/index.js',
    skeletonController: './src/controller/skeletonController.js',
    navController:      './src/controller/navController.js',
    menuController:     './src/controller/menuController.js',
    home:               './src/modules/home.js',
    menu:               './src/modules/menu.js',
    contact:            './src/modules/contact.js',
    dish:               './src/modules/dish.js',
    dishContainer:      './src/modules/dishContainer.js',
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
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets'),
      Modules: path.resolve(__dirname, 'src/modules'),
      Controller: path.resolve(__dirname, 'src/controller'),
      Style: path.resolve(__dirname, 'src/style'),
    },
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
          publicPath: "images/",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "[name][ext][query]",
          outputPath: "fonts/",
          publicPath: "fonts/",
        },
      }
    ],
  },
};