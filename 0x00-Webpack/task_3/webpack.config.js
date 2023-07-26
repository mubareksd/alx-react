const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared',
    },
    body: {
      import: './modules/body/body.js',
      dependOn: 'shared',
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared',
    },
    shared: 'jquery',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    open: true,
    port: 8564,
  },
  performance: {
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassingOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
