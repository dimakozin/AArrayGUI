const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, { mode }) {
  return {
    mode: mode || 'development',
    devtool: 'source-map',
    entry: './src/index.tsx',
    devServer: {
      open: {
        app: {
          name: 'google-chrome'
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    output: {
      publicPath: '/',
      filename: 'js/bundle.js',
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.jsx', '.js', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        publicPath: '/',
      }),
    ],
  }
}
